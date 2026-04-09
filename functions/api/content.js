import { getContent, requireDatabase } from '../_lib/db';
import { json } from '../_lib/response';

export async function onRequestGet(context) {
  try {
    const db = requireDatabase(context.env);
    const content = await getContent(db, { publishedOnly: true });
    return json(content);
  } catch (error) {
    return json(
      {
        message: error instanceof Error ? error.message : 'Unable to load content.',
      },
      500
    );
  }
}
