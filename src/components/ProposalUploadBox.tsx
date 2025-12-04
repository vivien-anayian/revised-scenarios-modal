import { useState, useRef } from 'react';
import uploadIcon from 'figma:asset/62d004828f18c84cb040a5e8733eb7a4fc50c442.png';
import { SparklesIcon } from './SparklesIcon';
import { Sparkles as LucideSparkles } from 'lucide-react';

interface ProposalUploadBoxProps {
  onComplete: (fileName: string) => void;
}

type UploadState = 'idle' | 'processing';

const processingStages = [
  { label: 'Uploading document', progress: 0 },
  { label: 'Preparing file for AI extraction', progress: 15 },
  { label: 'Extraction could take up to a minute', progress: 25 },
  { label: 'Generating term details, rent structure and other income', progress: 35 },
  { label: 'Generating expenses, recoveries and costs', progress: 55 },
  { label: 'Generating options and rights', progress: 75 },
  { label: 'Finalizing', progress: 90 },
];

export function ProposalUploadBox({ onComplete }: ProposalUploadBoxProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [progress, setProgress] = useState(0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [_fileName, setFileName] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    if (uploadState === 'idle' && !isDragging) {
      setIsDragging(true);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (uploadState === 'idle') {
      setIsDragging(true);
      // Track cursor position relative to drop zone
      if (dropZoneRef.current) {
        const rect = dropZoneRef.current.getBoundingClientRect();
        setCursorPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    // Only set isDragging to false if we're actually leaving the container
    // (not just moving to a child element)
    const relatedTarget = e.relatedTarget as Node | null;
    if (!relatedTarget || !e.currentTarget.contains(relatedTarget)) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (uploadState === 'idle') {
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        setShowConfetti(true);
        // Reset confetti after animation completes
        setTimeout(() => setShowConfetti(false), 1000);
        processFile(files[0]);
      }
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const processFile = (file: File) => {
    setFileName(file.name);
    setUploadState('processing');
    setProgress(0);
    setCurrentStageIndex(0);

    // Slower processing to show all stages
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 0.3; // Even slower increment
      setProgress(currentProgress);
      
      // Update stage based on progress
      const stageIndex = processingStages.findIndex((stage, idx) => {
        const nextStage = processingStages[idx + 1];
        return currentProgress >= stage.progress && (!nextStage || currentProgress < nextStage.progress);
      });
      
      if (stageIndex !== -1) {
        setCurrentStageIndex(stageIndex);
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setUploadState('idle');
          onComplete(file.name);
        }, 500);
      }
    }, 50); // Slower interval
  };

  const handleClick = () => {
    if (uploadState === 'idle') {
      fileInputRef.current?.click();
    }
  };

  // Reset function for future use
  // const handleReset = () => {
  //   setUploadState('idle');
  //   setProgress(0);
  //   setCurrentStageIndex(0);
  //   setFileName('');
  // };

  return (
    <div className="w-full">
      {/* Proposal AI Header - Above Drop Area */}
      {uploadState === 'idle' && (
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2 justify-center">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0 w-[16.8px] h-[16.8px] animate-[scaleBurst_1.5s_cubic-bezier(0.34,1.56,0.64,1)_3] -ml-6">
                <SparklesIcon />
              </div>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[20px]">Proposal AI</span>
            </div>
            <div className="bg-[#ebebff] px-[8px] py-[0px] rounded-[4px] pt-[1px] pr-[8px] pb-[3px] pl-[8px] m-[0px]">
              <span className="font-['Inter:Regular',sans-serif] leading-[14px] text-[#1d1e20] text-[10px]">Beta</span>
            </div>
          </div>

          <p className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#1d1e20] text-[14px] text-center">
            Drag and drop or upload your LOI to auto-fill the proposal.
          </p>
        </div>
      )}

      {/* Upload Box */}
      <div 
        ref={dropZoneRef}
        className={`relative border-2 border-dashed rounded-[16px] overflow-hidden transition-transform duration-300 ease-out ${
          uploadState === 'idle'
            ? isDragging
              ? 'border-[#c928ff] scale-[1.05]'
              : 'border-[#d6a6ff] hover:border-[#c928ff]'
            : 'border-[#d6d8db] bg-white'
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {/* Confetti Particles */}
        {showConfetti && (
          <>
            <div className="confetti-particle confetti-1" style={{ position: 'absolute', width: '8px', height: '8px', background: '#c928ff', borderRadius: '50%' }} />
            <div className="confetti-particle confetti-2" style={{ position: 'absolute', width: '6px', height: '6px', background: '#8b28ff', borderRadius: '50%' }} />
            <div className="confetti-particle confetti-3" style={{ position: 'absolute', width: '8px', height: '8px', background: 'white', borderRadius: '50%' }} />
            <div className="confetti-particle confetti-4" style={{ position: 'absolute', width: '7px', height: '7px', background: '#c928ff', borderRadius: '50%' }} />
            <div className="confetti-particle confetti-5" style={{ position: 'absolute', width: '6px', height: '6px', background: '#d6a6ff', borderRadius: '50%' }} />
            <div className="confetti-particle confetti-6" style={{ position: 'absolute', width: '8px', height: '8px', background: 'white', borderRadius: '50%' }} />
            <div className="confetti-particle confetti-7" style={{ position: 'absolute', width: '7px', height: '7px', background: '#8b28ff', borderRadius: '50%' }} />
            <div className="confetti-particle confetti-8" style={{ position: 'absolute', width: '6px', height: '6px', background: '#c928ff', borderRadius: '50%' }} />
            <div className="confetti-particle confetti-9" style={{ position: 'absolute', width: '8px', height: '8px', background: '#d6a6ff', borderRadius: '50%' }} />
            <div className="confetti-particle confetti-10" style={{ position: 'absolute', width: '7px', height: '7px', background: 'white', borderRadius: '50%' }} />
            <div className="confetti-particle confetti-11" style={{ position: 'absolute', width: '6px', height: '6px', background: '#8b28ff', borderRadius: '50%' }} />
            <div className="confetti-particle confetti-12" style={{ position: 'absolute', width: '8px', height: '8px', background: '#c928ff', borderRadius: '50%' }} />
          </>
        )}

        {/* Floating LOI indicator near cursor */}
        {uploadState === 'idle' && isDragging && (
          <div 
            className="absolute pointer-events-none z-50"
            style={{ 
              left: cursorPos.x - 24 - 48,  // 24px left of cursor, minus icon width (48px)
              top: cursorPos.y - 8 - 60,    // 8px above cursor, minus icon height (60px)
              filter: 'drop-shadow(0 4px 12px rgba(201, 40, 255, 0.5))'
            }}
          >
            <svg width="48" height="60" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="loiCursorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#c928ff', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#8b28ff', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M8 2C6.89543 2 6 2.89543 6 4V44C6 45.1046 6.89543 46 8 46H30C31.1046 46 32 45.1046 32 44V12.4142C32 11.8839 31.7893 11.3757 31.4142 11.0007L23.5858 3.17157C23.2107 2.79643 22.702 2.58579 22.1716 2.58579L8 2Z" fill="url(#loiCursorGradient)" stroke="#8b28ff" strokeWidth="1.5"/>
              <path d="M23 2.58579V11C23 12.1046 23.8954 13 25 13H32" fill="#a028d0" stroke="#8b28ff" strokeWidth="1.5"/>
              <text x="19" y="30" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="white" textAnchor="middle">LOI</text>
            </svg>
          </div>
        )}

        {/* Animated gradient background layer */}
        {uploadState === 'idle' && (
          <div 
            className={`animated-gradient-bg absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
              isDragging ? 'opacity-100' : 'opacity-0 hover:opacity-100'
            }`}
            style={{ pointerEvents: 'none' }}
          />
        )}
        
        {/* Content layer */}
        <div className="relative">
          <div className="px-[32px] pt-[24px] pb-[32px] pr-[32px] pl-[32px] py-[24px]">
            {uploadState === 'idle' && (
              <>
                {/* Animated Upload Indicator */}
                <div className="relative h-20 flex items-center justify-center mt-[0px] mr-[0px] mb-[16px] ml-[0px]">
                  {/* Animated LOI document flying in - on top of everything */}
                  <div className="doc-float-in absolute z-20">
                    <svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="loiGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#c928ff', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#8b28ff', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      {/* Document shape */}
                      <path d="M8 2C6.89543 2 6 2.89543 6 4V44C6 45.1046 6.89543 46 8 46H30C31.1046 46 32 45.1046 32 44V12.4142C32 11.8839 31.7893 11.3757 31.4142 11.0007L23.5858 3.17157C23.2107 2.79643 22.702 2.58579 22.1716 2.58579L8 2Z" fill="url(#loiGradient)" stroke="#8b28ff" strokeWidth="1.5"/>
                      {/* Corner fold */}
                      <path d="M23 2.58579V11C23 12.1046 23.8954 13 25 13H32" fill="#a028d0" stroke="#8b28ff" strokeWidth="1.5"/>
                      {/* LOI text */}
                      <text x="19" y="30" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="white" textAnchor="middle">LOI</text>
                    </svg>
                  </div>
                  
                  {/* Target box - landscape rectangle with synced gradient background */}
                  <div className={`target-box-animation relative w-[84px] h-12 border-2 border-dashed rounded-lg flex items-center justify-center overflow-hidden ${
                    isDragging ? 'border-[#c928ff] scale-[1.2]' : ''
                  }`}
                  style={{ transition: isDragging ? 'all 0.3s ease-out' : 'none' }}
                  >
                    {/* Gradient background layer - synced with file animation */}
                    <div 
                      className="target-hover-gradient absolute inset-0"
                      style={{ pointerEvents: 'none' }}
                    />
                    
                    {/* Icon on top of gradient */}
                    <svg className="w-6 h-6 text-[#b4b7bc] relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                </div>

                {/* Upload Button with Continuous Animations */}
                <button className="animated-upload-button px-8 py-4 rounded-[8px] flex items-center gap-3 mx-auto">
                  <img src={uploadIcon} alt="Upload" className="w-[24px] h-[24px]" />
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] text-white text-[20px]">Upload to start</span>
                </button>
              </>
            )}

            {uploadState === 'processing' && (
              <div className="space-y-4 py-4">
                {/* Document Icon with Scanning Animation */}
                <div className="flex items-center justify-center gap-4">
                  {/* Animated Document Icon */}
                  <div className="relative w-16 h-20">
                    {/* Document base */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c928ff]/10 to-[#8B28FF]/10 rounded-lg border-2 border-[#c928ff]/30">
                      {/* Document lines */}
                      <div className="absolute top-3 left-3 right-3 space-y-1.5">
                        <div className="h-1 bg-[#c928ff]/20 rounded" />
                        <div className="h-1 bg-[#c928ff]/20 rounded w-4/5" />
                        <div className="h-1 bg-[#c928ff]/20 rounded" />
                        <div className="h-1 bg-[#c928ff]/20 rounded w-3/5" />
                      </div>
                      
                      {/* Scanning line animation */}
                      <div className="scanning-line absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c928ff] to-transparent" />
                      
                      {/* Sparkle particles */}
                      <div className="sparkle-particle sparkle-1 absolute opacity-0" style={{ width: '20px', height: '20px', top: '35%', right: '-15px' }}>
                        <LucideSparkles className="w-full h-full text-[#8822AA]" />
                      </div>
                      <div className="sparkle-particle sparkle-2 absolute opacity-0" style={{ width: '28px', height: '28px', top: '55%', right: '-20px', animationDelay: '1.2s' }}>
                        <LucideSparkles className="w-full h-full text-[#8822AA]" />
                      </div>
                      <div className="sparkle-particle sparkle-3 absolute opacity-0" style={{ width: '24px', height: '24px', top: '75%', right: '-8px', animationDelay: '2.4s' }}>
                        <LucideSparkles className="w-full h-full text-[#8822AA]" />
                      </div>
                    </div>
                    
                    {/* Percentage badge */}
                    <div className="absolute -top-2 -right-2 bg-gradient-to-br from-[#c928ff] to-[#8B28FF] rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[10px]">
                        {Math.round(progress)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stage text with animated ellipsis */}
                <div className="text-center">
                  <p className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#1d1e20] text-[14px]">
                    {processingStages[currentStageIndex].label}
                    <span className="chatgpt-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileInput}
        className="hidden"
      />

      <style>{`
        @keyframes floatIn {
          0% {
            transform: translate(-120px, -20px) rotate(-8deg) scale(0.9);
            opacity: 0;
          }
          25% {
            transform: translate(-60px, -10px) rotate(-4deg) scale(0.95);
            opacity: 0.8;
          }
          40% {
            transform: translate(-10px, -2px) rotate(-1deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
          70% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
          85% {
            transform: translate(0, 0) rotate(0deg) scale(0.5);
            opacity: 0.5;
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(0);
            opacity: 0;
          }
        }
        
        .doc-float-in {
          animation: floatIn 5s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Button continuous animations - pulse + shimmer + glow */
        @keyframes buttonPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }

        @keyframes buttonGlow {
          0%, 100% {
            box-shadow: 0 4px 12px rgba(201, 40, 255, 0.3), 0 0 0 0 rgba(201, 40, 255, 0);
          }
          50% {
            box-shadow: 0 6px 20px rgba(201, 40, 255, 0.5), 0 0 20px 4px rgba(201, 40, 255, 0.2);
          }
        }

        .animated-upload-button {
          background: linear-gradient(
            135deg,
            rgba(118,32,205,1) 0%,
            rgba(136,34,170,1) 20%,
            rgba(108,31,133,1) 40%,
            rgba(80,29,97,1) 60%,
            rgba(52,26,60,1) 80%,
            rgba(38,25,42,1) 90%,
            rgba(24,24,24,1) 100%
          );
          background-size: 200% 200%;
          animation: 
            gradientShift 3s ease 5,
            buttonGlow 2s ease-in-out 5;
          transition: transform 0.2s ease;
        }

        .animated-upload-button:hover {
          transform: scale(1.05) !important;
          animation: 
            gradientShift 3s ease 5,
            buttonGlow 2s ease-in-out 5;
        }

        @keyframes gradientBackground {
          0% {
            background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(214, 166, 255, 0.08) 25%, rgba(235, 211, 255, 0.12) 50%, rgba(214, 166, 255, 0.08) 75%, rgba(255, 255, 255, 1) 100%);
            background-position: 0% 50%;
          }
          25% {
            background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(214, 166, 255, 0.15) 25%, rgba(235, 211, 255, 0.22) 50%, rgba(214, 166, 255, 0.15) 75%, rgba(255, 255, 255, 1) 100%);
            background-position: 50% 50%;
          }
          50% {
            background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(201, 40, 255, 0.12) 25%, rgba(214, 166, 255, 0.25) 50%, rgba(201, 40, 255, 0.12) 75%, rgba(255, 255, 255, 1) 100%);
            background-position: 100% 50%;
          }
          75% {
            background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(214, 166, 255, 0.15) 25%, rgba(235, 211, 255, 0.22) 50%, rgba(214, 166, 255, 0.15) 75%, rgba(255, 255, 255, 1) 100%);
            background-position: 50% 50%;
          }
          100% {
            background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(214, 166, 255, 0.08) 25%, rgba(235, 211, 255, 0.12) 50%, rgba(214, 166, 255, 0.08) 75%, rgba(255, 255, 255, 1) 100%);
            background-position: 0% 50%;
          }
        }

        .animated-gradient-bg {
          background-size: 200% 200%;
          animation: gradientBackground 8s ease-in-out infinite;
        }

        /* Synced gradient for target box - appears only when file flies over it */
        /* File animation: 5s cycle, file is at target from 40-70% (2s-3.5s) */
        @keyframes targetGradientSync {
          0% {
            background: transparent;
            opacity: 0;
          }
          35% {
            background: transparent;
            opacity: 0;
          }
          40% {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, rgba(214, 166, 255, 0.08) 25%, rgba(235, 211, 255, 0.12) 50%, rgba(214, 166, 255, 0.08) 75%, rgba(255, 255, 255, 0) 100%);
            opacity: 1;
          }
          50% {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, rgba(201, 40, 255, 0.12) 25%, rgba(214, 166, 255, 0.25) 50%, rgba(201, 40, 255, 0.12) 75%, rgba(255, 255, 255, 0) 100%);
            opacity: 1;
          }
          60% {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, rgba(214, 166, 255, 0.15) 25%, rgba(235, 211, 255, 0.22) 50%, rgba(214, 166, 255, 0.15) 75%, rgba(255, 255, 255, 0) 100%);
            opacity: 1;
          }
          70% {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, rgba(214, 166, 255, 0.08) 25%, rgba(235, 211, 255, 0.12) 50%, rgba(214, 166, 255, 0.08) 75%, rgba(255, 255, 255, 0) 100%);
            opacity: 1;
          }
          75% {
            background: transparent;
            opacity: 0;
          }
          100% {
            background: transparent;
            opacity: 0;
          }
        }

        .target-hover-gradient {
          animation: targetGradientSync 5s ease-in-out infinite;
        }

        /* Target box border color and scale animation - synced with file landing */
        @keyframes targetBoxActivation {
          0% {
            border-color: #d6d8db;
            transform: scale(1);
          }
          35% {
            border-color: #d6d8db;
            transform: scale(1);
          }
          40% {
            border-color: rgba(201, 40, 255, 0.5);
            transform: scale(1.05);
          }
          50% {
            border-color: #c928ff;
            transform: scale(1.2);
          }
          70% {
            border-color: #c928ff;
            transform: scale(1.2);
          }
          75% {
            border-color: rgba(201, 40, 255, 0.5);
            transform: scale(1.1);
          }
          85% {
            border-color: #d6d8db;
            transform: scale(1);
          }
          100% {
            border-color: #d6d8db;
            transform: scale(1);
          }
        }

        .target-box-animation {
          animation: targetBoxActivation 5s ease-in-out infinite;
        }

        /* Scanning line animation */
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

        .scanning-line {
          animation: scan 3.5s ease-in-out infinite;
        }

        /* Sparkle particles animation */
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

        /* ChatGPT-style loading dots - sequential wave animation */
        @keyframes dotPulse {
          0%, 80%, 100% {
            opacity: 0.3;
          }
          40% {
            opacity: 1;
          }
        }

        .chatgpt-dots {
          display: inline-flex;
          gap: 2px;
          margin-left: 2px;
        }

        .chatgpt-dots span {
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #1d1e20;
          animation: dotPulse 1.4s ease-in-out infinite;
        }

        .chatgpt-dots span:nth-child(1) {
          animation-delay: 0s;
        }

        .chatgpt-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .chatgpt-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }

        /* Confetti burst animation */
        @keyframes confettiBurst {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0.5) rotate(720deg);
          }
        }

        .confetti-particle {
          pointer-events: none;
          z-index: 50;
          animation: confettiBurst 0.8s ease-out forwards;
        }

        /* Position each confetti particle at center and define trajectories */
        .confetti-1 {
          top: 50%;
          left: 50%;
          --tx: -80px;
          --ty: -120px;
        }

        .confetti-2 {
          top: 50%;
          left: 50%;
          --tx: 100px;
          --ty: -100px;
          animation-delay: 0.05s;
        }

        .confetti-3 {
          top: 50%;
          left: 50%;
          --tx: -120px;
          --ty: 60px;
          animation-delay: 0.1s;
        }

        .confetti-4 {
          top: 50%;
          left: 50%;
          --tx: 90px;
          --ty: 80px;
          animation-delay: 0.02s;
        }

        .confetti-5 {
          top: 50%;
          left: 50%;
          --tx: 0px;
          --ty: -140px;
          animation-delay: 0.08s;
        }

        .confetti-6 {
          top: 50%;
          left: 50%;
          --tx: -100px;
          --ty: -60px;
          animation-delay: 0.12s;
        }

        .confetti-7 {
          top: 50%;
          left: 50%;
          --tx: 120px;
          --ty: -30px;
          animation-delay: 0.03s;
        }

        .confetti-8 {
          top: 50%;
          left: 50%;
          --tx: -60px;
          --ty: 100px;
          animation-delay: 0.15s;
        }

        .confetti-9 {
          top: 50%;
          left: 50%;
          --tx: 70px;
          --ty: -110px;
          animation-delay: 0.06s;
        }

        .confetti-10 {
          top: 50%;
          left: 50%;
          --tx: -90px;
          --ty: 0px;
          animation-delay: 0.09s;
        }

        .confetti-11 {
          top: 50%;
          left: 50%;
          --tx: 110px;
          --ty: 40px;
          animation-delay: 0.04s;
        }

        .confetti-12 {
          top: 50%;
          left: 50%;
          --tx: -40px;
          --ty: -90px;
          animation-delay: 0.11s;
        }
      `}</style>
    </div>
  );
}