import React from 'react';

const Privacy = () => {
  return (
    <div className="page-container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <div className="container">
        <h1 className="section-title-alt" style={{ marginBottom: '2rem' }}>Privacy <span className="gold">Policy</span></h1>
        
        <div style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p>
            Neeti Ganga Legal Associates ("the Firm") is committed to protecting the privacy and security of our clients, website visitors, and individuals who engage with our digital presence. This policy complies with the Digital Personal Data Protection Act (DPDPA), 2023.
          </p>
          <h3 style={{ color: '#FFF', fontSize: '1.2rem', marginTop: '1rem', fontFamily: '"Playfair Display", serif' }}>1. Information Collection</h3>
          <p>
            We collect personal information solely for the purpose of communicating regarding legal matters, managing client intake, and fulfilling our professional duties. This includes data collected via our website's contact forms such as names, email addresses, and phone numbers.
          </p>
          <h3 style={{ color: '#FFF', fontSize: '1.2rem', marginTop: '1rem', fontFamily: '"Playfair Display", serif' }}>2. Data Security</h3>
          <p>
            The Firm employs industry-standard security protocols to prevent unauthorized access or disclosure of your information. We treat all communications submitted through this website with strict attorney-client privilege boundaries where applicable.
          </p>
          <h3 style={{ color: '#FFF', fontSize: '1.2rem', marginTop: '1rem', fontFamily: '"Playfair Display", serif' }}>3. Third-Party Sharing</h3>
          <p>
            We do not sell, trade, or rent your personal identification information to third parties. Data may be shared with statutory bodies or courts only when mandated by law or necessary for the execution of a legal strategy on your behalf.
          </p>
          <p style={{ marginTop: '2rem', fontStyle: 'italic', fontSize: '0.9rem' }}>
            Last updated: October 2023. For specific privacy inquiries or to manage your data, contact our administrative hub.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
