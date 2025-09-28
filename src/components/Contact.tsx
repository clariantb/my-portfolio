import React from 'react';
import { ScrollFadeIn } from './ui/ScrollFadeIn';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 relative z-10">
      <ScrollFadeIn>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            I&apos;m currently looking for internship opportunities. My inbox is always open, so whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <a
            href="mailto:clariantb13@gmail.com"
            className="inline-block px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Say Hello
          </a>
        </div>
      </ScrollFadeIn>
    </section>
  );
};

export default Contact;