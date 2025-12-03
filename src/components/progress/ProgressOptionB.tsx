import { ProgressStage } from '../ProgressScreen';
import { Building2, FileText, DollarSign, FileCheck, Sparkles } from 'lucide-react';

interface ProgressOptionBProps {
  progress: number;
  currentStage: ProgressStage;
}

// Real Estate Deal Pipeline - Building construction metaphor
export function ProgressOptionB({ progress, currentStage: _currentStage }: ProgressOptionBProps) {
  const dealStages = [
    { icon: FileText, label: 'Document Review', threshold: 0, color: '#72777e' },
    { icon: Building2, label: 'Property Analysis', threshold: 20, color: '#4837b9' },
    { icon: DollarSign, label: 'Financial Terms', threshold: 40, color: '#8B28FF' },
    { icon: FileCheck, label: 'Legal Provisions', threshold: 60, color: '#4837b9' },
    { icon: Sparkles, label: 'Deal Finalization', threshold: 80, color: '#72777e' },
  ];

  const buildingHeight = 240;

  return (
    <div className="space-y-6">
      {/* Building Construction Visual */}
      <div className="relative">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div style={{
            backgroundImage: 'linear-gradient(#4837b9 1px, transparent 1px), linear-gradient(90deg, #4837b9 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            height: '100%'
          }} />
        </div>

        {/* Building Structure */}
        <div className="relative flex items-end justify-center gap-4 h-[240px] px-8">
          {/* Foundation - Always visible */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#e5e7eb] via-[#d6d8db] to-[#e5e7eb] rounded-t" />
          
          {/* Building Floors */}
          <div className="relative w-32">
            {/* Building base */}
            <div className="absolute bottom-2 left-0 right-0 space-y-1">
              {Array.from({ length: 5 }).map((_, index) => {
                const floorThreshold = (index + 1) * 20;
                const isBuilt = progress >= floorThreshold;
                const isBuilding = progress >= floorThreshold - 10 && progress < floorThreshold;
                
                return (
                  <div
                    key={index}
                    className={`h-9 rounded transition-all duration-500 ${
                      isBuilt 
                        ? 'opacity-100 scale-100' 
                        : isBuilding 
                          ? 'opacity-60 scale-95' 
                          : 'opacity-20 scale-90'
                    }`}
                    style={{
                      background: isBuilt || isBuilding
                        ? 'linear-gradient(135deg, #4837b9 0%, #8B28FF 100%)'
                        : '#f0f0f0',
                      boxShadow: isBuilt ? '0 2px 8px rgba(72, 55, 185, 0.2)' : 'none'
                    }}
                  >
                    {/* Windows */}
                    <div className="flex items-center justify-around h-full px-2">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded-sm transition-all duration-300 ${
                            isBuilt ? 'bg-white/30' : 'bg-[#d6d8db]'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Construction Crane (when active) */}
            {progress < 100 && (
              <div 
                className="absolute -right-8 transition-all duration-700"
                style={{ 
                  bottom: `${(progress / 100) * buildingHeight}px`,
                }}
              >
                <div className="relative">
                  <div className="w-12 h-0.5 bg-[#e17605]" />
                  <div className="absolute left-0 top-0 w-0.5 h-8 bg-[#e17605]" />
                  <div className="absolute left-0 bottom-0 w-2 h-2 bg-[#e17605] rounded-full animate-pulse" />
                </div>
              </div>
            )}

            {/* Completion Star */}
            {progress >= 100 && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <Sparkles className="w-6 h-6 text-[#8B28FF]" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Deal Stages Timeline */}
      <div className="space-y-2">
        {dealStages.map((stage, index) => {
          const Icon = stage.icon;
          const isActive = progress >= stage.threshold;
          const isCurrent = progress >= stage.threshold && 
                           (index === dealStages.length - 1 || progress < dealStages[index + 1].threshold);
          
          return (
            <div
              key={index}
              className={`flex items-center gap-3 p-2.5 rounded-lg transition-all duration-300 ${
                isCurrent ? 'bg-[#f8f7ff] border border-[#4837b9]/20' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-br from-[#4837b9] to-[#8B28FF]' 
                    : 'bg-[#f0f0f0]'
                }`}
              >
                <Icon 
                  className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#b4b7bc]'}`} 
                  strokeWidth={2}
                />
              </div>
              <div className="flex-1">
                <p className={`text-[12px] ${isActive ? 'text-[#1d1e20]' : 'text-[#b4b7bc]'}`}>
                  {stage.label}
                </p>
              </div>
              {isCurrent && (
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4837b9] animate-pulse" />
                  <p className="text-[11px] text-[#4837b9]">Processing</p>
                </div>
              )}
              {isActive && !isCurrent && (
                <div className="w-4 h-4 rounded-full bg-[#009696] flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress indicator */}
      <div className="flex items-center justify-between pt-2 border-t border-[#f0f0f0]">
        <p className="text-[12px] text-[#72777e]">Building your proposal</p>
        <p className="text-[13px] text-[#1d1e20]">{Math.round(progress)}% Complete</p>
      </div>
    </div>
  );
}
