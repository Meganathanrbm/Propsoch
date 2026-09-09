import {
  AdvisorIcon,
  InsightsIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/ui/icons";
import type { BadgeItem, BudgetOption, City, NavSection } from "@/lib/types";

export const CDN = "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets";

export const SITE_URL = "https://www.propsoch.com";

export const heroHeadingLines = ["Blindly trusting", "a broker's"];

export const heroRotatingWords = ["Sales Pitch?", "Fake Claims?", "Half Info?"];

export const heroSubtext =
  "Get independent guidance from advisors who've helped 1000+ families buy the right home.";

export const heroLoginText = "Already a member?";
export const heroLoginLabel = "Login";

export const heroCtaLabel = "Connect with an Advisor";

export const heroDesktopBadges: [BadgeItem, BadgeItem] = [
  {
    icon: UsersIcon,
    title: "1000+ Families",
    subtitle: "Guided to the right home",
  },
  {
    icon: AdvisorIcon,
    title: "Advisor Network",
    subtitle: "Trained architects, no pressure",
  },
];

export const heroTrustBadges: BadgeItem[] = [
  {
    icon: UsersIcon,
    title: "1000+ Families",
    subtitle: "Guided to the right home",
  },
  {
    icon: ShieldIcon,
    title: "Unbiased Advice",
    subtitle: "Detailed pros & cons",
  },
  {
    icon: InsightsIcon,
    title: "80+ Data Points",
    subtitle: "Verified by architects",
  },
];

export const heroCityOptions: City[] = ["Bangalore", "Mumbai"];

export const heroPropertyTypeOptions = [
  "Any",
  "Apartment",
  "Villa",
  "Independent House",
  "Plot",
  "Commercial",
];

export const heroBudgetText = "What's your budget range?";

export const heroBudgetOptions: BudgetOption[] = [
  { label: "Any", emi: "Show me everything" },
  { label: "₹1.5 Cr to ₹2.5 Cr", emi: "EMI starting ~₹1.05L" },
  { label: "₹2.5 Cr to ₹3 Cr", emi: "EMI starting ~₹1.75L" },
  { label: "₹3 Cr to ₹4 Cr", emi: "EMI starting ~₹2.1L" },
  { label: "₹4 Cr to ₹5 Cr", emi: "EMI starting ~₹2.8L" },
  { label: "More than ₹5 Cr", emi: "EMI starting ~₹3.5L" },
];

export const heroFilterDefaults = {
  city: "Bangalore" as City,
  propertyType: "Any",
  budget: "Any",
};

export const navMenu: NavSection[] = [
  {
    heading: "Properties",
    links: [
      {
        label: "Search & Filter Properties",
        href: "#",
        description:
          "Search, filter and sort from 500+ RERA-approved properties in Bengaluru",
      },
      {
        label: "Compare Properties",
        href: "#",
        description:
          "Compare properties exhaustively on 40+ parameters you won't find elsewhere",
      },
      {
        label: "Sell Your Property",
        href: "#",
        description:
          "Share details & we'll match you with genuine homebuyers from our community",
      },
    ],
  },
  {
    heading: "Services",
    links: [
      {
        label: "Guided Homebuying",
        href: "#",
        description:
          "Trusted by 1000+ intelligent buyers who bought their ideal homes confidently.",
      },
      {
        label: "Peace of Mind Report",
        href: "#",
        description:
          "India's most comprehensive report covering 80+ critical data points",
      },
      {
        label: "NRI Advisory",
        href: "#",
        description:
          "Independent guidance for NRIs buying property in India remotely",
        badge: "New",
      },
      {
        label: "Home Loans",
        href: "#",
        description: "Compare lenders, get best offers & end-to-end guidance",
      },
      {
        label: "Legal Services",
        href: "#",
        description:
          "Get complete title due diligence, agreement reviews & advisory at pre-negotiated prices",
      },
    ],
  },
  {
    heading: "Resources",
    links: [
      {
        label: "Blog",
        href: "#",
        description:
          "Get in-depth insights, guides & updates on India's real estate every week",
      },
      {
        label: "Homebuying Guide 101",
        href: "#",
        description:
          "New to homebuying? This guide helps you navigate your journey with clarity",
      },
      {
        label: "Homebuying Checklist",
        href: "#",
        description:
          "See if your dream home checks all the boxes with our ultimate checklist",
      },
      {
        label: "Bangalore Real Estate 2026",
        href: "#",
        description:
          "See how the supply, demand & price trends are evolving in 2026",
      },
      {
        label: "Loyalty Reward Calculator",
        href: "#",
        description:
          "See what you'll earn in money, time & sanity when you work with Propsoch",
      },
      {
        label: "Fair Price Calculator",
        href: "#",
        description:
          "Instantly check if your property's price is fair and discover its true market value.",
        badge: "New",
      },
      {
        label: "EMI Calculator",
        href: "#",
        description:
          "Instantly calculate EMIs with prepayments and future possession dates",
        badge: "New",
      },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Customer Reviews", href: "#" },
      { label: "Careers", href: "#" },
      {
        label: "LinkedIn",
        href: "#",
        external: true,
      },
      {
        label: "YouTube",
        href: "#",
        external: true,
      },
    ],
  },
];

export const trustedByRow1 = [
  { name: "Amazon", file: "amazon-logo.png" },
  { name: "Google", file: "google-logo.png" },
  { name: "Microsoft", file: "microsoft-logo.png" },
  { name: "Jupiter", file: "jupiter-logo.png" },
  { name: "Deloitte", file: "Deloitte-Logo.png" },
];

export const trustedByRow2 = [
  { name: "Flipkart", file: "flipkart-logo.webp" },
  { name: "Atlassian", file: "atlassian-logo.webp" },
  { name: "NVIDIA", file: "nvidia-logo.png" },
  { name: "PhonePe", file: "PhonePe-Logo.webp" },
  { name: "Navi", file: "navi-logo.png" },
];

export const comparisonRows: {
  label: string;
  propsoch: string;
  brokers: string;
}[] = [
  {
    label: "Sales Practices",
    propsoch: "Consultative, no pressure",
    brokers: "High pressure sales tactics",
  },
  {
    label: "Transparency",
    propsoch: "Detailed pros & cons",
    brokers: "Only pros highlighted",
  },
  {
    label: "Project Curation",
    propsoch: "Based on 20+ factors",
    brokers: "Not curated",
  },
  {
    label: "Spam",
    propsoch: "No spam",
    brokers: "High spamming until closure",
  },
  {
    label: "Post sales support",
    propsoch: "End-to-end support",
    brokers: "None",
  },
  {
    label: "Site Visits",
    propsoch: "Assisted by on-ground market experts",
    brokers: "No market expertise",
  },
  {
    label: "Negotiation",
    propsoch: "High leverage via insights",
    brokers: "No insights to leverage",
  },
  {
    label: "In-Depth Reports",
    propsoch: "2 complimentary Peace of Mind Reports",
    brokers: "None",
  },
  {
    label: "Advisor",
    propsoch: "Trained architects",
    brokers: "Local sales people",
  },
];

export const comparisonPortalRows: {
  label: string;
  propsoch: string;
  portals: string;
}[] = [
  {
    label: "Information Depth",
    propsoch: "80+ data points",
    portals: "20-40 data points",
  },
  {
    label: "Transparency",
    propsoch: "Detailed pros & cons",
    portals: "Only pros highlighted",
  },
  {
    label: "Data Accuracy",
    propsoch: "Verified by architects",
    portals: "Loose verification",
  },
  {
    label: "Service Validity",
    propsoch: "Till you find your home",
    portals: "Based on no. of contacts",
  },
  {
    label: "Data Sources",
    propsoch: "RERA, GMaps, CDP etc.",
    portals: "Added by developer & broker",
  },
];

export const stats = [
  { value: "8500+", label: "Hours of Research" },
  { value: "290+", label: "Builder Partners" },
  { value: "2,500+", label: "Intelligent Homebuyers" },
  { value: "700+", label: "Projects Across Bangalore" },
];

type TimelineCard = { title: string; body: string; extra?: string };

export const timelineSteps: { milestone: string; cards: TimelineCard[] }[] = [
  {
    milestone: "Start Guided Home Buying today",
    cards: [
      {
        title: "A quick free call",
        body: "We walk you through our services, answer any immediate questions and set the stage for what's next.",
      },
    ],
  },
  {
    milestone: "Week 1",
    cards: [
      {
        title: "Discovery form",
        body: "Tell us what you are looking for so that your advisor can start building a shortlist of verified projects",
      },
      {
        title: "Longlist call",
        body: "The team curates a list of 10-12 properties tailored to your preferences and walks you through in detail.",
      },
    ],
  },
  {
    milestone: "Week 2",
    cards: [
      {
        title: "Site visits",
        body: "Once we've narrowed down the final 4-5 properties, it's time for seeing and analysing them in person!",
      },
    ],
  },
  {
    milestone: "Week 3",
    cards: [
      {
        title: "Deepdiving",
        body: "Found the one? Get your 'Peace of Mind' report within a day. Everything you need to know about the property, in one place.",
        extra: "Along with loan assistance",
      },
    ],
  },
  {
    milestone: "Last week",
    cards: [
      {
        title: "Negotiation and Closure",
        body: "Take your time and once you're ready, we'll handle the negotiation and seal the best deal for you.",
        extra: "Congratulations! you found your home sweet home!",
      },
    ],
  },
];

export const faqTabs: { label: string; items: { q: string; a: string }[] }[] = [
  {
    label: "About the Service",
    items: [
      {
        q: "What is Guided Home Buying? How does it work?",
        a: "This is where we understand your needs in incredible detail so we can really personalise your journey. Usually it takes ~10 minutes for you to share the details with us.",
      },
      {
        q: "Will you assist with negotiations?",
        a: "Yes absolutely. Our market experts have been trained on various negotiation strategies. They also leverage the insights we find during our research to get you the best-possible offer for the deal.",
      },
      {
        q: "I am confused looking at various options, how can this service help?",
        a: "Home Buying is overwhelming. If you’ve been in the market for a couple of weeks / months, you would have already got these questions keeping you awake at night.",
      },
      {
        q: "What are the timelines?",
        a: "Post that, we guide you through the entire closing process (if required) - from legal verifications to final paperwork to ensure everything is in place. This typically takes another 7-10 days, depending on the developer and documentation requirements.",
      },
      {
        q: "Do you also assist with home loans, taxation & legal matters?",
        a: "However, please note the fees for each of these vendors would be paid separately as we progress to the booking stage. We’ve tied up and negotiated a price that’s a win-win for you and the vendors.",
      },
      {
        q: "What kind of properties will you recommend?",
        a: "However, please note the fees for each of these vendors would be paid separately as we progress to the booking stage. We’ve tied up and negotiated a price that’s a win-win for you and the vendors.",
      },
    ],
  },
  {
    label: "Fees",
    items: [
      {
        q: "Is Propsoch free for homebuyers?",
        a: "Guided Home Buying comes at no extra cost to you over what you'd otherwise pay — we're compensated the same way a broker would be, but our advice stays independent of any single builder.",
      },
      {
        q: "Do I pay anything upfront?",
        a: "No. There's no upfront fee to get started with a discovery call and shortlist.",
      },
      {
        q: "How is a Peace of Mind report priced?",
        a: "Two Peace of Mind reports are included as part of Guided Home Buying. Additional standalone reports are priced per property — ask your advisor for current rates.",
      },
    ],
  },
  {
    label: "Why Work With Us",
    items: [
      {
        q: "How is Propsoch different from a broker?",
        a: "We show pros and cons in writing, including the flaws a commissioned broker has no incentive to mention, and our advisors are trained architects, not commission-driven salespeople.",
      },
      {
        q: "Who are your advisors?",
        a: "Trained architects and real estate professionals who inspect properties in person and are evaluated on buyer outcomes, not sales volume.",
      },
      {
        q: "What makes your data trustworthy?",
        a: "Every recommendation is backed by 80+ verified data points per property collected through physical site visits, builder records and market pricing data — not marketing material.",
      },
    ],
  },
];

export const company = {
  name: "Propsoch",
  legalName: "Thinkr Proptech Private Limited",
  email: "club@propsoch.com",
  telephone: "+919035880858",
  streetAddress:
    "2nd floor, Nomad Managed spaces, Santhosapuram, Koramangala 3 Block, Koramangala",
  addressLocality: "Bangalore",
  addressRegion: "KA",
  postalCode: "560102",
  addressCountry: "IN",
} as const;
