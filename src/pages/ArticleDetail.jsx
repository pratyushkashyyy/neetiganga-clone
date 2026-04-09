import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Reveal } from '../components/MotionUtils';
import { useCmsContent } from '../lib/contentStore';

const articleContainerStyle = {
  maxWidth: '860px',
  margin: '0 auto',
};

const ArticleDetail = () => {
  const { articleId } = useParams();
  const { content, loading, error } = useCmsContent({ mode: 'public' });
  const article = content.articles.find((item) => item.id === articleId && item.status === 'published');

  if (loading) {
    return (
      <div className="page-container" style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <div className="container" style={articleContainerStyle}>
          <div className="benefit-card" style={{ padding: '2.5rem', textAlign: 'left', alignItems: 'flex-start' }}>
            <h1 className="section-title-small" style={{ marginBottom: '1rem' }}>Loading article</h1>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>Please wait while the article loads.</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container" style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <div className="container" style={articleContainerStyle}>
          <div className="benefit-card" style={{ padding: '2.5rem', textAlign: 'left', alignItems: 'flex-start' }}>
            <h1 className="section-title-small" style={{ marginBottom: '1rem' }}>Article is unavailable</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              {error}
            </p>
            <Link to="/publications" className="btn btn-primary">Back to Publications</Link>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="page-container" style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <div className="container" style={articleContainerStyle}>
          <div className="benefit-card" style={{ padding: '2.5rem', textAlign: 'left', alignItems: 'flex-start' }}>
            <h1 className="section-title-small" style={{ marginBottom: '1rem' }}>Article not found</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              This article is unavailable or has not been published yet.
            </p>
            <Link to="/publications" className="btn btn-primary">Back to Publications</Link>
          </div>
        </div>
      </div>
    );
  }

  const paragraphs = (article.body || article.excerpt || '')
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div className="page-container" style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '6rem' }}>
      <section className="page-header" style={{ padding: '6rem 0 2.5rem' }}>
        <div className="container" style={articleContainerStyle}>
          <Reveal delay={0.1}>
            <Link
              to="/publications"
              style={{
                display: 'inline-block',
                color: 'var(--primary)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontSize: '0.8rem',
                marginBottom: '1.4rem',
              }}
            >
              Back to Publications
            </Link>
          </Reveal>
          <Reveal delay={0.2}>
            <span className="eyebrow" style={{ marginBottom: '1rem' }}>{article.category} • {article.date}</span>
          </Reveal>
          <Reveal delay={0.3}>
            <h1 className="section-title-alt" style={{ marginBottom: '1.2rem', lineHeight: '1.15' }}>{article.title}</h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: '1.9', margin: 0 }}>
              {article.excerpt}
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '1rem 0 0' }}>
        <div className="container" style={articleContainerStyle}>
          <div
            style={{
              background: 'rgba(14, 16, 48, 0.45)',
              border: '1px solid var(--border)',
              borderRadius: '18px',
              padding: '2.4rem',
            }}
          >
            <div style={{ display: 'grid', gap: '1.4rem' }}>
              {paragraphs.map((paragraph, index) => (
                <p
                  key={`${article.id}-paragraph-${index}`}
                  style={{
                    color: '#E4E6F2',
                    margin: 0,
                    fontSize: '1.03rem',
                    lineHeight: '1.95',
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
