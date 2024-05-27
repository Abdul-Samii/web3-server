import { ObjectId } from "mongoose";

export class ProjectLinksDto {
  readonly websiteLink?: string;
  readonly twitter?: string;
  readonly discord?: string;
  readonly telegram?: string;
  readonly linkedin?: string;
  readonly facebook?: string;
  readonly instagram?: string;
  readonly tiktok?: string;
  readonly youtube?: string;
  readonly playstore?: string;
  readonly appStore?: string;
}

export class CreateProjectDto {
  readonly name: string;
  readonly coreCategories: ObjectId[];
  readonly tldr?: string;
  readonly overview?: string;
  readonly tags?: ObjectId[];
  readonly logo?: string;
  readonly coverImg?: string;
  readonly links?: ProjectLinksDto;
  readonly screenshots?: string[];
}
