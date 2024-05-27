import { Schema } from 'mongoose';

export const ProjectSchema = new Schema({
  name: String,
  tldr: String,
  overview: String,
  logo: String,
  coverImg: String,
  links: {
    twitter: String,
    discord: String,
    telegram: String,
    linkedin: String,
    facebook: String,
    instagram: String,
    tiktok: String,
    youtube: String,
    playstore: String,
    appStore: String,
    websiteLink: String,
  },
  screenshots: [String],
  coreCategories: [{ type: Object, ref: 'coreCategory' }], // Reference to CoreCategory
  tags: [{ type: Object, ref: 'tag' }],
});
