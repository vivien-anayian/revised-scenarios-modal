import svgPaths from "./svg-p0w1e16hag";

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
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#72777e] text-[12px] top-[0.5px] w-[202px]">Uploaded 12/2/2025 by David Chan</p>
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
    <div className="absolute box-border content-stretch flex flex-col h-[77px] items-start left-0 pb-px pt-[16px] px-[24px] top-0 w-[900px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container3 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[37.8px] not-italic text-[18px] text-center text-neutral-950 text-nowrap top-0 translate-x-[-50%] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%), linear-gradient(rgb(201, 40, 255) 0%, rgb(139, 40, 255) 50%, rgb(85, 40, 255) 100%)" }}>
        55
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[37.51px] not-italic text-[#1d1e20] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Total fields</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_19_17446)" id="Icon">
          <path d={svgPaths.p3a435300} fill="url(#paint0_radial_19_17446)" id="Vector" />
          <path d={svgPaths.p3b220800} fill="url(#paint1_radial_19_17446)" id="Vector_2" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(2.0096 8.54788 36.0514 -15.9511 8.09615 1.05592)" gradientUnits="userSpaceOnUse" id="paint0_radial_19_17446" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(12.2824 2.89002 -22.9202 51.8456 1.71734 6.27845)" gradientUnits="userSpaceOnUse" id="paint1_radial_19_17446" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <clipPath id="clip0_19_17446">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#72777e] text-[10px] text-center text-nowrap whitespace-pre">Found and filled</p>
      <Icon2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative">
        <Paragraph2 />
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#f8f9fa] items-start p-[16px] relative rounded-[12px] shrink-0 to-[#ffffff] w-[273.328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container6 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[37.3px] not-italic text-[18px] text-center text-neutral-950 text-nowrap top-0 translate-x-[-50%] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%), linear-gradient(rgb(201, 40, 255) 0%, rgb(139, 40, 255) 50%, rgb(85, 40, 255) 100%)" }}>
        36
      </p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[37.51px] not-italic text-[#1d1e20] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Econ fields</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_19_17446)" id="Icon">
          <path d={svgPaths.p3a435300} fill="url(#paint0_radial_19_17446)" id="Vector" />
          <path d={svgPaths.p3b220800} fill="url(#paint1_radial_19_17446)" id="Vector_2" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(2.0096 8.54788 36.0514 -15.9511 8.09615 1.05592)" gradientUnits="userSpaceOnUse" id="paint0_radial_19_17446" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(12.2824 2.89002 -22.9202 51.8456 1.71734 6.27845)" gradientUnits="userSpaceOnUse" id="paint1_radial_19_17446" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <clipPath id="clip0_19_17446">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#72777e] text-[10px] text-center text-nowrap whitespace-pre">Found and filled</p>
      <Icon3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative">
        <Paragraph5 />
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#f8f9fa] items-start p-[16px] relative rounded-[12px] shrink-0 to-[#ffffff] w-[273.328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container9 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[37.3px] not-italic text-[18px] text-center text-neutral-950 text-nowrap top-0 translate-x-[-50%] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%), linear-gradient(rgb(201, 40, 255) 0%, rgb(139, 40, 255) 50%, rgb(85, 40, 255) 100%)" }}>
        36
      </p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[37.51px] not-italic text-[#1d1e20] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Options</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_19_17446)" id="Icon">
          <path d={svgPaths.p3a435300} fill="url(#paint0_radial_19_17446)" id="Vector" />
          <path d={svgPaths.p3b220800} fill="url(#paint1_radial_19_17446)" id="Vector_2" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(2.0096 8.54788 36.0514 -15.9511 8.09615 1.05592)" gradientUnits="userSpaceOnUse" id="paint0_radial_19_17446" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(12.2824 2.89002 -22.9202 51.8456 1.71734 6.27845)" gradientUnits="userSpaceOnUse" id="paint1_radial_19_17446" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <clipPath id="clip0_19_17446">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#72777e] text-[10px] text-center text-nowrap whitespace-pre">Found and filled</p>
      <Icon4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative">
        <Paragraph8 />
        <Paragraph9 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#f8f9fa] items-start p-[16px] relative rounded-[12px] shrink-0 to-[#ffffff] w-[273.328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[24px] top-[101px]" data-name="Container">
      <Container7 />
      <Container10 />
      <Container13 />
    </div>
  );
}

export default function PostUploadOption() {
  return (
    <div className="bg-white overflow-clip relative rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] size-full" data-name="PostUploadOption1">
      <Container4 />
      <Container14 />
    </div>
  );
}