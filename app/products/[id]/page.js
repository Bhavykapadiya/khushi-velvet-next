import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductData, products } from '../../../lib/data';

// Generate static params for all products (optional but good for static export)
export async function generateStaticParams() {
  return Object.keys(products).map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductData(id);
  
  if (!product) {
    return { title: 'Product Not Found' };
  }
  
  return {
    title: `${product.title} | Khushi Velvet`,
    description: product.description,
  };
}

export default async function ProductDetail({ params }) {
  const { id } = await params;
    const product = getProductData(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Product Details</h1>
        </div>
      </section>

      <section className="container">
        <div className="product-detail-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', padding: 'var(--spacing-lg) 0', background: '#ffffff' }}>
            {/* CSS class .product-detail-container is in global now, inline styles might be redundant but safe */}
          
          <div className="product-gallery" style={{ position: 'sticky', top: '120px' }}>
            <Link href="/products" className="back-btn" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '1rem' }}>
                ← Back to Products
            </Link>
            <div className="main-image-container" style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img 
                src={product.image} 
                alt={product.title} 
                className="main-image" 
                style={{ width: '100%', height: 'auto', display: 'block' , ...(product.imageFilter ? { filter: product.imageFilter } : {}) }}
              />
            </div>
          </div>

          <div className="product-content">
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '1rem', borderBottom: '2px solid var(--accent-light)', paddingBottom: '10px', display: 'inline-block' }}>
                {product.title}
            </h2>
            <p className="description" style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                {product.description}
            </p>

            <div className="features-box" style={{ background: 'var(--bg-light)', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Key Features</h3>
              <ul className="features-list" style={{ listStyle: 'none' }}>
                {product.features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative', color: 'var(--text-muted)' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="specs-section">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Specifications</h3>
              <table className="specs-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                <tbody>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <tr key={key} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      <th style={{ textAlign: 'left', padding: '15px', color: 'var(--primary-color)', width: '40%', fontWeight: '600' }}>{key}</th>
                      <td style={{ textAlign: 'left', padding: '15px', color: 'var(--text-muted)' }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <Link href="/contact" className="btn">Enquire Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
