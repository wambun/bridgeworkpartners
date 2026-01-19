import type { AccentColor } from '@/lib/colorUtils';

export interface Service {
  id: string;
  name: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: { title: string; description: string }[];
  icon: string;
  href: string;
  accentColor: AccentColor;
}

export const services: Service[] = [
  {
    id: 'bridgeworktech',
    name: 'BridgeWorkTECH',
    title: 'IT & Technical Recruiting',
    description: 'Our tech-savvy IT team has extensive years of IT leadership. We solve IT hiring challenges for clients through a wide network of IT professionals and talent acquisition outreach.',
    longDescription: 'BridgeWorkTECH is our specialized IT and Technical Recruiting division, staffed with experienced professionals who understand the unique challenges of hiring in the technology sector. Our team combines deep technical knowledge with proven recruiting methodologies to connect you with the best IT talent in the market. Whether you need cybersecurity experts, software developers, infrastructure specialists, or IT leadership, we have the network and expertise to deliver.',
    features: ['Cybersecurity Expertise', 'Technical Assessments', 'Quality Retention', 'IT Leadership Placement', 'Software Development', 'Infrastructure & Cloud'],
    benefits: [
      { title: 'Technical Expertise', description: 'Our recruiters understand technology and can properly evaluate candidates for technical competency.' },
      { title: 'Extensive Network', description: 'Access to a wide network of IT professionals through our talent acquisition outreach programs.' },
      { title: 'Quality Retention', description: 'Our rigorous screening process ensures long-term placement success and reduced turnover.' },
      { title: 'Fast Turnaround', description: 'Streamlined processes to quickly identify and place qualified IT candidates.' },
    ],
    icon: 'laptop',
    href: '/services/bridgeworktech',
    accentColor: 'accent2', // Blue/Indigo - Technology
  },
  {
    id: 'bridgeworksearch',
    name: 'BridgeWorkSEARCH',
    title: 'Direct Hire Placements',
    description: 'Our direct hire search division is comprised of recruiting professionals who average 21+ years of direct hire, talent acquisition expertise.',
    longDescription: 'BridgeWorkSEARCH delivers exceptional direct hire placements across all levels of your organization. Our team of seasoned recruiting professionals brings an average of 21+ years of talent acquisition expertise to every search. We work closely with you to understand your organizational culture, role requirements, and growth objectives to find candidates who will make lasting contributions to your team.',
    features: ['Executive Search', 'National & International', 'Entry to C-Suite', 'Industry Specialization', 'Confidential Searches', 'Succession Planning'],
    benefits: [
      { title: '21+ Years Experience', description: 'Our recruiting professionals average over two decades of direct hire expertise.' },
      { title: 'Full-Level Coverage', description: 'From entry-level positions to C-suite executives, we find the right fit.' },
      { title: 'Global Reach', description: 'National and international search capabilities to find talent anywhere.' },
      { title: 'Culture Match', description: 'Deep focus on cultural alignment to ensure successful, long-term placements.' },
    ],
    icon: 'search',
    href: '/services/bridgeworksearch',
    accentColor: 'accent1', // Orange/Gold - Executive/Premium
  },
  {
    id: 'bridgeworkstaff',
    name: 'BridgeWorkSTAFF',
    title: 'Professional Staffing',
    description: 'For clients facing pressures of doing more with less, our tailored Professional & Administrative Recruitment Services can help achieve business goals.',
    longDescription: 'BridgeWorkSTAFF provides comprehensive professional and administrative staffing solutions designed to help you navigate workforce challenges. In today\'s business environment where doing more with less is essential, our tailored recruitment services deliver the flexibility and quality you need. From temporary assignments to long-term contracts, we provide skilled professionals who can hit the ground running.',
    features: ['RPO Services', 'MSP Solutions', 'Project Staffing', 'Payrolling Services', 'Temp-to-Hire', 'Administrative Support'],
    benefits: [
      { title: 'Flexible Solutions', description: 'Scalable staffing options that adapt to your changing business needs.' },
      { title: 'Cost Efficiency', description: 'Reduce overhead costs while maintaining access to top talent.' },
      { title: 'Quick Deployment', description: 'Rapidly deploy qualified professionals to meet project deadlines.' },
      { title: 'Risk Reduction', description: 'Temp-to-hire options let you evaluate fit before making permanent commitments.' },
    ],
    icon: 'users',
    href: '/services/bridgeworkstaff',
    accentColor: 'accent3', // Purple/Magenta - Creative
  },
  {
    id: 'bridgeworkhr',
    name: 'BridgeWorkHR',
    title: 'HR Consulting Services',
    description: 'We are the "People Company," and we realize your team is your most important asset. Our HR Team averages 20+ years of HR experience.',
    longDescription: 'BridgeWorkHR embodies our identity as the "People Company." We understand that your team is your most valuable asset, and our HR consulting services are designed to help you maximize that investment. Our HR team brings an average of 20+ years of experience across all aspects of human resources, from strategic planning to day-to-day operations. We partner with you to build stronger, more engaged, and more productive teams.',
    features: ['Strategic HR Planning', 'Process Improvement', 'HR Training', 'Policy Development', 'Compliance Support', 'Employee Relations'],
    benefits: [
      { title: '20+ Years HR Experience', description: 'Our HR consultants bring decades of experience to solve your people challenges.' },
      { title: 'Strategic Partnership', description: 'We align HR initiatives with your business objectives for maximum impact.' },
      { title: 'Comprehensive Support', description: 'From policies to training to compliance, we cover all your HR needs.' },
      { title: 'Process Excellence', description: 'Streamlined HR processes that improve efficiency and employee experience.' },
    ],
    icon: 'heart',
    href: '/services/bridgeworkhr',
    accentColor: 'primary', // Teal - Brand core
  },
  {
    id: 'bridgeworksled',
    name: 'BridgeWorkSLED',
    title: 'State, Local & Education',
    description: 'With over 90,000 different government organizations, the State, Local & Education (SLED) market is incredibly important to the landscape of our country & economy.',
    longDescription: 'BridgeWorkSLED specializes in serving the unique needs of the State, Local & Education market. With over 90,000 different government organizations across the country, this sector requires specialized knowledge and established relationships. Our team understands the procurement processes, compliance requirements, and cultural nuances of public sector hiring, enabling us to deliver exceptional results for government agencies and educational institutions.',
    features: ['Government Expertise', 'Education Sector', 'Public Sector', 'Procurement Compliance', 'Certified Supplier', 'Contract Vehicles'],
    benefits: [
      { title: 'Public Sector Expertise', description: 'Deep understanding of government and education hiring requirements.' },
      { title: 'Compliance Ready', description: 'Full compliance with public sector procurement and employment regulations.' },
      { title: 'Certified Partner', description: 'HUB, WBE, and minority certifications for supplier diversity requirements.' },
      { title: 'Established Relationships', description: 'Proven track record with state, local, and education clients.' },
    ],
    icon: 'building',
    href: '/services/bridgeworksled',
    accentColor: 'accent2', // Blue/Indigo - Government
  },
  {
    id: 'bridgeworkrpo',
    name: 'BridgeWorkRPO',
    title: 'Recruitment Process Outsourcing',
    description: 'Let us handle your entire recruitment process with our comprehensive RPO solutions, designed to streamline hiring and reduce costs.',
    longDescription: 'BridgeWorkRPO offers comprehensive Recruitment Process Outsourcing solutions that transform how you acquire talent. By partnering with us, you gain access to dedicated recruiting resources, advanced technologies, and proven processes without the overhead of building these capabilities in-house. Our RPO solutions are fully customizable to meet your specific needs, whether you need end-to-end recruitment support or help with specific functions.',
    features: ['End-to-End Recruiting', 'Cost Optimization', 'Scalable Solutions', 'Technology Integration', 'Metrics & Reporting', 'Employer Branding'],
    benefits: [
      { title: 'Cost Reduction', description: 'Significantly reduce cost-per-hire through efficient processes and economies of scale.' },
      { title: 'Scalability', description: 'Easily scale recruiting capacity up or down based on your hiring needs.' },
      { title: 'Quality Improvement', description: 'Access to best practices, technology, and expertise that improve hiring outcomes.' },
      { title: 'Strategic Focus', description: 'Free your internal team to focus on strategic HR initiatives.' },
    ],
    icon: 'refresh',
    href: '/services/bridgeworkrpo',
    accentColor: 'accent3', // Purple/Magenta - Process
  },
];
