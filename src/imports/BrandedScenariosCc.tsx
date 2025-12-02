import imgImage from "figma:asset/9537fc666b9bba5437c2224bc378edb224ed708a.png";
import { img11280OneTime831100Gross101680, img11280OneTime831100Gross101681, img11280OneTime831100Gross101682 } from "./svg-br741";

function App() {
  return <div className="absolute bg-neutral-100 h-[941px] left-0 top-0 w-[1406px]" data-name="App" />;
}

function Paragraph() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d1e20] text-[25px] text-nowrap whitespace-pre">Multiple scenarios found</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Image">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[28px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center relative w-[1112px]">
        <Paragraph />
        <Image />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[1112px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[1112px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[5px] not-italic text-[#1d1e20] text-[14px] text-nowrap top-[9.5px] whitespace-pre">{`This LOI includes more than one option. Select the scenario you'd like to parse so we can autofill the proposal form with the right details.`}</p>
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
    <div className="absolute box-border content-stretch flex h-[85px] items-start justify-between left-0 pb-0 pt-[16px] px-[24px] top-[18px] w-[1160px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1d1e20] text-[13px] top-0">
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-66px] mask-size-[229px_496px] text-[0px] top-[66px] w-[133px]" style={{ maskImage: `url('${img11280OneTime831100Gross101680}')` }}>
        <p className="mb-0">Rentable size</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">12,000 RSF</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-126px] mask-size-[229px_496px] text-[0px] top-[126px] w-[133px]" style={{ maskImage: `url('${img11280OneTime831100Gross101680}')` }}>
        <p className="mb-0">Term duration</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">24 months</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-186px] mask-size-[229px_496px] text-[0px] top-[186px] w-[199px]" style={{ maskImage: `url('${img11280OneTime831100Gross101680}')` }}>
        <p className="mb-0">Base rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">1-7: $55.00 sf/year</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">8-60: $150.00 sf/year</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">61-120: $118.00 sf/year</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-286px] mask-size-[229px_496px] text-[0px] top-[286px] w-[199px]" style={{ maskImage: `url('${img11280OneTime831100Gross101680}')` }}>
        <p className="mb-0">Base rent escalation</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">13: 8.0%, annually</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-346px] mask-size-[229px_496px] top-[346px] w-[199px]" style={{ maskImage: `url('${img11280OneTime831100Gross101680}')` }}>
        <p className="mb-0">Free rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">1-12: 8.0%, one time</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">8–31: 100%, gross</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">10–16: 80%, gross</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">17–20: 100%, net</p>
      </div>
      <div className="absolute h-[27px] leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-466px] mask-size-[229px_496px] top-[466px] w-[199px]" style={{ maskImage: `url('${img11280OneTime831100Gross101680}')` }}>
        <p className="mb-0">Options and rights</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">1-12: 8.0%, one time</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">8–31: 100%, gross</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">10–16: 80%, gross</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">17–20: 100%, net</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[15px] text-nowrap top-[-0.5px] whitespace-pre">Scenario A</p>
      </div>
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[#eceff3] left-[2.5px] rounded-[34.5px] size-[23px] top-[-1.5px]" data-name="Container" />;
}

function Container4() {
  return (
    <div className="h-[20px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Container4 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[38px] items-center justify-between left-[11.5px] px-[13px] py-px rounded-[1.67772e+07px] top-[10.5px] w-[207px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#7620cd] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Paragraph2 />
      <Button />
    </div>
  );
}

function NewContainer() {
  return (
    <div className="absolute h-[496px] left-[30px] overflow-clip rounded-[30px] top-[128px] w-[229px]" data-name="New Container">
      <Group />
      <div className="absolute border border-[#eff1f5] border-solid h-[496px] left-0 rounded-[30px] top-0 w-[229px]" />
      <Container5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1d1e20] text-[13px] top-0">
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-66px] mask-size-[229px_496px] text-[0px] top-[66px] w-[133px]" style={{ maskImage: `url('${img11280OneTime831100Gross101681}')` }}>
        <p className="mb-0">Rentable size</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">18,000 RSF</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-126px] mask-size-[229px_496px] text-[0px] top-[126px] w-[133px]" style={{ maskImage: `url('${img11280OneTime831100Gross101681}')` }}>
        <p className="mb-0">Term duration</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">36 months</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-186px] mask-size-[229px_496px] text-[0px] top-[186px] w-[199px]" style={{ maskImage: `url('${img11280OneTime831100Gross101681}')` }}>
        <p className="mb-0">Base rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">1-12: $60.00 sf/year</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">13-36: $165.00 sf/year</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-266px] mask-size-[229px_496px] text-[0px] top-[266px] w-[199px]" style={{ maskImage: `url('${img11280OneTime831100Gross101681}')` }}>
        <p className="mb-0">Base rent escalation</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">13: 7.5%, annually</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-326px] mask-size-[229px_496px] top-[326px] w-[199px]" style={{ maskImage: `url('${img11280OneTime831100Gross101681}')` }}>
        <p className="mb-0">Free rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">1-6: 100%, gross</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">7–12: 50%, gross</p>
      </div>
      <div className="absolute h-[59px] leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-406px] mask-size-[229px_496px] top-[406px] w-[188px]" style={{ maskImage: `url('${img11280OneTime831100Gross101681}')` }}>
        <p className="mb-0">Options and rights</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">Use, renewal, expansion, parking</p>
        <p className="text-[13px]">&nbsp;</p>
      </div>
      <div className="absolute h-[59px] leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-485px] mask-size-[229px_496px] top-[485px] w-[188px]" style={{ maskImage: `url('${img11280OneTime831100Gross101681}')` }}>
        <p className="mb-0">Lease info</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">Use, renewal, expansion, parking</p>
        <p className="text-[13px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[15px] text-nowrap top-[-0.5px] whitespace-pre">Scenario C</p>
      </div>
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[#eceff3] left-[2.5px] rounded-[34.5px] size-[23px] top-[-1.5px]" data-name="Container" />;
}

function Container7() {
  return (
    <div className="h-[20px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Container6 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Container7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[38px] items-center justify-between left-[11.5px] px-[13px] py-px rounded-[1.67772e+07px] top-[10.5px] w-[207px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#7620cd] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Paragraph3 />
      <Button1 />
    </div>
  );
}

function NewContainer1() {
  return (
    <div className="absolute h-[496px] left-[508px] overflow-clip rounded-[30px] top-[128px] w-[229px]" data-name="New Container">
      <Group1 />
      <div className="absolute border border-[#eff1f5] border-solid h-[496px] left-0 rounded-[30px] top-0 w-[229px]" />
      <Container8 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1d1e20] text-[13px] top-0">
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-66px] mask-size-[229px_496px] text-[0px] top-[66px] w-[133px]" style={{ maskImage: `url('${img11280OneTime831100Gross101681}')` }}>
        <p className="mb-0">Rentable size</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">30,000 RSF</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-126px] mask-size-[229px_496px] text-[0px] top-[126px] w-[133px]" style={{ maskImage: `url('${img11280OneTime831100Gross101681}')` }}>
        <p className="mb-0">Term duration</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">60 months</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-186px] mask-size-[229px_496px] text-[0px] top-[186px] w-[199px]" style={{ maskImage: `url('${img11280OneTime831100Gross101681}')` }}>
        <p className="mb-0">Base rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">{`1-12: $50.00 sf/year `}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">{`13-36: $140.00 sf/year `}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">37-60: $155.00 sf/year</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-286px] mask-size-[229px_496px] text-[0px] top-[286px] w-[199px]" style={{ maskImage: `url('${img11280OneTime831100Gross101681}')` }}>
        <p className="mb-0">Base rent escalation</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">13: 6.0%, annually</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">25: 5.5%, annually</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-366px] mask-size-[229px_496px] top-[366px] w-[199px]" style={{ maskImage: `url('${img11280OneTime831100Gross101681}')` }}>
        <p className="mb-0">Free rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">{`1-9: 100%, gross `}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">10–18: 75%, gross</p>
      </div>
      <div className="absolute h-[59px] leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-446px] mask-size-[229px_496px] top-[446px] w-[188px]" style={{ maskImage: `url('${img11280OneTime831100Gross101681}')` }}>
        <p className="mb-0">Options and rights</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">Use, renewal, expansion, parking, first right of refusal</p>
      </div>
      <div className="absolute h-[59px] leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-485px] mask-size-[229px_496px] top-[485px] w-[188px]" style={{ maskImage: `url('${img11280OneTime831100Gross101681}')` }}>
        <p className="mb-0">Lease info</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">Use, renewal, expansion, parking</p>
        <p className="text-[13px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[15px] text-nowrap top-[-0.5px] whitespace-pre">Scenario D</p>
      </div>
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-[#eceff3] left-[2.5px] rounded-[34.5px] size-[23px] top-[-1.5px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="h-[20px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <Container9 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Container10 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[38px] items-center justify-between left-[11.5px] px-[13px] py-px rounded-[1.67772e+07px] top-[10.5px] w-[207px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#7620cd] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Paragraph4 />
      <Button2 />
    </div>
  );
}

