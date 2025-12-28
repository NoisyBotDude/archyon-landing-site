export interface CoreTeamMember {
  id: string
  name: string
  title: string
  image: string
  bio?: string
  email?: string
  linkedin?: string
  phone?: string
  subtitle?: string
}

export const coreTeam: CoreTeamMember[] = [
  {
    id: 'dhruvajit-boro',
    name: 'DHRUBAJIT BORO',
    title: 'CEO',
    subtitle: 'Founder',
    image: '/dhruba-profile.png',
    bio: 'Visionary leader driving innovation in construction and architecture. With extensive experience in the industry, Dhruvajit brings strategic direction and excellence to every project.',
    email: 'dhruvajit@archyon.com',
    linkedin: 'https://linkedin.com/in/dhruvajit-boro',
  },
  {
    id: 'cmo-placeholder',
    name: 'DIMBESWAR BAISHYA',
    title: 'CMO',
    subtitle: 'Chief Marketing Officer',
    image: '/dimbeswar.jpg',
    bio: 'Driving brand growth and market expansion strategies.',
  },
  // ragini konwar
  {
    id: 'ragini-konwar',
    name: 'RAGINI KONWAR',
    title: 'Principal Architect',
    subtitle: 'Co-Founder',
    image: '/ragini.jpg',
    bio: 'Architect with a passion for design and architecture.',
  },
]

