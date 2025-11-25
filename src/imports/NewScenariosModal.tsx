import svgPaths from "./svg-g1o36b8td1";
import imgImage10 from "../assets/419afee405d5efac88f411a9ad75ab925500a60b.png";
import imgImage from "../assets/306d11d845ff600b1bcfb300239c75babea0f0c0.png";
import imgVtsLogoHorizontalIndigo1 from "../assets/0eccd03c52acb982b974b091733686a4ca1ac274.png";

function Frame28() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[18px] text-center">Add proposal</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Info</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
      <Frame7 />
      <div className="h-[2px] shrink-0 w-full" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Term 1</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <Frame9 />
      <div className="bg-[#009696] h-[2px] shrink-0 w-full" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Options and clauses</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
      <Frame10 />
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
          <Frame1 />
          <Frame3 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
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
        <g clipPath="url(#clip0_1_12902)" id="Plus">
          <path d={svgPaths.p1d46a4f2} fill="var(--fill-0, #4837B9)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_1_12902">
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

function Frame26() {
  return (
    <div className="box-border content-stretch flex items-center justify-between pb-0 pt-[16px] px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d6d8db] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame31 />
      <ButtonV />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative self-stretch shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap whitespace-pre">
        <span className="text-[#e17605]">*</span>
        <span>{` Required field`}</span>
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between px-[16px] py-0 relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[#1d1e20] text-[24px] text-center text-nowrap whitespace-pre">Term 1</p>
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function BackArrow() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="BackArrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_12919)" id="BackArrow">
          <path d={svgPaths.pda52c00} fill="var(--fill-0, #4837B9)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_1_12919">
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

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d={svgPaths.p19ef0800} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1e20] text-[18px] text-nowrap whitespace-pre">Overview</p>
      <ChevronDown />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Term type</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame44 />
    </div>
  );
}

function AiStars() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_1_12897)" />
            <path d={svgPaths.p35061600} fill="url(#paint1_linear_1_12897)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_1_12897)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
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
      <AiStars />
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

function Frame65() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame37 />
      <ValueInfo />
    </div>
  );
}

function ChevronDown1() {
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

function Frame48() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
      <ChevronDown1 />
    </div>
  );
}

function SelectOptions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame48 />
    </div>
  );
}

function Field() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">New</p>
          <SelectOptions />
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame46 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame65 />
      </div>
      <Frame52 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Spaces</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame53 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame54 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[#ebebff] box-border content-stretch flex gap-[8px] items-start px-[8px] py-[2px] relative rounded-[8px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1d1e20] text-[12px] text-nowrap whitespace-pre">Space 200</p>
    </div>
  );
}

function ChevronDown2() {
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

function Frame55() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
      <ChevronDown2 />
    </div>
  );
}

function SelectOptions1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative self-stretch shrink-0" data-name="Select Options">
      <Frame55 />
    </div>
  );
}

function Field1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start px-[8px] py-[6px] relative w-full">
          <Frame49 />
          <SelectOptions1 />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-[360px]">
      <Field1 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame66 />
      </div>
      <Frame56 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Rentable size</p>
      <p className="leading-[16px] relative shrink-0 text-[0px] text-[12px] text-black">
        <span className="text-[#72777e]"> </span>
        <span className="text-[#e17605]">*</span>
      </p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame57 />
    </div>
  );
}

function AiStars1() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_1_12865)" />
            <path d={svgPaths.p37a0ec40} fill="url(#paint1_linear_1_12865)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_1_12865)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_12865" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_12865" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_12865" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
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
      <AiStars1 />
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

function Frame71() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame58 />
      <ValueInfo1 />
    </div>
  );
}

function SelectOptions2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#72777e] text-[14px] text-nowrap whitespace-pre">sf</p>
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

function Frame59() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field2 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame59 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame71 />
      </div>
      <Frame60 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Downtime</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame64 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame72 />
    </div>
  );
}

function SelectOptions3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#72777e] text-[14px] text-nowrap whitespace-pre">mo</p>
    </div>
  );
}

function Field3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">&nbsp;</p>
          <SelectOptions3 />
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field3 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame74 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame73 />
      </div>
      <Frame75 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Tenant possession</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame76 />
    </div>
  );
}

function AiStars2() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="var(--fill-0, #CCCCFF)" />
            <path d={svgPaths.p37a0ec40} fill="var(--fill-0, #CCCCFF)" />
            <path d={svgPaths.p1f950c80} fill="var(--fill-0, #CCCCFF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ProposalAi2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars2 />
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

function Frame78() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame77 />
      <ValueInfo2 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_12853)" id="Calendar">
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
          <clipPath id="clip0_1_12853">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center p-[4px] relative shrink-0">
      <Calendar />
    </div>
  );
}

function SelectOptions4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame47 />
    </div>
  );
}

function Field4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#72777e] text-[14px]">MM/DD/YYYY</p>
          <SelectOptions4 />
        </div>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field4 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame79 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame78 />
      </div>
      <Frame81 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Tenant buildout</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame84 />
    </div>
  );
}

