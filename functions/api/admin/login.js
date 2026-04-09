import { buildSessionCookie, createSessionToken, getAdminConfig } from '../../_lib/auth';
import { json } from '../../_lib/response';

export async function onRequestPost(context) {
  const config = getAdminConfig(context.env);

  if (!config.password || !config.sessionSecret) {
    return json(
      {
        message: 'Admin authentication is currently unavailable.',
      },
      500
    );
  }

  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ message: 'Invalid request body.' }, 400);
  }

  const username = String(body?.username || '').trim();
  const password = String(body?.password || '');

  if (username !== config.username || password !== config.password) {
    return json({ message: 'Incorrect username or password.' }, 401);
  }

  const token = await createSessionToken(username, config.sessionSecret);
  return json(
    {
      ok: true,
      message: 'Signed in successfully.',
      mode: 'd1',
    },
    200,
    {
      'Set-Cookie': buildSessionCookie(token, context.request.url),
    }
  );
}
