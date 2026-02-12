import React from 'react';
import { Truck, Check, Smartphone, Zap } from 'lucide-react';

export const TargetAudience = () => {
  return (
    <section className="py-24 relative bg-primary text-white overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[40rem] h-[40rem] bg-secondary/30 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
                <span className="text-xs font-bold tracking-wide text-accent uppercase">Plumbing Specific</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight uppercase">
                BUILT FOR PLUMBING CONTRACTORS
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Designed for plumbing owners running 2–15 trucks who rely on high-ticket service calls and can't afford to play phone tag.
              </p>
              
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="bg-white/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                        <Smartphone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Works With Any Phone System</h4>
                        <p className="text-blue-200/80">ServiceTitan, Housecall Pro, Jobber, or just your cell phone. We plug right in.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4">
                    <div className="bg-white/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                        <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Filters The Junk</h4>
                        <p className="text-blue-200/80">We qualify leads. Solicitors and spam get blocked. Only booked jobs hit your calendar.</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-white/5 p-8 md:p-10 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Truck className="w-6 h-6 text-accent" />
                We handle the calls you miss:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                  <Check className="w-5 h-5 text-green-400 shrink-0" />
                  <span>Water heater replacements</span>
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                  <Check className="w-5 h-5 text-green-400 shrink-0" />
                  <span>Emergency leak repairs</span>
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                  <Check className="w-5 h-5 text-green-400 shrink-0" />
                  <span>Drain cleaning & sewer work</span>
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                  <Check className="w-5 h-5 text-green-400 shrink-0" />
                  <span>Excavation & repiping quotes</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                 <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Integrates with</p>
                 <div className="flex justify-center gap-6 mt-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                    {/* Placeholders for logos if needed */}
                    <span className="font-bold">ServiceTitan</span>
                    <span className="font-bold">Housecall Pro</span>
                    <span className="font-bold">Jobber</span>
                 </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
