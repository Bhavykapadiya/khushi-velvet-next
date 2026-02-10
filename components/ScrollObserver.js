"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
    const pathname = usePathname();

    useEffect(() => {
        const revealOnScroll = () => {
            const reveals = document.querySelectorAll('.reveal');
            const windowHeight = window.innerHeight;
            const elementVisible = 100; // Slightly lower threshold for better mobile experience

            reveals.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                } else {
                    // Optional: Remove active to re-animate on scroll up? 
                    // Legacy code didn't remove it. Keeps it simple.
                    // But if user scrolls up and down, legacy code doesn't remove. 
                    // sticking to legacy behavior (one-time reveal) mostly.
                    // Actually legacy logic just checks if <, adds active. 
                    // It doesn't have an else block.
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        // Trigger on mount and path change
        revealOnScroll();

        // Also trigger after a short delay to account for rendering/hydration
        const timer = setTimeout(revealOnScroll, 100);

        return () => {
            window.removeEventListener('scroll', revealOnScroll);
            clearTimeout(timer);
        };
    }, [pathname]); // Re-run when route changes

    return null;
}
