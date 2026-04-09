import { getAdminSession } from '../../_lib/auth';
import { json } from '../../_lib/response';

export async function onRequestGet(context) {
  const session = await getAdminSession(context.request, context.env);
  return json({ authenticated: Boolean(session), user: session?.username || null });
}
