import imgImage from "figma:asset/9537fc666b9bba5437c2224bc378edb224ed708a.png";

function Image() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Image">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] w-[16px]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[190.734px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[190.734px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#1d1e20] text-[16px] text-nowrap top-[-1px] whitespace-pre">Multiple scenarios found</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center relative w-[1112px]">
        <Image />
        <Paragraph />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[1112px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[1112px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">{`This LOI includes more than one option. Select the scenario you'd like to parse so we can autofill the proposal form with the right details.`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[52px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[52px] items-start relative w-full">
        <Container />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute box-border content-stretch flex h-[85px] items-start justify-between left-0 pb-px pt-[16px] px-[24px] top-0 w-[1160px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-[79.563px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f4f5f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38px] relative w-[79.563px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[40px] not-italic text-[#1d1e20] text-[14px] text-center text-nowrap top-[9.5px] translate-x-[-50%] whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#4837b9] h-[36px] relative rounded-[4px] shrink-0 w-[91.625px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[91.625px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[46px] not-italic text-[14px] text-center text-nowrap text-white top-[8.5px] translate-x-[-50%] whitespace-pre">Continue</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[12px] h-[71px] items-center justify-end left-0 pb-0 pl-0 pr-[24px] pt-px rounded-bl-[12px] rounded-br-[12px] top-[565px] w-[1160px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <Button />
      <Button1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[74.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[74.813px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">12,000 RSF</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.609px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[76.609px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">24,000 RSF</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f5f7fa] h-[52px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[74.656px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[74.656px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">18,000 RSF</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.141px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[77.141px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">30,000 RSF</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph5 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-[240px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[52px] relative w-[240px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#1d1e20] text-[14px] text-nowrap top-[16.5px] whitespace-pre">15,000 RSF</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute box-border content-stretch flex h-[53px] items-start left-0 pb-px pl-[200px] pr-0 pt-0 top-[71px] w-[1400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.742px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[70.742px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">24 months</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph7 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.875px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[70.875px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">32 months</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f5f7fa] h-[52px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph8 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.141px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[71.141px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">36 months</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph9 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.977px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[70.977px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">60 months</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph10 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-[240px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[52px] relative w-[240px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#1d1e20] text-[14px] text-nowrap top-[16.5px] whitespace-pre">48 months</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute box-border content-stretch flex h-[53px] items-start left-0 pb-px pl-[200px] pr-0 pt-0 top-[124px] w-[1400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Paragraph11 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[60px] relative shrink-0 w-[154.125px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[60px] relative w-[154.125px]">
        <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] top-[0.5px] w-[155px]">
          <p className="mb-0">1-7: $55.00 sf/year</p>
          <p className="mb-0">8-60: $150.00 sf/year</p>
          <p>61-120: $118.00 sf/year</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white h-[92px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[92px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph12 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[124.195px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[124.195px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">1-7: $55.00 sf/year</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#f5f7fa] h-[92px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[92px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph13 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[40px] relative shrink-0 w-[150.109px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[150.109px]">
        <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] top-[0.5px] w-[151px]">
          <p className="mb-0">1-12: $60.00 sf/year</p>
          <p>13-36: $165.00 sf/year</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white h-[92px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[92px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph14 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[60px] relative shrink-0 w-[151.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[60px] relative w-[151.375px]">
        <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] top-[0.5px] w-[152px]">
          <p className="mb-0">1-12: $50.00 sf/year</p>
          <p className="mb-0">13-36: $140.00 sf/year</p>
          <p>37-60: $155.00 sf/year</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white h-[92px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[92px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph15 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="bg-white h-[92px] relative shrink-0 w-[240px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[92px] relative w-[240px]">
        <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#1d1e20] text-[14px] top-[16.5px] w-[151px]">
          <p className="mb-0">1-12: $58.00 sf/year</p>
          <p>13-48: $162.00 sf/year</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute box-border content-stretch flex h-[93px] items-start left-0 pb-px pl-[200px] pr-0 pt-0 top-[177px] w-[1400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Paragraph16 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[117.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[117.75px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">13: 8.0%, annually</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[72px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph17 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[117.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[117.813px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">13: 9.0%, annually</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f5f7fa] h-[72px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[72px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph18 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[115.602px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[115.602px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">13: 7.5%, annually</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[72px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph19 />
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[40px] relative shrink-0 w-[119.063px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[119.063px]">
        <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] top-[0.5px] w-[120px]">
          <p className="mb-0">13: 6.0%, annually</p>
          <p>25: 5.5%, annually</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[72px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph20 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-[240px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[240px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#1d1e20] text-[14px] text-nowrap top-[16.5px] whitespace-pre">13: 8.5%, annually</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute box-border content-stretch flex h-[73px] items-start left-0 pb-px pl-[200px] pr-0 pt-0 top-[270px] w-[1400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Paragraph21 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[80px] relative shrink-0 w-[132.883px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[80px] relative w-[132.883px]">
        <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] top-[0.5px] w-[133px]">
          <p className="mb-0">1-12: 8.0%, one time</p>
          <p className="mb-0">8–31: 100%, gross</p>
          <p className="mb-0">10–16: 80%, gross</p>
          <p>17–20: 100%, net</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white h-[112px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[112px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph22 />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[60px] relative shrink-0 w-[132.883px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[60px] relative w-[132.883px]">
        <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] top-[0.5px] w-[133px]">
          <p className="mb-0">1-12: 8.0%, one time</p>
          <p className="mb-0">8–31: 100%, gross</p>
          <p>10–16: 80%, gross</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#f5f7fa] h-[112px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[112px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph23 />
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[40px] relative shrink-0 w-[110.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[110.75px]">
        <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] top-[0.5px] w-[111px]">
          <p className="mb-0">1-6: 100%, gross</p>
          <p>7–12: 50%, gross</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white h-[112px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[112px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph24 />
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[40px] relative shrink-0 w-[117.273px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[117.273px]">
        <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] top-[0.5px] w-[118px]">
          <p className="mb-0">1-9: 100%, gross</p>
          <p>10–18: 75%, gross</p>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white h-[112px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[112px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph25 />
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="bg-white h-[112px] relative shrink-0 w-[240px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[112px] relative w-[240px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#1d1e20] text-[14px] text-nowrap top-[16.5px] whitespace-pre">1-8: 100%, gross</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute box-border content-stretch flex h-[113px] items-start left-0 pb-px pl-[200px] pr-0 pt-0 top-[343px] w-[1400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Paragraph26 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[142.93px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[142.93px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Use, renewal, parking</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[72px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph27 />
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[20px] relative shrink-0 w-[113.117px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[113.117px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Renewal, parking</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#f5f7fa] h-[72px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[72px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph28 />
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] top-[0.5px] w-[165px]">Use, renewal, expansion, parking</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[72px] items-start pb-0 pl-[16px] pr-[17px] pt-[16px] relative w-[240px]">
        <Paragraph29 />
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] top-[0.5px] w-[184px]">Use, renewal, expansion, parking, first right of refusal</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[72px] items-start pb-0 pl-[16px] pr-[17px] pt-[16px] relative w-[240px]">
        <Paragraph30 />
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-[240px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[72px] relative w-[240px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#1d1e20] text-[14px] text-nowrap top-[16.5px] whitespace-pre">Renewal, parking</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute box-border content-stretch flex h-[73px] items-start left-0 pb-px pl-[200px] pr-0 pt-0 top-[456px] w-[1400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
      <Paragraph31 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.305px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[66.305px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Guarantor</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph32 />
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.305px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[66.305px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Guarantor</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#f5f7fa] h-[52px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph33 />
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[20px] relative shrink-0 w-[181.125px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[181.125px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Guarantor, Security deposit</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph34 />
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-[240px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[52px] relative w-[240px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#1d1e20] text-[14px] text-nowrap top-[16.5px] whitespace-pre">Guarantor</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute box-border content-stretch flex h-[53px] items-start left-0 pb-px pl-[200px] pr-0 pt-0 top-[529px] w-[1400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container34 />
      <Container35 />
      {[...Array(2).keys()].map((_, i) => (
        <Container36 key={i} />
      ))}
      <Paragraph35 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[20px] relative shrink-0 w-[187.117px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[187.117px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Letter of credit, prepaid rent</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph36 />
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.82px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[98.82px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Letter of credit</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#f5f7fa] h-[52px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph37 />
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.82px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[98.82px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Letter of credit</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-start pb-0 pl-[16px] pr-px pt-[16px] relative w-[240px]">
        <Paragraph38 />
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-[240px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[52px] relative w-[240px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#1d1e20] text-[14px] text-nowrap top-[16.5px] whitespace-pre">Letter of credit</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute box-border content-stretch flex h-[53px] items-start left-0 pb-px pl-[200px] pr-0 pt-0 top-[582px] w-[1400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container38 />
      <Paragraph39 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[635px] left-0 top-0 w-[1400px]" data-name="Container">
      <Container8 />
      <Container13 />
      <Container18 />
      <Container23 />
      <Container28 />
      <Container33 />
      <Container37 />
      <Container41 />
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[16px] w-[90.719px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Rentable size</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-white border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid h-[52px] left-0 top-[71px] w-[200px]" data-name="Container">
      <Paragraph40 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[16px] w-[94.828px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Term duration</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-white border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid h-[52px] left-0 top-[124px] w-[200px]" data-name="Container">
      <Paragraph41 />
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[16px] w-[64.102px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Base rent</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-white border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid h-[92px] left-0 top-[177px] w-[200px]" data-name="Container">
      <Paragraph42 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[16px] w-[137.398px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Base rent escalation</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-white border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid h-[72px] left-0 top-[270px] w-[200px]" data-name="Container">
      <Paragraph43 />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[16px] w-[60.781px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Free rent</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-white border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid h-[112px] left-0 top-[343px] w-[200px]" data-name="Container">
      <Paragraph44 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[16px] w-[125.086px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Options and rights</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-white border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid h-[72px] left-0 top-[456px] w-[200px]" data-name="Container">
      <Paragraph45 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[16px] w-[69.414px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Lease info</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-white border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid h-[52px] left-0 top-[529px] w-[200px]" data-name="Container">
      <Paragraph46 />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[16px] w-[82.867px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Tenant risks</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-white border-[#f4f5f6] border-[0px_1px_0px_0px] border-solid h-[52px] left-0 top-[582px] w-[200px]" data-name="Container">
      <Paragraph47 />
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Scenario A</p>
      </div>
    </div>
  );
}

function Container51() {
  return <div className="absolute border-2 border-[#d6d8db] border-solid left-0 rounded-[16px] size-[20px] top-0" data-name="Container" />;
}

function Container52() {
  return (
    <div className="h-[20px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Container51 />
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Container52 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-white h-[38px] relative rounded-[1.67772e+07px] shrink-0 w-[207px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#7620cd] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[38px] items-center justify-between px-[13px] py-px relative w-[207px]">
        <Paragraph48 />
        <Button2 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-white h-[71px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[71px] items-center justify-center pb-px pl-0 pr-px pt-0 relative w-[240px]">
        <Container53 />
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.5px] whitespace-pre">Scenario B</p>
      </div>
    </div>
  );
}

function Container55() {
  return <div className="absolute bg-white left-[6px] rounded-[1.67772e+07px] size-[8px] top-[6px]" data-name="Container" />;
}

function Container56() {
  return <div className="absolute border-2 border-solid border-white left-0 rounded-[16px] size-[20px] top-0" data-name="Container" />;
}

function Container57() {
  return (
    <div className="h-[20px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Container57 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[36px] relative rounded-[1.67772e+07px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-[207px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 207 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -6.9844 -254.71 0 -41.586 -6.75)\\\'><stop stop-color=\\\'rgba(118,32,205,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(136,34,170,1)\\\' offset=\\\'0.5146\\\'/><stop stop-color=\\\'rgba(108,32,134,1)\\\' offset=\\\'0.63595\\\'/><stop stop-color=\\\'rgba(80,29,97,1)\\\' offset=\\\'0.7573\\\'/><stop stop-color=\\\'rgba(52,27,61,1)\\\' offset=\\\'0.87865\\\'/><stop stop-color=\\\'rgba(38,25,42,1)\\\' offset=\\\'0.93932\\\'/><stop stop-color=\\\'rgba(24,24,24,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between px-[12px] py-0 relative w-[207px]">
        <Paragraph49 />
        <Button3 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#f5f7fa] h-[71px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[71px] items-center justify-center pb-px pl-0 pr-px pt-0 relative w-[240px]">
        <Container58 />
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Scenario C</p>
      </div>
    </div>
  );
}

function Container60() {
  return <div className="absolute border-2 border-[#d6d8db] border-solid left-0 rounded-[16px] size-[20px] top-0" data-name="Container" />;
}

function Container61() {
  return (
    <div className="h-[20px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Container60 />
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Container61 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-white h-[38px] relative rounded-[1.67772e+07px] shrink-0 w-[207px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#7620cd] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[38px] items-center justify-between px-[13px] py-px relative w-[207px]">
        <Paragraph50 />
        <Button4 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-white h-[71px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[71px] items-center justify-center pb-px pl-0 pr-px pt-0 relative w-[240px]">
        <Container62 />
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Scenario D</p>
      </div>
    </div>
  );
}

function Container64() {
  return <div className="absolute border-2 border-[#d6d8db] border-solid left-0 rounded-[16px] size-[20px] top-0" data-name="Container" />;
}

function Container65() {
  return (
    <div className="h-[20px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Container64 />
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Container65 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-white h-[38px] relative rounded-[1.67772e+07px] shrink-0 w-[207px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#7620cd] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[38px] items-center justify-between px-[13px] py-px relative w-[207px]">
        <Paragraph51 />
        <Button5 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-white h-[71px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[71px] items-center justify-center pb-px pl-0 pr-px pt-0 relative w-[240px]">
        <Container66 />
      </div>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Scenario E</p>
      </div>
    </div>
  );
}

function Container68() {
  return <div className="absolute border-2 border-[#d6d8db] border-solid left-0 rounded-[16px] size-[20px] top-0" data-name="Container" />;
}

function Container69() {
  return (
    <div className="h-[20px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Container68 />
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Container69 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-white h-[38px] relative rounded-[1.67772e+07px] shrink-0 w-[208px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#7620cd] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[38px] items-center justify-between px-[13px] py-px relative w-[208px]">
        <Paragraph52 />
        <Button6 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-white h-[71px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4f5f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[71px] items-center justify-center pb-px pt-0 px-0 relative w-[240px]">
        <Container70 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute box-border content-stretch flex h-[71px] items-start left-0 pl-[200px] pr-0 py-0 top-0 w-[1400px]" data-name="Container">
      <Container54 />
      <Container59 />
      <Container63 />
      <Container67 />
      <Container71 />
    </div>
  );
}

function Container73() {
  return <div className="absolute bg-white border-[#f4f5f6] border-[0px_1px_1px_0px] border-solid h-[72px] left-0 top-[-1px] w-[200px]" data-name="Container" />;
}

function Container74() {
  return (
    <div className="absolute h-[480px] left-0 overflow-clip top-[85px] w-[1160px]" data-name="Container">
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
      <Container47 />
      <Container48 />
      <Container49 />
      <Container50 />
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-white h-[636px] relative rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container74 />
    </div>
  );
}

export default function Container76() {
  return (
    <div className="bg-[#f8fafb] relative rounded-[12px] shadow-[0px_4px_32px_0px_rgba(127,33,187,0.5)] size-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-px pr-0 py-0 relative size-full">
          <Container75 />
        </div>
      </div>
    </div>
  );
}