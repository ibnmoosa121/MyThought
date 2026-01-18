"use client";

import { useEffect } from 'react';
import ContactForm from '../components/features/contact/contact-form';

const ContactPage = () => {
    useEffect(() => {
        document.title = "Contact | MyThought";
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-black">
            <ContactForm />
        </main>
    );
};

export default ContactPage;
