import svgPaths from "./svg-fv416xqart";
import imgImage10 from "figma:asset/419afee405d5efac88f411a9ad75ab925500a60b.png";
import imgImage from "figma:asset/306d11d845ff600b1bcfb300239c75babea0f0c0.png";
import imgVtsLogoHorizontalIndigo1 from "figma:asset/0eccd03c52acb982b974b091733686a4ca1ac274.png";

function Frame16() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[18px] text-center">Add proposal</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Info</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <Frame6 />
      <div className="bg-[#009696] h-[2px] shrink-0 w-full" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Term 1</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
      <Frame7 />
      <div className="h-[2px] shrink-0 w-full" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Options and clauses</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
      <Frame8 />
      <div className="h-[2px] shrink-0 w-full" />
    </div>
  );
}

function TabsBeta() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Tabs (beta)">
      <div aria-hidden="true" className="absolute border-[#d6d8db] border-[0px_0px_1px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[24px] items-end px-[16px] py-0 relative w-full">
          <Frame />
          <Frame2 />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[632px]">
      <TabsBeta />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_2976)" id="Plus">
          <path d={svgPaths.p1d46a4f2} fill="var(--fill-0, #4837B9)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_1_2976">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonV() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[6px] items-center justify-center left-[508px] px-[13px] py-[6px] rounded-[4px] top-[5px]" data-name="Button v2">
      <div aria-hidden="true" className="absolute border border-[#4837b9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Plus />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4837b9] text-[14px] text-nowrap whitespace-pre">Add term</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex items-center justify-between pb-0 pt-[16px] px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d6d8db] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame19 />
      <ButtonV />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative self-stretch shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap whitespace-pre">
        <span className="text-[#e17605]">*</span>
        <span>{` Required field`}</span>
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between px-[16px] py-0 relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[#1d1e20] text-[24px] text-center text-nowrap whitespace-pre">Info</p>
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function BackArrow() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="BackArrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_2940)" id="BackArrow">
          <path d={svgPaths.pda52c00} fill="var(--fill-0, #4837B9)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_1_2940">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonV1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[4px] items-center justify-center left-[-30px] p-[8px] top-0" data-name="Button v2">
      <BackArrow />
    </div>
  );
}

function Paperclip() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Paperclip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Paperclip">
          <path d={svgPaths.pbc7e00} fill="var(--fill-0, #4837B9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[2px] relative shrink-0">
      <Paperclip />
    </div>
  );
}

function Frame29() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#4837b9] text-[16px] w-full">ACME INC LOI 10-01-2025.pdf</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#72777e] text-[12px] w-full">Uploaded 9/3/2025 by David Chan</p>
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Trash">
          <path d={svgPaths.p1dda2000} fill="var(--fill-0, #4837B9)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[2px] relative shrink-0">
      <Trash />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame43 />
      <Frame29 />
      <Frame44 />
    </div>
  );
}

function AiStars() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p3b727300} fill="url(#paint0_linear_20_23401)" />
            <path d={svgPaths.p4f05000} fill="url(#paint1_linear_20_23401)" />
            <path d={svgPaths.p30b6d880} fill="url(#paint2_linear_20_23401)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_20_23401" x1="5.01665" x2="22.5868" y1="1.89999" y2="6.12901">
            <stop stopColor="#C928FF" />
            <stop offset="0.33" stopColor="#8B28FF" />
            <stop offset="0.66" stopColor="#5528FF" />
            <stop offset="1" stopColor="#181818" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_20_23401" x1="5.01665" x2="22.5868" y1="1.89999" y2="6.12901">
            <stop stopColor="#C928FF" />
            <stop offset="0.33" stopColor="#8B28FF" />
            <stop offset="0.66" stopColor="#5528FF" />
            <stop offset="1" stopColor="#181818" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_20_23401" x1="5.01665" x2="22.5868" y1="1.89999" y2="6.12901">
            <stop stopColor="#C928FF" />
            <stop offset="0.33" stopColor="#8B28FF" />
            <stop offset="0.66" stopColor="#5528FF" />
            <stop offset="1" stopColor="#181818" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full">
      <AiStars />
      <p className="bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
        55 Total Fields
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
      <Frame38 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-full">Found and filled</p>
    </div>
  );
}

