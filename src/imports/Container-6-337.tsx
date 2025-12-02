function Paragraph() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Scenario A</p>
      </div>
    </div>
  );
}

function Container() {
  return <div className="absolute border-2 border-[#d6d8db] border-solid left-0 rounded-[16px] size-[20px] top-0" data-name="Container" />;
}

function Container1() {
  return (
    <div className="h-[20px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Container />
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Container1 />
      </div>
    </div>
  );
}

export default function Container2() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#7620cd] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <Paragraph />
          <Button />
        </div>
      </div>
    </div>
  );
}