function AiStars3() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="var(--fill-0, #CCCCFF)" />
            <path d={svgPaths.p37a0ec40} fill="var(--fill-0, #CCCCFF)" />
            <path d={svgPaths.p1f950c80} fill="var(--fill-0, #CCCCFF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ProposalAi3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars3 />
    </div>
  );
}

function Icons3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi3 />
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

function Frame88() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame87 />
      <ValueInfo3 />
    </div>
  );
}

function SelectOptions5() {
  return <div className="content-stretch flex gap-[8px] items-center self-stretch shrink-0" data-name="Select Options" />;
}

function Field5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">&nbsp;</p>
          <SelectOptions5 />
        </div>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field5 />
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="ChevronDown">
          <path d={svgPaths.p13e2ab00} fill="var(--fill-0, #1D1E20)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame90() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
      <ChevronDown3 />
    </div>
  );
}

function SelectOptions6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame90 />
    </div>
  );
}

function Field6() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0 w-[90px]" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">Days</p>
      <SelectOptions6 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame89 />
      <Field6 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame88 />
      </div>
      <Frame91 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Commencement date</p>
      <p className="leading-[16px] relative shrink-0 text-[0px] text-[12px] text-black">
        <span className="text-[#72777e]"> </span>
        <span className="text-[#e17605]">*</span>
      </p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame93 />
    </div>
  );
}

function AiStars4() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_1_12897)" />
            <path d={svgPaths.p35061600} fill="url(#paint1_linear_1_12897)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_1_12897)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
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

function ProposalAi4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars4 />
    </div>
  );
}

function Icons4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi4 />
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

function Frame95() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame94 />
      <ValueInfo4 />
    </div>
  );
}

function Calendar1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_12853)" id="Calendar">
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
          <clipPath id="clip0_1_12853">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame97() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center p-[4px] relative shrink-0">
      <Calendar1 />
    </div>
  );
}

function SelectOptions7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame97 />
    </div>
  );
}

function Field7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">01/01/2026</p>
          <SelectOptions7 />
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field7 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame98 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame95 />
      </div>
      <Frame99 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Term duration</p>
      <p className="leading-[16px] relative shrink-0 text-[0px] text-[12px] text-black">
        <span className="text-[#72777e]"> </span>
        <span className="text-[#e17605]">*</span>
      </p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame100 />
    </div>
  );
}

function AiStars5() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_1_12897)" />
            <path d={svgPaths.p35061600} fill="url(#paint1_linear_1_12897)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_1_12897)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
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

function ProposalAi5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars5 />
    </div>
  );
}

function Icons5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi5 />
    </div>
  );
}

function ValueInfo5() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons5 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame101 />
      <ValueInfo5 />
    </div>
  );
}

function SelectOptions8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#72777e] text-[14px] text-nowrap whitespace-pre">mo</p>
    </div>
  );
}

function Field8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">72</p>
          <SelectOptions8 />
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field8 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame103 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame102 />
      </div>
      <Frame104 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Rent commencement</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame105 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame106 />
    </div>
  );
}

function Calendar2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_12853)" id="Calendar">
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
          <clipPath id="clip0_1_12853">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame108() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center p-[4px] relative shrink-0">
      <Calendar2 />
    </div>
  );
}

function SelectOptions9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame108 />
    </div>
  );
}

function Field9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">01/01/2026</p>
          <SelectOptions9 />
        </div>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field9 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame109 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame107 />
      </div>
      <Frame110 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Lock-in end</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame112 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame113 />
    </div>
  );
}

function Calendar3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_12853)" id="Calendar">
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
          <clipPath id="clip0_1_12853">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame115() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center p-[4px] relative shrink-0">
      <Calendar3 />
    </div>
  );
}

function SelectOptions10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame115 />
    </div>
  );
}

function Field10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#72777e] text-[14px]">MM/DD/YYYY</p>
          <SelectOptions10 />
        </div>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field10 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame116 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame114 />
      </div>
      <Frame117 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame18 />
      <div className="bg-[#d6d8db] h-px shrink-0 w-full" />
      <Frame36 />
      <Frame35 />
      <Frame39 />
      <Frame40 />
      <Frame41 />
      <Frame92 />
      <Frame42 />
      <Frame43 />
      <Frame111 />
      <Frame45 />
    </div>
  );
}

function ChevronDown4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d={svgPaths.p19ef0800} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1e20] text-[18px] text-nowrap whitespace-pre">Income</p>
      <ChevronDown4 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame19 />
      <div className="bg-[#d6d8db] h-px shrink-0 w-full" />
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Trash">
          <path d={svgPaths.p383cd200} fill="var(--fill-0, #4837B9)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap whitespace-pre">Base rent</p>
      <Trash />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Starts (mo)</p>
      <p className="leading-[16px] relative shrink-0 text-[0px] text-[12px] text-black">
        <span className="text-[#72777e]"> </span>
        <span className="text-[#e17605]">*</span>
      </p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame118 />
    </div>
  );
}

