import { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'amber' | 'cyan'
  className?: string
}

export const Badge = ({ children, variant = 'default', className }: BadgeProps) => {
  const variants = {
    default: 'bg-zinc-800 text-zinc-200 border-zinc-700',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    cyan: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30',
  }

  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}

