import { useState, useRef } from 'react';
import { FileText } from 'lucide-react';
import svgPaths from '../imports/svg-gzttbcu5gs';

interface UploadScreenProps {
  onFileSelect: (file: File) => void;
}

export function UploadScreen({ onFileSelect }: UploadScreenProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-[680px] bg-white rounded-lg shadow-sm border border-[#e5e7eb]">
      <div className="px-6 py-4 border-b border-[#e5e7eb]">
        <h1 className="text-[#1d1e20]">Add proposal</h1>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-[#1d1e20] mb-1">Info</h2>
          <p className="text-[#72777e] text-[14px]">
            <span className="text-[#e17605]">*</span> Required field
          </p>
        </div>

        {/* AI Badge */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="relative shrink-0 size-[14px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="AI Stars">
                  <g id="Vector">
                    <path d={svgPaths.p392ab080} fill="url(#paint0_linear_ai)" />
                    <path d={svgPaths.p37a0ec40} fill="url(#paint1_linear_ai)" />
                    <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_ai)" />
                  </g>
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_ai" x1="1.20002" x2="14.8" y1="7.66666" y2="7.66666">
                    <stop stopColor="#4837b9" />
                    <stop offset="1" stopColor="#8B28FF" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_ai" x1="1.20002" x2="14.8" y1="7.66666" y2="7.66666">
                    <stop stopColor="#4837b9" />
                    <stop offset="1" stopColor="#8B28FF" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_ai" x1="1.20002" x2="14.8" y1="7.66666" y2="7.66666">
                    <stop stopColor="#4837b9" />
                    <stop offset="1" stopColor="#8B28FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-[#1d1e20] text-[14px]">Proposal AI</span>
          </div>
          <span className="bg-[#f5f6f7] px-2 py-0.5 rounded text-[#72777e] text-[11px]">Beta</span>
        </div>

        <p className="text-[#72777e] text-[14px] mb-6">
          Upload your Letter of Intent and our AI will extract lease terms, rent structures, and key deal points automatically
        </p>

        {/* Upload Area with Animation */}
        <div 
          className={`relative border-2 border-dashed rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
            isDragging 
              ? 'border-[#4837b9] bg-gradient-to-br from-[#f8f7ff] to-[#faf9ff] scale-[1.02] shadow-lg' 
              : 'border-[#d6d8db] bg-gradient-to-br from-[#fafbfc] to-[#f8f9fa] hover:border-[#8B28FF] hover:shadow-md'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(#4837b9 1px, transparent 1px), linear-gradient(90deg, #4837b9 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />
          </div>

          {/* Floating Document Animation */}
          <div className="floating-doc absolute top-8 left-8 opacity-30">
            <FileText className="w-6 h-6 text-[#4837b9]" />
          </div>
          <div className="floating-doc-2 absolute top-12 right-12 opacity-20">
            <FileText className="w-5 h-5 text-[#8B28FF]" />
          </div>

          <div className="relative p-16">
            <div className="flex flex-col items-center text-center">
              {/* Main Upload Icon with Pulse */}
              <div className={`relative mb-6 transition-all duration-300 ${isDragging ? 'scale-110' : ''}`}>
                <div className="absolute inset-0 bg-[#4837b9] rounded-full blur-xl opacity-20 animate-pulse" />
                <div className={`relative p-6 rounded-2xl transition-all duration-300 ${
                  isDragging 
                    ? 'bg-gradient-to-br from-[#4837b9] to-[#8B28FF]' 
                    : 'bg-gradient-to-br from-[#f0f0f0] to-[#e5e7eb]'
                }`}>
                  <FileText className={`w-12 h-12 ${isDragging ? 'text-white' : 'text-[#4837b9]'}`} strokeWidth={1.5} />
                  
                  {/* Drag Arrow Indicator */}
                  {!isDragging && (
                    <div className="arrow-bounce absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#4837b9] opacity-60">
                        <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Main Text */}
              <div className="mb-6 space-y-2">
                <h3 className="text-[#1d1e20] text-[18px]">
                  {isDragging ? (
                    <span className="text-[#4837b9]">Drop your LOI document here</span>
                  ) : (
                    <>
                      Drop your LOI here or <button className="text-[#4837b9] underline hover:text-[#8B28FF] transition-colors">browse files</button>
                    </>
                  )}
                </h3>
                <p className="text-[#72777e] text-[14px]">
                  Supported: PDF, Word (DOC, DOCX) • Max 10MB
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/50 border border-[#e5e7eb]">
                  <div className="w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#4837b9]">
                      <path d="M8 2L10 6L14 6.5L11 9.5L11.5 14L8 12L4.5 14L5 9.5L2 6.5L6 6L8 2Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-[11px] text-[#72777e] text-center">Auto-extract lease terms</p>
                </div>
                
                <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/50 border border-[#e5e7eb]">
                  <div className="w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#4837b9]">
                      <path d="M2 4H14M2 8H14M2 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-[11px] text-[#72777e] text-center">Parse rent structures</p>
                </div>
                
                <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/50 border border-[#e5e7eb]">
                  <div className="w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#4837b9]">
                      <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M10 6L7 10L5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[11px] text-[#72777e] text-center">Identify key provisions</p>
                </div>
              </div>
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
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.1; }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          50% { transform: translateY(-15px) translateX(-8px); opacity: 0.05; }
        }
        
        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(8px); }
        }
        
        .floating-doc {
          animation: float 4s ease-in-out infinite;
        }
        
        .floating-doc-2 {
          animation: float2 5s ease-in-out infinite;
        }
        
        .arrow-bounce {
          animation: arrowBounce 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
