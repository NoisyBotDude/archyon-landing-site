import { ButtonHTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3',
      lg: 'px-8 py-4 text-lg',
    }
    const baseStyles = `rounded-lg font-medium transition-all duration-200 relative overflow-hidden ${sizeStyles[size]}`
    
    const variants = {
      primary: 'bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-500/30 hover:border-amber-500/50 glow-amber',
      secondary: 'bg-transparent text-cyan-300 border border-cyan-400/30 hover:bg-cyan-400/10 hover:border-cyan-400/50 glow-cyan',
      ghost: 'bg-transparent text-zinc-300 hover:bg-zinc-800/50 border border-transparent',
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

