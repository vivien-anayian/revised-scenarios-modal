import svgPaths from "./svg-2lbyhco3sp";
import imgCleanShot20250911At1116442X1 from "figma:asset/d3e1f1b96efa7b402ad5202d57345abfea3d7962.png";
import imgImage10 from "figma:asset/419afee405d5efac88f411a9ad75ab925500a60b.png";
import imgImage from "figma:asset/306d11d845ff600b1bcfb300239c75babea0f0c0.png";

function Frame14() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[18px] text-center">Add proposal</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Info</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <Frame5 />
      <div className="bg-[#009696] h-[2px] shrink-0 w-full" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Term 1</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
      <Frame6 />
      <div className="h-[2px] shrink-0 w-full" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Options and clauses</p>
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

function Frame17() {
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

function Frame12() {
  return (
    <div className="box-border content-stretch flex items-center justify-between pb-0 pt-[16px] px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d6d8db] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame17 />
      <ButtonV />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative self-stretch shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap whitespace-pre">
        <span className="text-[#e17605]">*</span>
        <span>{` Required field`}</span>
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between px-[16px] py-0 relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[#1d1e20] text-[24px] text-center text-nowrap whitespace-pre">Info</p>
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function AiStars() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="AI Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="AI Stars">
          <g id="Vector">
            <path d={svgPaths.p392ab080} fill="url(#paint0_linear_22_26383)" />
            <path d={svgPaths.p37a0ec40} fill="url(#paint1_linear_22_26383)" />
            <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_22_26383)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_22_26383" x1="1.20002" x2="14.8" y1="7.66666" y2="7.66666">
            <stop stopColor="#C928FF" />
            <stop offset="0.33" stopColor="#8B28FF" />
            <stop offset="0.66" stopColor="#5528FF" />
            <stop offset="1" stopColor="#181818" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_22_26383" x1="1.20002" x2="14.8" y1="7.66666" y2="7.66666">
            <stop stopColor="#C928FF" />
            <stop offset="0.33" stopColor="#8B28FF" />
            <stop offset="0.66" stopColor="#5528FF" />
            <stop offset="1" stopColor="#181818" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_22_26383" x1="1.20002" x2="14.8" y1="7.66666" y2="7.66666">
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

function Frame21() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[2px] relative shrink-0">
      <AiStars />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame21 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Proposal AI</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#ebebff] box-border content-stretch flex gap-[8px] items-center px-[8px] py-[3px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#1d1e20] text-[10px] text-center text-nowrap whitespace-pre">Beta</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame23 />
      <Frame22 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame20 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center w-full">Proposal AI reads your LOI and automatically fills in the form.</p>
    </div>
  );
}

function Upload() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_2959)" id="Upload">
          <path d={svgPaths.pbbca980} fill="var(--fill-0, white)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_1_2959">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonV1() {
  return (
    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button v2">
      <Upload />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Click to upload</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4837b9] text-[14px] text-center text-nowrap whitespace-pre">{` or drag and drop`}</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
      <Frame66 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
      <ButtonV1 />
      <Frame65 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Frame47 />
          <div className="h-[74px] mix-blend-multiply relative shrink-0 w-[200px]" data-name="CleanShot 2025-09-11 at 11.16.44@2x 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[161.33%] left-[-10.45%] max-w-none top-[-30.67%] w-[120.9%]" src={imgCleanShot20250911At1116442X1} />
            </div>
          </div>
          <Frame70 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#c928ff] border-dashed inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative rounded-[16px] shrink-0 w-full">
      <Frame67 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-0 relative w-full">
          <Frame68 />
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame69 />
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

function ButtonV2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[4px] items-center justify-center left-[-30px] p-[8px] top-0" data-name="Button v2">
      <BackArrow />
    </div>
  );
}

function ChevronUp() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChevronUp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_2948)" id="ChevronUp">
          <path d={svgPaths.pb79ab80} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_1_2948">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1e20] text-[18px] text-nowrap whitespace-pre">Proposal info</p>
      <ChevronUp />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Proposal name</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame32 />
    </div>
  );
}

function Icons() {
  return <div className="content-stretch flex gap-[8px] items-center shrink-0" data-name="Icons" />;
}

function ValueInfo() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons />
    </div>
  );
}

function Frame52() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame25 />
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
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">&nbsp;</p>
          <SelectOptions />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame34 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame52 />
      </div>
      <Frame39 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Proposal type</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame33 />
    </div>
  );
}

