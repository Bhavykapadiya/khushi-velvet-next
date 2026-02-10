"use client";
import { useState } from 'react';

export default function Contact() {
    // Basic form state
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('Sending...');
        
        const form = e.target;
        const scriptURL = 'https://script.google.com/macros/s/AKfycbw6TPKg_61ypmtKrxH8_mJJR_5oQ17Jz2cL4YK_ZwoRMKPU61GmoTRXI1wnrT-yN7d1/exec';
        
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                setStatus("Thank you! Your message has been sent successfully.");
                form.reset();
                setIsSubmitting(false);
            })
            .catch(error => {
                setStatus("Error! Something went wrong. Please try again.");
                console.error('Error!', error.message);
                setIsSubmitting(false);
            });
    };

    return (
        <>
            <div className="contact-container">
                {/* Left Side: Info */}
                <div className="contact-info">
                    <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>Get in Touch</h1>
                    <p style={{ marginBottom: 'var(--spacing-lg)', maxWidth: '400px', lineHeight: '1.8' }}>
                        Ready to experience the finest velvet? Contact us for samples, quotes, or factory visits.
                    </p>

                    <div className="info-item">
                        <h3>Visit Us</h3>
                        <p>Plot No. 69 To 76, Maruti Industries Estate-2,<br />Surat Kamrej Road, Laskana - 395013, India</p>
                    </div>

                    <div className="info-item">
                        <h3>Call Us</h3>
                        <p>+91 97144 17743 | +91 97127 95505</p>
                    </div>

                    <div className="info-item">
                        <h3>Email Us</h3>
                        <p>texkhushi65@gmail.com</p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="contact-form-section" id="enquiry">
                    <h2 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--accent-color)' }} className="reveal delay-100">
                        Send an Enquiry
                    </h2>
                    <form className="reveal delay-200" id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder=" " required />
                            <label htmlFor="name">Your Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder=" " required />
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="form-group">
                            <input type="text" id="phone" name="phone" placeholder=" " required />
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                        <div className="form-group">
                            <textarea id="message" name="message" placeholder=" " required></textarea>
                            <label htmlFor="message">Your Message</label>
                        </div>
                        <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
                        {status && <p style={{ marginTop: '1rem', color: 'green' }}>{status}</p>}
                    </form>
                </div>
            </div>

            {/* Map Section */}
            <div className="container-fluid" style={{ padding: 0 }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.076495133602!2d72.83106031493202!3d21.18667098591325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1645432123456!5m2!1sen!2sin"
                    width="100%" height="450" style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
                    allowFullScreen="" loading="lazy">
                </iframe>
            </div>
        </>
    );
}
