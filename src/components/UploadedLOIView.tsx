import imgVtsLogoHorizontalIndigo1 from 'figma:asset/0eccd03c52acb982b974b091733686a4ca1ac274.png';

export function UploadedLOIView() {
  return (
    <div className="bg-white flex flex-col h-full relative w-full">
      {/* Tabs */}
      <div className="relative w-full">
        <div aria-hidden="true" className="absolute border-[#d6d8db] border-[0px_0px_1px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
        <div className="flex flex-row items-end size-full">
          <div className="box-border content-stretch flex gap-[24px] items-end px-[16px] py-0 pb-0 pt-[16px] relative w-full">
            {/* Cash flow Tab */}
            <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
              <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">
                  Cash flow
                </p>
              </div>
              <div className="h-[2px] shrink-0 w-full" />
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

            {/* Uploaded LOI Tab - Active */}
            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
              <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">
                  Uploaded LOI
                </p>
              </div>
              <div className="bg-[#009696] h-[2px] shrink-0 w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[16px] relative w-full border-b border-[#d6d8db]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[#1d1e20] text-[24px] text-nowrap whitespace-pre">
          LOI
        </p>
        <div className="flex gap-[8px]">
          {/* Download button */}
          <button className="bg-white box-border content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[6px] relative rounded-[4px]">
            <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="relative shrink-0 size-[14px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <g clipPath="url(#clip0_download)">
                  <path d="M10.5 1.5V8.25L12.375 6.375L13.5 7.5L9 12L4.5 7.5L5.625 6.375L7.5 8.25V1.5H10.5ZM1.5 15V10.5H4.5V12H13.5V10.5H16.5V15H1.5Z" fill="#1D1E20" />
                </g>
                <defs>
                  <clipPath id="clip0_download">
                    <rect fill="white" height="14" width="14" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap whitespace-pre">
              Download
            </p>
          </button>
        </div>
      </div>

      {/* LOI Document Content */}
      <div className="flex-1 overflow-auto p-[24px]">
        <div className="max-w-[700px] mx-auto">
          {/* VTS Logo */}
          <div className="mb-8">
            <img src={imgVtsLogoHorizontalIndigo1} alt="VTS" className="h-[24px]" />
          </div>

          {/* Letter Header */}
          <div className="mb-6">
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-[#1d1e20] mb-4">
              Letter of Intent
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#72777e] leading-[18px]">
              September 17, 2025
            </p>
          </div>

          {/* Letter Content */}
          <div className="space-y-4 font-['Inter:Regular',sans-serif] text-[12px] text-[#1d1e20] leading-[18px]">
            <p>
              <span className="font-semibold">To:</span> ACME Corporation<br />
              <span className="font-semibold">From:</span> VTS Real Estate Partners<br />
              <span className="font-semibold">Re:</span> Letter of Intent for Office Lease
            </p>

            <p>
              This Letter of Intent ("LOI") outlines the proposed terms and conditions for the lease of approximately 
              15,000 rentable square feet (the "Premises") located at 123 Main Street, Suite 400, San Francisco, CA 94105.
            </p>

            <div>
              <p className="font-semibold mb-2">LEASE TERMS:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-semibold">Lease Term:</span> Five (5) years</li>
                <li><span className="font-semibold">Commencement Date:</span> January 1, 2026</li>
                <li><span className="font-semibold">Base Rent:</span> $45.00 per rentable square foot per year, Year 1</li>
                <li><span className="font-semibold">Annual Increases:</span> 3% annually</li>
                <li><span className="font-semibold">Lease Type:</span> Modified Gross</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">TENANT IMPROVEMENT ALLOWANCE:</p>
              <p>
                Landlord shall provide a tenant improvement allowance of $50.00 per rentable square foot 
                for improvements to the Premises.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">PARKING:</p>
              <p>
                Tenant shall have the right to lease up to thirty (30) parking spaces at the prevailing 
                market rate for the building.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">OPTIONS:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-semibold">Extension Option:</span> One (1) five-year extension option at 95% of fair market value</li>
                <li><span className="font-semibold">Expansion Rights:</span> Right of first offer on adjacent 5,000 SF</li>
                <li><span className="font-semibold">Termination Right:</span> One-time termination right at end of Year 3 with 12 months notice</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">OPERATING EXPENSES:</p>
              <p>
                Tenant shall pay its pro rata share of increases in operating expenses and taxes over a 
                base year of 2026.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">SECURITY DEPOSIT:</p>
              <p>
                Security deposit equal to three (3) months of initial base rent.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">FREE RENT:</p>
              <p>
                Three (3) months of free rent during the first year of the lease term.
              </p>
            </div>

            <p>
              This LOI is intended to outline the basic business terms for negotiation purposes only and does not 
              constitute a binding agreement. Either party may withdraw from negotiations at any time prior to 
              execution of a definitive lease agreement.
            </p>

            <p>
              Please confirm your agreement to these terms by signing below. Upon mutual execution of this LOI, 
              we will proceed with the preparation of a definitive lease agreement.
            </p>

            <div className="mt-8 pt-8 border-t border-[#e5e7eb]">
              <p className="mb-4">Sincerely,</p>
              <p className="font-semibold">VTS Real Estate Partners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
