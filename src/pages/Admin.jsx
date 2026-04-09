import React, { useEffect, useMemo, useState } from 'react';
import { Lock, Plus, Pencil, Trash2, LogOut } from 'lucide-react';
import {
  checkAdminSession,
  loginAdmin,
  logoutAdmin,
  saveCmsContent,
  useCmsContent,
} from '../lib/contentStore';

const emptyArticle = {
  id: '',
  title: '',
  category: '',
  date: '',
  excerpt: '',
  body: '',
  status: 'draft',
};

const emptyNewsletter = {
  id: '',
  title: '',
  issue: '',
  description: '',
  fileUrl: '#',
  status: 'draft',
};

const sectionButtonStyle = (active) => ({
  padding: '0.9rem 1.4rem',
  borderRadius: '999px',
  border: `1px solid ${active ? 'var(--primary)' : 'var(--border)'}`,
  background: active ? 'var(--primary)' : 'rgba(14, 16, 48, 0.5)',
  color: active ? '#000' : '#FFF',
  fontWeight: 700,
  cursor: 'pointer',
});

const fieldStyle = {
  width: '100%',
  padding: '0.95rem 1rem',
  background: 'rgba(14, 16, 48, 0.65)',
  border: '1px solid var(--border)',
  borderRadius: '10px',
  color: '#FFF',
  fontFamily: 'Inter, sans-serif',
};

