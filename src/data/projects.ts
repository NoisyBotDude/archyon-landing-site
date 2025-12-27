export interface Project {
  id: string
  title: string
  type: 'Residential' | 'Commercial'
  services: string[]
  year?: number
  description?: string
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Modern Villa Complex',
    type: 'Residential',
    services: ['Architectural Design', 'Structural Engineering', '3D Visualization'],
    year: 2024,
  },
  {
    id: 'proj-2',
    title: 'Commercial Office Tower',
    type: 'Commercial',
    services: ['Full Service Coordination', 'BIM Modeling', 'Sustainable Design'],
    year: 2024,
  },
  {
    id: 'proj-3',
    title: 'Residential Apartment Building',
    type: 'Residential',
    services: ['Architectural Planning', 'Structural Design', 'Documentation'],
    year: 2023,
  },
  {
    id: 'proj-4',
    title: 'Mixed-Use Development',
    type: 'Commercial',
    services: ['Design Development', 'Seismic Design', 'Value Engineering'],
    year: 2023,
  },
  {
    id: 'proj-5',
    title: 'Luxury Home Renovation',
    type: 'Residential',
    services: ['Remodeling Design', 'Structural Retrofitting', 'Interior Planning'],
    year: 2023,
  },
  {
    id: 'proj-6',
    title: 'Retail Complex',
    type: 'Commercial',
    services: ['Commercial Design', 'Structural Engineering', 'BIM Coordination'],
    year: 2022,
  },
]