function AiStars6() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_1_12897)" />
            <path d={svgPaths.p35061600} fill="url(#paint1_linear_1_12897)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_1_12897)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
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

function ProposalAi6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars6 />
    </div>
  );
}

function Icons6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi6 />
    </div>
  );
}

function ValueInfo6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons6 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame119 />
      <ValueInfo6 />
    </div>
  );
}

function SelectOptions11() {
  return <div className="content-stretch flex gap-[8px] items-center self-stretch shrink-0" data-name="Select Options" />;
}

function Field11() {
  return (
    <div className="basis-0 bg-[#ecedef] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">1</p>
          <SelectOptions11 />
        </div>
      </div>
    </div>
  );
}

function Frame121() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field11 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame121 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame120 />
      </div>
      <Frame122 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Amount</p>
      <p className="leading-[16px] relative shrink-0 text-[0px] text-[12px] text-black">
        <span className="text-[#72777e]"> </span>
        <span className="text-[#e17605]">*</span>
      </p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame124 />
    </div>
  );
}

function AiStars7() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_1_12897)" />
            <path d={svgPaths.p35061600} fill="url(#paint1_linear_1_12897)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_1_12897)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
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

function ProposalAi7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars7 />
    </div>
  );
}

function Icons7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi7 />
    </div>
  );
}

function ValueInfo7() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons7 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame125 />
      <ValueInfo7 />
    </div>
  );
}

function SelectOptions12() {
  return <div className="content-stretch flex gap-[8px] items-center self-stretch shrink-0" data-name="Select Options" />;
}

function Field12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">22.00</p>
          <SelectOptions12 />
        </div>
      </div>
    </div>
  );
}

function Frame127() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field12 />
    </div>
  );
}

function ChevronDown5() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="ChevronDown">
          <path d={svgPaths.p13e2ab00} fill="var(--fill-0, #1D1E20)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame128() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
      <ChevronDown5 />
    </div>
  );
}

function SelectOptions13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame128 />
    </div>
  );
}

function Field13() {
  return (
    <div className="bg-[#ecedef] box-border content-stretch flex gap-[4px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0 w-[90px]" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">$/sf/yr</p>
      <SelectOptions13 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame127 />
      <Field13 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame126 />
      </div>
      <Frame129 />
    </div>
  );
}

function Plus1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_12845)" id="Plus">
          <path d={svgPaths.p1383ff00} fill="var(--fill-0, #4837B9)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_1_12845">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonV2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[6px] items-center justify-center px-[13px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button v2">
      <div aria-hidden="true" className="absolute border border-[#4837b9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Plus1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4837b9] text-[14px] text-nowrap whitespace-pre">Base rent</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full">
      <ButtonV2 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[16px] items-start ml-0 mt-0 relative w-[600px]">
      <Frame22 />
      <Frame123 />
      <Frame130 />
      <Frame33 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Frame62 />
      <div className="[grid-area:1_/_1] bg-[#d6d8db] h-px ml-0 mt-[188px] w-[600px]" />
    </div>
  );
}

function Trash1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Trash">
          <path d={svgPaths.p383cd200} fill="var(--fill-0, #4837B9)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap whitespace-pre">Base rent escalation</p>
      <Trash1 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Starts (mo)</p>
      <p className="leading-[16px] relative shrink-0 text-[0px] text-[12px] text-black">
        <span className="text-[#72777e]"> </span>
        <span className="text-[#e17605]">*</span>
      </p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame131 />
    </div>
  );
}

function AiStars8() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="var(--fill-0, #CCCCFF)" />
            <path d={svgPaths.p37a0ec40} fill="var(--fill-0, #CCCCFF)" />
            <path d={svgPaths.p1f950c80} fill="var(--fill-0, #CCCCFF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ProposalAi8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars8 />
    </div>
  );
}

function Icons8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi8 />
    </div>
  );
}

function ValueInfo8() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons8 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame132 />
      <ValueInfo8 />
    </div>
  );
}

function SelectOptions14() {
  return <div className="content-stretch flex gap-[8px] items-center self-stretch shrink-0" data-name="Select Options" />;
}

function Field14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">13</p>
          <SelectOptions14 />
        </div>
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field14 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame134 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame133 />
      </div>
      <Frame135 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Amount</p>
      <p className="leading-[16px] relative shrink-0 text-[0px] text-[12px] text-black">
        <span className="text-[#72777e]"> </span>
        <span className="text-[#e17605]">*</span>
      </p>
    </div>
  );
}

function Frame138() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame137 />
    </div>
  );
}

function AiStars9() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_1_12897)" />
            <path d={svgPaths.p35061600} fill="url(#paint1_linear_1_12897)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_1_12897)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
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

function ProposalAi9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars9 />
    </div>
  );
}

function Icons9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi9 />
    </div>
  );
}

