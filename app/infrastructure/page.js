import Link from 'next/link';

export const metadata = {
  title: 'Infrastructure | Khushi Velvet',
};

export default function Infrastructure() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="reveal">Our Infrastructure</h1>
          <p className="reveal" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            State-of-the-art manufacturing facility in the heart of Surat.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
            {/* 
                Original CSS had .infra-section:nth-child(even) logic for reversing row direction.
                Next.js Modules handles this if we ported class names correctly to global.css.
                Just reusing the HTML structure with classNames.
            */}
          
          {/* Section 1 */}
          <div className="infra-section reveal">
            <div className="infra-visual">
              <img src="/assets/factory_floor.png" alt="Factory Floor" className="infra-img" />
            </div>
            <div className="infra-content">
              <h2>Manufacturing Facility</h2>
              <p>Spread over a vast area in Surat, Gujarat, our manufacturing unit is equipped with the latest
                machinery to handle large scale production requirements.</p>
              <p>We maintain strict quality control protocols at every stage of production, ensuring that our
                clients receive only the best.</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="infra-section reveal">
            <div className="infra-visual">
              <img src="/assets/knitting_machine.png" alt="Knitting Machines" className="infra-img" />
            </div>
            <div className="infra-content">
              <h2>Advanced Machinery</h2>
              <p>We utilize imported Karl Mayer knitting machines from Germany, known for their precision and
                speed.</p>
              <p>Our infrastructure includes heavy-duty warping machines and inspection units that allow us to
                produce flaw-free velvet fabrics consistently.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
