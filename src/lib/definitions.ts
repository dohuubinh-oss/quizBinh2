import { ObjectId } from 'mongodb';

// =======================================================================
// ĐỊNH NGHĨA CHUNG (CHO LAYOUT)
// =======================================================================

export interface NavLink {
  name: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter';
  href: string;
}

export interface FooterContent {
  _id?: ObjectId;
  brandName: string;
  description: string;
  socialLinks: SocialLink[];
  linkColumns: FooterLinkColumn[];
  policyLinks: FooterLink[];
  copyright: string;
}
