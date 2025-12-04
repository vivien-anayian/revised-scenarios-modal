import svgPaths from "./svg-ikglr12a8g";

function Paperclip() {
  return (
    <div className="absolute bottom-0 left-[7.5%] right-[5%] top-0" data-name="Paperclip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
        <g id="Paperclip">
          <path d={svgPaths.p20d90400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[24px]">
        <Paperclip />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-gradient-to-b from-[#c928ff] relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(201,40,255,0.2),0px_4px_6px_-4px_rgba(201,40,255,0.2)] shrink-0 size-[48px] to-[#8b28ff]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#1d1e20] text-[16px] text-nowrap top-[-1px] whitespace-pre">2024-Q4-Commercial-Lease-Proposal.pdf</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#72777e] text-[12px] top-px w-[250px]">Uploaded 12/15/2025 by John Doe</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start pb-0 pt-[4px] px-0 relative w-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[48px] items-start relative w-full">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Trash() {
  return (
    <div className="absolute bottom-0 left-[7.5%] right-[5%] top-0" data-name="Trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Trash">
          <path d={svgPaths.p6a77600} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[18px]">
        <Trash />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Button />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-[rgba(201,40,255,0.05)] h-[89px] items-start left-0 pb-px pt-[20px] px-[24px] to-[rgba(85,40,255,0.05)] top-0 via-50% via-[rgba(139,40,255,0.05)] w-[900px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_4004_363)" id="Icon">
          <path d={svgPaths.p1dec5e00} fill="url(#paint0_radial_4004_363)" id="Vector" />
          <path d={svgPaths.p11376800} fill="url(#paint1_radial_4004_363)" id="Vector_2" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(3.01441 12.8218 54.077 -23.9267 12.1443 1.58387)" gradientUnits="userSpaceOnUse" id="paint0_radial_4004_363" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(18.4237 4.33502 -34.3802 77.7684 2.57587 9.41754)" gradientUnits="userSpaceOnUse" id="paint1_radial_4004_363" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <clipPath id="clip0_4004_363">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">55 Total Fields</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#72777e] text-[10px] text-nowrap top-0 whitespace-pre">Found and filled</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[91.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[32px] items-start relative w-[91.563px]">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-full">
        <Icon2 />
        <Container5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f0f0f0] h-[32px] relative shrink-0 w-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] w-px" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_4004_363)" id="Icon">
          <path d={svgPaths.p1dec5e00} fill="url(#paint0_radial_4004_363)" id="Vector" />
          <path d={svgPaths.p11376800} fill="url(#paint1_radial_4004_363)" id="Vector_2" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(3.01441 12.8218 54.077 -23.9267 12.1443 1.58387)" gradientUnits="userSpaceOnUse" id="paint0_radial_4004_363" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(18.4237 4.33502 -34.3802 77.7684 2.57587 9.41754)" gradientUnits="userSpaceOnUse" id="paint1_radial_4004_363" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <clipPath id="clip0_4004_363">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">36 Economic Fields</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#72777e] text-[10px] text-nowrap top-0 whitespace-pre">Found and filled</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[32px] relative shrink-0 w-[122.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[32px] items-start relative w-[122.484px]">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-full">
        <Icon3 />
        <Container8 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_4004_363)" id="Icon">
          <path d={svgPaths.p1dec5e00} fill="url(#paint0_radial_4004_363)" id="Vector" />
          <path d={svgPaths.p11376800} fill="url(#paint1_radial_4004_363)" id="Vector_2" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(3.01441 12.8218 54.077 -23.9267 12.1443 1.58387)" gradientUnits="userSpaceOnUse" id="paint0_radial_4004_363" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(18.4237 4.33502 -34.3802 77.7684 2.57587 9.41754)" gradientUnits="userSpaceOnUse" id="paint1_radial_4004_363" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <clipPath id="clip0_4004_363">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">3 Options</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#72777e] text-[10px] text-nowrap top-0 whitespace-pre">Found and filled</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[32px] relative shrink-0 w-[75.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[32px] items-start relative w-[75.391px]">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-full">
        <Icon4 />
        <Container10 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute box-border content-stretch flex gap-[24px] h-[32px] items-center left-[24px] pl-0 py-0 top-[113px] w-[858px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container9 />
      <Container7 />
      <Container11 />
    </div>
  );
}

export default function PostUploadOption() {
  return (
    <div className="bg-white overflow-clip relative rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] size-full" data-name="PostUploadOption3">
      <Container4 />
      <Container12 />
    </div>
  );
}