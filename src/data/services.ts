export interface ServiceItem {
  id: string
  title: string
  shortDesc?: string
  icon?: string
}

export interface ServiceCategory {
  categoryId: string
  title: string
  subtitle: string
  items: ServiceItem[]
}

export const services: ServiceCategory[] = [
  {
    categoryId: 'architectural',
    title: 'Architectural Design Services',
    subtitle: 'Comprehensive architectural design and planning services',
    items: [
      { id: 'arch-1', title: 'Concept & schematic design' },
      { id: 'arch-2', title: 'Architectural planning & layouts' },
      { id: 'arch-3', title: 'Residential building design (villas, houses, apartments)' },
      { id: 'arch-4', title: 'Commercial building design (offices, retail, mixed-use)' },
      { id: 'arch-5', title: 'Interior space planning & design coordination' },
      { id: 'arch-6', title: '3D modeling & architectural visualizations' },
      { id: 'arch-7', title: 'Building façade design' },
      { id: 'arch-8', title: 'Sustainable & green building design' },
      { id: 'arch-9', title: 'Renovation, remodeling & adaptive reuse' },
      { id: 'arch-10', title: 'Design development & construction drawings' },
      { id: 'arch-11', title: 'Authority approval drawings & documentation' },
    ],
  },
  {
    categoryId: 'structural',
    title: 'Structural Engineering Services',
    subtitle: 'Expert structural analysis, design, and engineering solutions',
    items: [
      { id: 'struct-1', title: 'Structural analysis & design' },
      { id: 'struct-2', title: 'RCC structure design' },
      { id: 'struct-3', title: 'Steel structure design' },
      { id: 'struct-4', title: 'Load calculations & structural optimization' },
      { id: 'struct-5', title: 'Foundation design' },
      { id: 'struct-6', title: 'Seismic / earthquake-resistant design' },
      { id: 'struct-7', title: 'Retrofitting & structural strengthening' },
      { id: 'struct-8', title: 'Structural drawings & detailing' },
      { id: 'struct-9', title: 'Structural review & design verification' },
      { id: 'struct-10', title: 'Value engineering & cost optimization' },
    ],
  },
  {
    categoryId: 'combined',
    title: 'Combined / Support Services',
    subtitle: 'Integrated services for seamless project delivery',
    items: [
      { id: 'combined-1', title: 'Architectural & structural coordination' },
      { id: 'combined-2', title: 'BIM modeling & clash detection' },
      { id: 'combined-3', title: 'Construction documentation & shop drawings' },
      { id: 'combined-4', title: 'Site supervision & technical support' },
      { id: 'combined-5', title: 'As-built drawings' },
      { id: 'combined-6', title: 'Design consultation & feasibility studies' },
    ],
  },
]

