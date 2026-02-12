import React from 'react';
import { Plus } from 'lucide-react';

export const FaqSection = () => {
    return (
        <section className="py-20 bg-neutral-light" id="faq">
             <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-4 uppercase tracking-wide">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-500">Everything you need to know about PlumbGuard.</p>
                </div>
                
                <div className="max-w-3xl mx-auto space-y-4">
                    {/* FAQ Item 1 */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <h3 className="text-lg font-bold text-secondary mb-2 flex justify-between items-center">
                            How fast does the AI answer?
                            <Plus className="w-5 h-5 text-primary" />
                        </h3>
                        <p className="text-gray-600">Instantly. Zero hold time. We answer 24/7/365, even on Christmas Day and at 3 AM.</p>
                    </div>
                     {/* FAQ Item 2 */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <h3 className="text-lg font-bold text-secondary mb-2 flex justify-between items-center">
                            Does it integrate with ServiceTitan?
                            <Plus className="w-5 h-5 text-primary" />
                        </h3>
                        <p className="text-gray-600">Yes, we can push leads directly into your CRM or scheduling software so your dispatchers see them immediately.</p>
                    </div>
                     {/* FAQ Item 3 */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <h3 className="text-lg font-bold text-secondary mb-2 flex justify-between items-center">
                            Can I customize the script?
                            <Plus className="w-5 h-5 text-primary" />
                        </h3>
                        <p className="text-gray-600">Absolutely. We train the AI on your specific pricing, service area, and qualification questions.</p>
                    </div>
                </div>
             </div>
        </section>
    );
};
