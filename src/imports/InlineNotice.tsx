import svgPaths from "./svg-9tcsvvqqrr";

function Warning() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Warning">
          <path d={svgPaths.p3e30a100} fill="var(--fill-0, #1D1E20)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start px-0 py-[2px] relative shrink-0">
      <Warning />
    </div>
  );
}

export default function InlineNotice() {
  return (
    <div className="relative rounded-[4px] size-full" data-name="Inline notice">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start pl-[8px] pr-[4px] py-[8px] relative size-full">
          <Frame />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">AI responses aren’t always perfect. Please verify key details.</p>
        </div>
      </div>
    </div>
  );
}