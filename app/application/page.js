import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Applications - Khushi Velvet',
};

export default function Application() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="hero-animate">Versatile Elegance</h1>
          <p className="hero-animate delay-100" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            From high-fashion runways to luxurious home interiors, our velvet adds a touch of sophistication to
            every application.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="app-grid reveal">
            {/* App 1: Home Furnishing */}
            <div className="app-card">
              <img src="/assets/velvet-upholstery.png" alt="Home Furnishing" className="app-image" />
              <div className="app-content">
                <h3>Home Furnishing</h3>
                <p>Detailed upholstery work for sofas and curtains. Our Micro 9000 provides the durability and
                  softness required for daily luxury living.</p>
              </div>
            </div>

            {/* App 2: Fashion & Apparel */}
            <div className="app-card">
              <img src="/assets/velvet_fashion.jpg" alt="Fashion & Apparel" className="app-image" />
              <div className="app-content">
                <h3>Fashion & Apparel</h3>
                <p>High-end evening gowns and ethnic wear. The Two-Tone velvet catches the light to create a
                  stunning, dynamic visual effect on runways.</p>
              </div>
            </div>

            {/* App 3: Toy Making */}
            <div className="app-card">
              <img src="/assets/velvet_toy.jpg" alt="Toy Making" className="app-image" />
              <div className="app-content">
                <h3>Toy Making</h3>
                <p>Safe, soft, and plush. Our certified non-toxic velvet is perfect for manufacturing premium
                  teddy bears and soft toys for children.</p>
              </div>
            </div>

            {/* App 4: Automotive Interiors */}
            <div className="app-card">
              <img src="/assets/velvet_car.jpg" alt="Automotive Interiors" className="app-image" />
              <div className="app-content">
                <h3>Automotive Interiors</h3>
                <p>Custom-grade heavy velvet for luxury car seat covers and headliners. Abrasion-resistant and
                  designed for superior comfort.</p>
              </div>
            </div>

            {/* App 5: Jewelry Packaging */}
            <div className="app-card">
              <img src="/assets/velvet_jewelry.jpg" alt="Jewelry Packaging" className="app-image" />
              <div className="app-content">
                <h3>Jewelry Display</h3>
                <p>The deepest black and royal blues. Our high-density velvet absorbs light, making diamonds and
                  gold jewelry sparkle brilliantly in displays.</p>
              </div>
            </div>

            {/* App 6: Footwear */}
            <div className="app-card">
              <img src="/assets/velvet_shoes.jpg" alt="Luxury Footwear" className="app-image" />
              <div className="app-content">
                <h3>Luxury Footwear</h3>
                <p>Durable backing for embroidered shoes and juttis. Combines style with the strength needed for
                  footwear manufacturing.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
