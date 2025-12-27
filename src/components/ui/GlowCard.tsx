import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: 'amber' | 'cyan'
  hoverable?: boolean
}

export const GlowCard = ({ children, className, glowColor = 'amber', hoverable = true }: GlowCardProps) => {
  const glowStyles = {
    amber: 'border-amber-500/30 hover:border-amber-500/50 hover:shadow-amber-400/20',
    cyan: 'border-cyan-400/30 hover:border-cyan-400/50 hover:shadow-cyan-400/20',
  }

  const cardContent = (
    <div className={cn(
      'relative p-6 rounded-lg border bg-zinc-900/50 backdrop-blur-sm transition-all duration-300',
      glowStyles[glowColor],
      hoverable && 'hover:shadow-lg',
      className
    )}>
      {children}
    </div>
  )

  if (hoverable) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {cardContent}
      </motion.div>
    )
  }

  return cardContent
}