function ValueInfo9() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons9 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame138 />
      <ValueInfo9 />
    </div>
  );
}

function SelectOptions15() {
  return <div className="content-stretch flex gap-[8px] items-center self-stretch shrink-0" data-name="Select Options" />;
}

function Field15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">0.35</p>
          <SelectOptions15 />
        </div>
      </div>
    </div>
  );
}

function Frame140() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field15 />
    </div>
  );
}

function ChevronDown6() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="ChevronDown">
          <path d={svgPaths.p13e2ab00} fill="var(--fill-0, #1D1E20)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame141() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
      <ChevronDown6 />
    </div>
  );
}

function SelectOptions16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame141 />
    </div>
  );
}

function Field16() {
  return (
    <div className="bg-[#ecedef] box-border content-stretch flex gap-[4px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0 w-[90px]" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">$/sf/yr</p>
      <SelectOptions16 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame140 />
      <Field16 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame139 />
      </div>
      <Frame142 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Occurs</p>
    </div>
  );
}

function Frame145() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame144 />
    </div>
  );
}

function AiStars10() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_1_12897)" />
            <path d={svgPaths.p35061600} fill="url(#paint1_linear_1_12897)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_1_12897)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
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

function ProposalAi10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars10 />
    </div>
  );
}

function Icons10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi10 />
    </div>
  );
}

function ValueInfo10() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons10 />
    </div>
  );
}

function Frame146() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame145 />
      <ValueInfo10 />
    </div>
  );
}

function ChevronDown7() {
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

function Frame147() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
      <ChevronDown7 />
    </div>
  );
}

function SelectOptions17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame147 />
    </div>
  );
}

function Field17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">Annual</p>
          <SelectOptions17 />
        </div>
      </div>
    </div>
  );
}

function Frame148() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field17 />
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame148 />
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame146 />
      </div>
      <Frame149 />
    </div>
  );
}

function Plus2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_12845)" id="Plus">
          <path d={svgPaths.p1383ff00} fill="var(--fill-0, #4837B9)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_1_12845">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonV3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[6px] items-center justify-center px-[13px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button v2">
      <div aria-hidden="true" className="absolute border border-[#4837b9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Plus2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4837b9] text-[14px] text-nowrap whitespace-pre">Base rent escalation</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full">
      <Frame38 />
      <Frame136 />
      <Frame143 />
      <Frame150 />
      <ButtonV3 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame63 />
      <div className="bg-[#d6d8db] h-px shrink-0 w-full" />
    </div>
  );
}

function Trash2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Trash">
          <path d={svgPaths.p383cd200} fill="var(--fill-0, #4837B9)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap whitespace-pre">Free rent</p>
      <Trash2 />
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Starts (mo)</p>
      <p className="leading-[16px] relative shrink-0 text-[0px] text-[12px] text-black">
        <span className="text-[#72777e]"> </span>
        <span className="text-[#e17605]">*</span>
      </p>
    </div>
  );
}

function Frame153() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame152 />
    </div>
  );
}

function AiStars11() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_1_12897)" />
            <path d={svgPaths.p35061600} fill="url(#paint1_linear_1_12897)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_1_12897)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
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

function ProposalAi11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars11 />
    </div>
  );
}

function Icons11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi11 />
    </div>
  );
}

function ValueInfo11() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons11 />
    </div>
  );
}

function Frame154() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame153 />
      <ValueInfo11 />
    </div>
  );
}

function SelectOptions18() {
  return <div className="content-stretch flex gap-[8px] items-center self-stretch shrink-0" data-name="Select Options" />;
}

function Field18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">1</p>
          <SelectOptions18 />
        </div>
      </div>
    </div>
  );
}

function Frame155() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field18 />
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame155 />
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame154 />
      </div>
      <Frame156 />
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Duration (mo)</p>
      <p className="leading-[16px] relative shrink-0 text-[0px] text-[12px] text-black">
        <span className="text-[#72777e]"> </span>
        <span className="text-[#e17605]">*</span>
      </p>
    </div>
  );
}

function Frame159() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame158 />
    </div>
  );
}

function AiStars12() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_1_12897)" />
            <path d={svgPaths.p35061600} fill="url(#paint1_linear_1_12897)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_1_12897)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
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

function ProposalAi12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars12 />
    </div>
  );
}

function Icons12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi12 />
    </div>
  );
}

function ValueInfo12() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons12 />
    </div>
  );
}

function Frame160() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame159 />
      <ValueInfo12 />
    </div>
  );
}

function SelectOptions19() {
  return <div className="content-stretch flex gap-[8px] items-center self-stretch shrink-0" data-name="Select Options" />;
}

function Field19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">4</p>
          <SelectOptions19 />
        </div>
      </div>
    </div>
  );
}

function Frame161() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field19 />
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame161 />
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame160 />
      </div>
      <Frame162 />
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Amount free</p>
      <p className="leading-[16px] relative shrink-0 text-[0px] text-[12px] text-black">
        <span className="text-[#72777e]"> </span>
        <span className="text-[#e17605]">*</span>
      </p>
    </div>
  );
}

