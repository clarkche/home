import { BlogPost, Project, GallerySeries } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Alchemy of React Hooks',
    excerpt: 'Transmuting state and effects into gold. A deep dive into the magical lifecycle of functional components.',
    content: `
      In the ancient days of Class Components, we bound our souls to \`this\` and prayed to the lifecycle gods. 
      But then, the Hooks API was revealed—a purer form of magic.

      ## The Essence of useState
      It begins with a simple incantation: \`const [mana, setMana] = useState(100);\`.
      With this, we capture a slice of reality and hold it within our function's closure.

      ## The Ritual of useEffect
      Synchronization with the outside world (the DOM, subscriptions, timers) requires careful weaving.
      Dependency arrays are your protective circles. Forget them, and you invite infinite loops—chaos demons that consume your browser's memory.

      ## Custom Hooks: Crafting Spellbooks
      Why repeat a ritual? Encapsulate your logic into a custom hook. It is akin to scribing a scroll that can be cast by any component in your grimoire.
    `,
    date: '2023-10-31',
    tags: ['React', 'Frontend', 'Magic'],
    readTime: '5 min read',
    imageUrl: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: '2',
    title: 'Summoning Daemons: Systemd & You',
    excerpt: 'Controlling background processes in the Linux realm without losing your sanity.',
    content: `
      The Linux kernel is a vast, untamed wilderness. To maintain order, we employ the Arch-Daemon: Systemd.

      Writing a unit file is like drafting a contract with a spirit. You must specify precisely when it should rise (\`After=network.target\`) and what to do if it falls (\`Restart=always\`).

      \`\`\`ini
      [Unit]
      Description=My Magical Service
      
      [Service]
      ExecStart=/usr/bin/cast-spell
      Restart=on-failure
      
      [Install]
      WantedBy=multi-user.target
      \`\`\`
    `,
    date: '2023-11-15',
    tags: ['Linux', 'DevOps', 'Backend'],
    readTime: '8 min read',
    imageUrl: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: '3',
    title: 'Scaling the Crystal Tower',
    excerpt: 'Microservices architecture explained through the metaphor of a wizard tower.',
    content: 'Monoliths are sturdy, but rigid. Microservices allow us to build a city of towers, each specialized in a school of magic...',
    date: '2024-01-20',
    tags: ['Architecture', 'Scalability'],
    readTime: '12 min read',
    imageUrl: 'https://picsum.photos/800/400?random=3'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Smart Mirror',
    description: 'AI Agent-centric hardware dedicated to creating stylish digital companions for Gen-Z.\nRaised $3 million in angel round.',
    techStack: ['Android App', 'React Native', 'Multimodal LLMs'],
    link: 'https://wgdl.tech',
    github: '',
    imageUrl: 'https://cdn.clark21.com/public/mirror.jpeg'
  },
  {
    id: 'p2',
    title: 'Skyveil AI',
    description: 'The AI Copilot for Real-World Creation',
    techStack: ['React', 'FastAPI', 'Tailwind'],
    link: 'https://skyveil.ai',
    github: '',
    imageUrl: 'https://cdn.clark21.com/public/16.png'
  },
  {
    id: 'p3',
    title: 'Shi Dai (时代)',
    description: 'A procedurally generated dungeon crawler game running entirely in the browser.',
    techStack: ['Phaser', 'Rust/WASM'],
    link: '',
    github: '',
    imageUrl: 'https://picsum.photos/600/400?random=6'
  }
];

export const GALLERY_SERIES: GallerySeries[] = [
  {
    id: 'vegas-2024',
    title: 'Neon Dreams in Las Vegas',
    location: 'Las Vegas, Nevada',
    date: 'March 2024',
    coverPhoto: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57a?w=800&q=80',
    description: 'A whirlwind adventure through the electric streets of Sin City. From the dazzling lights of the Strip to the serenity of Red Rock Canyon.',
    photos: [
      { id: 'lv1', url: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57a?w=600&q=80', caption: 'The Strip at midnight' },
      { id: 'lv2', url: 'https://images.unsplash.com/photo-1579950632881-b2f0a4692c1c?w=600&q=80', caption: 'Bellagio Fountains' },
      { id: 'lv3', url: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80', caption: 'Downtown Fremont Street' },
      { id: 'lv4', url: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=600&q=80', caption: 'Red Rock Canyon sunset' },
      { id: 'lv5', url: 'https://images.unsplash.com/photo-1614811056306-b20c3db9c2d8?w=600&q=80', caption: 'Luxor beam at night' },
      { id: 'lv6', url: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=600&q=80', caption: 'Casino architecture' },
    ]
  },
  {
    id: 'hawaii-2023',
    title: 'Island Paradise: Hawaii Chronicles',
    location: 'Maui & Oahu, Hawaii',
    date: 'December 2023',
    coverPhoto: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800&q=80',
    description: 'Exploring volcanic landscapes, pristine beaches, and the vibrant culture of the Hawaiian islands. From sunrise at Haleakalā to sunset on Waikiki Beach.',
    photos: [
      { id: 'hi1', url: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=600&q=80', caption: 'Waikiki Beach at sunset' },
      { id: 'hi2', url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', caption: 'Road to Hana waterfall' },
      { id: 'hi3', url: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=600&q=80', caption: 'Volcanic coastline' },
      { id: 'hi4', url: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=600&q=80', caption: 'Haleakalā sunrise' },
      { id: 'hi5', url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80', caption: 'Tropical flora' },
      { id: 'hi6', url: 'https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?w=600&q=80', caption: 'Diamond Head crater' },
    ]
  },
  {
    id: 'nyc-2023',
    title: 'Concrete Jungle: NYC Adventures',
    location: 'New York City, New York',
    date: 'September 2023',
    coverPhoto: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
    description: 'The city that never sleeps. Capturing the energy, architecture, and endless stories of New York through my lens.',
    photos: [
      { id: 'nyc1', url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80', caption: 'Brooklyn Bridge at dawn' },
      { id: 'nyc2', url: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=600&q=80', caption: 'Times Square lights' },
      { id: 'nyc3', url: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80', caption: 'Central Park fall colors' },
      { id: 'nyc4', url: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=600&q=80', caption: 'Manhattan skyline' },
      { id: 'nyc5', url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&q=80', caption: 'Subway station' },
      { id: 'nyc6', url: 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?w=600&q=80', caption: 'High Line park' },
    ]
  },
];
