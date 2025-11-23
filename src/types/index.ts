export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: string;
  imageUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  github?: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum ViewState {
  HOME = 'HOME',
  BLOG = 'BLOG',
  PROJECTS = 'PROJECTS',
  POST_DETAIL = 'POST_DETAIL',
  GALLERY = 'GALLERY',
  GALLERY_DETAIL = 'GALLERY_DETAIL',
}

export interface NavItem {
  label: string;
  view: ViewState;
  icon: React.ComponentType<any>;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption?: string;
}

export interface GallerySeries {
  id: string;
  title: string;
  location: string;
  date: string;
  coverPhoto: string;
  photos: GalleryPhoto[];
  description: string;
}