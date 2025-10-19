"use client";

import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';
import { CheckCircle2 } from 'lucide-react';

const processSteps = [
  { step: 1, title: "Discovery & Strategy", description: "We begin with a deep dive into your sustainability goals to create a tailored carbon offsetting strategy that aligns with your company's values and objectives." },
  { step: 2, title: "Project Curation", description: "Our experts curate a portfolio of high-impact, globally verified carbon credit projects. We focus on transparency, ensuring you know exactly where your contribution goes." },
  { step: 3, title: "Seamless Transaction", description: "Our secure, blockchain-powered platform makes purchasing and managing your carbon credits simple and straightforward. We handle all the complexities of the transaction." },
  { step: 4, title: "Retirement & Reporting", description: "Once purchased, we retire the credits on your behalf and provide you with a certificate and detailed impact reports, showcasing your commitment to the planet." },
];

export default function HowItWorksPageClient() {
  return (
    <main>
      <PageHeader
        title="Our Transparent Process"
        subtitle="From initial strategy to measurable impact, we've designed a clear and seamless journey for your business to achieve its sustainability goals."
      />
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 -ml-0.5 w-1 h-full bg-gradient-to-b from-brand-accent-cream via-brand-olive to-brand-deep-green rounded-full opacity-30"></div>
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative mb-20 last:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex md:grid md:grid-cols-2 items-center md:gap-12">
                  <motion.div
                    className="absolute left-4 md:left-1/2 -ml-5 h-10 w-10 bg-brand-olive rounded-full border-4 border-background-light flex items-center justify-center z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <CheckCircle2 size={24} className="text-white" />
                  </motion.div>
                  <motion.div
                    className={`bg-white p-8 rounded-2xl shadow-xl border border-gray-200 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:col-start-2' : 'md:text-right'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    <p className="text-brand-accent-light font-bold mb-1">STEP {item.step}</p>
                    <h3 className="text-2xl font-bold text-brand-deep-green mb-3" style={{ fontFamily: "'Lora', serif" }}>{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
