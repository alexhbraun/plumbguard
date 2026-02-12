import React from 'react';
import { Snowflake, Sun, AlertOctagon } from 'lucide-react';

export const BusySeason = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-secondary mb-16 uppercase tracking-wide">
            BUSY SEASON IS HERE
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Winter */}
            <div className="bg-neutral-light p-8 rounded-xl text-center border-t-4 border-primary shadow-lg hover:-translate-y-1 transition-transform">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Snowflake className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-secondary text-xl uppercase mb-4">Winter</h3>
              <p className="text-gray-600">
                Frozen pipes. Burst lines. Heating failures. <br/> Calls spike 300%.
              </p>
            </div>
            
            {/* Spring/Summer */}
            <div className="bg-neutral-light p-8 rounded-xl text-center border-t-4 border-accent shadow-lg hover:-translate-y-1 transition-transform">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Sun className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-bold text-secondary text-xl uppercase mb-4">Spring & Summer</h3>
              <p className="text-gray-600">
                Root intrusion. Sewer backups. <br/> A/C condensate leaks.
              </p>
            </div>
            
            {/* All Year */}
            <div className="bg-neutral-light p-8 rounded-xl text-center border-t-4 border-primary shadow-lg hover:-translate-y-1 transition-transform">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                <AlertOctagon className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="font-bold text-secondary text-xl uppercase mb-4">Emergencies</h3>
              <p className="text-gray-600">
                Water heaters burst. Slab leaks. <br/> These don't wait for business hours.
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
             <h3 className="text-2xl font-bold text-secondary mb-6 uppercase">
                That's when <span className="text-primary decoration-accent underline decoration-4 underline-offset-4">missed calls spike</span>.
             </h3>
             <p className="text-lg text-neutral-medium font-medium leading-relaxed">
                When the weather turns, your phone rings non-stop. If you're in a crawlspace or sleeping, you miss the job. PlumbGuard captures it for you.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};
