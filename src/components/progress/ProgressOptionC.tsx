import { ProgressStage } from '../ProgressScreen';
import { ArrowRight } from 'lucide-react';

interface ProgressOptionCProps {
  progress: number;
  currentStageIndex: number;
  stages: ProgressStage[];
}

// Data Extraction Grid - Split view showing document → form
export function ProgressOptionC({ progress, currentStageIndex, stages }: ProgressOptionCProps) {
  const formFields = [
    { section: 'Lease Term', fields: ['Start Date', 'Term Length', 'Expiration'], progress: 35 },
    { section: 'Rent Details', fields: ['Base Rent', 'Escalation', 'Rent Abatement'], progress: 55 },
    { section: 'Economics', fields: ['Security Deposit', 'TI Allowance', 'Free Rent'], progress: 75 },
    { section: 'Options', fields: ['Renewal Rights', 'Expansion', 'Termination'], progress: 90 },
  ];

  return (
    <div className="space-y-4">
      {/* Status Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#f0f0f0]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#4837b9] animate-pulse" />
          <p className="text-[11px] text-[#72777e]">EXTRACTING DATA</p>
        </div>
        <p className="text-[13px] text-[#1d1e20]">{Math.round(progress)}%</p>
      </div>

      {/* Split View: Document → Form */}
      <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-start">
        {/* Left: Document Preview */}
        <div className="space-y-1.5">
          <p className="text-[10px] text-[#72777e] mb-2">SOURCE DOCUMENT</p>
          <div className="bg-gradient-to-br from-[#f8f9fa] to-[#f0f1f2] rounded-lg border border-[#e5e7eb] p-3 space-y-2">
            {formFields.map((section, index) => {
              const isActive = progress >= section.progress - 20 && progress < section.progress + 5;
              const isExtracted = progress >= section.progress;
              
              return (
                <div key={index} className="space-y-1">
                  <div 
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#4837b9] animate-pulse' 
                        : isExtracted 
                          ? 'bg-[#4837b9]/30' 
                          : 'bg-[#e5e7eb]'
                    }`}
                    style={{ width: `${60 + Math.random() * 30}%` }}
                  />
                  {section.fields.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#4837b9]/50' 
                          : isExtracted 
                            ? 'bg-[#4837b9]/20' 
                            : 'bg-[#e5e7eb]'
                      }`}
                      style={{ width: `${40 + Math.random() * 40}%` }}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Center: Data Flow Animation */}
        <div className="flex flex-col items-center justify-center h-full py-8">
          <div className="relative">
            {/* Animated arrows */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="arrow-flow absolute"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  opacity: progress < 100 ? 1 : 0
                }}
              >
                <ArrowRight className="w-4 h-4 text-[#4837b9]" strokeWidth={2} />
              </div>
            ))}
            <ArrowRight className="w-4 h-4 text-[#e5e7eb]" strokeWidth={2} />
          </div>
        </div>

        {/* Right: Form Fields */}
        <div className="space-y-1.5">
          <p className="text-[10px] text-[#72777e] mb-2">PROPOSAL FORM</p>
          <div className="space-y-2">
            {formFields.map((section, index) => {
              const isPopulating = progress >= section.progress - 10 && progress < section.progress;
              const isPopulated = progress >= section.progress;
              
              return (
                <div 
                  key={index}
                  className={`border rounded-lg p-2.5 transition-all duration-500 ${
                    isPopulating 
                      ? 'border-[#4837b9] bg-[#f8f7ff] scale-105' 
                      : isPopulated 
                        ? 'border-[#009696] bg-white' 
                        : 'border-[#e5e7eb] bg-[#fafbfc]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <p className={`text-[11px] transition-colors ${
                      isPopulated ? 'text-[#1d1e20]' : 'text-[#b4b7bc]'
                    }`}>
                      {section.section}
                    </p>
                    {isPopulated && (
                      <div className="w-3 h-3 rounded-full bg-[#009696] flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                    {isPopulating && (
                      <div className="w-3 h-3">
                        <div className="w-3 h-3 border-2 border-[#4837b9] border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    {section.fields.map((field, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full ${
                          isPopulated ? 'bg-[#009696]' : 'bg-[#e5e7eb]'
                        }`} />
                        <p className={`text-[10px] ${
                          isPopulated ? 'text-[#72777e]' : 'text-[#d6d8db]'
                        }`}>
                          {field}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Current Stage */}
      <div className="pt-2 border-t border-[#f0f0f0]">
        <p className="text-[12px] text-[#72777e]">{stages[currentStageIndex].label}</p>
      </div>

      <style>{`
        @keyframes flowRight {
          0% {
            transform: translateX(-20px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(20px);
            opacity: 0;
          }
        }
        
        .arrow-flow {
          animation: flowRight 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