function AiStars1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p3b727300} fill="url(#paint0_linear_20_23401)" />
            <path d={svgPaths.p4f05000} fill="url(#paint1_linear_20_23401)" />
            <path d={svgPaths.p30b6d880} fill="url(#paint2_linear_20_23401)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_20_23401" x1="5.01665" x2="22.5868" y1="1.89999" y2="6.12901">
            <stop stopColor="#C928FF" />
            <stop offset="0.33" stopColor="#8B28FF" />
            <stop offset="0.66" stopColor="#5528FF" />
            <stop offset="1" stopColor="#181818" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_20_23401" x1="5.01665" x2="22.5868" y1="1.89999" y2="6.12901">
            <stop stopColor="#C928FF" />
            <stop offset="0.33" stopColor="#8B28FF" />
            <stop offset="0.66" stopColor="#5528FF" />
            <stop offset="1" stopColor="#181818" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_20_23401" x1="5.01665" x2="22.5868" y1="1.89999" y2="6.12901">
            <stop stopColor="#C928FF" />
            <stop offset="0.33" stopColor="#8B28FF" />
            <stop offset="0.66" stopColor="#5528FF" />
            <stop offset="1" stopColor="#181818" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full">
      <AiStars1 />
      <p className="bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
        36 Econ Fields
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
      <Frame39 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-full">Found and filled</p>
    </div>
  );
}

function AiStars2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p3b727300} fill="url(#paint0_linear_20_23401)" />
            <path d={svgPaths.p4f05000} fill="url(#paint1_linear_20_23401)" />
            <path d={svgPaths.p30b6d880} fill="url(#paint2_linear_20_23401)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_20_23401" x1="5.01665" x2="22.5868" y1="1.89999" y2="6.12901">
            <stop stopColor="#C928FF" />
            <stop offset="0.33" stopColor="#8B28FF" />
            <stop offset="0.66" stopColor="#5528FF" />
            <stop offset="1" stopColor="#181818" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_20_23401" x1="5.01665" x2="22.5868" y1="1.89999" y2="6.12901">
            <stop stopColor="#C928FF" />
            <stop offset="0.33" stopColor="#8B28FF" />
            <stop offset="0.66" stopColor="#5528FF" />
            <stop offset="1" stopColor="#181818" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_20_23401" x1="5.01665" x2="22.5868" y1="1.89999" y2="6.12901">
            <stop stopColor="#C928FF" />
            <stop offset="0.33" stopColor="#8B28FF" />
            <stop offset="0.66" stopColor="#5528FF" />
            <stop offset="1" stopColor="#181818" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full">
      <AiStars2 />
      <p className="bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
        3 Options
      </p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
      <Frame40 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-full">Found and filled</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame34 />
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-2 border-[#c928ff] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center px-[24px] py-[16px] relative w-full">
          <Frame30 />
          <div className="h-[2px] rounded-[2px] shrink-0 w-full" />
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-0 relative w-full">
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function ChevronUp() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChevronUp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_16_14821)" id="ChevronUp">
          <path d={svgPaths.pb79ab80} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_16_14821">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1e20] text-[18px] text-nowrap whitespace-pre">Proposal info</p>
      <ChevronUp />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Proposal name</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame31 />
    </div>
  );
}

function AiStars3() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_16_14818)" />
            <path d={svgPaths.p37a0ec40} fill="url(#paint1_linear_16_14818)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_16_14818)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_16_14818" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_16_14818" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_16_14818" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ProposalAi() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars3 />
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi />
    </div>
  );
}

function ValueInfo() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons />
    </div>
  );
}

function Frame51() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame23 />
      <ValueInfo />
    </div>
  );
}

function SelectOptions() {
  return <div className="content-stretch flex gap-[8px] items-center self-stretch shrink-0" data-name="Select Options" />;
}

function Field() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">Final Proposal - ACME Inc - 6 Years</p>
          <SelectOptions />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame32 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame51 />
      </div>
      <Frame42 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Proposal type</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame45 />
    </div>
  );
}

function AiStars4() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_16_14818)" />
            <path d={svgPaths.p37a0ec40} fill="url(#paint1_linear_16_14818)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_16_14818)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_16_14818" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_16_14818" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_16_14818" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ProposalAi1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars4 />
    </div>
  );
}

function Icons1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi1 />
    </div>
  );
}

function ValueInfo1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons1 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame46 />
      <ValueInfo1 />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_1_2919)" id="Close">
          <path d={svgPaths.p1dfcc000} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_1_2919">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
      <Close />
    </div>
  );
}

function SelectOptions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame47 />
    </div>
  );
}

