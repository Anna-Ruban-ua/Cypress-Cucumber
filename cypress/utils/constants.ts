import { endpoints } from './endpoints';

export const menuItems = [
  { menuName: "Products", itemUrl: endpoints.products, isDirectLink: false },
  { menuName: "Solutions", itemUrl: endpoints.solutions, isDirectLink: false },
  { menuName: "Pricing", itemUrl: endpoints.pricing, isDirectLink: true },
  { menuName: "Why Telnyx", itemUrl: endpoints.whyTelnyx, isDirectLink: false },
  { menuName: "Resources", itemUrl: endpoints.resources, isDirectLink: false },
  { menuName: "Developers" }
];

export const footerCompanyItems = [
  { footerName: "Our Network", itemUrl: endpoints.ourNetwork },
  { footerName: "Global coverage", itemUrl: endpoints.globalCoverage },
  { footerName: "Release Notes", itemUrl: endpoints.releaseNotes },
  { footerName: "Careers", itemUrl: endpoints.careers },
  { footerName: "Website Terms and Conditions", itemUrl: endpoints.terms },
  { footerName: "Terms and conditions of service", itemUrl: endpoints.termsService },
  { footerName: "Voice AI", itemUrl: endpoints.voiceAI }
];