function NewContainer2() {
  return (
    <div className="absolute h-[496px] left-[747px] overflow-clip rounded-[30px] top-[128px] w-[229px]" data-name="New Container">
      <Group2 />
      <div className="absolute border border-[#eff1f5] border-solid h-[496px] left-0 rounded-[30px] top-0 w-[229px]" />
      <Container11 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1d1e20] text-[13px] top-0">
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-66px] mask-size-[229px_496px] top-[66px] w-[133px]" style={{ maskImage: `url('${img11280OneTime831100Gross101682}')` }}>
        <p className="mb-0">Rentable size</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">24,000 RSF</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-126px] mask-size-[229px_496px] top-[126px] w-[133px]" style={{ maskImage: `url('${img11280OneTime831100Gross101682}')` }}>
        <p className="mb-0">Term duration</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">32 months</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-186px] mask-size-[229px_496px] top-[186px] w-[199px]" style={{ maskImage: `url('${img11280OneTime831100Gross101682}')` }}>
        <p className="mb-0">Base rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">1-7: $55.00 sf/year</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-246px] mask-size-[229px_496px] top-[246px] w-[199px]" style={{ maskImage: `url('${img11280OneTime831100Gross101682}')` }}>
        <p className="mb-0">Base rent escalation</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">13: 9.0%, annually</p>
      </div>
      <div className="absolute leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-306px] mask-size-[229px_496px] top-[306px] w-[199px]" style={{ maskImage: `url('${img11280OneTime831100Gross101682}')` }}>
        <p className="mb-0">Free rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">1-12: 8.0%, one time</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 not-italic">8–31: 100%, gross</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">10–16: 80%, gross</p>
      </div>
      <div className="absolute h-[39px] leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-406px] mask-size-[229px_496px] top-[406px] w-[199px]" style={{ maskImage: `url('${img11280OneTime831100Gross101682}')` }}>
        <p className="mb-0">Options and rights</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">Renewal, parking</p>
      </div>
      <div className="absolute h-[39px] leading-[20px] left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-23px_-465px] mask-size-[229px_496px] top-[465px] w-[199px]" style={{ maskImage: `url('${img11280OneTime831100Gross101682}')` }}>
        <p className="mb-0">Lease info</p>
        <p className="mb-0">Guarantor</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic">Renewal, parking</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[20px] left-[13px] top-[9px] w-[161px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[15px] text-nowrap text-white top-[-0.5px] whitespace-pre">Scenario B</p>
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-white left-[176.5px] opacity-20 rounded-[34.5px] size-[23px] top-[7.5px]" data-name="Container" />;
}

