import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldAlert, Sparkles, Phone, HelpCircle } from 'lucide-react';
import { trackAssessmentCompleted, trackPhoneCall } from '../utils/analytics';

export const AssessmentCalculator: React.FC = () => {
  const [propertyType, setPropertyType] = useState<'waterfront' | 'inland' | 'commercial' | 'hoa'>('waterfront');
  const [areaAffected, setAreaAffected] = useState<'seawall' | 'pool' | 'roof' | 'landscaping' | 'multiple'>('seawall');
  const [infestationLevel, setInfestationLevel] = useState<'mild' | 'moderate' | 'severe'>('moderate');

  // Calculate recommendation
  const getRecommendation = () => {
    let title = '';
    let description = '';
    let urgency = 'High Priority';
    let suggestedAction = '';
    let estimatedVisits = '1 to 2 Trapping Cycles + Exclusion';

    if (propertyType === 'waterfront' || areaAffected === 'seawall') {
      title = 'Critical Seawall & Waterfront Defense Protocol';
      description = 'Iguanas actively undermine seawall backfill, leading to catastrophic sinkholes and costly marine contractor repairs. Immediate burrow destruction and canal trapping required.';
      urgency = 'Critical (Prevent Structural Collapse)';
      suggestedAction = 'Emergency trapping + burrow excavation + anti-climb dock barriers';
      estimatedVisits = '2-4 Multi-Day Trapping Runs';
    } else if (propertyType === 'hoa' || propertyType === 'commercial') {
      title = 'Comprehensive Commercial / HOA Eradication Plan';
      description = 'Large-scale colony management for common areas, lakes, golf courses, and clubhouse pools. Includes resident education and scheduled perimeter sweeps.';
      urgency = 'Scheduled Priority';
      suggestedAction = 'High-capacity humane trapping arrays + tree wrap barriers + monthly monitoring';
      estimatedVisits = 'Ongoing HOA Maintenance or Multi-Phase Trapping';
    } else if (areaAffected === 'roof' || areaAffected === 'pool') {
      title = 'Residential Pool, Patio & Roofline Defense';
      description = 'Iguana feces carry Salmonella and foul pool filtration systems. Roof nesting damages tiles and gutters. Rapid capture and barrier installation recommended.';
      urgency = 'Immediate (Health & Sanitation Risk)';
      suggestedAction = 'Precision trapping + screen enclosure inspection + tree trimming / slick wrapping';
      estimatedVisits = '1 to 2 Service Cycles';
    } else {
      title = 'Targeted Landscape Protection & Humane Trapping';
      description = 'Protecting prized tropical flora (hibiscus, bougainvillea, orchids) and eliminating residential yard burrows before eggs hatch.';
      urgency = 'Standard Rapid Dispatch';
      suggestedAction = 'Live cage trapping + egg nest inspection + organic non-toxic repellent guidance';
      estimatedVisits = '1 to 2 Trapping Cycles';
    }

    return { title, description, urgency, suggestedAction, estimatedVisits };
  };

  const rec = getRecommendation();

  const handleCalculate = () => {
    trackAssessmentCompleted(propertyType, infestationLevel);
  };

  return (
    <section id="assessment" className="py-16 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Assessment Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading uppercase tracking-wide">
            Property Damage & Cost Assessment
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Every property in South Florida is unique. Answer 3 quick questions to generate a customized eradication & defense protocol tailored to your situation.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            
            {/* Step 1: Property Type */}
            <div>
              <label className="block text-sm font-bold text-white font-heading uppercase tracking-wider mb-3">
                1. Select Property Type:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'waterfront', label: 'Waterfront / Canal / Seawall', icon: '⚓' },
                  { id: 'inland', label: 'Inland Residential Home', icon: '🏡' },
                  { id: 'hoa', label: 'HOA / Gated Community', icon: '🏘️' },
                  { id: 'commercial', label: 'Commercial / Marina / Resort', icon: '🏢' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setPropertyType(item.id as any);
                      handleCalculate();
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-2.5 ${
                      propertyType === item.id
                        ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-md shadow-emerald-950'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Where is the Primary Problem? */}
            <div>
              <label className="block text-sm font-bold text-white font-heading uppercase tracking-wider mb-3">
                2. Where are you seeing the most iguana activity?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'seawall', label: 'Seawall & Dock' },
                  { id: 'pool', label: 'Pool Deck / Patio' },
                  { id: 'roof', label: 'Roof / Gutters / Attic' },
                  { id: 'landscaping', label: 'Landscaping & Trees' },
                  { id: 'multiple', label: 'Multiple / Property-wide' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setAreaAffected(item.id as any);
                      handleCalculate();
                    }}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      areaAffected === item.id
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xs">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Severity */}
            <div>
              <label className="block text-sm font-bold text-white font-heading uppercase tracking-wider mb-3">
                3. Estimated Number / Activity Level:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'mild', label: '1 - 2 Iguanas', sub: 'Occasional sightings' },
                  { id: 'moderate', label: '3 - 6 Iguanas', sub: 'Frequent sightings & droppings' },
                  { id: 'severe', label: '7+ / Active Colony', sub: 'Burrows, egg-laying, heavy swarm' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setInfestationLevel(item.id as any);
                      handleCalculate();
                    }}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      infestationLevel === item.id
                        ? 'bg-amber-950/50 border-amber-500 text-amber-200'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold">{item.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-700/50 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-500 text-slate-950">
                {rec.urgency}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4 text-emerald-400">
              <Sparkles className="w-5 h-5" />
              <span className="text-xs uppercase font-bold tracking-wider">Custom Action Plan</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-3">
              {rec.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              {rec.description}
            </p>

            <div className="space-y-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs mb-6">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200">Recommended Service:</strong>
                  <div className="text-slate-400">{rec.suggestedAction}</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200">Scope of Work:</strong>
                  <div className="text-slate-400">{rec.estimatedVisits}</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200">Free On-Site Estimate:</strong>
                  <div className="text-emerald-300 font-semibold">$0 Inspection by Avi Ezra</div>
                </div>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="space-y-2.5">
              <a
                href="#contact"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-950 transition-colors"
              >
                <span>Book This Free On-Site Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:13059224210"
                onClick={() => trackPhoneCall('Calculator Direct Call')}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold text-xs text-center flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Avi Ezra Directly: (305) 922-4210</span>
              </a>
            </div>

            <div className="mt-4 text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
              <HelpCircle className="w-3 h-3 text-emerald-400" />
              Questions? Our work truck drives directly to your location.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
