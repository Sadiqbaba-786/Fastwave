import React from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission would go here
    alert('Thank you! We will get back to you soon.');
    onClose();
  };
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <h2 style={{ marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Let's Connect</h2>
        <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Fill out the form below and we'll be in touch.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="John Doe" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="john@example.com" />
          </div>
          
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input type="tel" id="contactNumber" name="contactNumber" required placeholder="+1 (555) 000-0000" />
          </div>

          <div className="form-group">
            <label htmlFor="place">Place (City/Location)</label>
            <input type="text" id="place" name="place" required placeholder="New York, NY" />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
