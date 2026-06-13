import React, { useState } from 'react';
import { ShoppingCart, ArrowRight, CheckCircle, ChevronRight, ChevronLeft, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="app-container" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      {/* Animated Laptop Coding Background Elements */}
      <div className="animated-bg"></div>
      <div className="animated-bg-overlay"></div>

      {/* Navigation */}
      <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem 5%', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--white)', color: 'var(--text-dark)', position: 'fixed', width: '100%', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/logo.png" alt="Fastwave Logo" style={{ height: '32px', objectFit: 'contain' }} />
          <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-dark)' }}>Fastwave</span>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</a></li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <ShoppingCart size={24} />
            <span style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '50%', width: '18px', height: '18px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</span>
          </div>
          <button className="btn btn-primary d-none d-md-flex" style={{ display: 'none' }}>Get Quote</button>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="section" style={{ paddingTop: '10rem', paddingBottom: '8rem', color: 'var(--white)' }}>
        <div className="container">
          <div className="tagline" style={{ color: 'var(--white)' }}>Welcome to Fastwave</div>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '2rem', maxWidth: '800px', color: 'var(--white)' }}>
            Focused on delivering <span className="text-primary">thoughtful design</span> and flawless execution.
          </h1>
          <p className="mb-4" style={{ fontSize: '1.1rem', maxWidth: '600px', color: 'rgba(255,255,255,0.8)' }}>
            Fastwave Pvt. Ltd. is a premier software company specializing in designing intuitive web applications. We blend strategic thinking with cutting-edge technology to bring your digital vision to life.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
            <button className="btn btn-primary" onClick={() => setIsContactOpen(true)}>Start a Project</button>
            <button className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary-color)', fontWeight: 'bold' }}>Our Services</button>
          </div>

          <div className="grid grid-2" style={{ gap: '1rem', display: 'none' }}>
            <div className="chamfered" style={{ padding: 0 }}>
              <img src="/hero2.png" alt="Dashboard" className="chamfered-img" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
            </div>
            <div className="chamfered" style={{ padding: 0 }}>
              <img src="/hero1.png" alt="Developers Collaborating" className="chamfered-img" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section id="about" className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <div className="tagline" style={{ justifyContent: 'center' }}>Fastwave Mastery</div>
            <h2 className="section-title">Built on Experience, Driven by Quality</h2>
            <p className="section-subtitle">With over a decade of industry leadership in software development, we ensure every project meets the highest standards of innovation and performance.</p>
          </div>

          <div className="grid grid-3">
            <div className="chamfered shadow-wrapper">
              <div className="chamfered-card">
                <img src="/logo.png" alt="Fastwave Icon" style={{ height: '30px', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>1600k+</h3>
                <p>Happy customers across e-commerce, healthcare, and fintech sectors.</p>
              </div>
            </div>
            <div className="grid grid-2" style={{ gap: '1rem', gridColumn: 'span 2' }}>
              <div className="chamfered shadow-wrapper">
                <div className="chamfered-card" style={{ height: '100%' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Modern Technology</h4>
                  <p style={{ fontSize: '0.9rem' }}>We utilize the latest stacks and frameworks to ensure scalable solutions.</p>
                </div>
              </div>
              <div className="chamfered shadow-wrapper">
                <div className="chamfered-card" style={{ height: '100%' }}>
                  <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>98%</h3>
                  <p style={{ fontSize: '0.9rem' }}>Project success rate</p>
                </div>
              </div>
              <div className="chamfered shadow-wrapper">
                <div className="chamfered-card" style={{ height: '100%' }}>
                  <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>25 million</h3>
                  <p style={{ fontSize: '0.9rem' }}>Lines of code written</p>
                </div>
              </div>
              <div className="chamfered shadow-wrapper">
                <div className="chamfered-card" style={{ height: '100%' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Excellent Support</h4>
                  <p style={{ fontSize: '0.9rem' }}>24/7 dedicated support team ensuring your apps run smoothly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="tagline">Our Services</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', margin: 0, maxWidth: '500px' }}>End-to-End Software Services You Can Rely On.</h2>
            <button className="btn btn-outline">Explore All Services</button>
          </div>

          <div className="grid grid-3">
            {[
              { title: "UI/UX Modeling and Wireframing", desc: "We visualize your product's architecture and user journey before a single line of code is written." },
              { title: "Frontend & Backend Development", desc: "Full-stack implementation using React, Vite, Node, and scalable cloud infrastructures." },
              { title: "Post-Launch Maintenance", desc: "Ongoing support, feature enhancements, and continuous optimization for your digital products." }
            ].map((service, idx) => (
              <div key={idx} className="chamfered shadow-wrapper">
                <div className="chamfered-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(232, 122, 62, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
                    <CheckCircle size={20} />
                  </div>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>{service.title}</h3>
                  <p style={{ marginBottom: '1.5rem', flexGrow: 1 }}>{service.desc}</p>
                  <a href="#" className="text-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>Read More <ArrowRight size={16} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <div className="tagline" style={{ justifyContent: 'center' }}>Our Experts</div>
            <h2 className="section-title">Meet the Fastwave Team</h2>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>The talented individuals behind our flawless digital solutions.</p>
          </div>

          <div className="grid grid-3">
            {[
              { name: "Saqib Ali Mir", role: "Chief Executive Officer, AI Engineer, Web Developer", img: "https://i.pravatar.cc/300?img=5", bio: "Driving Fastwave's vision with relentless energy, pioneering AI-driven innovations to conquer the digital frontier." },
              { name: "Sadiq Baba", role: "Full-Stack Developer, Mobile Application Developer", img: "https://i.pravatar.cc/300?img=11", bio: "Architecting robust systems across web and mobile with an unstoppable drive to deliver flawless user experiences." },
              { name: "Abdul Rehaman", role: "Front-End Developer", img: "https://i.pravatar.cc/300?img=44", bio: "Crafting highly responsive interfaces with immense passion, ensuring every interaction is powerful and unforgettable." }
            ].map((employee, idx) => (
              <div key={idx} className="chamfered shadow-wrapper">
                <div className="chamfered-card text-center" style={{ padding: '3rem 2rem', height: '100%' }}>
                  <div style={{ margin: '0 auto 1.5rem auto', width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '4px solid rgba(232, 122, 62, 0.2)' }}>
                    <img src={employee.img} alt={employee.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{employee.name}</h3>
                  <p style={{ color: 'var(--primary-color)', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>{employee.role}</p>
                  <p style={{ fontSize: '0.9rem' }}>{employee.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="section" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)', padding: '5rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <div className="chamfered shadow-wrapper" style={{ backgroundColor: 'transparent', maxWidth: '800px', margin: '0 auto', border: '1px solid rgba(255,255,255,0.2)', padding: '4rem 2rem' }}>
            <div className="tagline" style={{ color: 'var(--white)', justifyContent: 'center' }}>Start Building</div>
            <h2 style={{ fontSize: '3rem', color: 'var(--white)', marginBottom: '1.5rem' }}>Ready to Build Your Vision?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Join forward-thinking companies that trust Fastwave to create digital products that drive growth and user engagement.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary-color)' }} onClick={() => setIsContactOpen(true)}>Contact Us</button>
              <button className="btn btn-outline-light">Our Process</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--white)', padding: '4rem 5% 2rem 5%' }}>
        <div className="container grid grid-4" style={{ gap: '3rem', marginBottom: '3rem' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <span style={{ fontWeight: 800, fontSize: '1.5rem' }}>Fastwave</span>
            </div>
            <h3 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Have a Project in Mind?<br />Let's Build It.</h3>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <input type="email" placeholder="Your email address" style={{ padding: '0.8rem', width: '60%', border: 'none', borderRadius: '4px' }} />
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
          <div>
            <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)' }}>About Us</a></li>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)' }}>Our Services</a></li>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)' }}>Projects</a></li>
              <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)' }}>Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>Contact Info</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.7)' }}><Phone size={18} /> +1 234 456 7890</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.7)' }}><Mail size={18} /> info@fastwave.com</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'rgba(255,255,255,0.7)' }}><MapPin size={18} /> 123 Digital Ave, Tech Park, CA 90210</li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Fastwave Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
