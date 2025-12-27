import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '../../utils/cn'

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export const RevealOnScroll = ({ 
  children, 
  className, 
  delay = 0,
  direction = 'up' 
}: RevealOnScrollProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const directionMap = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
  }

  const { x, y } = directionMap[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

