import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../components/MotionUtils';
import { BookOpen, Camera, FileText, ArrowUpRight } from 'lucide-react';

const Media = () => {
  const [activeTab, setActiveTab] = useState('articles');

  const tabs = [
    { id: 'articles', label: 'Legal Articles', icon: <FileText size={18} /> },
    { id: 'newsletters', label: 'Newsletters', icon: <BookOpen size={18} /> },
    { id: 'gallery', label: 'Media Gallery', icon: <Camera size={18} /> }
  ];

  const articles = [
    { title: 'The Evolution of the Insolvency and Bankruptcy Code', date: 'October 12, 2023', category: 'Corporate Law' },
    { title: 'Navigating Cross-Border Arbitration in India', date: 'September 28, 2023', category: 'Commercial Dispute' },
    { title: 'Data Privacy Regulations: Preparing for the DPDP Act', date: 'August 15, 2023', category: 'Cyber Law' },
    { title: 'Understanding White-Collar Defense Strategies', date: 'July 04, 2023', category: 'Criminal Defense' }
  ];

  const newsletters = [
    { title: 'Q3 2023: Corporate Tax Restructuring Updates', issue: 'Vol. 12, Issue 3' },
    { title: 'Q2 2023: Supreme Court Rulings on Real Estate', issue: 'Vol. 12, Issue 2' },
    { title: 'Q1 2023: The State of Indian Intellectual Property', issue: 'Vol. 12, Issue 1' }
  ];

  const galleryPlaceholders = [1, 2, 3, 4, 5, 6];

  return (
    <div className="page-container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      
      {/* Page Header */}
      <section className="page-header" style={{ padding: '6rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <Reveal delay={0.1}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>KNOWLEDGE & PUBLICATIONS</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="section-title-alt">Media <span className="gold">Center</span></h1>
          </Reveal>
        </div>
      </section>

      {/* Tabs */}
      <section style={{ padding: '2rem 0 8rem' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
            {tabs.map((tab, idx) => (
              <Reveal key={tab.id} delay={0.2 + (idx * 0.1)}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.8rem 1.8rem',
                    background: activeTab === tab.id ? 'var(--primary)' : 'rgba(14, 16, 48, 0.5)',
                    color: activeTab === tab.id ? '#000' : '#FFF',
                    border: `1px solid ${activeTab === tab.id ? 'var(--primary)' : 'var(--border)'}`,
                    borderRadius: '30px',
                    fontSize: '0.95rem', fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.3s'
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              </Reveal>
            ))}
          </div>

          <div style={{ minHeight: '400px', position: 'relative' }}>
            <AnimatePresence mode="wait">
              {activeTab === 'articles' && (
                <motion.div
                  key="articles"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}
                >
                  {articles.map((art, idx) => (
                    <div key={idx} className="benefit-card" style={{ textAlign: 'left', alignItems: 'flex-start', padding: '2.5rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
                        {art.category} • {art.date}
                      </span>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>{art.title}</h3>
                      <a href="#" style={{ color: '#FFF', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, marginTop: 'auto' }}>
                        Read Article <ArrowUpRight size={16} className="gold" />
                      </a>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'newsletters' && (
                <motion.div
                  key="newsletters"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}
                >
                  {newsletters.map((nl, idx) => (
                    <div key={idx} style={{ background: 'rgba(14, 16, 48, 0.5)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h4 style={{ fontSize: '1.15rem', marginBottom: '0.3rem' }}>{nl.title}</h4>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{nl.issue}</span>
                      </div>
                      <a href="#" className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>Download PDF</a>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'gallery' && (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}
                >
                  {galleryPlaceholders.map((i) => (
                    <div key={i} style={{ aspectRatio: '1', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Camera size={40} style={{ opacity: 0.1 }} />
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Media;
