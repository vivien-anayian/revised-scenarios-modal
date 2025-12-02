import imgImage from "figma:asset/9537fc666b9bba5437c2224bc378edb224ed708a.png";

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[298.016px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#1d1e20] text-[25px] text-nowrap top-0 whitespace-pre">Multiple scenarios found</p>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute left-[306.02px] size-[28px] top-[-2px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[1112px]" data-name="Container">
      <Paragraph />
      <Image />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-[0.5px] whitespace-pre">{`This LOI includes more than one option. Select the scenario you'd like to parse so we can autofill the proposal form with the right details.`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[20px] items-start left-0 pb-0 pl-[5px] pr-[205.766px] pt-[9.5px] top-[32px] w-[1112px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[52px] relative shrink-0 w-[972px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Rentable size</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">12,000 RSF</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Term duration</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">24 months</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Base rent</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">1-7: $55.00 sf/year</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">8-60: $150.00 sf/year</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">61-120: $118.00 sf/year</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Base rent escalation</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">13: 8.0%, annually</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Free rent</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">1-12: 8.0%, one time</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">8–31: 100%, gross</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">10–16: 80%, gross</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">17–20: 100%, net</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-[100px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph12 />
      <Paragraph13 />
      <Paragraph14 />
      <Paragraph15 />
      <Paragraph16 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Parking:</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] top-0 w-[179px]">1-60: $150.00 $/qty/mo (Qty: 2)</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph17 />
      <Paragraph18 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[181px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Percentage rent:</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[20px] left-0 top-[20px] w-[181px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">1-12: Unnatural breakpoint</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[40px] w-[165px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">{`> $24,000,000: 4.0%`}</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[60px] w-[165px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">{`> $25,000,000: 5.0%`}</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[20px] left-0 top-[80px] w-[181px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">13-84: Unnatural breakpoint</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[100px] w-[165px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">{`> $26,000,000: 6.0%`}</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <Paragraph19 />
      <Paragraph20 />
      <Paragraph21 />
      <Paragraph22 />
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Options and rights</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Use, renewal, parking</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph25 />
      <Paragraph26 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Lease info</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Guarantor</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph27 />
      <Paragraph28 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Tenant risks</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Letter of credit, prepaid rent</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph29 />
      <Paragraph30 />
    </div>
  );
}

function ScenarioAContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[780px] items-start relative shrink-0 w-full" data-name="ScenarioAContent">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function ScenarioCard() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[855.5px] items-start left-[4px] pb-px pt-[54.5px] px-[24px] rounded-[30px] top-[4px] w-[229px]" data-name="ScenarioCard">
      <div aria-hidden="true" className="absolute border border-[#eff1f5] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <ScenarioAContent />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Rentable size</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">24,000 RSF</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph31 />
      <Paragraph32 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Term duration</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">32 months</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph33 />
      <Paragraph34 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Base rent</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">1-7: $55.00 sf/year</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph35 />
      <Paragraph36 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Base rent escalation</p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">13: 9.0%, annually</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph37 />
      <Paragraph38 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Free rent</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">1-12: 8.0%, one time</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">8–31: 100%, gross</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">10–16: 80%, gross</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph39 />
      <Paragraph40 />
      <Paragraph41 />
      <Paragraph42 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Options and rights</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Renewal, parking</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph43 />
      <Paragraph44 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Lease info</p>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Guarantor</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph45 />
      <Paragraph46 />
    </div>
  );
}

function ScenarioBContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[440px] items-start relative shrink-0 w-full" data-name="ScenarioBContent">
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function ScenarioCard1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[855.5px] items-start left-[241px] pb-px pt-[54.5px] px-[24px] rounded-[30px] top-[4px] w-[229px]" data-name="ScenarioCard">
      <div aria-hidden="true" className="absolute border border-[#eff1f5] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <ScenarioBContent />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Rentable size</p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">12,000 RSF</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph47 />
      <Paragraph48 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Term duration</p>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">24 months</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph49 />
      <Paragraph50 />
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Base rent</p>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">1-7: $55.00 sf/year</p>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">8-60: $150.00 sf/year</p>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">61-120: $118.00 sf/year</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph51 />
      <Paragraph52 />
      <Paragraph53 />
      <Paragraph54 />
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Base rent escalation</p>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">13: 8.0%, annually</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph55 />
      <Paragraph56 />
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Free rent</p>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">1-12: 8.0%, one time</p>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">8–31: 100%, gross</p>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">10–16: 80%, gross</p>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">17–20: 100%, net</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col h-[100px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph57 />
      <Paragraph58 />
      <Paragraph59 />
      <Paragraph60 />
      <Paragraph61 />
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Parking:</p>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] top-0 w-[179px]">1-60: $150.00 $/qty/mo (Qty: 2)</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph62 />
      <Paragraph63 />
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[181px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Percentage rent:</p>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="absolute h-[20px] left-0 top-[20px] w-[181px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">1-12: Unnatural breakpoint</p>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[40px] w-[165px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">{`> $24,000,000: 4.0%`}</p>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="absolute h-[20px] left-0 top-[60px] w-[181px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">{`> $25,000,000: 5.0%`}</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <Paragraph64 />
      <Paragraph65 />
      <Paragraph66 />
      <Paragraph67 />
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Options and rights</p>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Use, renewal, parking</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph68 />
      <Paragraph69 />
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Lease info</p>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Guarantor</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph70 />
      <Paragraph71 />
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Tenant risks</p>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Letter of credit, prepaid rent</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph72 />
      <Paragraph73 />
    </div>
  );
}

function ScenarioCContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[740px] items-start relative shrink-0 w-full" data-name="ScenarioCContent">
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function ScenarioCard2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[855.5px] items-start left-[478px] pb-px pt-[54.5px] px-[24px] rounded-[30px] top-[4px] w-[229px]" data-name="ScenarioCard">
      <div aria-hidden="true" className="absolute border border-[#eff1f5] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <ScenarioCContent />
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Rentable size</p>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">30,000 RSF</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph74 />
      <Paragraph75 />
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Term duration</p>
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">60 months</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph76 />
      <Paragraph77 />
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Base rent</p>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">1-12: $50.00 sf/year</p>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">13-36: $140.00 sf/year</p>
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">37-60: $155.00 sf/year</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph78 />
      <Paragraph79 />
      <Paragraph80 />
      <Paragraph81 />
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Base rent escalation</p>
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">13: 6.0%, annually</p>
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">25: 5.5%, annually</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph82 />
      <Paragraph83 />
      <Paragraph84 />
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Free rent</p>
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">1-9: 100%, gross</p>
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">10–18: 75%, gross</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph85 />
      <Paragraph86 />
      <Paragraph87 />
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] text-nowrap top-0 whitespace-pre">Options and rights</p>
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d1e20] text-[13px] top-0 w-[171px]">Use, renewal, expansion, parking, first right of refusal</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph88 />
      <Paragraph89 />
    </div>
  );
}

function ScenarioDContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[440px] items-start relative shrink-0 w-full" data-name="ScenarioDContent">
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function ScenarioCard3() {
  return (
    <div className="absolute bg-[#f5f7fa] box-border content-stretch flex flex-col h-[855.5px] items-start left-[715px] pb-[3px] pt-[56.5px] px-[26px] rounded-[30px] top-[4px] w-[229px]" data-name="ScenarioCard">
      <div aria-hidden="true" className="absolute border-[#7620cd] border-[3px] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <ScenarioDContent />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[863.5px] left-0 top-0 w-[969px]" data-name="Container">
      <ScenarioCard />
      <ScenarioCard1 />
      <ScenarioCard2 />
      <ScenarioCard3 />
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] top-[0.5px] w-[74px]">Scenario A</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[20px] items-start left-[13px] pb-0 pl-0 pr-[84.617px] pt-[0.5px] top-[8px] w-[158px]" data-name="Container">
      <Paragraph90 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[20px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[171px] rounded-[16px] size-[20px] top-[8px]" data-name="Container">
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[204px]" data-name="Container">
      <Container37 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border border-[#7620cd] border-solid h-[36px] left-0 rounded-[1.67772e+07px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[204px]" data-name="Container" />;
}

function ScenarioCard4() {
  return (
    <div className="absolute bg-white h-[36px] left-[16.5px] rounded-[1.67772e+07px] top-[15.5px] w-[204px]" data-name="ScenarioCard">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] top-[0.5px] w-[73px]">Scenario B</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[20px] items-start left-[13px] pb-0 pl-0 pr-[85.547px] pt-[0.5px] top-[8px] w-[158px]" data-name="Container">
      <Paragraph91 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[20px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[171px] rounded-[16px] size-[20px] top-[8px]" data-name="Container">
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[204px]" data-name="Container">
      <Container42 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border border-[#7620cd] border-solid h-[36px] left-0 rounded-[1.67772e+07px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[204px]" data-name="Container" />;
}

function ScenarioCard5() {
  return (
    <div className="absolute bg-white h-[36px] left-[253.5px] rounded-[1.67772e+07px] top-[15.5px] w-[204px]" data-name="ScenarioCard">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Paragraph92() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] top-[0.5px] w-[74px]">Scenario C</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[20px] items-start left-[13px] pb-0 pl-0 pr-[84.344px] pt-[0.5px] top-[8px] w-[158px]" data-name="Container">
      <Paragraph92 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[20px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[171px] rounded-[16px] size-[20px] top-[8px]" data-name="Container">
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[204px]" data-name="Container">
      <Container47 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border border-[#7620cd] border-solid h-[36px] left-0 rounded-[1.67772e+07px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[204px]" data-name="Container" />;
}

function ScenarioCard6() {
  return (
    <div className="absolute bg-white h-[36px] left-[490.5px] rounded-[1.67772e+07px] top-[15.5px] w-[204px]" data-name="ScenarioCard">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Paragraph93() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] w-[74px]">Scenario D</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[20px] items-start left-[13px] pb-0 pl-0 pr-[80.609px] pt-[0.5px] top-[8px] w-[154px]" data-name="Container">
      <Paragraph93 />
    </div>
  );
}

function Container53() {
  return <div className="absolute bg-white left-[6px] rounded-[1.67772e+07px] size-[8px] top-[6px]" data-name="Container" />;
}

function Container54() {
  return <div className="absolute border-2 border-solid border-white left-0 rounded-[16px] size-[20px] top-0" data-name="Container" />;
}

function Container55() {
  return (
    <div className="absolute left-[167px] rounded-[16px] size-[20px] top-[8px]" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function ScenarioCard7() {
  return (
    <div className="absolute h-[36px] left-[729.5px] rounded-[1.67772e+07px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[17.5px] w-[200px]" data-name="ScenarioCard" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 200 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -6.9844 -246.1 0 -40.18 -6.75)\\\'><stop stop-color=\\\'rgba(118,32,205,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(136,34,170,1)\\\' offset=\\\'0.5146\\\'/><stop stop-color=\\\'rgba(108,32,134,1)\\\' offset=\\\'0.63595\\\'/><stop stop-color=\\\'rgba(80,29,97,1)\\\' offset=\\\'0.7573\\\'/><stop stop-color=\\\'rgba(52,27,61,1)\\\' offset=\\\'0.87865\\\'/><stop stop-color=\\\'rgba(38,25,42,1)\\\' offset=\\\'0.93932\\\'/><stop stop-color=\\\'rgba(24,24,24,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <Container52 />
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[427px] overflow-clip relative shrink-0 w-[980px]" data-name="Container">
      <Container36 />
      <ScenarioCard4 />
      <ScenarioCard5 />
      <ScenarioCard6 />
      <ScenarioCard7 />
    </div>
  );
}

function Paragraph94() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[23px] not-italic text-[#1d1e20] text-[14px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">Cancel</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f5f7fa] h-[38px] relative rounded-[4px] shrink-0 w-[79.563px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f4f5f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start pb-px pt-[9px] px-[17px] relative w-[79.563px]">
        <Paragraph94 />
      </div>
    </div>
  );
}

function Paragraph95() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[30px] not-italic text-[14px] text-center text-nowrap text-white top-[0.5px] translate-x-[-50%] whitespace-pre">Continue</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38px] items-start pb-0 pt-[9px] px-[20px] relative w-full">
          <Paragraph95 />
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[12px] h-[38px] items-start relative shrink-0 w-[191.188px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[36px] h-[658px] items-start px-[20px] py-[34px] relative rounded-[12px] shrink-0 w-[1020px]">
      <div aria-hidden="true" className="absolute border-2 border-[#7620cd] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <Container2 />
      <Container56 />
      <Container57 />
    </div>
  );
}

export default function Container58() {
  return (
    <div className="bg-[#f8fafb] relative rounded-[12px] shadow-[0px_4px_32px_0px_rgba(127,33,187,0.5)] size-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-px pr-0 py-0 relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}