const labelStyle = {
  display: 'block',
  color: 'var(--text-muted)',
  fontSize: '0.78rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginBottom: '0.45rem',
};

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [authReady, setAuthReady] = useState(false);
  const { content, loading: contentLoading, error: contentError, refresh } = useCmsContent({ mode: 'admin', enabled: authenticated });
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [saveMessage, setSaveMessage] = useState('');
  const [section, setSection] = useState('articles');
  const [articleForm, setArticleForm] = useState(emptyArticle);
  const [newsletterForm, setNewsletterForm] = useState(emptyNewsletter);

  const items = useMemo(() => {
    const collection = section === 'articles' ? content.articles : content.newsletters;
    return [...collection].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }, [content, section]);

  useEffect(() => {
    let cancelled = false;

    checkAdminSession().then((result) => {
      if (cancelled) {
        return;
      }

      setAuthenticated(result.authenticated);
      setAuthReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const resetActiveForm = () => {
    setArticleForm(emptyArticle);
    setNewsletterForm(emptyNewsletter);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const result = await loginAdmin(loginForm.username.trim(), loginForm.password);
    if (!result.ok) {
      setLoginError(result.message);
      return;
    }

    setAuthenticated(true);
    setLoginError('');
    setSaveMessage(result.message);
  };

  const handleLogout = async () => {
    const result = await logoutAdmin();
    if (result.ok) {
      setAuthenticated(false);
      setSaveMessage('');
      return;
    }

    setSaveMessage('Unable to sign out cleanly. Please refresh the page.');
  };

  const updateCollection = async (key, updater) => {
    const current = content;
    const nextCollection = updater(current[key]);
    return saveCmsContent({
      ...current,
      [key]: nextCollection,
    });
  };

  const handleSave = async (event) => {
    event.preventDefault();

    const key = section === 'articles' ? 'articles' : 'newsletters';
    const activeForm = section === 'articles' ? articleForm : newsletterForm;
    const id = activeForm.id || `${section.slice(0, -1)}-${Date.now()}`;
    const payload = {
      ...activeForm,
      id,
      updatedAt: new Date().toISOString(),
    };

    const result = await updateCollection(key, (existing) => {
      const found = existing.some((item) => item.id === id);
      if (found) {
        return existing.map((item) => (item.id === id ? payload : item));
      }
      return [payload, ...existing];
    });

    if (!result.ok) {
      setSaveMessage(result.message);
      return;
    }

    setSaveMessage(result.message);
    refresh();
    resetActiveForm();
  };

  const handleEdit = (item) => {
    if (section === 'articles') {
      setArticleForm({
        id: item.id,
        title: item.title,
        category: item.category,
        date: item.date,
        excerpt: item.excerpt,
        body: item.body || '',
        status: item.status,
      });
      return;
    }

    setNewsletterForm({
      id: item.id,
      title: item.title,
      issue: item.issue,
      description: item.description,
      fileUrl: item.fileUrl,
      status: item.status,
    });
  };

  const handleDelete = async (id) => {
    const itemLabel = section === 'articles' ? 'article' : 'newsletter';
    if (!window.confirm(`Delete this ${itemLabel}?`)) {
      return;
    }

    const key = section === 'articles' ? 'articles' : 'newsletters';
    const result = await updateCollection(key, (existing) => existing.filter((item) => item.id !== id));
    if (!result.ok) {
      setSaveMessage(result.message);
      return;
    }

    setSaveMessage(result.message);
    refresh();

    if ((section === 'articles' ? articleForm.id : newsletterForm.id) === id) {
      resetActiveForm();
    }
  };

  if (!authReady) {
    return (
      <div className="page-container" style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <div className="benefit-card" style={{ padding: '2.5rem', textAlign: 'left', alignItems: 'stretch' }}>
            <h1 className="section-title-small" style={{ marginBottom: '0.75rem' }}>Loading admin panel</h1>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>Checking your admin session.</p>
          </div>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="page-container" style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <div className="benefit-card" style={{ padding: '2.5rem', textAlign: 'left', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.5rem' }}>
              <div className="benefit-icon-box">
                <Lock size={20} />
              </div>
              <div>
                <p className="eyebrow" style={{ marginBottom: '0.3rem' }}>Admin Access</p>
                <h1 className="section-title-small" style={{ marginBottom: 0 }}>Content Publishing Panel</h1>
              </div>
            </div>

            <p className="footer-desc" style={{ marginBottom: '1.5rem' }}>
              Use this panel to create, edit, draft, and publish legal articles and newsletters.
            </p>

            <form onSubmit={handleLogin} style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Username</label>
                <input
                  type="text"
                  value={loginForm.username}
                  onChange={(event) => setLoginForm((current) => ({ ...current, username: event.target.value }))}
                  style={fieldStyle}
                  placeholder="Enter username"
                />
              </div>
              <div>
                <label style={labelStyle}>Password</label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(event) => setLoginForm((current) => ({ ...current, password: event.target.value }))}
                  style={fieldStyle}
                  placeholder="Enter password"
                />
              </div>
              {loginError ? <p style={{ color: '#f4a8a8', margin: 0 }}>{loginError}</p> : null}
              <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const activeForm = section === 'articles' ? articleForm : newsletterForm;

  return (
    <div className="page-container" style={{ paddingTop: '110px', minHeight: '100vh', paddingBottom: '5rem' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>Admin Panel</p>
            <h1 className="section-title-alt" style={{ marginBottom: '0.8rem' }}>Publish <span className="gold">Content</span></h1>
            <p className="footer-desc" style={{ maxWidth: '720px', marginBottom: 0 }}>
              Create draft entries, publish them when ready, and manage what appears on the public publications and newsletter pages.
            </p>
          </div>
          <button type="button" className="btn btn-outline" onClick={handleLogout}>
            <LogOut size={16} style={{ marginRight: '0.5rem' }} />
            Sign Out
          </button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            style={sectionButtonStyle(section === 'articles')}
            onClick={() => {
              setSection('articles');
              setArticleForm(emptyArticle);
            }}
          >
            Legal Articles
          </button>
          <button
            type="button"
            style={sectionButtonStyle(section === 'newsletters')}
            onClick={() => {
              setSection('newsletters');
              setNewsletterForm(emptyNewsletter);
            }}
          >
            Newsletters
          </button>
        </div>

        {saveMessage ? (
          <div
            style={{
              marginBottom: '1.5rem',
              padding: '0.95rem 1.1rem',
              border: '1px solid rgba(197, 160, 89, 0.28)',
              borderRadius: '12px',
              background: 'rgba(197, 160, 89, 0.08)',
              color: '#FFF',
            }}
          >
            {saveMessage}
          </div>
        ) : null}

        {contentError ? (
          <div
            style={{
              marginBottom: '1.5rem',
              padding: '0.95rem 1.1rem',
              border: '1px solid rgba(255, 148, 148, 0.28)',
              borderRadius: '12px',
              background: 'rgba(255, 148, 148, 0.08)',
              color: '#FFF',
            }}
          >
            {contentError}
          </div>
        ) : null}

        <div className="admin-layout">
          <div className="benefit-card" style={{ padding: '1.5rem', alignItems: 'stretch', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <h2 style={{ margin: 0, fontSize: '1.4rem', fontFamily: '"Playfair Display", serif' }}>
                {section === 'articles' ? 'Published Queue' : 'Newsletter Queue'}
              </h2>
              <button
                type="button"
                className="btn btn-outline"
                onClick={resetActiveForm}
                style={{ padding: '0.7rem 1rem' }}
              >
                <Plus size={16} style={{ marginRight: '0.5rem' }} />
                New {section === 'articles' ? 'Article' : 'Newsletter'}
              </button>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
              {contentLoading ? (
                <div style={{ border: '1px dashed var(--border)', borderRadius: '12px', padding: '1.5rem', color: 'var(--text-muted)' }}>
                  Loading content.
                </div>
              ) : null}
              {items.map((item) => (
                <div key={item.id} style={{ border: '1px solid var(--border)', borderRadius: '12px', padding: '1.2rem', background: 'rgba(14, 16, 48, 0.45)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.8rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.28rem 0.75rem',
                        borderRadius: '999px',
                        background: item.status === 'published' ? 'rgba(197, 160, 89, 0.16)' : 'rgba(255,255,255,0.06)',
                        color: item.status === 'published' ? 'var(--primary)' : 'var(--text-muted)',
                        fontSize: '0.78rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.status}
                    </span>
                    <div style={{ display: 'flex', gap: '0.6rem' }}>
                      <button type="button" className="btn btn-outline" style={{ padding: '0.55rem 0.9rem' }} onClick={() => handleEdit(item)}>
                        <Pencil size={14} style={{ marginRight: '0.35rem' }} />
                        Edit
                      </button>
                      <button type="button" className="btn btn-outline" style={{ padding: '0.55rem 0.9rem' }} onClick={() => handleDelete(item.id)}>
                        <Trash2 size={14} style={{ marginRight: '0.35rem' }} />
                        Delete
                      </button>
                    </div>
                  </div>
                  <h3 style={{ marginBottom: '0.45rem', fontSize: '1.15rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>
                    {section === 'articles' ? `${item.category} • ${item.date}` : `${item.issue} • ${item.description}`}
                  </p>
                </div>
              ))}
              {!contentLoading && items.length === 0 ? (
                <div style={{ border: '1px dashed var(--border)', borderRadius: '12px', padding: '1.5rem', color: 'var(--text-muted)' }}>
                  No entries yet. Create your first {section === 'articles' ? 'article' : 'newsletter'} from the form.
                </div>
              ) : null}
            </div>
          </div>

          <div className="benefit-card" style={{ padding: '1.5rem', alignItems: 'stretch', textAlign: 'left' }}>
            <h2 style={{ marginBottom: '1.25rem', fontSize: '1.4rem', fontFamily: '"Playfair Display", serif' }}>
              {activeForm.id ? 'Edit Entry' : `New ${section === 'articles' ? 'Article' : 'Newsletter'}`}
            </h2>

            <form onSubmit={handleSave} style={{ display: 'grid', gap: '1rem' }}>
              {section === 'articles' ? (
                <>
                  <div>
                    <label style={labelStyle}>Article Title</label>
                    <input
                      type="text"
                      style={fieldStyle}
                      value={articleForm.title}
                      onChange={(event) => setArticleForm((current) => ({ ...current, title: event.target.value }))}
                      required
                    />
                  </div>
                  <div className="admin-pair-grid">
                    <div>
                      <label style={labelStyle}>Category</label>
                      <input
                        type="text"
                        style={fieldStyle}
                        value={articleForm.category}
                        onChange={(event) => setArticleForm((current) => ({ ...current, category: event.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Display Date</label>
                      <input
                        type="text"
                        style={fieldStyle}
                        value={articleForm.date}
                        onChange={(event) => setArticleForm((current) => ({ ...current, date: event.target.value }))}
                        placeholder="October 12, 2023"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Excerpt / Card Summary</label>
                    <textarea
                      style={{ ...fieldStyle, minHeight: '120px', resize: 'vertical' }}
                      value={articleForm.excerpt}
                      onChange={(event) => setArticleForm((current) => ({ ...current, excerpt: event.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Full Article Content</label>
                    <textarea
                      style={{ ...fieldStyle, minHeight: '260px', resize: 'vertical' }}
                      value={articleForm.body}
                      onChange={(event) => setArticleForm((current) => ({ ...current, body: event.target.value }))}
                      placeholder={'Write the full article here. Separate paragraphs with a blank line.'}
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label style={labelStyle}>Newsletter Title</label>
                    <input
                      type="text"
                      style={fieldStyle}
                      value={newsletterForm.title}
                      onChange={(event) => setNewsletterForm((current) => ({ ...current, title: event.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Issue Label</label>
                    <input
                      type="text"
                      style={fieldStyle}
                      value={newsletterForm.issue}
                      onChange={(event) => setNewsletterForm((current) => ({ ...current, issue: event.target.value }))}
                      placeholder="Vol. 12, Issue 3"
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Short Description</label>
                    <textarea
                      style={{ ...fieldStyle, minHeight: '120px', resize: 'vertical' }}
                      value={newsletterForm.description}
                      onChange={(event) => setNewsletterForm((current) => ({ ...current, description: event.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Download URL</label>
                    <input
                      type="text"
                      style={fieldStyle}
                      value={newsletterForm.fileUrl}
                      onChange={(event) => setNewsletterForm((current) => ({ ...current, fileUrl: event.target.value }))}
                    />
                  </div>
                </>
              )}

              <div>
                <label style={labelStyle}>Status</label>
                <select
                  style={fieldStyle}
                  value={section === 'articles' ? articleForm.status : newsletterForm.status}
                  onChange={(event) => {
                    const value = event.target.value;
                    if (section === 'articles') {
                      setArticleForm((current) => ({ ...current, status: value }));
                      return;
                    }
                    setNewsletterForm((current) => ({ ...current, status: value }));
                  }}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                <button type="submit" className="btn btn-primary">
                  {activeForm.id ? 'Update' : 'Save'} {section === 'articles' ? 'Entry' : 'Issue'}
                </button>
                <button type="button" className="btn btn-outline" onClick={resetActiveForm}>
                  Clear Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