function Frame165() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame164 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame165 />
    </div>
  );
}

function SelectOptions20() {
  return <div className="content-stretch flex gap-[8px] items-center self-stretch shrink-0" data-name="Select Options" />;
}

function Field20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">100</p>
          <SelectOptions20 />
        </div>
      </div>
    </div>
  );
}

function Frame167() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field20 />
    </div>
  );
}

function ChevronDown8() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="ChevronDown">
          <path d={svgPaths.p13e2ab00} fill="var(--fill-0, #1D1E20)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame168() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
      <ChevronDown8 />
    </div>
  );
}

function SelectOptions21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame168 />
    </div>
  );
}

function Field21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">% of net: Base rent</p>
          <SelectOptions21 />
        </div>
      </div>
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame167 />
      <Field21 />
    </div>
  );
}

function Frame170() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame166 />
      </div>
      <Frame169 />
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame23 />
      <Frame157 />
      <Frame163 />
      <Frame170 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame171 />
      <div className="bg-[#d6d8db] h-px shrink-0 w-full" />
    </div>
  );
}

function Trash3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Trash">
          <path d={svgPaths.p383cd200} fill="var(--fill-0, #4837B9)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap whitespace-pre">Other income</p>
      <Trash3 />
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Type</p>
    </div>
  );
}

function Frame174() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame173 />
    </div>
  );
}

function Frame175() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame174 />
    </div>
  );
}

function ChevronDown9() {
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

function Frame176() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
      <ChevronDown9 />
    </div>
  );
}

function SelectOptions22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame176 />
    </div>
  );
}

function Field22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">Miscellaneous</p>
          <SelectOptions22 />
        </div>
      </div>
    </div>
  );
}

function Frame177() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field22 />
    </div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame177 />
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame175 />
      </div>
      <Frame178 />
    </div>
  );
}

function Frame180() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Starts (mo)</p>
      <p className="leading-[16px] relative shrink-0 text-[0px] text-[12px] text-black">
        <span className="text-[#72777e]"> </span>
        <span className="text-[#e17605]">*</span>
      </p>
    </div>
  );
}

function Frame181() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame180 />
    </div>
  );
}

function AiStars13() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="var(--fill-0, #CCCCFF)" />
            <path d={svgPaths.p37a0ec40} fill="var(--fill-0, #CCCCFF)" />
            <path d={svgPaths.p1f950c80} fill="var(--fill-0, #CCCCFF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ProposalAi13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars13 />
    </div>
  );
}

function Icons13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi13 />
    </div>
  );
}

function ValueInfo13() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons13 />
    </div>
  );
}

function Frame182() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame181 />
      <ValueInfo13 />
    </div>
  );
}

function SelectOptions23() {
  return <div className="content-stretch flex gap-[8px] items-center self-stretch shrink-0" data-name="Select Options" />;
}

function Field23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">&nbsp;</p>
          <SelectOptions23 />
        </div>
      </div>
    </div>
  );
}

function Frame183() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field23 />
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame183 />
    </div>
  );
}

function Frame185() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame182 />
      </div>
      <Frame184 />
    </div>
  );
}

function Frame186() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Duration (mo)</p>
    </div>
  );
}

function Frame187() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame186 />
    </div>
  );
}

function AiStars14() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_1_12897)" />
            <path d={svgPaths.p35061600} fill="url(#paint1_linear_1_12897)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_1_12897)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
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

function ProposalAi14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars14 />
    </div>
  );
}

function Icons14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi14 />
    </div>
  );
}

function ValueInfo14() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons14 />
    </div>
  );
}

function Frame188() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame187 />
      <ValueInfo14 />
    </div>
  );
}

function SelectOptions24() {
  return <div className="content-stretch flex gap-[8px] items-center self-stretch shrink-0" data-name="Select Options" />;
}

function Field24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">Full term</p>
          <SelectOptions24 />
        </div>
      </div>
    </div>
  );
}

function Frame189() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field24 />
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame189 />
    </div>
  );
}

function Frame191() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame188 />
      </div>
      <Frame190 />
    </div>
  );
}

function Frame192() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Amount</p>
      <p className="leading-[16px] relative shrink-0 text-[0px] text-[12px] text-black">
        <span className="text-[#72777e]"> </span>
        <span className="text-[#e17605]">*</span>
      </p>
    </div>
  );
}

function Frame193() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame192 />
    </div>
  );
}

function AiStars15() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_1_12897)" />
            <path d={svgPaths.p35061600} fill="url(#paint1_linear_1_12897)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_1_12897)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
            <stop stopColor="#181818" />
            <stop offset="0.34" stopColor="#5528FF" />
            <stop offset="0.67" stopColor="#8B28FF" />
            <stop offset="1" stopColor="#C928FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_12897" x1="3.34443" x2="15.0579" y1="1.26666" y2="4.08601">
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

