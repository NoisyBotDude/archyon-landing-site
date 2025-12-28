export interface CoreTeamMember {
  id: string
  name: string
  title: string
  image: string
  bio?: string
  email?: string
  linkedin?: string
  phone?: string
}

export const coreTeam: CoreTeamMember[] = [
  {
    id: 'dhruvajit-boro',
    name: 'DHRUBAJIT BORO',
    title: 'CEO',
    image: '/dhruba-profile.png',
    bio: 'Visionary leader driving innovation in construction and architecture. With extensive experience in the industry, Dhruvajit brings strategic direction and excellence to every project.',
    email: 'dhruvajit@archyon.com',
    linkedin: 'https://linkedin.com/in/dhruvajit-boro',
  },
  {
    id: 'cto-placeholder',
    name: 'Chief Technology Officer',
    title: 'CTO',
    image: '/placeholder-avatar.svg',
    bio: 'Leading our technology initiatives and digital transformation efforts.',
  },
  {
    id: 'cfo-placeholder',
    name: 'Chief Financial Officer',
    title: 'CFO',
    image: '/placeholder-avatar.svg',
    bio: 'Managing financial strategy and ensuring sustainable growth.',
  },
  {
    id: 'cmo-placeholder',
    name: 'Chief Marketing Officer',
    title: 'CMO',
    image: '/placeholder-avatar.svg',
    bio: 'Driving brand growth and market expansion strategies.',
  },
  {
    id: 'tech-personnel-1',
    name: 'Senior Tech Lead',
    title: 'Tech Personnel',
    image: '/placeholder-avatar.svg',
    bio: 'Expert in technical implementation and system architecture.',
  },
  {
    id: 'tech-personnel-2',
    name: 'Development Specialist',
    title: 'Tech Personnel',
    image: '/placeholder-avatar.svg',
    bio: 'Specializing in software development and technical solutions.',
  },
  {
    id: 'other-1',
    name: 'Operations Manager',
    title: 'Operations',
    image: '/placeholder-avatar.svg',
    bio: 'Ensuring smooth operations and project delivery.',
  },
  {
    id: 'other-2',
    name: 'Business Development',
    title: 'Business Development',
    image: '/placeholder-avatar.svg',
    bio: 'Building partnerships and expanding business opportunities.',
  },
]

