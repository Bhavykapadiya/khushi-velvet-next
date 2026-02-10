"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const isActive = (path) => pathname === path ? 'active' : '';

    return (
        <header>
            <div className="container">
                <nav>
                    <Link href="/" className="logo">KHUSHI <span className="text-accent">VELVET</span></Link>
                    <div className="hamburger" onClick={toggleMenu} style={{ display: 'flex' }}> 
                        <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
                        <span style={{ opacity: isMenuOpen ? '0' : '1' }}></span>
                        <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
                    </div>

                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <Link href="/" className={isActive('/')}>Home</Link>
                        <Link href="/products" className={isActive('/products')}>Products</Link>
                        <Link href="/application" className={isActive('/application')}>Application</Link>
                        <Link href="/infrastructure" className={isActive('/infrastructure')}>Infrastructure</Link>
                        <Link href="/export" className={isActive('/export')}>Export</Link>
                        <Link href="/contact" className={isActive('/contact')}>Contact</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
