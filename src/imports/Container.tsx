function Paragraph() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.5px] whitespace-pre">Scenario B</p>
      </div>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-white left-[6px] rounded-[1.67772e+07px] size-[8px] top-[6px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute border-2 border-solid border-white left-0 rounded-[16px] size-[20px] top-0" data-name="Container" />;
}

function Container2() {
  return (
    <div className="h-[20px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Container2 />
      </div>
    </div>
  );
}

export default function Container3() {
  return (
    <div className="relative rounded-[1.67772e+07px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] size-full" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 207 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -6.9844 -254.71 0 -41.586 -6.75)\\\'><stop stop-color=\\\'rgba(118,32,205,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(136,34,170,1)\\\' offset=\\\'0.5146\\\'/><stop stop-color=\\\'rgba(108,32,134,1)\\\' offset=\\\'0.63595\\\'/><stop stop-color=\\\'rgba(80,29,97,1)\\\' offset=\\\'0.7573\\\'/><stop stop-color=\\\'rgba(52,27,61,1)\\\' offset=\\\'0.87865\\\'/><stop stop-color=\\\'rgba(38,25,42,1)\\\' offset=\\\'0.93932\\\'/><stop stop-color=\\\'rgba(24,24,24,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-0 relative size-full">
          <Paragraph />
          <Button />
        </div>
      </div>
    </div>
  );
}