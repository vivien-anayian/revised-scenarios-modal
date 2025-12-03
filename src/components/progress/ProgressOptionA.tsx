import { ProgressStage } from '../ProgressScreen';

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

  const scanLinePosition = Math.min(progress * 3.6, 360); // Scan line moves across document

  return (
    <div className="space-y-4">
      {/* Document Preview with Scan Line */}
      <div className="relative bg-gradient-to-br from-[#f8f9fa] to-[#f0f1f2] rounded-lg border border-[#e5e7eb] overflow-hidden">
        {/* Document Lines */}
        <div className="p-6 space-y-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex gap-2">
              <div 
                className="h-2 rounded-full bg-[#e5e7eb]"
                style={{ 
                  width: `${Math.random() * 30 + 60}%`,
                  opacity: scanLinePosition > (i * 30) ? 0.3 : 1
                }}
              />
              {Math.random() > 0.3 && (
                <div 
                  className="h-2 rounded-full bg-[#e5e7eb]"
                  style={{ 
                    width: `${Math.random() * 20 + 20}%`,
                    opacity: scanLinePosition > (i * 30) ? 0.3 : 1
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* AI Scan Line */}
        <div 
          className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#4837b9] to-transparent transition-all duration-300"
          style={{ 
            transform: `translateY(${(progress / 100) * 100}%)`,
            opacity: progress < 100 ? 1 : 0
          }}
        >
          <div className="absolute inset-0 bg-[#4837b9] blur-md opacity-50" />
        </div>

        {/* Scanning overlay */}
        {progress < 100 && (
          <div 
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#4837b9]/5 to-transparent transition-all duration-300"
            style={{ height: `${progress}%` }}
          />
        )}
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
    </div>
  );
}
