import { ProgressStage } from '../ProgressScreen';
import { Sparkles } from 'lucide-react';

interface ProgressOptionAProps {
  progress: number;
  currentStage: ProgressStage;
}

// Live Document Scanner - Shows AI reading through document
export function ProgressOptionA({ progress, currentStage }: ProgressOptionAProps) {
  const extractedFields = [
    { label: 'Landlord', value: 'ACME Properties LLC', stage: 15 },
    { label: 'Tenant', value: 'TechCorp Inc.', stage: 20 },
    { label: 'Lease Term', value: '60 months', stage: 35 },
    { label: 'Base Rent', value: '$45.00/SF/Year', stage: 45 },
    { label: 'Security Deposit', value: '$125,000', stage: 55 },
    { label: 'TI Allowance', value: '$50/SF', stage: 65 },
    { label: 'Renewal Option', value: '2 x 5 years', stage: 75 },
    { label: 'Free Rent', value: '3 months', stage: 85 },
  ];

  // Scan line position for potential future use
  // const scanLinePosition = Math.min(progress * 3.6, 360);

  return (
    <div className="space-y-4">
      {/* Animated Document Icon with Scanning Effect */}
      <div className="flex items-center justify-center py-4">
        <div className="relative w-16 h-20">
          {/* Document base container */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#c928ff]/10 to-[#8B28FF]/10 rounded-lg border-2 border-[#c928ff]/30">
            
            {/* Document text lines */}
            <div className="absolute top-3 left-3 right-3 space-y-1.5">
              <div className="h-1 bg-[#c928ff]/20 rounded" />
              <div className="h-1 bg-[#c928ff]/20 rounded w-4/5" />
              <div className="h-1 bg-[#c928ff]/20 rounded" />
              <div className="h-1 bg-[#c928ff]/20 rounded w-3/5" />
            </div>
            
            {/* Scanning line - moves top to bottom */}
            <div className="scanning-line absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c928ff] to-transparent" />
            
            {/* Sparkle particles - 3 particles at different positions */}
            <div className="sparkle-particle sparkle-1 absolute" style={{ width: '10px', height: '10px', opacity: 0 }}>
              <Sparkles className="w-full h-full opacity-25 text-[#c928ff]" />
            </div>
            <div className="sparkle-particle sparkle-2 absolute" style={{ width: '10px', height: '10px', opacity: 0 }}>
              <Sparkles className="w-full h-full opacity-25 text-[#c928ff]" />
            </div>
            <div className="sparkle-particle sparkle-3 absolute" style={{ width: '10px', height: '10px', opacity: 0 }}>
              <Sparkles className="w-full h-full opacity-25 text-[#c928ff]" />
            </div>
          </div>
          
          {/* Progress percentage badge */}
          <div className="absolute -top-2 -right-2 bg-gradient-to-br from-[#c928ff] to-[#8B28FF] rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
            <span className="font-['Inter',sans-serif] font-semibold text-white text-[10px]">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Extracted Data Feed */}
      <div className="space-y-1.5 max-h-[180px] overflow-y-auto">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-[#4837b9] animate-pulse" />
          <p className="text-[11px] text-[#72777e]">AI EXTRACTION IN PROGRESS</p>
        </div>
        
        {extractedFields.map((field, index) => {
          const isVisible = progress >= field.stage;
          const isNew = progress >= field.stage && progress < field.stage + 10;
          
          return (
            <div
              key={index}
              className={`flex items-center justify-between p-2 rounded transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              } ${isNew ? 'bg-[#f8f7ff] border border-[#4837b9]/20' : 'bg-[#f8f9fa]'}`}
            >
              <div className="flex items-center gap-2">
                {isNew && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4837b9] animate-pulse" />
                )}
                <p className="text-[11px] text-[#72777e]">{field.label}</p>
              </div>
              <p className="text-[12px] text-[#1d1e20]">{field.value}</p>
            </div>
          );
        })}
      </div>

      {/* Status */}
      <div className="flex items-center justify-between pt-2 border-t border-[#f0f0f0]">
        <p className="text-[12px] text-[#72777e]">{currentStage.label}</p>
        <p className="text-[12px] text-[#1d1e20]">{Math.round(progress)}%</p>
      </div>

      <style>{`
        @keyframes scan {
          0% {
            top: 0;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes sparkle {
          0% {
            opacity: 0;
            transform: scale(0) translateY(0);
          }
          50% {
            opacity: 0.25;
            transform: scale(1) translateY(-8px);
          }
          100% {
            opacity: 0;
            transform: scale(0) translateY(0);
          }
        }

        .scanning-line {
          animation: scan 3.5s ease-in-out infinite;
        }

        .sparkle-particle {
          animation: sparkle 4.5s ease-in-out infinite;
        }

        .sparkle-1 {
          top: 20%;
          right: 10%;
          animation-delay: 0s;
        }

        .sparkle-2 {
          top: 50%;
          right: 15%;
          animation-delay: 1.5s;
        }

        .sparkle-3 {
          top: 70%;
          right: 8%;
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
}
