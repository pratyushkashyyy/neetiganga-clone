const SESSION_COOKIE_NAME = 'ng_admin_session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

const encoder = new TextEncoder();

const toBase64Url = (value) =>
  btoa(value).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');

const fromBase64Url = (value) => {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
  const padding = normalized.length % 4 === 0 ? '' : '='.repeat(4 - (normalized.length % 4));
  return atob(`${normalized}${padding}`);
};

const bytesToBinary = (bytes) => Array.from(bytes, (byte) => String.fromCharCode(byte)).join('');

const parseCookies = (request) => {
  const header = request.headers.get('cookie') || '';
  return header.split(';').reduce((cookies, part) => {
    const [key, ...rest] = part.trim().split('=');
    if (!key) {
      return cookies;
    }
    cookies[key] = rest.join('=');
    return cookies;
  }, {});
};

const signValue = async (value, secret) => {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(value));
  return toBase64Url(bytesToBinary(new Uint8Array(signature)));
};

export const getAdminConfig = (env) => ({
  username: env.ADMIN_USERNAME || 'admin',
  password: env.ADMIN_PASSWORD || '',
  sessionSecret: env.ADMIN_SESSION_SECRET || '',
});

export const buildSessionCookie = (token, requestUrl) => {
  const url = new URL(requestUrl);
  const secure = url.protocol === 'https:' ? '; Secure' : '';
  return `${SESSION_COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_MAX_AGE}${secure}`;
};

export const clearSessionCookie = (requestUrl) => {
  const url = new URL(requestUrl);
  const secure = url.protocol === 'https:' ? '; Secure' : '';
  return `${SESSION_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure}`;
};

export const createSessionToken = async (username, secret) => {
  const payload = JSON.stringify({
    username,
    exp: Date.now() + (SESSION_MAX_AGE * 1000),
  });
  const encodedPayload = toBase64Url(payload);
  const signature = await signValue(encodedPayload, secret);
  return `${encodedPayload}.${signature}`;
};

export const verifySessionToken = async (token, secret) => {
  if (!token || !secret) {
    return null;
  }

  const [payload, signature] = token.split('.');
  if (!payload || !signature) {
    return null;
  }

  const expectedSignature = await signValue(payload, secret);
  if (signature !== expectedSignature) {
    return null;
  }

  try {
    const decoded = JSON.parse(fromBase64Url(payload));
    if (!decoded?.exp || decoded.exp < Date.now()) {
      return null;
    }
    return decoded;
  } catch {
    return null;
  }
};

export const getAdminSession = async (request, env) => {
  const cookies = parseCookies(request);
  const token = cookies[SESSION_COOKIE_NAME];
  const config = getAdminConfig(env);
  return verifySessionToken(token, config.sessionSecret);
};
