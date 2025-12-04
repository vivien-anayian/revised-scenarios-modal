import imgVtsLogoHorizontalIndigo1 from 'figma:asset/0eccd03c52acb982b974b091733686a4ca1ac274.png';

export function LOIPreview() {
  return (
    <div className="bg-white rounded-[8px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.08)] p-8 h-full overflow-auto">
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
  );
}
