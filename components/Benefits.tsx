import React from 'react';
import { Phone, Clock, MessageSquare, Zap, Shield, TrendingUp } from 'lucide-react';

export const Benefits = () => {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4 uppercase tracking-wide">
            WHY USE PLUMBGUARD?
          </h2>
          <p className="text-xl text-neutral-medium">
            The only answering service built specifically for plumbing contractors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">Never Miss a Job</h3>
            <p className="text-gray-600 leading-relaxed">
              Every missed call is money to your competitor. We answer 100% of calls instantly, 24/7/365.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-accent hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">Instant Dispatch</h3>
            <p className="text-gray-600 leading-relaxed">
              Emergency leak? We qualify the lead and patch it through to your on-call tech immediately.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">Scale Your Biz</h3>
            <p className="text-gray-600 leading-relaxed">
              Stop being the dispatcher. Focus on growing your plumbing business while we handle the phones.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
             <a href="#/demo" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-secondary border-2 border-transparent rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Test the AI Receptionist Now
            </a>
        </div>
      </div>
    </section>
  );
};
