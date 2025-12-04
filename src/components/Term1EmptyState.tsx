import _svgPaths from '../imports/svg-2lbyhco3sp';

export function Term1EmptyState() {
  return (
    <div className="bg-[#f8f9fa] flex flex-col h-full relative w-full overflow-y-auto">
      {/* Term 1 Title */}
      <div className="px-[16px] pt-[24px] pb-[16px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic text-[#1d1e20] text-[24px] text-nowrap whitespace-pre">
          Term 1
        </p>
      </div>

      {/* Tabs */}
      <div className="relative w-full border-b border-[#d6d8db]">
        <div aria-hidden="true" className="absolute border-[#d6d8db] border-[0px_0px_1px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
        <div className="flex flex-row items-end size-full">
          <div className="box-border content-stretch flex gap-[24px] items-end px-[16px] py-0 relative w-full">
            {/* Cash flow Tab - Active */}
            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
              <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">
                  Cash flow
                </p>
              </div>
              <div className="bg-[#009696] h-[2px] shrink-0 w-full" />
            </div>

            {/* Generate LOI Tab */}
            <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
              <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">
                  Generate LOI
                </p>
              </div>
              <div className="h-[2px] shrink-0 w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="mt-[24px]">
        {/* Metrics Header */}
        <div className="px-[16px] pb-[16px] flex items-center justify-between">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic text-[#1d1e20] text-[24px] text-nowrap whitespace-pre">
            Metrics
          </p>
          <div className="relative shrink-0 size-[18px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <rect width="18" height="18" rx="2" fill="white" stroke="#d6d8db" strokeWidth="1"/>
            </svg>
          </div>
        </div>

        {/* Metrics Empty State */}
        <div className="px-[16px] pb-[24px]">
          <div className="bg-white rounded-[8px] border border-[#d6d8db] p-[40px] flex items-center justify-center min-h-[180px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#72777e] text-[14px] text-center">
              Please enter all the required information.
            </p>
          </div>
        </div>
      </div>

      {/* Net cash flow Section */}
      <div>
        {/* Net cash flow Header with Tabs */}
        <div className="px-[16px] pb-[16px] flex items-center justify-between">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic text-[#1d1e20] text-[24px] text-nowrap whitespace-pre">
            Net cash flow
          </p>
          <div className="relative shrink-0 size-[18px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <rect width="18" height="18" rx="2" fill="white" stroke="#d6d8db" strokeWidth="1"/>
            </svg>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="px-[16px] pb-[16px]">
          <div className="flex gap-[8px] items-center">
            <div className="flex gap-[4px] items-center">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#72777e] text-[12px] text-nowrap whitespace-pre">
                Frequency
              </p>
            </div>
            <button className="px-[8px] py-[4px] border border-[#d6d8db] rounded-[4px] bg-white">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#1d1e20] text-[14px] text-nowrap whitespace-pre">
                Yearly
              </p>
            </button>
            <button className="px-[8px] py-[4px] bg-[#1d1e20] rounded-[4px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-white text-[14px] text-nowrap whitespace-pre">
                Chart
              </p>
            </button>
            <button className="px-[8px] py-[4px] border border-[#d6d8db] rounded-[4px] bg-white">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#1d1e20] text-[14px] text-nowrap whitespace-pre">
                Table
              </p>
            </button>
            <button className="px-[8px] py-[4px] border border-[#d6d8db] rounded-[4px] bg-white">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#1d1e20] text-[14px] text-nowrap whitespace-pre">
                Total
              </p>
            </button>
            <button className="px-[8px] py-[4px] border border-[#d6d8db] rounded-[4px] bg-white">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#1d1e20] text-[14px] text-nowrap whitespace-pre">
                Area
              </p>
            </button>
          </div>
        </div>

        {/* Net cash flow Empty State */}
        <div className="px-[16px] pb-[24px]">
          <div className="bg-white rounded-[8px] border border-[#d6d8db] p-[40px] flex items-center justify-center min-h-[220px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#72777e] text-[14px] text-center">
              Please enter all the required information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}