function Field1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">Final Proposal</p>
          <SelectOptions1 />
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field1 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame48 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame52 />
      </div>
      <Frame49 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Proposal date</p>
      <p className="leading-[16px] relative shrink-0 text-[0px] text-[12px] text-black">
        <span className="text-[#72777e]"> </span>
        <span className="text-[#e17605]">*</span>
      </p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame50 />
    </div>
  );
}

function AiStars5() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_16_14818)" />
            <path d={svgPaths.p37a0ec40} fill="url(#paint1_linear_16_14818)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_16_14818)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_16_14818" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_16_14818" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_16_14818" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ProposalAi2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars5 />
    </div>
  );
}

function Icons2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi2 />
    </div>
  );
}

function ValueInfo2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons2 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame53 />
      <ValueInfo2 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_1_2913)" id="Calendar">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.pa70aaf0} fill="var(--fill-0, #72777E)" fillRule="evenodd" />
            <path d="M2.5 4.75H3.5V5.75H2.5V4.75Z" fill="var(--fill-0, #72777E)" />
            <path d="M2.5 7H3.5V8H2.5V7Z" fill="var(--fill-0, #72777E)" />
            <path d="M4.5 4.75H5.5V5.75H4.5V4.75Z" fill="var(--fill-0, #72777E)" />
            <path d="M6.5 4.75H7.5V5.75H6.5V4.75Z" fill="var(--fill-0, #72777E)" />
            <path d="M4.5 7H5.5V8H4.5V7Z" fill="var(--fill-0, #72777E)" />
            <path d="M6.5 7H7.5V8H6.5V7Z" fill="var(--fill-0, #72777E)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2913">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
      <Calendar />
    </div>
  );
}

function SelectOptions2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame55 />
    </div>
  );
}

function Field2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">10/08/2025</p>
          <SelectOptions2 />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field2 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame56 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame54 />
      </div>
      <Frame57 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Lease type</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame58 />
    </div>
  );
}

function DealSettings() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="deal settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_20_23404)" id="deal settings">
          <g id="Shape">
            <path d={svgPaths.p3c28ec00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p11fc3880} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p262dcf00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p1064e600} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.pa01cb00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p6f7e00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p1695f180} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p1006c200} fill="var(--fill-0, #4837B9)" />
            <path clipRule="evenodd" d={svgPaths.p332c8c00} fill="var(--fill-0, #4837B9)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_20_23404">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icons3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <DealSettings />
    </div>
  );
}

function ValueInfo3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons3 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame59 />
      <ValueInfo3 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="ChevronDown">
          <path d={svgPaths.p7226c00} fill="var(--fill-0, #1D1E20)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
      <ChevronDown />
    </div>
  );
}

function SelectOptions3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame61 />
    </div>
  );
}

function Field3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">Full Service Gross</p>
          <SelectOptions3 />
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field3 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame62 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame60 />
      </div>
      <Frame63 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Discount rate</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame64 />
    </div>
  );
}

function AiStars6() {
  return (
    <div className="absolute left-1/2 size-[12px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.pd33a880} fill="var(--fill-0, #72777E)" />
            <path d={svgPaths.pd971b00} fill="var(--fill-0, #72777E)" />
            <path d={svgPaths.p493ce30} fill="var(--fill-0, #72777E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ProposalAi3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars6 />
      <div className="absolute left-1/2 mix-blend-multiply size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(187, 191, 196, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g id="Vector" style={{ mixBlendMode: "multiply" }}>
              <path d={svgPaths.p199d9080} fill="var(--fill-0, #BBBFC4)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function DealSettings1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="deal settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_20_23404)" id="deal settings">
          <g id="Shape">
            <path d={svgPaths.p3c28ec00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p11fc3880} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p262dcf00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p1064e600} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.pa01cb00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p6f7e00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p1695f180} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p1006c200} fill="var(--fill-0, #4837B9)" />
            <path clipRule="evenodd" d={svgPaths.p332c8c00} fill="var(--fill-0, #4837B9)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_20_23404">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icons4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi3 />
      <DealSettings1 />
    </div>
  );
}

function ValueInfo4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons4 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame65 />
      <ValueInfo4 />
    </div>
  );
}

function SelectOptions4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#72777e] text-[14px] text-nowrap whitespace-pre">%</p>
    </div>
  );
}

function Field4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">2</p>
          <SelectOptions4 />
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field4 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame67 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame66 />
      </div>
      <Frame69 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Execution date</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame71 />
    </div>
  );
}

function Icons5() {
  return <div className="content-stretch flex gap-[8px] items-center shrink-0" data-name="Icons" />;
}

