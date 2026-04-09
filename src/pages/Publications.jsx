import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/MotionUtils';
import { ArrowUpRight } from 'lucide-react';
import { useCmsContent } from '../lib/contentStore';

const Publications = () => {
  const { content, loading, error } = useCmsContent({ mode: 'public' });
  const articles = content.articles
    .filter((article) => article.status === 'published')
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  return (
    <div className="page-container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <section className="page-header" style={{ padding: '6rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <Reveal delay={0.1}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>KNOWLEDGE & PUBLICATIONS</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="section-title-alt">Legal <span className="gold">Articles</span></h1>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '2rem 0 8rem' }}>
        <div className="container">
          {loading ? (
            <div className="benefit-card" style={{ padding: '2rem', textAlign: 'left', alignItems: 'flex-start' }}>
              <h3 style={{ marginBottom: '0.8rem' }}>Loading articles</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                Please wait while the latest articles load.
              </p>
            </div>
          ) : error ? (
            <div className="benefit-card" style={{ padding: '2rem', textAlign: 'left', alignItems: 'flex-start' }}>
              <h3 style={{ marginBottom: '0.8rem' }}>Articles are unavailable</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                {error}
              </p>
            </div>
          ) : articles.length ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
              }}
            >
              {articles.map((art) => (
                <div key={art.id} className="benefit-card" style={{ textAlign: 'left', alignItems: 'flex-start', padding: '2.5rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--primary)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '1rem',
                      display: 'block'
                    }}
                  >
                    {art.category} • {art.date}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.4' }}>{art.title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.75' }}>{art.excerpt}</p>
                  <Link
                    to={`/publications/${art.id}`}
                    style={{
                      color: '#FFF',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      marginTop: 'auto'
                    }}
                  >
                    Read Article <ArrowUpRight size={16} className="gold" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="benefit-card" style={{ padding: '2rem', textAlign: 'left', alignItems: 'flex-start' }}>
              <h3 style={{ marginBottom: '0.8rem' }}>No published articles yet</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                Published legal articles from the admin panel will appear here automatically.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Publications;
