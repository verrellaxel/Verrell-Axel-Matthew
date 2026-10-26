export const FALLBACK_THUMB = "https://i.imgur.com/KiUCsUr.png";
export const HERO_IMG = "https://i.imgur.com/KiUCsUr.png";

export interface CustomAsset {
  type: 'video' | 'image';
  orientation: 'horizontal' | 'vertical';
  title: string;
  linkUrl?: string;
  thumbUrl?: string;
  aspect?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  role?: string;
  videos: number;
  customAssets?: CustomAsset[];
  thumbnail?: string;
  externalLink?: {
    url: string;
    label: string;
  };
}

export interface Category {
  id: string;
  title: string;
  focus: string;
  projects: Project[];
}

export const projectCategories: Category[] = [
  {
    id: '01',
    title: 'Campaign Strategy',
    focus: 'Awareness & Social Impact',
    projects: [
      {
        title: '404: Love Not Found',
        thumbnail: 'https://i.imgur.com/eJ82hXn.png',
        externalLink: {
          url: 'https://thivepia.my.canva.site/404lovenotfound',
          label: 'VIEW FULL PROJECT'
        },
        description: "Served as Project Director, overseeing the end to end production, from pre-production planning to final post-edit for '404: Love Not Found'.\n\nThis conceptual awareness campaign tackles the dark realities of online dating manipulation. Driven by the tagline 'Not every call deserves your heart,' the project urges Tinder users to think critically, separate true connection from digital illusion, and exercise caution against love scamming",
        tags: ['SOCIAL', 'SERIES'],
        role: "Project Director, Video Editor, Motion Graphic Designer",
        videos: 9,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: '404: Love Not Found - Part 1', linkUrl: 'https://www.youtube.com/watch?v=uJtnbjbKwso' },
          { type: 'video', orientation: 'horizontal', title: '404: Love Not Found - Part 2', linkUrl: 'https://www.youtube.com/watch?v=8py9QGMaxm0' },
          { type: 'video', orientation: 'horizontal', title: '404: Love Not Found - Part 3', linkUrl: 'https://www.youtube.com/watch?v=YUiRhrUYDTw' },
          { type: 'image', orientation: 'horizontal', title: 'Billboard Design 1', linkUrl: 'https://i.imgur.com/FntRGrd.png', aspect: 'aspect-[2/1]' },
          { type: 'image', orientation: 'horizontal', title: 'Billboard Design 2', linkUrl: 'https://i.imgur.com/hvOgGZS.png', aspect: 'aspect-[2/1]' },
          { type: 'video', orientation: 'vertical', title: 'Motion Graphic', linkUrl: 'https://youtube.com/shorts/F4y1rotRBOk' },
          { type: 'video', orientation: 'vertical', title: 'Social Media Content 1', linkUrl: 'https://youtube.com/shorts/RavAlxvR8tk', thumbUrl: 'https://storage.googleapis.com/portofolioverrell/Konten%203.png' },
          { type: 'video', orientation: 'vertical', title: 'Social Media Content 2', linkUrl: 'https://youtube.com/shorts/sA1TYHXA68s', thumbUrl: 'https://storage.googleapis.com/portofolioverrell/Konten%208%20-%20Thumbnail.png' },
          { type: 'video', orientation: 'vertical', title: 'Social Media Content 3', linkUrl: 'https://youtube.com/shorts/qmFq4D8YW8k', thumbUrl: 'https://storage.googleapis.com/portofolioverrell/Konten%2020.png' }
        ]
      },
      {
        title: 'Jalan Aja Dulu Campaign',
        externalLink: {
          url: 'https://thivepia.my.canva.site/jalanajadulucampaign',
          label: 'VIEW FULL PROJECT'
        },
        description: 'A preventative health campaign aimed at combating sedentary lifestyles among busy professionals. By leveraging gamification and education, it reframes walking as an accessible, daily habit for long-term wellness.\n\nAs Project Director, I led the end to end production, from pre to post of this gamified health campaign aimed at combating sedentary lifestyles among busy professionals.',
        tags: ['LIFESTYLE', 'STORY'],
        role: "Project Director, Video Editor",
        videos: 11,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: 'Professional Generated Content', linkUrl: 'https://www.youtube.com/watch?v=QaQIEW3zM8w' },
          { type: 'image', orientation: 'horizontal', title: 'Billboard', linkUrl: 'https://i.imgur.com/t1VSSRU.png', aspect: 'aspect-auto' },
          { type: 'image', orientation: 'vertical', title: 'Display Poster', linkUrl: 'https://i.imgur.com/3I8adAc.png', aspect: 'aspect-[3/4]' },
          { type: 'image', orientation: 'vertical', title: 'Ambience Media', linkUrl: 'https://i.imgur.com/25ptas6.png', aspect: 'aspect-[3/4]' },
          { type: 'image', orientation: 'horizontal', title: 'Jalan Aja Dulu App', linkUrl: 'https://i.imgur.com/ujg24rP.png', aspect: 'aspect-auto' },
          { type: 'video', orientation: 'horizontal', title: 'Trailer', linkUrl: 'https://youtu.be/eiuyfDl74KE' },
          { type: 'video', orientation: 'horizontal', title: 'Recap', linkUrl: 'https://youtu.be/uNMVtYP0rcI' },
          { type: 'video', orientation: 'vertical', title: 'Social Media Content 1', linkUrl: 'https://youtube.com/shorts/HIU97jlzhxI?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'Social Media Content 2', linkUrl: 'https://youtube.com/shorts/9RxPS9JwMzE?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'Social Media Content 3', linkUrl: 'https://youtube.com/shorts/Rb1vygomUVc?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'Social Media Content 4', linkUrl: 'https://youtube.com/shorts/K6xS8p0lYy8?feature=share' }
        ]
      },
      {
        title: 'The Art of Warak Ngendhog',
        thumbnail: 'https://i.imgur.com/xM3jo4A.png',
        description: "A cultural campaign introducing the iconic heritage of 'Warak Ngendhog' from Semarang. Blending historical narrative with contemporary visual aesthetics.",
        tags: ['CAMPAIGN', 'CULTURE'],
        role: "Project Director, Video Editor",
        videos: 1,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: 'The Art of Warak Ngendhog - Video Campaign', linkUrl: 'https://www.youtube.com/watch?v=WQgZ9Tu6JhA' }
        ]
      }
    ]
  },
  {
    id: '02',
    title: 'Social Media & Commercial Video',
    focus: 'Conversion, Concept & Engagement',
    projects: [
      {
        title: 'FTL Gym',
        thumbnail: 'https://img.youtube.com/vi/1s2ydR9qGbs/hqdefault.jpg',
        description: "FTL Gym is one of Indonesia's fastest-growing mega-gym chains with over 80 nationwide locations, where I manage end-to-end short-form video production (3–4 videos daily) and integrate AI tools for workflow optimization while collaborating with the Paid Ads team to scale creative assets, consistently exceeding monthly KPIs by 150%–200% and driving lead growth across all branches.",
        tags: ['COMMERCIAL', 'SHORT-FORM', 'PERFORMANCE ADS', 'FITNESS'],
        role: "End-to-End Content Creator & AI Video Specialist",
        videos: 6,
        customAssets: [
          { type: 'video', orientation: 'vertical', title: 'FTL Gym - Short-Form Campaign 01', linkUrl: 'https://youtube.com/shorts/1s2ydR9qGbs' },
          { type: 'video', orientation: 'vertical', title: 'FTL Gym - Megagym Facility Showcase', linkUrl: 'https://youtube.com/shorts/2L7wAtUPVNM' },
          { type: 'video', orientation: 'vertical', title: 'FTL Gym - Performance Marketing Short 02', linkUrl: 'https://youtube.com/shorts/2XuGJ2tQDgA' },
          { type: 'video', orientation: 'vertical', title: 'FTL Gym - Community & Class Experience', linkUrl: 'https://youtube.com/shorts/3qa-y9WW0ZM' },
          { type: 'video', orientation: 'vertical', title: 'FTL Gym - Conversion Lead Booster', linkUrl: 'https://youtube.com/shorts/6ciEfPV1KEQ' },
          { type: 'video', orientation: 'vertical', title: 'FTL Gym - High-Energy Promo Reel', linkUrl: 'https://youtube.com/shorts/9Eo4fZ-YmBU' }
        ]
      },
      {
        title: 'Aksesmu',
        thumbnail: 'https://i.imgur.com/GRSzpT8.png',
        description: "Content Creator & Design Intern at Aksesmu, a B2B supply chain empowering micro-retailers. Responsible for producing social media assets, digital graphic designs, and internal educational content",
        tags: ['SOCIAL', 'SHORT'],
        role: "Videographer, Video Editor, Graphic Designer",
        videos: 6,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: 'Social Media Content 1', linkUrl: 'https://youtu.be/dWhYWzFIxZA' },
          { type: 'video', orientation: 'horizontal', title: 'Social Media Content 2', linkUrl: 'https://youtu.be/tdlwsY4Wmlc' },
          { type: 'video', orientation: 'vertical', title: 'Social Media Content 3', linkUrl: 'https://youtu.be/PslgxsDOhDc' },
          { type: 'video', orientation: 'vertical', title: 'Social Media Content 4', linkUrl: 'https://youtube.com/shorts/ngXAzakNrrQ' },
          { type: 'image', orientation: 'vertical', title: 'Graphic Design 1', linkUrl: 'https://storage.googleapis.com/portofolioverrell/Design%20Giveaway%20podcast%206.png?v=2', aspect: 'aspect-[4/5]' },
          { type: 'image', orientation: 'vertical', title: 'Graphic Design 2', linkUrl: 'https://storage.googleapis.com/portofolioverrell/Design%20Press%20Conference_5.png?v=2', aspect: 'aspect-[4/5]' }
        ]
      },
      {
        title: 'Ozone Bag',
        thumbnail: 'https://i.imgur.com/zlzwVl2.png',
        description: "End to end content production for Ozone Bag, a men’s bag brand. I managed the entire creative lifecycle, from conceptualization and scriptwriting to filming and final post-production",
        tags: ['CONTENT', 'EDIT'],
        role: "Project director, Scriptwriter, Video Editor",
        videos: 4,
        customAssets: [
          { type: 'video', orientation: 'vertical', title: 'Ozone Bag Content - Review', linkUrl: 'https://youtube.com/shorts/OoMCAsVGQtE?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'Ozone Bag Content - Entertainment 1', linkUrl: 'https://youtube.com/shorts/fd27bKksyHI?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'Ozone Bag Content - Entertainment 2', linkUrl: 'https://youtube.com/shorts/2c9s3y8OO80?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'Ozone Bag Content - Lifestyle', linkUrl: 'https://youtube.com/shorts/6tHdyzRDLJU?feature=share' }
        ]
      },
      {
        title: 'Crevo Creative',
        thumbnail: 'https://i.imgur.com/2C0ylWB.png',
        description: "Freelance Production Specialist at Crevo Creative (Digital Marketing Agency). Executed end to end video production, from on site shooting to post-production, for commercial clients including Mixue, Manta, Papilon Bag, and The Bloei",
        tags: ['COMMERCIAL', 'PROD'],
        role: "Videographer, Video Editor",
        videos: 4,
        customAssets: [
          { type: 'video', orientation: 'vertical', title: 'Tiga Lapis - Crevo Creative (2024)', linkUrl: 'https://youtube.com/shorts/5eCKo7ebPec?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'Tiga Lapis 2 - Crevo Creative (2024)', linkUrl: 'https://youtube.com/shorts/OQxkZCJR3yc?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'The Bloei - Crevo Creative (2024)', linkUrl: 'https://youtube.com/shorts/2BCEUJ_lipk?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'Manta - Crevo Creative (2023)', linkUrl: 'https://youtube.com/shorts/EHwQ8ZnVQFY?feature=share' }
        ]
      },
      {
        title: 'Coca-Cola Europacific Partners',
        thumbnail: 'https://i.imgur.com/cKsWQH8.png',
        description: "Freelance Videographer and Editor for Coca-Cola Europacific Partners (CCEP). Produced high-quality corporate visual assets to support both regional marketing and sales divisions. Executed dynamic brand activation documentaries and strategic product introduction videos designed to drive commercial growth and brand presence",
        tags: ['CORPORATE', 'COMMERCIAL'],
        role: "Videographer, Editor",
        videos: 6,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: "Coca-Cola: 'One Fun Day' Bandung (2025)", linkUrl: 'https://youtu.be/6NB9yrqQWzM' },
          { type: 'video', orientation: 'horizontal', title: 'Unpad x Coca-Cola - Campus Activation Documentation (2025)', linkUrl: 'https://www.youtube.com/watch?v=X73YK0U0NvI' },
          { type: 'video', orientation: 'horizontal', title: 'Sprite at Terminal Leuwipanjang (2025)', linkUrl: 'https://youtu.be/ydR7TQazL8g' },
          { type: 'video', orientation: 'horizontal', title: 'MARK Bandung (2025)', linkUrl: 'https://www.youtube.com/watch?v=b_zoFajgiH0' },
          { type: 'video', orientation: 'horizontal', title: 'Powerade Sales Pitch & Product Introduction Video (2026)', linkUrl: 'https://youtu.be/O2qgM2fYKRw' },
          { type: 'video', orientation: 'vertical', title: 'Coca Cola Commercial - Spec Ad (2025)', linkUrl: 'https://www.youtube.com/shorts/_pajEpXFhv0' }
        ]
      },
      {
        title: 'Ventela Commercial',
        description: "Directed and edited a lifestyle commercial for Ventela. The video translates the brand's core message, merging everyday comfort with effortless style into an inspiring narrative that empowers confidence",
        tags: ['COMMERCIAL', 'LIFESTYLE'],
        role: "Director, Editor",
        videos: 1,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: 'Ventela - Commercial', linkUrl: 'https://www.youtube.com/watch?v=3sZhWIJoFUs' }
        ]
      },
      {
        title: 'Mizone Commercial',
        thumbnail: 'https://i.imgur.com/6uNiSNn.png',
        description: "Directed and edited a conceptual Mizone commercial (Spec Ad) centered on narrative storytelling. The piece portrays a nervous magician overcoming stage fright, demonstrating mood-based pacing and visual engagement",
        tags: ['SPEC', 'MOOD'],
        role: "Director, Editor",
        videos: 1,
        customAssets: [
          { type: 'video', orientation: 'vertical', title: 'Mizone - Commercial (Spec Ad)', linkUrl: 'https://youtube.com/shorts/uN_iAe2QuK4' }
        ]
      },
      {
        title: 'Adidas Commercial',
        thumbnail: 'https://i.imgur.com/dr3eSYz.png',
        description: "Directed and edited a conceptual Adidas commercial (Spec Ad) emphasizing agility and motion. The piece highlights lightweight footwear through dynamic pacing and swift cinematography",
        tags: ['SPEC', 'CINEMA'],
        role: "Director, Editor",
        videos: 1,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: 'Adidas - Commercial (Spec Ad)', linkUrl: 'https://youtu.be/cXB9NHcwpn0' }
        ]
      },
      {
        title: 'Sprite Commercial',
        thumbnail: 'https://i.imgur.com/SAjxUCW.png',
        description: "Directed and edited a high energy Sprite commercial (Spec Ad). The piece positions the beverage as a refreshing disruptor to a monotonous hot day, emphasizing crisp visuals and fast paced editing",
        tags: ['SPEC', 'MOOD'],
        role: "Director, Editor",
        videos: 1,
        customAssets: [
          { type: 'video', orientation: 'vertical', title: 'Sprite - Commercial (Spec Ad)', linkUrl: 'https://youtube.com/shorts/Mijwo0jyH24' }
        ]
      }
    ]
  },
  {
    id: '03',
    title: 'Short Film',
    focus: 'Narrative & Direction',
    projects: [
      {
        title: 'Dear My Hero',
        description: "Wrote, directed, and edited a heartfelt short film exploring the concept of everyday heroism. The narrative follows a daughter's gratitude for her father, told through an intimate letter that highlights his profound impact and inspiration",
        tags: ['FILM', 'NARRATIVE'],
        role: "Director, Scriptwriter, Editor",
        videos: 1,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: 'Dear My Hero - Short Film', linkUrl: 'https://www.youtube.com/watch?v=CDavWfuIX6g' }
        ]
      },
      {
        title: 'Cross to Crown',
        description: "Directed and edited a faith based short film for GBI Rock Bandung. The visual narrative explores themes of hope and divine victory, offering an inspiring message of light amidst a world overshadowed by worry and darkness",
        tags: ['FILM', 'FAITH'],
        role: "Director, Scriptwriter, Editor",
        videos: 1,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: 'Cross to Crown - Short Film', linkUrl: 'https://www.youtube.com/watch?v=VVXvzkX2Mqo' }
        ]
      },
      {
        title: 'Wave of Dream',
        description: "Directed and edited a coming of age narrative short film. The visual story captures a poignant journey of friendship, education, and love, exploring the profound moments where bonds are forged, dreams are pursued, and hearts are entangled",
        tags: ['FILM', 'COMING OF AGE'],
        role: "Director, Scriptwriter, Editor",
        videos: 1,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: 'Wave of Dream - Short Film', linkUrl: 'https://www.youtube.com/watch?v=H21_IzIgOT0' }
        ]
      },
      {
        title: 'Terima Order',
        description: "Wrote, directed, and edited 'Terima Order', a poignant short film following the challenging shift of a ride hailing driver. The narrative serves as a grounded reflection on gratitude, empathy, and human compassion amidst everyday struggles",
        tags: ['FILM', 'DRAMA'],
        role: "Director, Scriptwriter, Editor",
        videos: 1,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: 'Terima Order - Short Film', linkUrl: 'https://www.youtube.com/watch?v=86weoNMQX00' }
        ]
      },
      {
        title: 'A Glimmer of Hope',
        description: "Directed and edited a dystopian sci-fi short film set in an oxygen depleted 2054. The narrative follows a soil scientist driven by a hopeful vision to restore Earth's fertility, blending bleak atmospheres with a message of environmental redemption",
        tags: ['FILM', 'SCI-FI'],
        role: "Director, Scriptwriter, Editor",
        videos: 1,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: 'A Glimmer of Hope - Short Film', linkUrl: 'https://www.youtube.com/watch?v=LB7Jjy5s29Q' }
        ]
      }
    ]
  },
  {
    id: '04',
    title: 'Event Documentation',
    focus: 'Speed & Reliability',
    projects: [
      {
        title: 'Sebuse Pertamina 2025',
        description: "Event documentation capturing the energy and critical moments of Sebuse Pertamina 2025.",
        tags: ['EVENT', 'DOCUMENTATION'],
        role: 'Videographer, Editor',
        videos: 1,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: 'Sebuse Pertamina 2025', linkUrl: 'https://youtu.be/M8FZ12V4t1k' }
        ]
      },
      {
        title: 'Genneo United 2025',
        thumbnail: 'https://i.imgur.com/zD4m0zO.png',
        description: "Event documentation capturing the energy and critical moments of Genneo United 2025.",
        tags: ['EVENT', 'DOCUMENTATION'],
        role: 'Videographer, Editor',
        videos: 1,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: 'Genneo United 2025', linkUrl: 'https://www.youtube.com/watch?v=YUhbVBEaGcA' }
        ]
      },
      {
        title: 'MK Champions Gathering 2025',
        thumbnail: 'https://i.imgur.com/eHq55kV.png',
        description: "Event documentation capturing the energy and critical moments of MK Champions Gathering 2025.",
        tags: ['EVENT', 'DOCUMENTATION'],
        role: 'Videographer, Editor',
        videos: 1,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: 'MK Champions Gathering 2025', linkUrl: 'https://www.youtube.com/watch?v=_pxW-Lzss6I' }
        ]
      },
      {
        title: 'Hari Retail Nasional Success Story 2025',
        description: "Event documentation capturing the energy and critical moments of Hari Retail Nasional Success Story 2025.",
        tags: ['EVENT', 'DOCUMENTATION'],
        role: 'Videographer, Editor',
        videos: 1,
        customAssets: [
          { type: 'video', orientation: 'horizontal', title: 'Hari Retail Nasional Success Story 2025', linkUrl: 'https://youtu.be/8CByuke-kDo' }
        ]
      }
    ]
  },
  {
    id: '05',
    title: 'Real Estate Videography',
    focus: 'Technical Precision & Aesthetics',
    projects: [
      {
        title: 'Kana Creative',
        thumbnail: 'https://i.imgur.com/ECL8uOI.png',
        description: "Freelance Video Editor at Kana Creative, a specialized agency focused on real estate branding. Delivered polished visual narratives tailored to elevate property brands in a competitive market",
        tags: ['AGENCY', 'EDITING'],
        role: "Video Editor",
        videos: 4,
        customAssets: [
          { type: 'video', orientation: 'vertical', title: 'Pacific Garden Puri', linkUrl: 'https://youtube.com/shorts/7ewadrfmDLg?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'The Crest West Vista 1', linkUrl: 'https://youtube.com/shorts/JHyhnYqizqM?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'The Crest West Vista 2', linkUrl: 'https://youtube.com/shorts/aEs17nYqIEY?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'Maison De Wisteria', linkUrl: 'https://youtube.com/shorts/TZv5ykO9-io?feature=share' }
        ]
      },
      {
        title: 'Mitra Graha Property',
        thumbnail: 'https://i.imgur.com/wYJpgbP.png',
        description: "Produced 111 end to end real estate videos, from scriptwriting to final cut. Driving a massive audience growth of 78,443 new followers across TikTok and Instagram",
        tags: ['REAL ESTATE', 'CINEMA'],
        role: "Scriptwriter, Videographer, Editor",
        videos: 4,
        customAssets: [
          { type: 'video', orientation: 'vertical', title: 'Ivora Summarecon - Mitra Graha (2025)', linkUrl: 'https://youtube.com/shorts/j4X80Bugok4?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'Ameta Kyoto - Mitra Graha (2025)', linkUrl: 'https://youtube.com/shorts/HiGwJ0fPBtA?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'Kalasan Raya - Mitra Graha (2025)', linkUrl: 'https://youtube.com/shorts/vnUFXYMUyvc?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'Lavender - Mitra Graha (2026)', linkUrl: 'https://youtube.com/shorts/Mjv0-o7YQgI' }
        ]
      },
      {
        title: 'Kota Baru Parahyangan',
        thumbnail: 'https://i.imgur.com/yVvhhaB.png',
        description: "Led end to end video production for the real estate sector. Developed targeted personal branding content for property agents (28K+ views) and produced high performing in-house campaigns for Kota Baru Parahyangan (108K+ views) across TikTok and Instagram",
        tags: ['IN-HOUSE', 'CAMPAIGN'],
        role: "Scriptwriter, Videographer, Editor",
        videos: 4,
        customAssets: [
          { type: 'video', orientation: 'vertical', title: 'Kota Baru Parahyangan - Video 1', linkUrl: 'https://youtube.com/shorts/tfCXvWe86Hc?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'Kota Baru Parahyangan - Video 2', linkUrl: 'https://youtube.com/shorts/aeP5-xxfzng?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'Kota Baru Parahyangan - Video 3', linkUrl: 'https://youtube.com/shorts/GXh2v8VcxLM?feature=share' },
          { type: 'video', orientation: 'vertical', title: 'Kota Baru Parahyangan - Video 4', linkUrl: 'https://youtube.com/shorts/dxJS9ZK6q6o?feature=share' }
        ]
      }
    ]
  }
];

export interface Achievement {
  year: string;
  title: string;
  issuer: string;
}

export const achievements: Achievement[] = [
  {
    year: "2023",
    title: "Adobe Certified Professional in Digital Video (Adobe Premiere Pro)",
    issuer: "Credential ID: 463788300"
  },
  {
    year: "2022",
    title: 'Most favorite video in the "Pahlawan Negeriku" event',
    issuer: "Teras Negeriku"
  },
  {
    year: "2020",
    title: "2nd place Short Story Competition",
    issuer: "Badan Pembinaan Ideologi Pancasila"
  },
  {
    year: "2020",
    title: "Best Director Award",
    issuer: "Student Film Fair"
  },
  {
    year: "2019",
    title: "Best Director Award",
    issuer: "Trinitas Film Fest 4.0"
  }
];

export const certificateImages = [
  "https://storage.googleapis.com/portofolioverrell/2.png",
  "https://storage.googleapis.com/portofolioverrell/1.png",
  "https://storage.googleapis.com/portofolioverrell/httpswww.linkedin.cominverrellaxel.png",
  "https://storage.googleapis.com/portofolioverrell/5.png",
  "https://storage.googleapis.com/portofolioverrell/6.png",
  "https://storage.googleapis.com/portofolioverrell/9.png"
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  companyDescription?: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    company: "FTL GYM",
    role: "End-to-End Content Creator",
    period: "2024 – Present",
    location: "Indonesia",
    companyDescription: "FTL Gym is a fast-growing megagym chain in Indonesia, operating 80+ locations across Jabodetabek, Bandung, Surabaya, and Bali.",
    points: [
      "End-to-End Content Production: Produced 3-4 short-form videos daily across pre-production, filming, and post-production.",
      "Consistent Top Performance: Exceeded monthly KPIs by 150%–200% on a consistent basis.",
      "AI Workflow Optimization: Integrated AI tools into daily workflows to streamline ideation, scriptwriting, and video editing.",
      "Performance Marketing & Growth: Partnered with the Paid Ads team to scale creative assets and boost lead generation for 80+ gym locations."
    ]
  },
  {
    company: "FREELANCE CREATIVE DESIGN",
    role: "Lead Videographer, Editor & Ad Specialist",
    period: "July 2021 – Present",
    location: "Bandung, Indonesia",
    points: [
      "Client Retention: Maintained an 85% retention rate across 10+ recurring clients.",
      "Ozone Bag (Men's Bag Brand): Managed full-cycle content creation, producing 85+ Reels & TikTok videos generating 100K+ views with 100% on-time delivery.",
      "Kana Creative (Property Agency): Edited promotional videos for property developers (The Crest West Vista, Maison de Wisteria) on strict timelines.",
      "Mitra Graha Property: Produced 111 video assets and managed Meta Ads, acquiring 100+ leads (IDR 1.5M budget) and 78K+ organic views.",
      "Kota Baru Parahyangan: Executed corporate and agent video branding campaigns, yielding over 137K+ views with 100% on-time delivery."
    ]
  },
  {
    company: "AKSESMU (Retail Shopping App)",
    role: "Graphic Video Content Creator Intern",
    period: "Feb 2024 – July 2024",
    location: "Tangerang, Indonesia",
    points: [
      "Social Media Growth: Boosted brand visibility by increasing impressions by approximately 70,000 through 50+ video assets.",
      "Event Documentation: Lead photographer/live-streamer for \"Mudik Aksesmu 2024\" event, managing on-site documentation for 2,000+ participants.",
      "Internal Communications: Produced short and long-form videos for corporate alignment."
    ]
  },
  {
    company: "CREVO CREATIVE (Social Media Agency)",
    role: "Freelance Photo & Video Production and Editor",
    period: "Nov 2023 – Apr 2024",
    location: "Bandung, Indonesia",
    points: [
      "Viral Campaign: Achieved 1M+ views on a single Instagram Reels campaign for Mixue, Papillon, and Manta.",
      "Brand Compliance: Managed weekly production of 10 videos/photos for 5 brands."
    ]
  },
  {
    company: "PHRISM VISUALS",
    role: "Project Director",
    period: "Dec 2022 – Sep 2023",
    location: "Bandung, Indonesia",
    points: [
      "Project Management: Directed startup operations, achieving 100% on-time project completion.",
      "Key Productions: Led a 5-member team producing commercial videos for Ventela and GBI Rock Church."
    ]
  }
];
