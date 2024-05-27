
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Project } from './project/interfaces/project.interface';
import { CreateProjectDto } from './project/dto/create-project.dto';
import { CreateCoreCategoryDto } from './core-category/dto/create-core-category.dto';
import { CoreCategory } from './core-category/interfaces/core-category.interface';
import { CreateTagDto } from './tags/dto/tag.dto';
import { Tag } from './tags/interfaces/tag.interface';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel('project') private readonly projectModel: Model<Project>,
    @InjectModel('coreCategory') private readonly coreCategoryModel: Model<CoreCategory>,
    @InjectModel('tag') private readonly tagModel: Model<Tag>,

  ) {}

  async seed() {
    const coreCategories: CreateCoreCategoryDto[] = [
      {
        name: 'NFT Marketplace'
      },
      {
        name: 'Metaverse Games'
      },
      {
        name: 'Crypto Exchange'
      },
      {
        name: 'Decentralized Exchange (DEX)'
      },
    ]

    const tags: CreateTagDto[] = [
      {
        name: 'NFT'
      },
      {
        name: 'Metaverse'
      },
      {
        name: '$MANA'
      },
      {
        name: 'ERC-721'
      },
      {
        name: 'User-Generated Content'
      },
      {
        name: 'Blockchain'
      },
      {
        name: 'Digital Assets'
      },
      {
        name: 'Ethereum'
      },
      {
        name: 'Crypto Exchange'
      },
      {
        name: 'Trading'
      },
      {
        name: 'BSC'
      },
      {
        name: 'DeFi'
      },
      {
        name: 'DEX'
      },
      {
        name: 'AMM'
      },
      {
        name: 'Liquidity Mining'
      },
      {
        name: 'Bitcoin'
      },
      {
        name: 'Security'
      }
    ]
    let CoreCategories;
    const existingCoreCategories = await this.coreCategoryModel.find().exec();
    if (existingCoreCategories.length === 0) {
      CoreCategories = await this.coreCategoryModel.create(coreCategories);
      console.log('Database seeded with core categories')
    } else {
      CoreCategories = existingCoreCategories
    }
    // const categoryMapping: Record<string, ObjectId> = {};
    // CoreCategories.forEach(category => {
    //   categoryMapping[category.name] = category._id as ObjectId;
    // });
    const coreCategoryIds: ObjectId[] = CoreCategories.map(category => category._id as ObjectId);
    let allTags;
    const existingTags = await this.tagModel.find().exec();
    if (existingTags.length === 0) {
      allTags = await this.tagModel.create(tags);
      console.log('Database seeded with tags')
    } else {
      allTags = existingTags;
    }

    const tagIds: ObjectId[] = allTags.map(tag => tag._id as ObjectId);

    const projects: CreateProjectDto[] = [
      {
        name: 'Decentraland',
        coreCategories: coreCategoryIds,
        tldr: 'Decentraland is a decentralized virtual world where users can buy, sell, and trade virtual real estate and in-world assets.',
        overview: 'Decentraland now has an active marketplace for their in-world assets including; wearables and emotes for your avatar, land parcels, estates, names, and worlds which are separate from Genesis City and can be accessed via your custom dcl.eth domain name. The $MANA token is the native cryptocurrency and can be used to purchase items from the marketplace. A ICO for $MANA in 2017 raised over $24 million dollars. The LAND parcels are represented by ERC-721 tokens, and there are 90,000 that make up Genesis City.',
        tags: tagIds,
        logo: 'https://x.com/decentraland/photo',
        coverImg: 'https://x.com/decentraland/header_photo',
        links: {
          websiteLink: 'https://decentraland.org/',
          twitter: 'decentraland',
          discord: 'https://dcl.gg/discord',
          youtube: '@decentraland_foundation'
        },
        screenshots: ['https://decentraland.org/screenshot1.png', 'https://decentraland.org/screenshot2.png']
      },
      {
        name: 'Sandbox',
        coreCategories: coreCategoryIds,
        tldr: 'Sandbox is a virtual gaming world where you can build, own, and monetize your gaming experiences.',
        overview: 'Sandbox is a pioneering virtual gaming platform and decentralized metaverse that aims to revolutionize the gaming industry through blockchain technology. Launched by Animoca Brands in 2011, Sandbox provides users with the tools and resources to create, play, and monetize their own virtual experiences within a vibrant and immersive virtual world. Sandbox also features a robust social and multiplayer gaming experience, allowing players to collaborate, compete, and interact with one another in shared virtual spaces.',
        tags: tagIds,
        logo: 'https://x.com/TheSandboxGame/photo',
        coverImg: 'https://x.com/TheSandboxGame/header_photo',
        links: {
          websiteLink: 'https://www.sandbox.game/en/',
          twitter: 'TheSandboxGame',
          discord: 'https://discord.gg/thesandboxgame',
          youtube: 'UCzv1t7voB-bxMmXLysT4h0w'
        },
        screenshots: ['https://www.sandbox.game/screenshot1.png', 'https://www.sandbox.game/screenshot2.png']
      },
      {
        name: 'OKX',
        coreCategories: coreCategoryIds,
        tldr: 'Faster, better, stronger than your average crypto exchange',
        tags: tagIds,
        logo: 'https://x.com/okx/photo',
        coverImg: 'https://x.com/okx/header_photo',
        links: {
          websiteLink: 'https://www.okx.com/',
          twitter: 'okx',
          discord: 'https://discord.gg/e6EyvM5QwM',
          youtube: 'OKXCryptoExchange'
        },
        screenshots: ['demo', 'demo', 'demo']
      },
      {
          name: 'Binance',
          coreCategories: coreCategoryIds,
          tldr: 'Binance is one of the largest cryptocurrency exchanges globally, offering a wide range of trading options and services for digital assets.',
          overview: 'Binance, founded in 2017 by Changpeng Zhao, is a leading cryptocurrency exchange known for its extensive selection of cryptocurrencies, high liquidity, and advanced trading features. The platform supports various financial services, including spot trading, futures trading, staking, and savings products. Binance also has its own blockchain, Binance Smart Chain (BSC), which supports decentralized applications (dApps) and smart contracts.',
          tags: tagIds,
          logo: 'https://x.com/binance/photo',
          coverImg: 'https://x.com/binance/header_photo',
          links: {
            websiteLink: 'https://www.binance.com/',
            twitter: 'binance',
            discord: 'https://discord.gg/binance',
            youtube: 'UCn-Q5g1bKxFhKQRgzQxN4fA'
          },
          screenshots: ['https://www.binance.com/screenshot1.png', 'https://www.binance.com/screenshot2.png']
        },
        {
          name: 'Coinbase',
          coreCategories: coreCategoryIds,
          tldr: 'Coinbase is a secure platform that makes it easy to buy, sell, and store cryptocurrency like Bitcoin, Ethereum, and more.',
          overview: 'Coinbase, founded in 2012 by Brian Armstrong and Fred Ehrsam, is a leading cryptocurrency exchange known for its user-friendly interface and robust security measures. The platform caters to both beginners and experienced traders, offering a range of services, including buying, selling, and storing cryptocurrencies. Coinbase also provides educational resources to help users learn about blockchain technology and digital assets.',
          tags: tagIds,
          logo: 'https://x.com/coinbase/photo',
          coverImg: 'https://x.com/coinbase/header_photo',
          links: {
            websiteLink: 'https://www.coinbase.com/',
            twitter: 'coinbase',
            discord: 'https://discord.gg/coinbase',
            youtube: 'UCmWJt7SiX9Jd3R6cLoXrJwQ'
          },
          screenshots: ['https://www.coinbase.com/screenshot1.png', 'https://www.coinbase.com/screenshot2.png']
        }
      ];
  
      const existingProjects = await this.projectModel.find().exec();
      if (existingProjects.length === 0) {
        await this.projectModel.insertMany(projects);
        console.log('Database seeded with projects');
      }
    }
  }
  