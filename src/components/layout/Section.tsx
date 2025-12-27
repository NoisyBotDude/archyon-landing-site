import { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4 max-w-7xl">
        {children}
      </div>
    </section>
  )
}