function Container13() {
  return <div className="absolute bg-white left-[180px] rounded-[24px] size-[16px] top-[11px]" data-name="Container" />;
}

function Container14() {
  return (
    <div className="absolute h-[38px] left-[11.5px] rounded-[1.67772e+07px] top-[10.5px] w-[207px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 207 38\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(31.758 4.5125 -8.2914 46.734 -41.577 -7.125)\\\'><stop stop-color=\\\'rgba(118,32,205,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(136,34,170,1)\\\' offset=\\\'0.48558\\\'/><stop stop-color=\\\'rgba(108,31,133,1)\\\' offset=\\\'0.61418\\\'/><stop stop-color=\\\'rgba(80,29,97,1)\\\' offset=\\\'0.74279\\\'/><stop stop-color=\\\'rgba(52,26,60,1)\\\' offset=\\\'0.87139\\\'/><stop stop-color=\\\'rgba(38,25,42,1)\\\' offset=\\\'0.9357\\\'/><stop stop-color=\\\'rgba(24,24,24,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <Paragraph5 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function NewContainer3() {
  return (
    <div className="absolute h-[496px] left-[269px] overflow-clip rounded-[30px] top-[128px] w-[229px]" data-name="New Container">
      <div className="absolute bg-[#f5f7fa] border border-[#7620cd] border-solid h-[496px] left-0 rounded-[30px] top-0 w-[229px]" />
      <Group3 />
      <Container14 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#f5f7fa] border border-[#f4f5f6] border-solid h-[38px] left-[795px] rounded-[4px] top-[649px] w-[79.563px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[39px] not-italic text-[#1d1e20] text-[14px] text-center text-nowrap top-[7.5px] translate-x-[-50%] whitespace-pre">Cancel</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[36px] left-[886.56px] rounded-[4px] top-[650px] w-[91.625px]" data-name="Button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 91.625 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(15.05 5.05 -5.3274 47.704 -27.562 -10.5)\\\'><stop stop-color=\\\'rgba(118,32,205,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(136,34,170,1)\\\' offset=\\\'0.48558\\\'/><stop stop-color=\\\'rgba(108,31,133,1)\\\' offset=\\\'0.61418\\\'/><stop stop-color=\\\'rgba(80,29,97,1)\\\' offset=\\\'0.74279\\\'/><stop stop-color=\\\'rgba(52,26,60,1)\\\' offset=\\\'0.87139\\\'/><stop stop-color=\\\'rgba(38,25,42,1)\\\' offset=\\\'0.9357\\\'/><stop stop-color=\\\'rgba(24,24,24,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[46px] not-italic text-[14px] text-center text-nowrap text-white top-[7.5px] translate-x-[-50%] whitespace-pre">Continue</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-white h-[720px] left-[11px] rounded-[12px] top-[-33px] w-[1006px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#7620cd] border-[3px] border-solid inset-[-1.5px] pointer-events-none rounded-[13.5px]" />
      <Container2 />
      <NewContainer />
      <NewContainer1 />
      <NewContainer2 />
      <NewContainer3 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[655px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-[1042px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[655px] relative w-[1042px]">
        <Container15 />
      </div>
    </div>
  );
}

function ScenarioComparisonModal() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[941px] items-center justify-center left-0 top-0 w-[1406px]" data-name="ScenarioComparisonModal">
      <Container16 />
    </div>
  );
}

export default function BrandedScenariosCc() {
  return (
    <div className="bg-white relative size-full" data-name="Branded Scenarios - CC">
      <App />
      <ScenarioComparisonModal />
    </div>
  );
}