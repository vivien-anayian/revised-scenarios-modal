import { useState, useRef } from 'react';
import svgPaths from '../imports/svg-5mcx9rbt7a';

interface UploadBoxVariation2Props {
  onFileSelect: (file: File) => void;
}

type UploadState = 'idle' | 'processing' | 'complete';

export function UploadBoxVariation2({ onFileSelect }: UploadBoxVariation2Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [progress, setProgress] = useState(0);
  const [extractedCount, setExtractedCount] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (uploadState === 'idle') {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (uploadState === 'idle') {
      const files = e.dataTransfer.files;
      if (files.length > 0) {
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
    setUploadState('processing');
    setProgress(0);
    setExtractedCount(0);

    // Simulate processing
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);
      
      // Increment extracted fields count
      if (currentProgress % 3 === 0 && extractedCount < 47) {
        setExtractedCount(prev => Math.min(prev + 1, 47));
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setExtractedCount(47);
        setTimeout(() => {
          setUploadState('complete');
          onFileSelect(file);
        }, 500);
      }
    }, 30);
  };

  const handleClick = () => {
    if (uploadState === 'idle') {
      fileInputRef.current?.click();
    }
  };

  const handleReset = () => {
    setUploadState('idle');
    setProgress(0);
    setExtractedCount(0);
  };

  return (
    <div className="w-full">
      {/* AI Badge */}
      <div className="mb-3 flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <div className="relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="AI Stars">
                <g id="Vector">
                  <path d={svgPaths.p392ab080} fill="url(#paint0_linear_v2)" />
                  <path d={svgPaths.p37a0ec40} fill="url(#paint1_linear_v2)" />
                  <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_v2)" />
                </g>
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_v2" x1="1.20002" x2="14.8" y1="7.66666" y2="7.66666">
                  <stop stopColor="#C928FF" />
                  <stop offset="0.33" stopColor="#8B28FF" />
                  <stop offset="0.66" stopColor="#5528FF" />
                  <stop offset="1" stopColor="#181818" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_v2" x1="1.20002" x2="14.8" y1="7.66666" y2="7.66666">
                  <stop stopColor="#C928FF" />
                  <stop offset="0.33" stopColor="#8B28FF" />
                  <stop offset="0.66" stopColor="#5528FF" />
                  <stop offset="1" stopColor="#181818" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_v2" x1="1.20002" x2="14.8" y1="7.66666" y2="7.66666">
                  <stop stopColor="#C928FF" />
                  <stop offset="0.33" stopColor="#8B28FF" />
                  <stop offset="0.66" stopColor="#5528FF" />
                  <stop offset="1" stopColor="#181818" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[14px]">Proposal AI</span>
        </div>
        <div className="bg-[#ebebff] px-[8px] py-[3px] rounded-[4px]">
          <span className="font-['Inter:Regular',sans-serif] leading-[14px] text-[#1d1e20] text-[10px]">Beta</span>
        </div>
      </div>

      <p className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#1d1e20] text-[14px] mb-3">
        Proposal AI reads your LOI and automatically fills in the form.
      </p>

      {/* Upload Box */}
      <div 
        className={`relative border-2 border-dashed rounded-[16px] transition-all duration-300 ${
          uploadState === 'idle'
            ? isDragging
              ? 'border-[#c928ff] bg-[#faf9ff]'
              : 'border-[#c928ff] bg-white hover:bg-[#faf9ff]'
            : 'border-[#d6d8db] bg-white'
        } ${uploadState === 'idle' ? 'cursor-pointer' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <div className="p-4">
          {uploadState === 'idle' && (
            <>
              {/* Animated Upload Indicator */}
              <div className="relative mb-4 h-16 flex items-center justify-center">
                {/* Animated document flying in */}
                <div className="doc-float-in absolute">
                  <div className="w-12 h-16 bg-gradient-to-br from-[#c928ff]/20 to-[#8B28FF]/20 rounded border-2 border-[#c928ff] flex items-center justify-center transform rotate-[-5deg]">
                    <svg className="w-6 h-6 text-[#c928ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Target box */}
                <div className={`w-16 h-16 border-2 border-dashed rounded-lg flex items-center justify-center transition-all ${
                  isDragging ? 'border-[#c928ff] bg-[#c928ff]/10 scale-110' : 'border-[#d6d8db]'
                }`}>
                  <svg className="w-8 h-8 text-[#b4b7bc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
              </div>

              {/* Upload Button */}
              <button className="bg-[#4837b9] hover:bg-[#5d4ac9] transition-colors px-3 py-1.5 rounded flex items-center gap-1.5 mx-auto mb-3">
                <div className="relative shrink-0 size-[14px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <g clipPath="url(#clip0_upload_v2)">
                      <path d={svgPaths.pbbca980} fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_upload_v2">
                        <rect fill="white" height="14" width="14" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="font-['Inter:Regular',sans-serif] leading-[20px] text-white text-[14px]">Click to upload</span>
              </button>

              <p className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#4837b9] text-[14px] text-center mb-2">
                or drag and drop
              </p>

              <p className="font-['Inter:Regular',sans-serif] leading-[16px] text-[#b4b7bc] text-[12px] text-center">
                PDF, DOC, DOCX • Max 10MB
              </p>
            </>
          )}

          {uploadState === 'processing' && (
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded flex items-center justify-center bg-gradient-to-br from-[#c928ff]/10 to-[#8B28FF]/10 border border-[#c928ff]/30 flex-shrink-0">
                  <div className="relative shrink-0 size-[14px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="AI Stars">
                        <g id="Vector">
                          <path d={svgPaths.p392ab080} fill="url(#paint0_processing)" />
                          <path d={svgPaths.p37a0ec40} fill="url(#paint1_processing)" />
                          <path d={svgPaths.p1f950c80} fill="url(#paint2_processing)" />
                        </g>
                      </g>
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_processing" x1="1.20002" x2="14.8" y1="7.66666" y2="7.66666">
                          <stop stopColor="#C928FF" />
                          <stop offset="0.33" stopColor="#8B28FF" />
                          <stop offset="0.66" stopColor="#5528FF" />
                          <stop offset="1" stopColor="#181818" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_processing" x1="1.20002" x2="14.8" y1="7.66666" y2="7.66666">
                          <stop stopColor="#C928FF" />
                          <stop offset="0.33" stopColor="#8B28FF" />
                          <stop offset="0.66" stopColor="#5528FF" />
                          <stop offset="1" stopColor="#181818" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint2_processing" x1="1.20002" x2="14.8" y1="7.66666" y2="7.66666">
                          <stop stopColor="#C928FF" />
                          <stop offset="0.33" stopColor="#8B28FF" />
                          <stop offset="0.66" stopColor="#5528FF" />
                          <stop offset="1" stopColor="#181818" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between mb-1">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[13px]">
                      Extracting proposal data
                    </p>
                    <span className="font-['Inter:Regular',sans-serif] leading-[16px] text-[#72777e] text-[11px]">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-[#f0f0f0] rounded-full h-1.5 overflow-hidden mb-2">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${progress}%`,
                        background: 'linear-gradient(90deg, #C928FF 0%, #8B28FF 50%, #5528FF 100%)'
                      }}
                    />
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="text-[#72777e]">
                      {extractedCount} of 47 fields
                    </span>
                    <span className="text-[#b4b7bc]">•</span>
                    <span className="text-[#72777e]">
                      ~{Math.max(0, Math.round((100 - progress) * 0.3))}s left
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {uploadState === 'complete' && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#009696] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[13px] mb-0.5">
                  47 fields extracted
                </p>
                <p className="font-['Inter:Regular',sans-serif] leading-[16px] text-[#72777e] text-[11px]">
                  Form ready for review
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleReset();
                }}
                className="text-[#4837b9] text-[11px] hover:underline"
              >
                Upload new
              </button>
            </div>
          )}
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
            transform: translate(-60px, -30px) rotate(-10deg) scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(0, 0) rotate(-5deg) scale(1);
            opacity: 0.8;
          }
        }
        
        .doc-float-in {
          animation: floatIn 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
