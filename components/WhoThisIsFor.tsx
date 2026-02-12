import React from 'react';
import { Check, X } from 'lucide-react';

export const WhoThisIsFor = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-12 text-center uppercase tracking-wide">
            WHO THIS IS FOR
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* THIS IS FOR */}
            <div className="bg-neutral-light rounded-xl p-8 border-t-8 border-green-500 shadow-lg hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold text-secondary mb-8 flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                This IS for you if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-dark font-medium leading-normal">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  Your revenue depends on answering the phone first.
                </li>
                <li className="flex items-start gap-3 text-neutral-dark font-medium leading-normal">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  You run 2-15 service trucks and want to scale.
                </li>
                <li className="flex items-start gap-3 text-neutral-dark font-medium leading-normal">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  You're tired of losing jobs because you were asleep or in a crawlspace.
                </li>
              </ul>
            </div>
            
            {/* THIS IS NOT FOR */}
            <div className="bg-neutral-light rounded-xl p-8 border-t-8 border-red-500 shadow-lg hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold text-secondary mb-8 flex items-center gap-3">
                <div className="bg-red-100 p-2 rounded-full">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                This is NOT for you if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-medium leading-normal">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                  You only do new construction bids.
                </li>
                <li className="flex items-start gap-3 text-neutral-medium leading-normal">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                  You are a one-man show with $0 budget for growth.
                </li>
                <li className="flex items-start gap-3 text-neutral-medium leading-normal">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                  You already have 24/7 full-time office staff.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
