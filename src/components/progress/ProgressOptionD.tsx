import { ProgressStage } from '../ProgressScreen';
import { CheckCircle2, Clock } from 'lucide-react';

interface ProgressOptionDProps {
  progress: number;
  currentStage: ProgressStage;
}

// Smart Insights Feed - Activity log of AI discoveries
export function ProgressOptionD({ progress, currentStage: _currentStage }: ProgressOptionDProps) {
  const insights = [
    { time: '0:02', message: 'Document uploaded successfully', detail: 'LOI_TechCorp_Lease.pdf', stage: 5, type: 'success' },
    { time: '0:03', message: 'Analyzing document structure', detail: '12 pages • 4,521 words', stage: 15, type: 'info' },
    { time: '0:05', message: 'Found parties', detail: 'Landlord: ACME Properties LLC', stage: 20, type: 'data' },
    { time: '0:05', message: 'Found parties', detail: 'Tenant: TechCorp Inc.', stage: 22, type: 'data' },
    { time: '0:08', message: 'Extracted lease term', detail: '60 months (5 years)', stage: 35, type: 'data' },
    { time: '0:09', message: 'Detected rent structure', detail: 'Base: $45.00/SF/Year', stage: 40, type: 'data' },
    { time: '0:10', message: 'Found escalation clause', detail: '3% annual increase', stage: 45, type: 'data' },
    { time: '0:12', message: 'Identified rent abatement', detail: '3 months free rent', stage: 50, type: 'data' },
    { time: '0:14', message: 'Extracted security deposit', detail: '$125,000 (5 months)', stage: 55, type: 'data' },
    { time: '0:16', message: 'Found TI allowance', detail: '$50/SF tenant improvements', stage: 60, type: 'data' },
    { time: '0:18', message: 'Parsing operating expenses', detail: 'CAM, taxes, insurance included', stage: 65, type: 'data' },
    { time: '0:20', message: 'Identified expense caps', detail: '5% annual cap on controllable expenses', stage: 70, type: 'data' },
    { time: '0:22', message: 'Found renewal option', detail: '2 × 5-year renewal rights', stage: 75, type: 'data' },
    { time: '0:24', message: 'Detected expansion rights', detail: 'ROFO on adjacent 5,000 SF', stage: 80, type: 'data' },
    { time: '0:26', message: 'Identified termination clause', detail: 'Early termination after year 3', stage: 85, type: 'data' },
    { time: '0:28', message: 'Cross-checking all values', detail: 'Validating 47 extracted fields', stage: 92, type: 'info' },
    { time: '0:30', message: 'Processing complete', detail: 'All fields populated successfully', stage: 100, type: 'success' },
  ];

  const visibleInsights = insights.filter(insight => progress >= insight.stage);
  const currentInsight = visibleInsights[visibleInsights.length - 1];

  return (
    <div className="space-y-4">
      {/* Header with current activity */}
      <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#f8f7ff] to-[#faf9ff] border border-[#4837b9]/10">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          progress >= 100 ? 'bg-[#009696]' : 'bg-[#4837b9]'
        }`}>
          {progress >= 100 ? (
            <CheckCircle2 className="w-5 h-5 text-white" />
          ) : (
            <Clock className="w-5 h-5 text-white animate-pulse" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] text-[#72777e] mb-0.5">
            {progress >= 100 ? 'COMPLETED' : 'CURRENT ACTIVITY'}
          </p>
          <p className="text-[13px] text-[#1d1e20] truncate">
            {currentInsight?.message || 'Starting...'}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[18px] text-[#1d1e20]">{Math.round(progress)}%</p>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="space-y-0 max-h-[280px] overflow-y-auto custom-scrollbar">
        <div className="space-y-0.5">
          {visibleInsights.map((insight, index) => {
            const isLatest = index === visibleInsights.length - 1 && progress < 100;
            
            return (
              <div
                key={index}
                className={`group flex items-start gap-3 p-2.5 rounded-lg transition-all duration-300 ${
                  isLatest 
                    ? 'bg-[#f8f7ff] scale-[1.02] shadow-sm' 
                    : 'hover:bg-[#fafbfc]'
                }`}
                style={{
                  animation: isLatest ? 'slideIn 0.3s ease-out' : 'none'
                }}
              >
                {/* Timeline dot */}
                <div className="relative flex flex-col items-center pt-1">
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      insight.type === 'success'
                        ? 'bg-[#009696]'
                        : insight.type === 'data'
                          ? 'bg-[#4837b9]'
                          : 'bg-[#72777e]'
                    } ${isLatest ? 'scale-150 ring-4 ring-[#4837b9]/10' : ''}`}
                  />
                  {index < visibleInsights.length - 1 && (
                    <div className="w-[1px] h-full bg-[#e5e7eb] mt-1" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <p className="text-[10px] text-[#b4b7bc] font-mono">{insight.time}</p>
                    <p className={`text-[12px] ${
                      insight.type === 'success' 
                        ? 'text-[#009696]' 
                        : isLatest 
                          ? 'text-[#1d1e20]' 
                          : 'text-[#72777e]'
                    }`}>
                      {insight.message}
                    </p>
                  </div>
                  <p className={`text-[11px] transition-colors ${
                    isLatest ? 'text-[#4837b9]' : 'text-[#b4b7bc]'
                  }`}>
                    {insight.detail}
                  </p>
                </div>

                {/* Check icon for completed items */}
                {!isLatest && insight.type === 'data' && (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity pt-1">
                    <div className="w-4 h-4 rounded-full bg-[#009696]/10 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-[#009696]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Loading indicator for next item */}
        {progress < 100 && (
          <div className="flex items-center gap-3 p-2.5 opacity-30">
            <div className="w-2 h-2 rounded-full bg-[#e5e7eb] animate-pulse" />
            <div className="flex-1">
              <div className="h-3 bg-[#f0f0f0] rounded w-3/4 animate-pulse" />
            </div>
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="flex items-center justify-between pt-3 border-t border-[#f0f0f0]">
        <p className="text-[11px] text-[#72777e]">
          {visibleInsights.length} of {insights.length} steps complete
        </p>
        <p className="text-[11px] text-[#72777e]">
          ~{Math.max(0, Math.round((100 - progress) * 0.3))}s remaining
        </p>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f0f0f0;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d6d8db;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #b4b7bc;
        }
      `}</style>
    </div>
  );
}