function Icons1() {
  return <div className="content-stretch flex gap-[8px] items-center shrink-0" data-name="Icons" />;
}

function ValueInfo1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Value Info">
      <Icons1 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame30 />
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

function Frame36() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
      <Close />
    </div>
  );
}

function SelectOptions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame36 />
    </div>
  );
}

function Field1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">Landlord Proposal</p>
          <SelectOptions1 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field1 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame37 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame53 />
      </div>
      <Frame40 />
    </div>
  );
}

function Frame38() {
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

function Frame31() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame38 />
    </div>
  );
}

function Icons2() {
  return <div className="content-stretch flex gap-[8px] items-center shrink-0" data-name="Icons" />;
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
      <Frame31 />
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

function Frame41() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
      <Calendar />
    </div>
  );
}

function SelectOptions2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame41 />
    </div>
  );
}

function Field2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">09/17/2025</p>
          <SelectOptions2 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field2 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame42 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame54 />
      </div>
      <Frame43 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Lease type</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame44 />
    </div>
  );
}

function DealSettings() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="deal settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_22_26377)" id="deal settings">
          <g id="Shape">
            <path d={svgPaths.p3c28ec00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p3ab63a00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p262dcf00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p1064e600} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.pa01cb00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p2979cb00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p1695f180} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p1006c200} fill="var(--fill-0, #4837B9)" />
            <path clipRule="evenodd" d={svgPaths.p2ceef40} fill="var(--fill-0, #4837B9)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_22_26377">
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

function Frame55() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame45 />
      <ValueInfo3 />
    </div>
  );
}

function ChevronDown() {
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

function Frame46() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
      <ChevronDown />
    </div>
  );
}

function SelectOptions3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame46 />
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

function Frame48() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field3 />
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

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame55 />
      </div>
      <Frame49 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Discount rate</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame50 />
    </div>
  );
}

function DealSettings1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="deal settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_22_26377)" id="deal settings">
          <g id="Shape">
            <path d={svgPaths.p3c28ec00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p3ab63a00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p262dcf00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p1064e600} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.pa01cb00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p2979cb00} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p1695f180} fill="var(--fill-0, #4837B9)" />
            <path d={svgPaths.p1006c200} fill="var(--fill-0, #4837B9)" />
            <path clipRule="evenodd" d={svgPaths.p2ceef40} fill="var(--fill-0, #4837B9)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_22_26377">
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

function Frame56() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame51 />
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

function Frame57() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field4 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame57 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame56 />
      </div>
      <Frame58 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">Execution date</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame60 />
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

function Frame62() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <Frame61 />
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

function Frame35() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center p-[4px] relative shrink-0">
      <Calendar1 />
    </div>
  );
}

function SelectOptions5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Select Options">
      <Frame35 />
    </div>
  );
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

function Frame63() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Field5 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
      <Frame63 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame62 />
      </div>
      <Frame64 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <Frame11 />
          <div className="bg-[#d6d8db] h-px shrink-0 w-full" />
          <Frame24 />
          <Frame26 />
          <Frame27 />
          <Frame28 />
          <Frame59 />
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function ButtonV3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button v2">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4837b9] text-[14px] text-center text-nowrap whitespace-pre">Cancel</p>
    </div>
  );
}

function ButtonV4() {
  return (
    <div className="bg-[#4837b9] box-border content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button v2">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Save</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d6d8db] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start justify-end p-[16px] relative w-full">
          <ButtonV3 />
          <ButtonV4 />
        </div>
      </div>
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[632px]" data-name="Left Panel">
      <Frame14 />
      <Frame12 />
      <Frame72 />
      <ButtonV2 />
      <Frame10 />
      <Frame15 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[1160px] overflow-clip relative shrink-0 w-[1367px]">
      <div className="absolute h-[1160px] right-[0.12px] top-0 w-[2048.88px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
      <div className="absolute h-[1159px] right-[-0.12px] top-px w-[2047.12px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute h-[1160px] right-[-0.12px] top-px w-[2048.88px]" data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start right-px">
      <LeftPanel />
      <Frame18 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Cash flow</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <Frame8 />
      <div className="bg-[#009696] h-[2px] shrink-0 w-full" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Generate LOI</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
      <Frame9 />
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
    </div>
  );
}

export default function Frame71() {
  return (
    <div className="relative size-full">
      <Frame19 />
      <div className="absolute bg-[#f7fafc] h-[47px] left-[635px] top-[18px] w-[315px]" />
      <TabsBeta1 />
    </div>
  );
}