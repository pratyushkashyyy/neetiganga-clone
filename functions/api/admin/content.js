import { getAdminSession } from '../../_lib/auth';
import { getContent, replaceContent, requireDatabase } from '../../_lib/db';
import { json } from '../../_lib/response';

const unauthorized = () => json({ message: 'Authentication required.' }, 401);

export async function onRequestGet(context) {
  const session = await getAdminSession(context.request, context.env);
  if (!session) {
    return unauthorized();
  }

  try {
    const db = requireDatabase(context.env);
    const content = await getContent(db, { publishedOnly: false });
    return json(content);
  } catch (error) {
    return json(
      {
        message: error instanceof Error ? error.message : 'Unable to load admin content.',
      },
      500
    );
  }
}

export async function onRequestPost(context) {
  const session = await getAdminSession(context.request, context.env);
  if (!session) {
    return unauthorized();
  }

  try {
    const content = await context.request.json();
    const db = requireDatabase(context.env);
    await replaceContent(db, content);

    return json({
      ok: true,
      mode: 'd1',
      message: 'Changes saved successfully.',
    });
  } catch (error) {
    return json(
      {
        message: error instanceof Error ? error.message : 'Unable to save content.',
      },
      500
    );
  }
}