function ProposalAi15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="proposal ai">
      <AiStars15 />
    </div>
  );
}

function Icons15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
      <ProposalAi15 />
    </div>
  );
}

function ValueInfo15() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons15 />
    </div>
  );
}

function Frame194() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame193 />
      <ValueInfo15 />
    </div>
  );
}

function SelectOptions25() {
  return <div className="content-stretch flex gap-[8px] items-center self-stretch shrink-0" data-name="Select Options" />;
}

function Field25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">10</p>
          <SelectOptions25 />
        </div>
      </div>
    </div>
  );
}

function Frame195() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field25 />
    </div>
  );
}

function ChevronDown10() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="ChevronDown">
          <path d={svgPaths.p13e2ab00} fill="var(--fill-0, #1D1E20)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame196() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
      <ChevronDown10 />
    </div>
  );
}

function SelectOptions26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame196 />
    </div>
  );
}

function Field26() {
  return (
    <div className="bg-[#ecedef] box-border content-stretch flex gap-[4px] items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0 w-[90px]" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">$/sf/yr</p>
      <SelectOptions26 />
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame195 />
      <Field26 />
    </div>
  );
}

function Frame198() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame194 />
      </div>
      <Frame197 />
    </div>
  );
}

function Plus3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_12845)" id="Plus">
          <path d={svgPaths.p1383ff00} fill="var(--fill-0, #4837B9)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_1_12845">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonV4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[6px] items-center justify-center px-[13px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button v2">
      <div aria-hidden="true" className="absolute border border-[#4837b9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Plus3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4837b9] text-[14px] text-nowrap whitespace-pre">Other income</p>
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full">
      <Frame172 />
      <Frame179 />
      <Frame185 />
      <Frame191 />
      <Frame198 />
      <ButtonV4 />
    </div>
  );
}

function Frame200() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame199 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame61 />
      <Group2 />
      <Frame151 />
      <Frame />
      <Frame200 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame67 />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronRight">
          <path d={svgPaths.p312f8a00} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1e20] text-[18px] text-nowrap whitespace-pre">Percentage rent</p>
      <ChevronRight />
    </div>
  );
}

function Frame201() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame20 />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronRight">
          <path d={svgPaths.p312f8a00} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1e20] text-[18px] text-nowrap whitespace-pre">Expenses and recoveries</p>
      <ChevronRight1 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronRight">
          <path d={svgPaths.p312f8a00} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1e20] text-[18px] text-nowrap whitespace-pre">Remaining lease obligations</p>
      <ChevronRight2 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame24 />
    </div>
  );
}

function ChevronRight3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronRight">
          <path d={svgPaths.p312f8a00} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1e20] text-[18px] text-nowrap whitespace-pre">Straight line balance</p>
      <ChevronRight3 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function ProposalFormFields() {
  return (
    <div className="bg-white h-[894px] relative shrink-0 w-full" data-name="Proposal form fields">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[894px] items-start p-[16px] relative w-full">
          <Frame50 />
          <Frame51 />
          <Frame201 />
          <Frame68 />
          <Frame69 />
          <Frame70 />
        </div>
      </div>
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[632px]" data-name="Left Panel">
      <Frame28 />
      <Frame26 />
      <Frame27 />
      <ButtonV1 />
      <ProposalFormFields />
    </div>
  );
}

function ButtonV5() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button v2">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4837b9] text-[14px] text-center text-nowrap whitespace-pre">Cancel</p>
    </div>
  );
}

function ButtonV6() {
  return (
    <div className="bg-[#4837b9] box-border content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button v2">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Save</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute bg-white bottom-[915px] box-border content-stretch flex gap-[8px] items-start justify-end left-0 p-[16px] w-[632px]">
      <div aria-hidden="true" className="absolute border-[#d6d8db] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <ButtonV5 />
      <ButtonV6 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#f7f7f7] h-[2095px] overflow-clip relative shrink-0 w-[1367px]">
      <div className="absolute h-[1160px] right-[0.12px] top-0 w-[2048.88px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
      <div className="absolute h-[1159px] right-[-0.12px] top-px w-[2047.12px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex items-start right-0 top-0">
      <LeftPanel />
      <Frame29 />
      <Frame32 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Cash flow</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
      <Frame11 />
      <div className="h-[2px] shrink-0 w-full" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Uploaded LOI</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <Frame12 />
      <div className="bg-[#009696] h-[2px] shrink-0 w-full" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Generate LOI</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
      <Frame13 />
      <div className="h-[2px] shrink-0 w-full" />
    </div>
  );
}

function TabsBeta1() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-end right-[1036px] top-[39px]" data-name="Tabs (beta)">
      <div aria-hidden="true" className="absolute border-[#d6d8db] border-[0px_0px_1px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Frame4 />
      <Frame5 />
      <Frame6 />
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

function Group10() {
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

function Frame202() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] relative shrink-0 w-[640px]">
      <Group />
      <Group1 />
      <Group10 />
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

