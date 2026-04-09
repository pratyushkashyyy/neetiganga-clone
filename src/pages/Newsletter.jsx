import React from 'react';
import { Reveal } from '../components/MotionUtils';
import { useCmsContent } from '../lib/contentStore';

const Newsletter = () => {
  const { content, loading, error } = useCmsContent({ mode: 'public' });
  const newsletters = content.newsletters
    .filter((newsletter) => newsletter.status === 'published')
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  return (
    <div className="page-container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <section className="page-header" style={{ padding: '6rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <Reveal delay={0.1}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>KNOWLEDGE & PUBLICATIONS</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="section-title-alt">Firm <span className="gold">Newsletters</span></h1>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '2rem 0 8rem' }}>
        <div className="container">
          {loading ? (
            <div className="benefit-card" style={{ padding: '2rem', textAlign: 'left', alignItems: 'flex-start', maxWidth: '800px', margin: '0 auto' }}>
              <h3 style={{ marginBottom: '0.8rem' }}>Loading newsletters</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                Please wait while the latest newsletters load.
              </p>
            </div>
          ) : error ? (
            <div className="benefit-card" style={{ padding: '2rem', textAlign: 'left', alignItems: 'flex-start', maxWidth: '800px', margin: '0 auto' }}>
              <h3 style={{ marginBottom: '0.8rem' }}>Newsletters are unavailable</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                {error}
              </p>
            </div>
          ) : newsletters.length ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
              {newsletters.map((nl) => (
                <div
                  key={nl.id}
                  style={{
                    background: 'rgba(14, 16, 48, 0.5)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '1.15rem', marginBottom: '0.3rem' }}>{nl.title}</h4>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'block', marginBottom: '0.6rem' }}>{nl.issue}</span>
                    <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.7' }}>{nl.description}</p>
                  </div>
                  <a href={nl.fileUrl || '#'} className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>
                    Download PDF
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="benefit-card" style={{ padding: '2rem', textAlign: 'left', alignItems: 'flex-start', maxWidth: '800px', margin: '0 auto' }}>
              <h3 style={{ marginBottom: '0.8rem' }}>No published newsletters yet</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                Published newsletter issues from the admin panel will appear here automatically.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
