import { BlogPost, Project } from './types';

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
    title: 'Aether-Net',
    description: 'A decentralized mesh network visualization tool built with WebGL and WebSockets.',
    techStack: ['TypeScript', 'Three.js', 'Node.js'],
    link: '#',
    github: '#',
    imageUrl: 'https://picsum.photos/600/400?random=4'
  },
  {
    id: 'p2',
    title: 'Grimoire.io',
    description: 'AI-powered note-taking app for developers that auto-generates documentation from code snippets.',
    techStack: ['React', 'Gemini API', 'Tailwind'],
    link: '#',
    github: '#',
    imageUrl: 'https://picsum.photos/600/400?random=5'
  },
  {
    id: 'p3',
    title: 'Void Walker',
    description: 'A procedurally generated dungeon crawler game running entirely in the browser.',
    techStack: ['Phaser', 'Rust/WASM'],
    link: '#',
    github: '#',
    imageUrl: 'https://picsum.photos/600/400?random=6'
  }
];
