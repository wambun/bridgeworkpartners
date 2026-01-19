export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Amy Legate Named Chief Operating Officer of BridgeWork Partners',
    excerpt: 'BridgeWork Partners announces the promotion of Amy Legate to Chief Operating Officer, recognizing her exceptional leadership and contribution to the company.',
    content: `BridgeWork Partners is proud to announce the promotion of Amy Legate to Chief Operating Officer (COO). This well-deserved advancement recognizes Amy's exceptional leadership, dedication, and significant contributions to the company's growth and success over the years.

In her new role, Amy will oversee the day-to-day operations of BridgeWork Partners, ensuring that the company continues to deliver outstanding service to clients while maintaining operational excellence. Her extensive experience in talent acquisition and her deep understanding of the staffing industry make her the ideal candidate for this position.

"Amy has been instrumental in building BridgeWork Partners into the company it is today," said Wanda Granier, CEO of BridgeWork Partners. "Her leadership, strategic vision, and unwavering commitment to our clients and team members make her the perfect choice for this role. I am confident that under her operational leadership, we will continue to grow and exceed expectations."

Amy brings over 20 years of experience in the staffing and recruiting industry, with expertise spanning IT professionals, management, finance, HR, and marketing positions. Her ability to build strong client relationships and deliver exceptional results has been a cornerstone of BridgeWork Partners' success.

"I am honored and excited to take on this new role," said Amy Legate. "BridgeWork Partners has always been committed to being a trusted partner for our clients, and I look forward to continuing to build on that foundation while driving operational excellence across all areas of our business."`,
    date: '2024-12-15',
    category: 'Company News',
    author: 'BridgeWork Partners',
  },
  {
    id: '2',
    title: 'BridgeWork Partners Named Best Places to Work 2024',
    excerpt: 'We are proud to announce that BridgeWork Partners has been recognized as one of the Best Places to Work by the Dallas Business Journal.',
    content: `BridgeWork Partners has once again been recognized as one of the Best Places to Work by the Dallas Business Journal. This prestigious award highlights our commitment to creating an exceptional workplace culture that values, supports, and empowers our team members.

This recognition is a testament to the hard work and dedication of our entire team. At BridgeWork Partners, we believe that taking care of our people is the foundation of providing exceptional service to our clients. When our team members thrive, our clients benefit from their expertise, enthusiasm, and commitment to excellence.

"Being named a Best Place to Work is an honor that belongs to every member of our team," said Wanda Granier, CEO of BridgeWork Partners. "Our people are our greatest asset, and this recognition validates our ongoing commitment to creating a workplace where everyone can grow, succeed, and make a meaningful impact."

This is not the first time BridgeWork Partners has received this recognition. The company has been honored multiple times over the years, including in 2018, 2016, and 2012, demonstrating a consistent commitment to workplace excellence.

The Best Places to Work program evaluates companies based on employee surveys measuring satisfaction, engagement, and overall workplace experience. BridgeWork Partners consistently scores high in areas such as leadership, communication, and employee development opportunities.`,
    date: '2024-11-20',
    category: 'Awards',
    author: 'BridgeWork Partners',
  },
  {
    id: '3',
    title: 'Expanding Our Fort Worth Presence',
    excerpt: 'BridgeWork Partners continues to grow with expanded operations in the Fort Worth market, bringing our expertise closer to more businesses.',
    content: `BridgeWork Partners is excited to announce the expansion of our operations in the Fort Worth market. This strategic growth initiative reflects our commitment to serving businesses throughout the Dallas-Fort Worth metroplex with our comprehensive HR consulting and talent acquisition services.

The Fort Worth expansion is led by Dennise Gomez, our Fort Worth Market & Executive Search Director. With over nine years of experience in management consulting and executive search across more than 16 diverse industries, Dennise brings the expertise and leadership needed to serve our growing client base in the region.

"Fort Worth is a dynamic and growing market with incredible business opportunities," said Wanda Granier, CEO of BridgeWork Partners. "This expansion allows us to better serve our existing clients in the area while reaching new businesses that can benefit from our expertise in talent acquisition and HR consulting."

Our Fort Worth office is located at 4500 Mercantile Plaza Drive, Fort Worth, TX 76137. The expanded presence includes a full range of services including:

- Executive search and direct hire placements
- Professional and administrative staffing
- IT and technical recruiting
- HR consulting services

"We're thrilled to deepen our roots in the Fort Worth community," said Dennise Gomez. "Our team is committed to building strong partnerships with local businesses and helping them achieve their talent acquisition goals."`,
    date: '2024-10-05',
    category: 'Expansion',
    author: 'BridgeWork Partners',
  },
  {
    id: '4',
    title: 'Shannon Payne Promoted to Director of Executive Search',
    excerpt: 'Shannon Payne has been promoted to Director of Executive Search, bringing her expertise in talent acquisition to lead our executive recruiting efforts.',
    content: `BridgeWork Partners is pleased to announce the promotion of Shannon Payne to Director of Executive Search. In this role, Shannon will lead our executive search division, leveraging her extensive experience in talent acquisition and leadership to deliver exceptional results for clients seeking top-tier executive talent.

Shannon is a dynamic leader in executive search and talent acquisition, with a strong foundation in education, instructional leadership, and data-driven decision-making. Her unique background allows her to approach executive search with a strategic perspective that considers not just qualifications, but also cultural fit and leadership potential.

"Shannon has consistently demonstrated her ability to identify and attract exceptional executive talent," said Wanda Granier, CEO of BridgeWork Partners. "Her promotion to Director of Executive Search recognizes her outstanding contributions and positions her to lead our efforts in this critical area of our business."

Under Shannon's leadership, the executive search division will focus on:

- Expanding our network of executive-level candidates
- Implementing innovative search methodologies
- Strengthening client relationships through consultative partnership
- Delivering measurable results for leadership placements

"I'm honored to take on this new role and excited about the opportunity to grow our executive search practice," said Shannon Payne. "Our team is committed to connecting organizations with the leaders they need to achieve their strategic objectives."`,
    date: '2024-09-12',
    category: 'Company News',
    author: 'BridgeWork Partners',
  },
  {
    id: '5',
    title: 'BridgeWorkGIVES: Our Annual Philanthropy Recap',
    excerpt: 'A look back at our community involvement and the impact of our BridgeWorkGIVES program throughout the year.',
    content: `As we reflect on another year of community engagement, we're proud to share the impact of our BridgeWorkGIVES program. This initiative represents our commitment to giving back to the communities where we live and work, embodying our core value of Community.

Throughout the year, BridgeWork Partners and our team members have contributed time, resources, and expertise to numerous charitable causes and community organizations. Here are some highlights from our philanthropic efforts:

**Education Initiatives**
We continued our partnership with local schools and educational programs, providing career mentorship, resume workshops, and interview preparation for students entering the workforce. Our team volunteered over 200 hours in educational outreach activities.

**Community Support**
BridgeWork Partners contributed to food drives, clothing donations, and holiday giving programs that support families in need throughout the Dallas-Fort Worth area. Our team's generosity helped provide meals and essential items for hundreds of families.

**Professional Development**
We hosted free professional development workshops for job seekers, covering topics such as resume writing, interview skills, and career planning. These sessions helped dozens of individuals in their job search journeys.

"Giving back is part of who we are at BridgeWork Partners," said Wanda Granier, CEO. "Our BridgeWorkGIVES program allows us to make a meaningful difference in our community while bringing our team together around a shared purpose."

We're grateful to every team member who contributed their time and energy to these initiatives, and we look forward to expanding our community impact in the coming year.`,
    date: '2024-08-28',
    category: 'Community',
    author: 'BridgeWork Partners',
  },
  {
    id: '6',
    title: 'Wanda Granier Receives Lifetime Achievement Award',
    excerpt: 'CEO Wanda Granier has been honored with the Lifetime Achievement Award by the Greater Dallas Hispanic Chamber of Commerce.',
    content: `BridgeWork Partners is proud to announce that our CEO, Wanda Granier, has been honored with the Lifetime Achievement Award by the Greater Dallas Hispanic Chamber of Commerce. This prestigious recognition celebrates Wanda's outstanding contributions to the business community and her dedication to promoting diversity and inclusion in the workplace.

The Lifetime Achievement Award recognizes individuals who have demonstrated exceptional leadership, community involvement, and a commitment to empowering others throughout their career. Wanda's 22+ years in the human resources and talent acquisition industry, combined with her tireless advocacy for diversity, make her a deserving recipient of this honor.

"I am deeply humbled to receive this recognition," said Wanda Granier. "Throughout my career, I have been fortunate to work with incredible people and organizations that share my passion for creating opportunities and building inclusive workplaces. This award belongs to everyone who has supported BridgeWork Partners and our mission."

Under Wanda's leadership, BridgeWork Partners has become a certified Hispanic-owned, woman-owned business enterprise, earning certifications including Texas HUB, WBENC, NCTRCA, and NMSDC. The company has been recognized multiple times as a Best Place to Work and has received numerous supplier diversity awards.

"Wanda's vision and leadership have built BridgeWork Partners into what it is today," said Amy Legate, COO of BridgeWork Partners. "Her commitment to excellence and her passion for people inspire all of us every day. This award is a well-deserved recognition of her tremendous impact."

The Greater Dallas Hispanic Chamber of Commerce presented the award at their annual gala, celebrating business leaders who have made significant contributions to the Hispanic business community and beyond.`,
    date: '2024-07-15',
    category: 'Awards',
    author: 'BridgeWork Partners',
  },
];

export const getNewsArticle = (id: string): NewsArticle | undefined => {
  return newsArticles.find((article) => article.id === id);
};

export const getNewsArticleIds = (): string[] => {
  return newsArticles.map((article) => article.id);
};
