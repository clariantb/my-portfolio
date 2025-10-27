import React from 'react';
import Image from 'next/image';
import { ScrollFadeIn } from './ui/ScrollFadeIn';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 relative z-10">
      <ScrollFadeIn>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            <div className="relative w-48 h-48 md:w-60 md:h-60 flex-shrink-0">
              <Image
                src="/images/profile-photo.jpg"
                alt="Clariant Benedictus Tan"
                fill
                className="rounded-full object-cover border-4 border-gray-700"
              />
            </div>
            <div className="space-y-6 text-lg text-gray-300 text-left leading-relaxed max-w-lg">
              <p>
                I&apos;m Clariant Benedictus Tan, a Computer Science student at Binus University specializing in Intelligent Systems. I&apos;m passionate about building end-to-end intelligent applications, from the initial idea and design all the way to a deployed product.
              </p>
              <p>
                My interest with AI got deeper when my family got a new car with Advanced Driver-Assistance Systems (ADAS). Seeing technology like traffic sign recognition in action sparked my curiosity to understand the process behind it. This has led me to pursue projects where I can apply my skills in practical ways.
              </p>
              <p>
                I thrive in collaborative team environments and I&apos;m currently seeking an internship where I can help build the next generation of smart technology.
              </p>
            </div>
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
};

export default AboutMe;