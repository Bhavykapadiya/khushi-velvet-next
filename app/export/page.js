import Link from 'next/link';

export const metadata = {
  title: 'Global Export - Khushi Velvet',
};

export default function Export() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="hero-animate">Worldwide Reach</h1>
          <p className="hero-animate delay-100" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Delivering excellence across borders. Our premium velvet finds its home in markets across the globe.
          </p>
        </div>
      </section>

      <section className="map-section">
        <img src="/assets/export-map.png" alt="Global Export Map" className="map-img" />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="export-info hero-animate delay-200">
            <div className="info-item">
              <h3>GLOBAL LOGISTICS</h3>
              <p>We have established robust logistics partnerships ensuring timely delivery to USA, Europe, Middle
                East, and Asian markets. Our export team handles all documentation for seamless customs
                clearance.</p>
            </div>
            <div className="info-item">
              <h3>GENUNINE QUALITY</h3>
              <p>All export consignments undergo rigorous 4-point quality inspection systems. We ensure that our
                international clients receive only the finest Grade-A fabric.</p>
            </div>
            <div className="info-item">
              <h3>24/7 SUPPORT</h3>
              <p>Our dedicated export desk operates round the clock to support our international clients across
                different time zones, ensuring smooth communication and order tracking.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
