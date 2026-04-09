import { useEffect, useState } from 'react';

const emptyContent = {
  articles: [],
  newsletters: [],
};

const normalizeArticle = (item, index, fallback = {}) => ({
  id: item.id || fallback.id || `article-${index + 1}`,
  title: item.title || fallback.title || '',
  category: item.category || fallback.category || '',
  date: item.date || fallback.date || '',
  excerpt: item.excerpt || fallback.excerpt || '',
  body: item.body || fallback.body || '',
  status: item.status === 'draft' ? 'draft' : (fallback.status === 'draft' ? 'draft' : 'published'),
  updatedAt: item.updatedAt || fallback.updatedAt || new Date().toISOString(),
});

const normalizeNewsletter = (item, index, fallback = {}) => ({
  id: item.id || fallback.id || `newsletter-${index + 1}`,
  title: item.title || fallback.title || '',
  issue: item.issue || fallback.issue || '',
  description: item.description || fallback.description || '',
  fileUrl: item.fileUrl || fallback.fileUrl || '#',
  status: item.status === 'draft' ? 'draft' : (fallback.status === 'draft' ? 'draft' : 'published'),
  updatedAt: item.updatedAt || fallback.updatedAt || new Date().toISOString(),
});

const normalizeContent = (value) => {
  return {
    articles: Array.isArray(value?.articles)
      ? value.articles.map((item, index) => normalizeArticle(item, index))
      : [],
    newsletters: Array.isArray(value?.newsletters)
      ? value.newsletters.map((item, index) => normalizeNewsletter(item, index))
      : [],
  };
};

const fetchJson = async (url, options = {}) => {
  const response = await fetch(url, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const message = data?.message || 'Request failed.';
    throw new Error(message);
  }

  return data;
};

export const fetchCmsContent = async (mode = 'public') => {
  const endpoint = mode === 'admin' ? '/api/admin/content' : '/api/content';
  const data = await fetchJson(endpoint, { method: 'GET' });
  return normalizeContent(data);
};

export const saveCmsContent = async (content) => {
  if (typeof window === 'undefined') {
    return { ok: false, mode: 'server', message: 'Browser access is unavailable in this environment.' };
  }

  const normalized = normalizeContent(content);

  try {
    const data = await fetchJson('/api/admin/content', {
      method: 'POST',
      body: JSON.stringify(normalized),
    });

    return {
      ok: true,
      mode: data?.mode || 'd1',
      message: data?.message || 'Changes saved successfully.',
    };
  } catch {
    return {
      ok: false,
      mode: 'd1',
      message: 'Unable to save changes. Please try again.',
    };
  }
};

export const useCmsContent = ({ mode = 'public', enabled = true } = {}) => {
  const [content, setContent] = useState(emptyContent);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState('');
  const [refreshToken, setRefreshToken] = useState(0);

  useEffect(() => {
    let cancelled = false;

    if (enabled) {
      setLoading(true);
      setError('');

      fetchCmsContent(mode).then((remoteContent) => {
        if (!cancelled) {
          setContent(remoteContent);
          setLoading(false);
        }
      }).catch((fetchError) => {
        if (!cancelled) {
          setError(fetchError instanceof Error ? fetchError.message : 'Unable to load content.');
          setContent(emptyContent);
          setLoading(false);
        }
      });
    } else {
      setContent(emptyContent);
      setLoading(false);
      setError('');
    }

    return () => {
      cancelled = true;
    };
  }, [enabled, mode, refreshToken]);

  return {
    content,
    loading,
    error,
    refresh: () => setRefreshToken((current) => current + 1),
  };
};

export const checkAdminSession = async () => {
  try {
    const data = await fetchJson('/api/admin/session', { method: 'GET' });
    return { authenticated: Boolean(data?.authenticated), mode: 'd1' };
  } catch {
    return { authenticated: false, mode: 'd1' };
  }
};

export const loginAdmin = async (username, password) => {
  try {
    const data = await fetchJson('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    return {
      ok: true,
      mode: data?.mode || 'd1',
      message: data?.message || 'Signed in successfully.',
    };
  } catch (error) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : 'Incorrect username or password.',
    };
  }
};

export const logoutAdmin = async () => {
  try {
    await fetchJson('/api/admin/logout', {
      method: 'POST',
      body: JSON.stringify({}),
    });
    return { ok: true };
  } catch {
    return { ok: false };
  }
};
