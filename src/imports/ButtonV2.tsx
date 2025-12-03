import svgPaths from "./svg-i961yt4c5f";

function Upload() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_16_12779)" id="Upload">
          <path d={svgPaths.pbbca980} fill="var(--fill-0, white)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_16_12779">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function ButtonV() {
  return (
    <div className="relative rounded-[4px] size-full" data-name="Button v2" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 161 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(26.445 5.6111 -9.3611 53.004 -48.432 -11.667)\\\'><stop stop-color=\\\'rgba(118,32,205,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(136,34,170,1)\\\' offset=\\\'0.48558\\\'/><stop stop-color=\\\'rgba(108,31,133,1)\\\' offset=\\\'0.61418\\\'/><stop stop-color=\\\'rgba(80,29,97,1)\\\' offset=\\\'0.74279\\\'/><stop stop-color=\\\'rgba(52,26,60,1)\\\' offset=\\\'0.87139\\\'/><stop stop-color=\\\'rgba(38,25,42,1)\\\' offset=\\\'0.9357\\\'/><stop stop-color=\\\'rgba(24,24,24,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-0 relative size-full">
          <Upload />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Click to upload</p>
        </div>
      </div>
    </div>
  );
}