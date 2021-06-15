export interface Product {
  id: string;
  name: string;
  companyLogo: string;
  comparisonRate: string;
  advertisedRate: string;
  gotoSiteUrl: string;
  pros: string[];
  companyName: string;
}

export const menuItems = [
  { text: 'ALL', link: '/all' },
  { text: 'REFINANCE', link: '/refinance' },
  { text: 'FIXED RATE', link: '/fixed-rate' },
  { text: 'FIRST HOME BUYER', link: '/first-home-buyer' },
  { text: 'NVESTOR', link: '/nvestor' },
  { text: 'NEXT HOME BUYER', link: '/next-home-buyer' },
];
