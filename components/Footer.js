import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col">
                        <h3>Khushi Velvet</h3>
                        <p>Manufactured with passion.<br />Designed for luxury.</p>
                    </div>
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <Link href="/">Home</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/application">Application</Link>
                        <Link href="/infrastructure">Infrastructure</Link>
                        <Link href="/export">Export</Link>
                        <Link href="/contact">Contact Us</Link>
                    </div>
                    <div className="footer-col">
                        <h3>Contact</h3>
                        <p>+91 97144 17743 | +91 97127 95505</p>
                        <p>texkhushi65@gmail.com</p>
                        <p>Maruti Industries Estate-2, Surat, Gujarat, India</p>
                    </div>
                </div>
                <div className="copyright">
                    &copy; 2026 Khushi Velvet All rights reserved.
                </div>
            </div>
        </footer>
    );
}
