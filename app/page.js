import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-animate">The Art of <span className="text-accent">Velvet</span></h1>
          <p className="hero-animate delay-100">Experience the touch of luxury with our premium range of Micro 9000,
            11000, Two Tone, Extra Soft, 99999 velvet and many more.</p>
          <Link href="/products" className="btn hero-animate delay-200">Explore Collection</Link>
        </div>
        <div className="scroll-down" style={{ color: 'var(--primary-color)' }}>↓</div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid reveal active"> 
            {/* Note: In Next.js we might need a hook for 'reveal' on scroll. 
                For now, I'll add 'active' to force visibility or rely on future JS implementation.
                The CSS hides .reveal by default. I should add a simple script or just make them visible for MVP.
                I will assume I'll add a global scroll observer later or just add 'active' manually for critical parts.
                Actually, simpler to just remove 'reveal' class if I don't implement the JS yet, 
                so content is visible. 
                But I want to keep the animations.
                I'll leave 'reveal' and implement a hook later or now. 
                I'll add a simple ScrollReveal component or hook in layout?
                For this file, I will just omit 'reveal' to ensure content is visible if JS isn't there.
                Wait, 'reveal' class has opacity: 0. Content will be invisible.
                I MUST implement the scroll observer or remove the class.
                I'll remove the 'reveal' class for now to ensure visibility.
            */}
            <div className="about-text">
              <h2>Weaving History Since 2011</h2>
              <p>Established as a premier manufacturer and importer, we specialize in high-quality Velvet Fabrics.
                Our journey began with a vision to bring the finest Micro Velvet to the global market.</p>
              <p>Located in the textile heart of Surat, Gujarat, our state-of-the-art facility ensures every yard
                of fabric meets international standards of softness, durability, and elegance.</p>
              <Link href="/infrastructure" className="btn" style={{ marginTop: '20px' }}>View Infrastructure</Link>
            </div>
            <div className="about-stats">
              <div className="stats">
                <div className="stat-card">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Clients Worldwide</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">5M+</span>
                  <span className="stat-label">Meters Produced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Highlight */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Precision Engineering</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-lg)' }}>
              Our velvet is crafted using advanced German knitting technology. From raw yarn to the final lush
              finish, we control every step of the process to guarantee perfection.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>Why Leading Brands Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Uncompromising Quality</h3>
              <p>We adhere to strict 4-point inspection systems, ensuring every meter of velvet meets global
                luxury standards.</p>
            </div>
            <div className="feature-card">
              <h3>Global Reliability</h3>
              <p>Trusted by clients across USA, Europe, and Asia. We deliver defect-free shipments on time, every
                time.</p>
            </div>
            <div className="feature-card">
              <h3>Business Ethics</h3>
              <p>Transparency, integrity, and long-term partnerships are the core values that drive our growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
