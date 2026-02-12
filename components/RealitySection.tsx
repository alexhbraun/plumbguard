import React from 'react';
import { AlertTriangle, Clock, MapPin, PhoneMissed } from 'lucide-react';

export const RealitySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4 uppercase tracking-wide">THE REALITY</h2>
            <p className="text-xl text-neutral-medium">When you're under a sink, the phone keeps ringing.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-neutral-light p-3 rounded-full text-secondary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">You're deep in a crawlspace fixing a leak.</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-neutral-light p-3 rounded-full text-secondary">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">You're installing a water heater.</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-neutral-light p-3 rounded-full text-secondary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">You're driving between service calls.</h3>
                </div>
              </div>
            </div>

            <div className="bg-neutral-light p-8 rounded-lg border-l-4 border-primary shadow-sm">
              <h3 className="text-xl font-bold text-secondary mb-6">Meanwhile:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-neutral-dark">
                   <span className="w-2 h-2 bg-primary rounded-full"></span>
                   A basement is flooding.
                </li>
                <li className="flex items-center gap-3 text-neutral-dark">
                   <span className="w-2 h-2 bg-primary rounded-full"></span>
                   A commercial kitchen's drain is backed up.
                </li>
                <li className="flex items-center gap-3 text-neutral-dark">
                   <span className="w-2 h-2 bg-primary rounded-full"></span>
                   A customer needs an emergency consult.
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-lg font-bold text-secondary flex items-center gap-2">
                  <PhoneMissed className="w-5 h-5 text-accent" />
                  If no one answers, they call the <br/> next plumber on Google.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