function LoiDoc() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[32px] h-[1043px] items-center p-[64px] right-[307px] top-[92px]" data-name="LOI Doc">
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
      <Frame202 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center not-italic relative shrink-0 text-[#1d1e20] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-nowrap whitespace-pre">Multiple scenarios found</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] w-[min-content]">This LOI includes more than one option. Select the scenario you’d like to parse so we can autofill the proposal form with the right details.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[2px] relative rounded-[16px] shrink-0 size-[20px]">
      <div aria-hidden="true" className="absolute border-2 border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame86 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">Scenario A</p>
      <Frame96 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="basis-0 content-stretch flex gap-[22px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#72777e] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Rentable size</p>
        <p className="leading-[16px] mb-0 text-[12px]">12,000 RSF</p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Term duration</p>
        <p className="leading-[16px] mb-0 text-[12px]">24 months</p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Base rent</p>
        <p className="leading-[16px] mb-0 text-[12px]">
          1-7: $55.00 sf/year
          <br aria-hidden="true" />
          8-60: $150.00 sf/year
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">61-120: $118.00 sf/year</p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Base rent escalation</p>
        <p className="leading-[16px] mb-0 text-[12px]">13: 8.0%, annually</p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Free rent</p>
        <p className="leading-[16px] mb-0 text-[12px]">
          1-12: 8.0%, one time
          <br aria-hidden="true" />
          8–31: 100%, gross
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">10–16: 80%, gross</p>
        <p className="leading-[16px] mb-0 text-[12px]">
          <span>
            17–20: 100%, net
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold not-italic">
            <br aria-hidden="true" />
            Options and rights
          </span>
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">
          <span>
            {`Use, renewal, parking `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold not-italic">Lease info</span>
        </p>
        <p className="leading-[16px] text-[12px]">
          <span>
            Guarantor
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold not-italic">Tenant risks</span>
          <span>
            <br aria-hidden="true" />
            Letter of credit, prepaid rent
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Frame82 />
    </div>
  );
}

function ScenariosColumn() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="scenarios-column">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame83 />
      <Frame85 />
    </div>
  );
}

function Frame203() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[2px] relative rounded-[16px] shrink-0 size-[20px]">
      <div aria-hidden="true" className="absolute border-2 border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame204() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame203 />
    </div>
  );
}

function Frame205() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">Scenario B</p>
      <Frame204 />
    </div>
  );
}

function Frame206() {
  return (
    <div className="basis-0 content-stretch flex gap-[22px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#72777e] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Rentable size</p>
        <p className="leading-[16px] mb-0 text-[12px]">24,000 RSF</p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Term duration</p>
        <p className="leading-[16px] mb-0 text-[12px]">32 months</p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Base rent</p>
        <p className="leading-[16px] mb-0 text-[12px]">
          1-7: $55.00 sf/year
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">
          <br aria-hidden="true" />
          Base rent escalation
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">
          13: 9.0%, annually
          <span>
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Free rent</p>
        <p className="leading-[16px] mb-0 text-[12px]">
          1-12: 8.0%, one time
          <br aria-hidden="true" />
          8–31: 100%, gross
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">
          <span>
            10–16: 80%, gross
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold not-italic">
            <br aria-hidden="true" />
            Options and rights
          </span>
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">
          <span>
            {`Renewal, parking `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold not-italic">Lease info</span>
        </p>
        <p className="leading-[16px] text-[12px]">
          <span>
            Guarantor
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold not-italic">Tenant risks</span>
          <span>
            <br aria-hidden="true" />
            Letter of credit
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame207() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Frame206 />
    </div>
  );
}

function ScenariosColumn1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="scenarios-column">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame205 />
      <Frame207 />
    </div>
  );
}

function Frame208() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[2px] relative rounded-[16px] shrink-0 size-[20px]">
      <div aria-hidden="true" className="absolute border-2 border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame209() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame208 />
    </div>
  );
}

function Frame210() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">Scenario C</p>
      <Frame209 />
    </div>
  );
}

function Frame211() {
  return (
    <div className="basis-0 content-stretch flex gap-[22px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#72777e] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Rentable size</p>
        <p className="leading-[16px] mb-0 text-[12px]">36,000 RSF</p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Term duration</p>
        <p className="leading-[16px] mb-0 text-[12px]">48 months</p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Base rent</p>
        <p className="leading-[16px] mb-0 text-[12px]">
          1-7: $55.00 sf/year
          <br aria-hidden="true" />
          8-60: $150.00 sf/year
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Base rent escalation</p>
        <p className="leading-[16px] mb-0 text-[12px]">
          13: 18.0%, annually
          <span>
            <br aria-hidden="true" />
            18: 32.0%, one time
          </span>
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Free rent</p>
        <p className="leading-[16px] mb-0 text-[12px]">
          1-12: 8.0%, one time
          <br aria-hidden="true" />
          8–31: 100%, gross
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">
          <span>
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold not-italic">
            <br aria-hidden="true" />
            Options and rights
          </span>
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">
          <span>
            {`Use, parking `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold not-italic">Lease info</span>
        </p>
        <p className="leading-[16px] text-[12px]">
          <span>
            Guarantor
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold not-italic">Tenant risks</span>
          <span>
            <br aria-hidden="true" />
            Letter of credit, prepaid rent
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame212() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Frame211 />
    </div>
  );
}

function ScenariosColumn2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="scenarios-column">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame210 />
      <Frame212 />
    </div>
  );
}

