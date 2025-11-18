// app/industries/industriess.ts
import {
  RiBankLine,
  RiGasStationLine,
  RiBuildingLine,
  RiStethoscopeLine,
  RiBuilding3Line,
  RiMoneyDollarBoxLine,
  RiHammerLine,
  RiCellphoneFill,
  RiLightbulbFlashLine,
  RiFlashlightLine,
  RiBook2Line,
  RiHandHeartLine,
  RiStoreLine,
  RiGovernmentLine,
  RiHotelBedLine,
  RiAccountPinCircleLine,
  RiRocket2Line,
  RiToolsFill,
  RiTable2,
} from "@remixicon/react";

export const industries = [
  {
    id: 1,
    slug: "business-finance",
    name: "Business & Finance",
    description:
      "Organizations in the financial and commercial sector operate in a dynamic environment where regulation, performance, and stakeholder trust are critical. We provide tailored advisory, tax, and human capital development solutions that strengthen business performance, improve financial clarity, and build resilient team. \n\nOur focus is to ensure that businesses remain compliant, well-structured, and positioned for sustainable growth.",
    image: "/b&f.jpg",

    bgColor: "#c3e9fc",
    textColor: "#000000",
    shortdesc:
      "We offer comprehensive tax advisory that help businesses navigate the complexities of local tax laws",

    industries: [
      {
        id: "banking",
        label: "Banking",
        icon: <RiBankLine />,
        text: "We support banking institutions in achieving Regulatory compliance and audit assurance, strengthening enterprise risk and internal control frameworks, and aligning strategic tax planning with reporting obligations, through our human capital development solutions, we also enhance leadership effectiveness and financial management capabilities development across banking operations.",
      },
      {
        id: "manufacturing",
        label: "Manufacturing",
        icon: <RiToolsFill />,
        text: "We help manufacturing companies enhance Cost efficiency and production effectiveness through process optimization and strategy, supply chain redesign, our advisory and tax experts provide guidance on tax incentives and growth-aligned planning, while our human capital development programs strengthen workforce capability, performance culture, and operational leadership.",
      },
      {
        id: "real-estate",
        label: "Real Estate",
        icon: <RiBuildingLine />,
        text: "We provide tax structuring solutions for property acquisitions, development, and disposals, supported by project feasibility and financial modelling expertise.  Our advisory services cover asset and portfolio management, regulatory compliance, and land administration support.",
      },
      {
        id: "construction",
        label: "Construction",
        icon: <RiHammerLine />,
        text: "We provide Project control advisory, contract and procurement compliance support, tax guidance for infrastructure projects, and workforce development in supervision, safety and performance.",
      },
      {
        id: "fintech",
        label: "Fintech",
        icon: <RiMoneyDollarBoxLine />,
        text: "We support fintech organizations with Licensing and regulatory compliance, tax and financial structuring for digital business models, valuation, funding documentation, scalable risk and compliance system for sustainable growth.",
      },
      {
        id: "professional-services",
        label: "Professional Services",
        icon: <RiTable2 />,
        text: "We help professional firm and bodies strengthen Tax compliance and strategic planning, refine business structure and operations, enhance client delivery and quality assurance, and build leadership and talent development systems for sustained organizational growth.",
      },
    ],
  },
  {
    id: 2,
    slug: "entrepreneurs-innovators",
    name: "Entrepreneurs & Innovators",
    description:
      "Entrepreneurs and innovators operate in a dynamic, opportunity-driven landscape that demands strategic clarity, sound governance, and disciplined execution. We provide founders and growing businesses with the right structures, financial insight, and compliance support to scale confidently and sustainably. \n\n Our focus is to equip visionary businesses with the structure, discipline, and strategic direction required to scale from concept to market leadership.",
    image: "/e&i.jpg",
    bgColor: "#FFFFFF",
    textColor: "#000000",
    shortdesc:
      "We believe that people are the core of every successful organization.",

    industries: [
      {
        id: "smes",
        label: "SMEs",
        icon: <RiAccountPinCircleLine />,
        text: "We help businesses strengthen structure and governance frameworks, improve financial management and cashflow discipline, and implement tax planning strategies that reduce exposure and enhance compliance. Our advisory also covers operational systems design, performance Management and leadership and workforce capability development.",
      },
      {
        id: "startups",
        label: "Startups",
        icon: <RiRocket2Line />,
        text: "We support startups with business Incorporation, equity structuring, and partner agreements. Our advisory services provide tax and regulatory clarity for early-stage companies and help establish scalable internal processes and compliance structure frameworks to enable sustainable growth.",
      },
      {
        id: "creative-industries",
        label: "Creative Industries",
        icon: <RiLightbulbFlashLine />,
        text: "We help creative businesses design sustainable Business framework and revenue model design, protection of intellectual property and structure sound tax and financial systems tailored to their needs, our programs also support professional development and management training.",
      },
    ],
  },
  {
    id: 3,
    slug: "people-society", // left the slug this way as not to break prevoius work
    name: "People & Society",
    description:
      "Institutions that serve people and communities carry a unique responsibility to deliver value with integrity, empathy, and accountability. We align with social-impact-driven organizations to enhance administration, improve service delivery, strengthen financial and operational systems, and build capabilities that foster meaningful and lasting change. \n\n Our focus is to strengthen institutions that influence society to operate with excellence, transparency, and a people-first approach.",
    image: "/p&s.jpg",
    bgColor: "#b9e8fe",
    textColor: "#000000",
    shortdesc:
      "We work closely with our clients to understand their organizational  structure, market positioning, and internal capabilities",

    industries: [
      {
        id: "healthcare",
        label: "Healthcare",
        icon: <RiStethoscopeLine />,
        text: "We provide Financial and cost-management advisory, compliance support, workforce performance and leadership capacity development, and quality assurance solutions for healthcare organizations.",
      },
      {
        id: "education",
        label: "Education",
        icon: <RiBook2Line />,
        text: "We support educational Institution with governance and administrative frameworks, financial planning, reporting, systems, performance development programmes for teachers and staff.  We also facilitate values alignment, and change management to strengthen institutional effectiveness.",
      },
      {
        id: "public-sector",
        label: "Public Sector",
        icon: <RiGovernmentLine />,
        text: "We provide Policy and programme implementation advisory, public financial management and audit readiness support, performance and service delivery frameworks. Our capacity-building program builds leadership capacity, strengthen governance and promote ethics, and accountability across public institutions.",
      },
      {
        id: "ngo",
        label: "NGO / Non-Profit",
        icon: <RiHandHeartLine />,
        text: "We support non-profit Organizational in strengthening governance and organizational structure, establish effective grant and donor reporting systems while enhancing financial accountability.  We also provide advisory impact measurement programme evaluation, and long-term sustainability roadmap design.",
      },
    ],
  },

  {
    id: 4,
    slug: "service-experience",
    name: "Service & Experience",
    description:
      "Service-based organisations succeed when operational systems, service delivery, and customer experience are aligned and consistently executed. We help organisations build efficient service models, strengthen internal structures, and enhance client or customer engagement to drive loyalty, performance, and measurable business results. \n\n Our focus is to guide service-driven sectors with the right frameworks and capabilities to deliver excellence every time.",
    image: "/s&e.jpg",
    bgColor: "#524c50",
    textColor: "#ffffff",
    shortdesc:
      "We support stakeholders through debt resolution, turnaround  strategies, liquidation processes, and creditor negotiations.",

    industries: [
      {
        id: "hospitality",
        label: "Hospitality",
        icon: <RiHotelBedLine />,
        text: "We support hospitality businesses in developing service delivery and guest experience framework, optimizing operations and workflow, staff training in service culture, communication & leadership. We also design performance monitoring and quality standards system, as well as strategies for brand positioning and customer loyalty.",
      },
      {
        id: "retail-outlets",
        label: "Retail Outlets",
        icon: <RiStoreLine />,
        text: "We help retail businesses enhance Store operations and performance process, strengthen inventory and supply chain efficiency and build customer service and sales capability. Our training programs focus on staff development supervisory coaching, and data-driven performance metrics and reporting systems.",
      },
      {
        id: "telecoms",
        label: "Telecoms",
        icon: <RiCellphoneFill />,
        text: "We provide Customer experience enhancement and service governance advisory, internal control and process optimization frameworks, talent development programs. Our services also include performance tracking and service-quality monitoring systems, and strategic advisory on market expansion and operational resilience.",
      },
    ],
  },

  {
    id: 5,
    slug: "energy-and-natural-resources-sector",
    name: "Energy and Natural Resources Sector",
    description:
      "The energy and natural resources sector operate in a high-stakes environment where regulatory compliance, operational efficiency, and strategic resource management are critical. We work with organizations across the oil & gas, mining, and power value chains to strengthen governance, optimize financial and operational systems, and embed sustainability into long-term strategy. \n\n Our focus is to enhance energy-driven institutions to operate responsibly, efficiently, and with resilience for future growth.",
    image: "/p&r.jpg",
    bgColor: "#524c50",
    textColor: "#ffffff",
    shortdesc:
      "We support stakeholders through debt resolution, turnaround  strategies, liquidation processes, and creditor negotiations.",

    industries: [
      {
        id: "oil-and-gas",
        label: "Oil & Gas",
        icon: <RiGasStationLine />,
        text: "We provide regulatory and compliance advisory across local & international operations, tax strategy and reporting for oil & gas value chains, and cost control and financial governance systems project safety culture, and workforce capability development.",
      },
      {
        id: "mining",
        label: "Mining",
        icon: <RiBuilding3Line />,
        text: "We provide regulatory compliance and environmental reporting advisory, financial modelling, and capital allocation support, risk and internal control systems across extraction and supply chains. Our talent development and leadership capacity-building also enhance technical expertise, safety awareness, and leadership capacity within the mining sector.",
      },
      {
        id: "energy",
        label: "Energy (Power & Renewables)",
        icon: <RiFlashlightLine />,
        text: "We provide Regulatory policy compliance advisory, financial and investment structuring for energy projects, and frameworks that enhance operational efficiency and maintenance management. We also support performance improvement- strategic planning, and sustainability roadmap development across the power and renewable energy sectors.",
      },
    ],
  },
];
