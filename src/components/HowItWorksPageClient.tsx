"use client";

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const processSteps = [
  { step: 1, title: "Discovery & Strategy", description: "We begin with a deep dive into your sustainability goals to create a tailored carbon offsetting strategy that aligns with your company's values and objectives." },
  { step: 2, title: "Project Curation", description: "Our experts curate a portfolio of high-impact, globally verified carbon credit projects. We focus on transparency, ensuring you know exactly where your contribution goes." },
  { step: 3, title: "Seamless Transaction", description: "Our secure, blockchain-powered platform makes purchasing and managing your carbon credits simple and straightforward. We handle all the complexities of the transaction." },
  { step: 4, title: "Retirement & Reporting", description: "Once purchased, we retire the credits on your behalf and provide you with a certificate and detailed impact reports, showcasing your commitment to the planet." },
];

export default function HowItWorksPageClient() {
  return (
    <div className="relative z-10">
      {/* Page Header Glass Panel */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white" style={{ fontFamily: "'Lora', serif", textShadow: '0 0 20px rgba(0, 255, 153, 0.3)' }}>
              Our Transparent Process
            </h1>
            <p className="mt-4 text-lg text-brand-light/80 max-w-3xl mx-auto">
              From initial strategy to measurable impact, we&apos;ve designed a clear and seamless journey for your business to achieve its sustainability goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* The vertical timeline line with a gradient effect */}
            <div className="absolute left-4 md:left-1/2 -ml-0.5 w-1 h-full bg-gradient-to-b from-brand-stone to-brand-accent rounded-full opacity-30"></div>

            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative mb-20 last:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="flex md:grid md:grid-cols-2 items-center md:gap-12">
                  
                  {/* Animated Timeline Point */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 -ml-5 h-10 w-10 bg-brand-accent rounded-full border-4 border-brand-dark flex items-center justify-center z-10"
                    variants={{
                      hidden: { scale: 0 },
                      visible: { scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20, delay: 0.2 } }
                    }}
                  >
                    <CheckCircle2 size={24} className="text-brand-dark" />
                  </motion.div>
                  
                  {/* Glassmorphism Content Card */}
                  <motion.div
                    className={`bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:col-start-2' : 'md:text-right'}`}
                    variants={{
                      hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
                    }}
                  >
                    <p className="text-brand-accent/80 font-bold mb-1">STEP {item.step}</p>
                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Lora', serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-brand-light/70 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
