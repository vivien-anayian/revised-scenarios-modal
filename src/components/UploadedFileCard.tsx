import svgPathsPost from '../imports/svg-p0w1e16hag';

interface UploadedFileCardProps {
  fileName: string;
  onDelete: () => void;
}

export function UploadedFileCard({ fileName, onDelete }: UploadedFileCardProps) {
  return (
    <div className="bg-white overflow-clip relative rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] w-full">
      {/* File Header */}
      <div className="box-border content-stretch flex flex-col items-start pb-[16px] pt-[16px] px-[24px] border-b border-[#f0f0f0]">
        <div className="content-stretch flex h-[48px] items-start justify-between relative shrink-0 w-full">
          {/* File Info */}
          <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[48px] items-start relative w-full">
              {/* Gradient Icon */}
              <div className="bg-gradient-to-b from-[#c928ff] relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(201,40,255,0.2),0px_4px_6px_-4px_rgba(201,40,255,0.2)] shrink-0 size-[48px] to-[#8b28ff]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
                  <div className="relative shrink-0 size-[24px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[24px]">
                      <div className="absolute bottom-0 left-[7.5%] right-[5%] top-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
                          <path d={svgPathsPost.p20d90400} fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* File Name & Date */}
              <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start pb-[4px] pt-[4px] px-0 relative w-full">
                  <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic text-[#1d1e20] text-[16px] truncate">
                      {fileName}
                    </p>
                  </div>
                  <div className="h-[20px] relative shrink-0 w-full">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#72777e] text-[12px]">
                      Uploaded {new Date().toLocaleDateString()} by Joe Smith
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delete Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="relative rounded-[8px] shrink-0 size-[32px] hover:bg-[#f8f9fa] transition-colors"
          >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
              <div className="relative shrink-0 size-[18px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[18px]">
                  <div className="absolute bottom-0 left-[7.5%] right-[5%] top-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                      <path d={svgPathsPost.p6a77600} fill="#72777E" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="p-[24px] m-[0px] mt-[8px] mr-[0px] mb-[0px] ml-[0px]">
        <div className="grid grid-cols-3 gap-[16px]">
          {/* Stat Card 1 - Total Fields */}
          <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#f8f9fa] items-start p-[16px] relative rounded-[12px] to-[#ffffff]">
            <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
              <div className="relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative">
                  <div className="h-[24px] relative shrink-0 w-full">
                    <p className="text-center w-full bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic text-[18px] text-neutral-950" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%), linear-gradient(rgb(201, 40, 255) 0%, rgb(139, 40, 255) 50%, rgb(85, 40, 255) 100%)" }}>
                      55
                    </p>
                  </div>
                  <div className="h-[16px] relative shrink-0 w-full">
                    <p className="text-center w-full font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic text-[#1d1e20] text-[12px]">Total fields</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#72777e] text-[10px] text-center text-nowrap whitespace-pre">Found and filled</p>
                    <div className="relative shrink-0 size-[12px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <g clipPath="url(#clip0_stat1)">
                          <path d={svgPathsPost.p3a435300} fill="url(#paint0_radial_stat1)" />
                          <path d={svgPathsPost.p3b220800} fill="url(#paint1_radial_stat1)" />
                        </g>
                        <defs>
                          <radialGradient cx="0" cy="0" gradientTransform="matrix(2.0096 8.54788 36.0514 -15.9511 8.09615 1.05592)" gradientUnits="userSpaceOnUse" id="paint0_radial_stat1" r="1">
                            <stop stopColor="#8822AA" />
                            <stop offset="1" stopColor="#181818" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="matrix(12.2824 2.89002 -22.9202 51.8456 1.71734 6.27845)" gradientUnits="userSpaceOnUse" id="paint1_radial_stat1" r="1">
                            <stop stopColor="#8822AA" />
                            <stop offset="1" stopColor="#181818" />
                          </radialGradient>
                          <clipPath id="clip0_stat1">
                            <rect fill="white" height="12" width="12" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stat Card 2 - Econ Fields */}
          <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#f8f9fa] items-start p-[16px] relative rounded-[12px] to-[#ffffff]">
            <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
              <div className="relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative">
                  <div className="h-[24px] relative shrink-0 w-full">
                    <p className="text-center w-full bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic text-[18px] text-neutral-950" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%), linear-gradient(rgb(201, 40, 255) 0%, rgb(139, 40, 255) 50%, rgb(85, 40, 255) 100%)" }}>
                      36
                    </p>
                  </div>
                  <div className="h-[16px] relative shrink-0 w-full">
                    <p className="text-center w-full font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic text-[#1d1e20] text-[12px]">Econ fields</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#72777e] text-[10px] text-center text-nowrap whitespace-pre">Found and filled</p>
                    <div className="relative shrink-0 size-[12px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <g clipPath="url(#clip0_stat2)">
                          <path d={svgPathsPost.p3a435300} fill="url(#paint0_radial_stat2)" />
                          <path d={svgPathsPost.p3b220800} fill="url(#paint1_radial_stat2)" />
                        </g>
                        <defs>
                          <radialGradient cx="0" cy="0" gradientTransform="matrix(2.0096 8.54788 36.0514 -15.9511 8.09615 1.05592)" gradientUnits="userSpaceOnUse" id="paint0_radial_stat2" r="1">
                            <stop stopColor="#8822AA" />
                            <stop offset="1" stopColor="#181818" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="matrix(12.2824 2.89002 -22.9202 51.8456 1.71734 6.27845)" gradientUnits="userSpaceOnUse" id="paint1_radial_stat2" r="1">
                            <stop stopColor="#8822AA" />
                            <stop offset="1" stopColor="#181818" />
                          </radialGradient>
                          <clipPath id="clip0_stat2">
                            <rect fill="white" height="12" width="12" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stat Card 3 - Options */}
          <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#f8f9fa] items-start p-[16px] relative rounded-[12px] to-[#ffffff]">
            <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
              <div className="relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative">
                  <div className="h-[24px] relative shrink-0 w-full">
                    <p className="text-center w-full bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic text-[18px] text-neutral-950" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%), linear-gradient(rgb(201, 40, 255) 0%, rgb(139, 40, 255) 50%, rgb(85, 40, 255) 100%)" }}>
                      3
                    </p>
                  </div>
                  <div className="h-[16px] relative shrink-0 w-full">
                    <p className="text-center w-full font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic text-[#1d1e20] text-[12px]">Options</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#72777e] text-[10px] text-center text-nowrap whitespace-pre">Found and filled</p>
                    <div className="relative shrink-0 size-[12px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <g clipPath="url(#clip0_stat3)">
                          <path d={svgPathsPost.p3a435300} fill="url(#paint0_radial_stat3)" />
                          <path d={svgPathsPost.p3b220800} fill="url(#paint1_radial_stat3)" />
                        </g>
                        <defs>
                          <radialGradient cx="0" cy="0" gradientTransform="matrix(2.0096 8.54788 36.0514 -15.9511 8.09615 1.05592)" gradientUnits="userSpaceOnUse" id="paint0_radial_stat3" r="1">
                            <stop stopColor="#8822AA" />
                            <stop offset="1" stopColor="#181818" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="matrix(12.2824 2.89002 -22.9202 51.8456 1.71734 6.27845)" gradientUnits="userSpaceOnUse" id="paint1_radial_stat3" r="1">
                            <stop stopColor="#8822AA" />
                            <stop offset="1" stopColor="#181818" />
                          </radialGradient>
                          <clipPath id="clip0_stat3">
                            <rect fill="white" height="12" width="12" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}