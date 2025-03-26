import { endpoints } from './endpoints';

export type HeaderItem = {
  menuName: string;
  itemUrl?: string;
  isDirectLink?: boolean;
};

export type FooterItem = {
  footerName: string;
  itemUrl: string;
};

export type BlockItem = HeaderItem | FooterItem;

export const headerMenuItems: HeaderItem[] = [
  { menuName: "Products", itemUrl: endpoints.products, isDirectLink: false },
  { menuName: "Solutions", itemUrl: endpoints.solutions, isDirectLink: false },
  { menuName: "Pricing", itemUrl: endpoints.pricing, isDirectLink: true },
  { menuName: "Why Telnyx", itemUrl: endpoints.whyTelnyx, isDirectLink: false },
  { menuName: "Resources", itemUrl: endpoints.resources, isDirectLink: false },
  { menuName: "Developers" } // без URL, отже буде розгортання
];

export const headerBlocksMap: Record<string, HeaderItem[]> = {
  Header: headerMenuItems,
};

export const footerCompanyItems: FooterItem[] = [
  { footerName: "Our Network", itemUrl: endpoints.ourNetwork },
  { footerName: "Global coverage", itemUrl: endpoints.globalCoverage },
  { footerName: "Release Notes", itemUrl: endpoints.releaseNotes },
  { footerName: "Careers", itemUrl: endpoints.careers },
  { footerName: "Website Terms and Conditions", itemUrl: endpoints.terms },
  { footerName: "Terms and conditions of service", itemUrl: endpoints.termsService },
  { footerName: "Voice AI", itemUrl: endpoints.voiceAI }
];

export const footerBlocksMap: Record<string, FooterItem[]> = {
  Company: footerCompanyItems,
};

export const blocksMap: Record<string, BlockItem[]> = {
  ...headerBlocksMap,
  ...footerBlocksMap,
};
