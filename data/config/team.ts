export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  featured?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'wanda-granier',
    name: 'Wanda Granier',
    title: 'CEO',
    image: '/images/team/wanda-granier.jpg',
    bio: 'Wanda Granier is CEO and Majority Owner for BridgeWork Partners, a Hispanic Owned Firm, which specializes in Human Resources Consulting and Talent Acquisition since 2008. With 22 years in the industry, Wanda is a passionate, visionary human resources professional with a strong track record of building teams and winning clients for long-term partnerships.',
    featured: true,
  },
  {
    id: 'amy-legate',
    name: 'Amy Legate',
    title: 'Partner',
    image: '/images/team/amy-legate.jpg',
    bio: 'As Partner of BridgeWork Partners, Amy Legate assists in recruiting with the service delivery and recruiting team, offering 20+ years of experience in IT professionals, management, finance, HR professionals, marketing and an array of positions for clients locally and nationally.',
  },
  {
    id: 'samantha-jacoby',
    name: 'Samantha Jacoby',
    title: 'VP, Marketing & People',
    image: '/images/team/samantha-jacoby.jpg',
    bio: 'Samantha Jacoby is Partner for BridgeWork Partners. In her role at the firm, she is VP, Marketing & People. She works with key account management and strategic development of client partnerships.',
  },
  {
    id: 'jennifer-lewis',
    name: 'Jennifer Lewis',
    title: 'VP of Talent Acquisition & Operations',
    image: '/images/team/jennifer-lewis.jpg',
    bio: 'Jennifer Lewis is the VP of Talent Acquisition & Operations for BridgeWork Partners. Jennifer leads the Talent Acquisition Sourcing Team to drive positive results for our clients.',
  },
  {
    id: 'dennise-gomez',
    name: 'Dennise Gomez',
    title: 'Fort Worth Market & Executive Search Director',
    image: '/images/team/dennise-gomez.jpg',
    bio: 'Over the span of nine years in management consulting and research across more than 16 diverse industries, Dennise has refined expertise in negotiation, executive search, leadership, B2B sales, and LinkedIn networking.',
  },
  {
    id: 'shannon-payne',
    name: 'Shannon Payne',
    title: 'Director, Executive Search',
    image: '/images/team/shannon-payne.jpg',
    bio: 'Shannon Payne is a dynamic leader in executive search and talent acquisition, with a strong foundation in education, instructional leadership, and data-driven decision-making.',
  },
  {
    id: 'paul-granier',
    name: 'Paul Granier',
    title: 'VP, Finance & Information Technology',
    image: '/images/team/paul-granier.jpg',
    bio: 'Paul Granier is Vice President of Finance & Information Technology for BridgeWork Partners. Paul leverages his extensive Information Technology acumen, Security Pre-Sales Consulting industry background and talent acquisition expertise.',
  },
  {
    id: 'lizeth-galvan',
    name: 'Lizeth Galvan',
    title: 'Human Resources & Payroll Manager',
    image: '/images/team/lizeth-galvan.jpg',
    bio: 'Lizeth Galvan manages Human Resources and Payroll operations for BridgeWork Partners, ensuring smooth HR processes and compliance.',
  },
];