function ValueInfo5() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons5 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame72 />
      <ValueInfo5 />
    </div>
  );
}

function Calendar1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_2905)" id="Calendar">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p9d67280} fill="var(--fill-0, #72777E)" fillRule="evenodd" />
            <path d="M3 5.7H4.2V6.9H3V5.7Z" fill="var(--fill-0, #72777E)" />
            <path d="M3 8.4H4.2V9.6H3V8.4Z" fill="var(--fill-0, #72777E)" />
            <path d="M5.4 5.7H6.6V6.9H5.4V5.7Z" fill="var(--fill-0, #72777E)" />
            <path d="M7.8 5.7H9V6.9H7.8V5.7Z" fill="var(--fill-0, #72777E)" />
            <path d="M5.4 8.4H6.6V9.6H5.4V8.4Z" fill="var(--fill-0, #72777E)" />
            <path d="M7.8 8.4H9V9.6H7.8V8.4Z" fill="var(--fill-0, #72777E)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2905">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center p-[4px] relative shrink-0">
      <Calendar1 />
    </div>
  );
}

function SelectOptions5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame33 />
    </div>
  );
}

function Field5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#72777e] text-[14px]">MM/DD/YYYY</p>
          <SelectOptions5 />
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field5 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame74 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame73 />
      </div>
      <Frame76 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <Frame13 />
          <div className="bg-[#d6d8db] h-px shrink-0 w-full" />
          <Frame22 />
          <Frame24 />
          <Frame25 />
          <Frame26 />
          <Frame70 />
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function ButtonV2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button v2">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4837b9] text-[14px] text-center text-nowrap whitespace-pre">Cancel</p>
    </div>
  );
}

function ButtonV3() {
  return (
    <div className="bg-[#4837b9] box-border content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button v2">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Save</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d6d8db] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start justify-end p-[16px] relative w-full">
          <ButtonV2 />
          <ButtonV3 />
        </div>
      </div>
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[632px]" data-name="Left Panel">
      <Frame16 />
      <Frame14 />
      <Frame15 />
      <ButtonV1 />
      <Frame41 />
      <Frame12 />
      <Frame17 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[1160px] overflow-clip relative shrink-0 w-[1367px]">
      <div className="absolute h-[1160px] right-[0.12px] top-0 w-[2048.88px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
      <div className="absolute h-[1159px] right-[-0.12px] top-px w-[2047.12px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start right-px">
      <LeftPanel />
      <Frame20 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Cash flow</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
      <Frame9 />
      <div className="h-[2px] shrink-0 w-full" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Uploaded LOI</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <Frame10 />
      <div className="bg-[#009696] h-[2px] shrink-0 w-full" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Generate LOI</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
      <Frame11 />
      <div className="h-[2px] shrink-0 w-full" />
    </div>
  );
}

