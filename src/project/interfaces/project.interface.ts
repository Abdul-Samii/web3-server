import { Document, ObjectId } from 'mongoose';

export interface ProjectLinks {
  websiteLink?: string;
  twitter?: string;
  discord?: string;
  telegram?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  playstore?: string;
  appStore?: string;
}

export interface Project extends Document {
  readonly name: string;
  readonly coreCategories: ObjectId[];
  readonly tldr: string;
  readonly overview: string;
  readonly tags: ObjectId[];
  readonly logo: string;
  readonly coverImg: string;
  readonly links: ProjectLinks;
  readonly screenshots: string[];
}
