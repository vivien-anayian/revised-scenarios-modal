import { useState, useEffect } from 'react';
import { ProgressOptionA } from './progress/ProgressOptionA';
import { ProgressOptionB } from './progress/ProgressOptionB';
import { ProgressOptionC } from './progress/ProgressOptionC';
import { ProgressOptionD } from './progress/ProgressOptionD';
import { X } from 'lucide-react';
import Frame2705 from '../imports/Frame2705';

interface ProgressScreenProps {
  fileName: string;
  onCancel: () => void;
}

export interface ProgressStage {
  id: number;
  label: string;
  minProgress: number;
  maxProgress: number;
}

export const stages: ProgressStage[] = [
  { id: 1, label: 'Uploading document', minProgress: 0, maxProgress: 15 },
  { id: 2, label: 'Preparing file for AI extraction', minProgress: 15, maxProgress: 25 },
  { id: 3, label: 'Extraction could take up to a minute', minProgress: 25, maxProgress: 35 },
  { id: 4, label: 'Generating term details, rent structure and other income', minProgress: 35, maxProgress: 55 },
  { id: 5, label: 'Generating expenses, recoveries and costs', minProgress: 55, maxProgress: 75 },
  { id: 6, label: 'Generating options and rights', minProgress: 75, maxProgress: 90 },
  { id: 7, label: 'Finalizing', minProgress: 90, maxProgress: 100 },
];

export function ProgressScreen({ fileName, onCancel }: ProgressScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowResult(true), 500);
          return 100;
        }
        return prev + 0.5; // Slower progress for demonstration
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentStage = stages.findIndex(
      (stage) => progress >= stage.minProgress && progress < stage.maxProgress
    );
    if (currentStage !== -1) {
      setCurrentStageIndex(currentStage);
    } else if (progress >= 100) {
      setCurrentStageIndex(stages.length - 1);
    }
  }, [progress]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-[#e5e7eb] p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[#1d1e20] mb-1">Processing document</h2>
            <p className="text-[#72777e] text-[14px]">{fileName}</p>
          </div>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-[#f5f6f7] rounded-lg transition-colors text-[#72777e] hover:text-[#1d1e20]"
            aria-label="Cancel upload"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress Options Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Option A: Live Document Scanner */}
        <div className="bg-white rounded-lg shadow-sm border border-[#e5e7eb] p-6">
          <div className="mb-4 pb-3 border-b border-[#f0f0f0]">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#72777e] text-[11px] bg-[#f5f6f7] px-1.5 py-0.5 rounded">OPTION A</span>
              <h4 className="text-[#1d1e20] text-[14px]">Live Document Scanner</h4>
            </div>
            <p className="text-[#72777e] text-[12px]">Watch AI scan & extract data in real-time</p>
          </div>
          <ProgressOptionA 
            progress={progress} 
            currentStage={stages[currentStageIndex]} 
          />
        </div>

        {/* Option B: Deal Pipeline Builder */}
        <div className="bg-white rounded-lg shadow-sm border border-[#e5e7eb] p-6">
          <div className="mb-4 pb-3 border-b border-[#f0f0f0]">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#72777e] text-[11px] bg-[#f5f6f7] px-1.5 py-0.5 rounded">OPTION B</span>
              <h4 className="text-[#1d1e20] text-[14px]">Deal Pipeline Builder</h4>
            </div>
            <p className="text-[#72777e] text-[12px]">Building construction metaphor</p>
          </div>
          <ProgressOptionB 
            progress={progress} 
            currentStage={stages[currentStageIndex]} 
          />
        </div>

        {/* Option C: Data Flow Visualization */}
        <div className="bg-white rounded-lg shadow-sm border border-[#e5e7eb] p-6">
          <div className="mb-4 pb-3 border-b border-[#f0f0f0]">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#72777e] text-[11px] bg-[#f5f6f7] px-1.5 py-0.5 rounded">OPTION C</span>
              <h4 className="text-[#1d1e20] text-[14px]">Data Flow Visualization</h4>
            </div>
            <p className="text-[#72777e] text-[12px]">Split view: document → form fields</p>
          </div>
          <ProgressOptionC 
            progress={progress} 
            currentStageIndex={currentStageIndex} 
            stages={stages}
          />
        </div>

        {/* Option D: Smart Insights Feed */}
        <div className="bg-white rounded-lg shadow-sm border border-[#e5e7eb] p-6">
          <div className="mb-4 pb-3 border-b border-[#f0f0f0]">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#72777e] text-[11px] bg-[#f5f6f7] px-1.5 py-0.5 rounded">OPTION D</span>
              <h4 className="text-[#1d1e20] text-[14px]">Smart Insights Feed</h4>
            </div>
            <p className="text-[#72777e] text-[12px]">Real-time activity log of AI discoveries</p>
          </div>
          <ProgressOptionD 
            progress={progress} 
            currentStage={stages[currentStageIndex]} 
          />
        </div>
      </div>

      {/* Result Screen - Shows when complete */}
      {showResult && (
        <div className="bg-white rounded-lg shadow-sm border border-[#e5e7eb] p-6 animate-fadeIn">
          <div className="mb-4 pb-4 border-b border-[#f0f0f0]">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-full bg-[#009696] flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-[#1d1e20]">Processing Complete</h3>
            </div>
            <p className="text-[#72777e] text-[14px]">Your document has been processed and the form is ready</p>
          </div>
          <div className="border border-[#e5e7eb] rounded-lg overflow-hidden">
            <Frame2705 />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}