import React from 'react';

const Terms = () => {
  return (
    <div className="page-container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <div className="container">
        <h1 className="section-title-alt" style={{ marginBottom: '2rem' }}>Terms of <span className="gold">Use</span></h1>
        
        <div style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p>
            By accessing and using the Neeti Ganga Legal Associates website ("the Site" or "the Firm"), you accept and agree to be bound by the terms and provisions of this agreement.
          </p>
          <h3 style={{ color: '#FFF', fontSize: '1.2rem', marginTop: '1rem', fontFamily: '"Playfair Display", serif' }}>1. No Legal Advice</h3>
          <p>
            The materials on the Site have been prepared by the Firm for general informational purposes only and are not intended to be, and should not be interpreted as, legal advice or legal opinion. Transmission of the information is not intended to create, and receipt does not constitute, an attorney-client relationship.
          </p>
          <h3 style={{ color: '#FFF', fontSize: '1.2rem', marginTop: '1rem', fontFamily: '"Playfair Display", serif' }}>2. Use of Content</h3>
          <p>
            All content on this Site, including text, graphics, logos, and images, is the property of the Firm and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without the express written permission of the Firm.
          </p>
          <h3 style={{ color: '#FFF', fontSize: '1.2rem', marginTop: '1rem', fontFamily: '"Playfair Display", serif' }}>3. Limitation of Liability</h3>
          <p>
            The Firm assumes no liability for the interpretation and/or use of the information contained on this Site. The Site is provided "as is" and "as available" with all faults, and without warranty of any kind.
          </p>
          <p style={{ marginTop: '2rem', fontStyle: 'italic', fontSize: '0.9rem' }}>
            Last updated: October 2023. These terms are governed by the laws of India and subject to the exclusive jurisdiction of the courts in New Delhi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