function TabsBeta1() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-end left-[647px] top-[39px]" data-name="Tabs (beta)">
      <div aria-hidden="true" className="absolute border-[#d6d8db] border-[0px_0px_1px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Group() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[16px] not-italic place-items-start relative shrink-0 text-[#1d1e20] text-[12px]">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative w-[352px]">Tenant</p>
      <p className="[grid-area:1_/_1] ml-[220px] mt-0 relative w-[420px]">Acme Inc.</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[16px] not-italic place-items-start relative shrink-0 text-[#1d1e20] text-[12px]">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative w-[352px]">Landlord/Management</p>
      <p className="[grid-area:1_/_1] ml-[220px] mt-0 relative w-[420px]">VTS Property Management, LLC</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid not-italic place-items-start relative shrink-0 text-[#1d1e20] text-[12px]">
      <p className="[grid-area:1_/_1] leading-[16px] ml-0 mt-0 relative w-[352px]">Initial Premises</p>
      <div className="[grid-area:1_/_1] leading-[16px] ml-[220px] mt-0 relative w-[420px]">
        <p className="mb-0">200 W Front St – Suite 500, 10,000 rentable square feet, outlined in Exhibit “A”.</p>
        <p className="mb-0 text-[12px]">&nbsp;</p>
        <p>The space being offered is not encumbered by rights of other tenants (i.e., right of first offer, right of first refusal, expansion, etc.), and any such encumbrances must be disclosed to the Tenant either prior to executing the lease or during the term of the proposed lease.</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[16px] not-italic place-items-start relative shrink-0 text-[#1d1e20] text-[12px]">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative w-[352px]">Commencement Date</p>
      <p className="[grid-area:1_/_1] ml-[220px] mt-0 relative w-[420px]">Jan 1, 2026</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[16px] not-italic place-items-start relative shrink-0 text-[#1d1e20] text-[12px]">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative w-[352px]">Early Access Period</p>
      <p className="[grid-area:1_/_1] ml-[220px] mt-0 relative w-[420px]">Tenant requires fourteen (14) days of early access before the Commencement Date to install furniture and equipment. Any early entry shall be under all terms of the Lease, except the covenant to pay Rent. Tenant shall not unreasonably interfere with Landlord’s work during early occupancy.</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[16px] not-italic place-items-start relative shrink-0 text-[#1d1e20] text-[12px]">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative w-[352px]">Permitted Use</p>
      <p className="[grid-area:1_/_1] ml-[220px] mt-0 relative w-[420px]">Landlord covenants and warrants that during the Lease term (and any renewal or extension), the Premises may legally be used, including—but not limited to—General office space.</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[16px] not-italic place-items-start relative shrink-0 text-[#1d1e20] text-[12px]">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative w-[352px]">Lease Term</p>
      <p className="[grid-area:1_/_1] ml-[220px] mt-0 relative w-[420px]">Seventy-Two (72) months.</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[16px] not-italic place-items-start relative shrink-0 text-[#1d1e20] text-[12px]">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative w-[352px]">Minimum Rent</p>
      <p className="[grid-area:1_/_1] ml-[220px] mt-0 relative w-[420px]">$22.00 / RSF, full-service, with $0.35 annual increases.</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[16px] not-italic place-items-start relative shrink-0 text-[#1d1e20] text-[12px]">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative w-[352px]">Base Year</p>
      <p className="[grid-area:1_/_1] ml-[220px] mt-0 relative w-[420px]">2025</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[16px] not-italic place-items-start relative shrink-0 text-[#1d1e20] text-[12px]">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative w-[352px]">Rent Abatement</p>
      <p className="[grid-area:1_/_1] ml-[220px] mt-0 relative w-[420px]">Four (4) months, applied to the first four months of the Term.</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] relative shrink-0 w-[640px]">
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[32px] h-[1043px] items-center left-[924px] p-[64px] top-[92px]">
      <div aria-hidden="true" className="absolute border-[#5528ff] border-[0px_0px_24px] border-solid inset-0 pointer-events-none" />
      <div className="h-[43px] relative shrink-0 w-[150px]" data-name="VTS-Logo_Horizontal_Indigo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVtsLogoHorizontalIndigo1} />
      </div>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1d1e20] text-[0px] text-[12px] w-[640px]">
        <p className="mb-0">October 8, 2025</p>
        <p className="mb-0">
          Mr. Nick Romito
          <br aria-hidden="true" />
          New York
          <br aria-hidden="true" />
          200 Park Avenue, Suite 1700
          <br aria-hidden="true" />
          New York, NY 10166
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid mb-0 underline">Delivered via Email</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Re: Letter of Intent. 200 W Front St – Suite 500</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Dear Jane,</p>
        <p className="mb-0">&nbsp;</p>
        <p>On behalf of the landlord, the following is a revised best and final proposal of terms for ACME Inc. to lease space at 200 W Front St – Suite 500. We look forward to discussing this with you and working together on this transaction.</p>
      </div>
      <Frame77 />
    </div>
  );
}

export default function Frame75() {
  return (
    <div className="relative size-full">
      <Frame21 />
      <div className="absolute bg-[#f7fafc] h-[47px] left-[635px] top-[18px] w-[315px]" />
      <div className="absolute bg-[#f7f7f7] h-[841px] left-[643px] top-[85px] w-[1329px]" />
      <TabsBeta1 />
      <Frame68 />
      <div className="absolute bg-[#ebebff] h-[17px] left-[984px] mix-blend-multiply rounded-[4px] top-[230px] w-[101px]" />
      <div className="absolute bg-[#ebebff] h-[17px] left-[1330px] mix-blend-multiply rounded-[4px] top-[423px] w-[80px]" />
      <div className="absolute bg-[#ebebff] h-[17px] left-[1479px] mix-blend-multiply rounded-[4px] top-[423px] w-[63px]" />
      <div className="absolute bg-[#ebebff] h-[17px] left-[1204px] mix-blend-multiply rounded-[4px] top-[718px] w-[72px]" />
      <div className="absolute bg-[#ebebff] h-[17px] left-[1203px] mix-blend-multiply rounded-[4px] top-[934px] w-[159px]" />
    </div>
  );
}