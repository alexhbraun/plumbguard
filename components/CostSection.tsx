import React from 'react';
import { TrendingDown } from 'lucide-react';

export const CostSection = () => {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-12 uppercase tracking-wide">THE COST</h2>
          
          <div className="bg-white rounded-lg shadow-sm mb-12 border-l-8 border-accent overflow-hidden">
            <div className="p-10 md:p-14">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                    <div className="bg-red-100 p-4 rounded-full text-red-600 animate-pulse">
                         <TrendingDown className="w-8 h-8" />
                    </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-secondary mb-2 leading-tight uppercase">
                    One Missed Water Heater Call <br/> Can Cost You
                </h3>
                <span className="text-accent text-6xl md:text-7xl font-black block mt-4">$1,500+</span>
                
                <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto mt-12 border-t border-gray-100 pt-10">
                    <div className="bg-neutral-light p-6 rounded-lg">
                        <p className="font-bold text-secondary mb-2 text-lg uppercase tracking-wide">The Call:</p>
                        <p className="text-neutral-medium">"My water heater is leaking all over the garage, I need someone now."</p>
                    </div>
                    <div className="bg-neutral-light p-6 rounded-lg border-l-4 border-red-400">
                        <p className="font-bold text-secondary mb-2 text-lg uppercase tracking-wide">The Result:</p>
                        <p className="text-secondary font-bold">Voicemail. They hang up. <br/>You lose a $1,500 install.</p>
                    </div>
                </div>
            </div>
             <div className="bg-secondary text-white py-6 px-8 font-bold text-lg uppercase tracking-wider">
                We don't sell marketing. We protect revenue.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
