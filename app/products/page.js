import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../lib/data';

export const metadata = {
  title: 'Our Products | Khushi Velvet',
};

export default function Products() {
  const productList = Object.entries(products);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Our Premium Collection</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Discover the finest range of velvet fabrics crafted for fashion and upholstery.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="products-grid">
            {productList.map(([id, product]) => (
              <Link href={`/products/${id}`} key={id} className="product-card">
                <div style={{ overflow: 'hidden' }}>
                    {/* Standard img tag for now to match CSS behavior easily, or Image with fill */}
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="product-img" 
                    style={product.imageFilter ? { filter: product.imageFilter } : {}}
                  />
                </div>
                <div className="product-info">
                  <h2 className="product-title">{product.title}</h2>
                  <p className="product-desc">{product.description.substring(0, 100)}...</p>
                  <span className="btn" style={{ padding: '5px 15px', fontSize: '0.8rem' }}>View Details</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