function Frame213() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[2px] relative rounded-[16px] shrink-0 size-[20px]">
      <div aria-hidden="true" className="absolute border-2 border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame214() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame213 />
    </div>
  );
}

function Frame215() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">Scenario D</p>
      <Frame214 />
    </div>
  );
}

function Frame216() {
  return (
    <div className="basis-0 content-stretch flex gap-[22px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#72777e] text-[0px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Rentable size</p>
        <p className="leading-[16px] mb-0 text-[12px]">24,000 RSF</p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Term duration</p>
        <p className="leading-[16px] mb-0 text-[12px]">32 months</p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Base rent</p>
        <p className="leading-[16px] mb-0 text-[12px]">
          1-7: $55.00 sf/year
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">
          <br aria-hidden="true" />
          Base rent escalation
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">
          13: 9.0%, annually
          <span>
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]">Free rent</p>
        <p className="leading-[16px] mb-0 text-[12px]">
          1-12: 8.0%, one time
          <br aria-hidden="true" />
          8–31: 100%, gross
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">
          <span>
            10–16: 80%, gross
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold not-italic">
            <br aria-hidden="true" />
            Options and rights
          </span>
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">
          <span>
            {`Renewal, parking `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold not-italic">Lease info</span>
        </p>
        <p className="leading-[16px] text-[12px]">
          <span>
            Guarantor
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold not-italic">Tenant risks</span>
          <span>
            <br aria-hidden="true" />
            Letter of credit
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame217() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Frame216 />
    </div>
  );
}

function ScenariosColumn3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="scenarios-column">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame215 />
      <Frame217 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <ScenariosColumn />
      <ScenariosColumn1 />
      <ScenariosColumn2 />
      <ScenariosColumn3 />
    </div>
  );
}

function ChevronRight4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_12886)" id="ChevronRight">
          <path d={svgPaths.p3d9318f0} fill="var(--fill-0, #BBBFC4)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_1_12886">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonDeprecated() {
  return (
    <div className="bg-[#ecedef] relative rounded-[20px] size-[24px]" data-name="_Button (deprecated)">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[4px] relative size-[24px]">
          <ChevronRight4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ecedef] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function ChevronRight5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_12834)" id="ChevronRight">
          <path d={svgPaths.p3d9318f0} fill="var(--fill-0, #1D1E20)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_1_12834">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonDeprecated1() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[24px]" data-name="_Button (deprecated)">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[4px] relative size-[24px]">
          <ChevronRight5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#72777e] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ButtonDeprecated />
        </div>
      </div>
      <ButtonDeprecated1 />
    </div>
  );
}

function Frame218() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[632px]">
      <Frame8 />
    </div>
  );
}

function ButtonV7() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center justify-center min-w-[120px] px-[13px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button v2">
      <div aria-hidden="true" className="absolute border border-[#4837b9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4837b9] text-[14px] text-nowrap whitespace-pre">Cancel</p>
    </div>
  );
}

function ButtonV8() {
  return (
    <div className="bg-[#4837b9] box-border content-stretch flex gap-[4px] items-center justify-center min-w-[120px] px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button v2">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Continue</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-end relative shrink-0 w-full">
      <ButtonV7 />
      <ButtonV8 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame15 />
      <Frame80 />
      <Frame218 />
      <Frame17 />
    </div>
  );
}

function ScenariosFullView() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[calc(50%+14px)] top-[calc(50%-17px)] translate-x-[-50%] translate-y-[-50%]" data-name="Scenarios full view">
      <Frame16 />
    </div>
  );
}

export default function NewScenariosModal() {
  return (
    <div className="bg-white relative size-full" data-name="new Scenarios modal">
      <Frame34 />
      <div className="absolute bg-[#f7fafc] h-[47px] left-[643px] top-[18px] w-[337px]" />
      <div className="absolute bg-[#f7f7f7] h-[841px] right-[27px] top-[85px] w-[1329px]" />
      <TabsBeta1 />
      <LoiDoc />
      <div className="absolute h-[17px] left-[1014px] mix-blend-multiply top-[230px] w-[101px]" />
      <div className="absolute h-[17px] left-[1360px] mix-blend-multiply top-[423px] w-[80px]" />
      <div className="absolute h-[17px] left-[1509px] mix-blend-multiply top-[423px] w-[63px]" />
      <div className="absolute bg-[rgba(25,25,25,0.9)] h-[1180px] right-0 top-0 w-[2000px]" />
      <ScenariosFullView />
    </div>
  );
}