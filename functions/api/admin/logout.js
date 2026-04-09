import { clearSessionCookie } from '../../_lib/auth';
import { json } from '../../_lib/response';

export async function onRequestPost(context) {
  return json(
    {
      ok: true,
      message: 'Signed out.',
    },
    200,
    {
      'Set-Cookie': clearSessionCookie(context.request.url),
    }
  );
}
