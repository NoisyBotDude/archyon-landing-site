import { Link } from 'react-router-dom'
import { GlowCard } from './GlowCard'
import { Badge } from './Badge'
import { cn } from '../../utils/cn'

interface MemberCardProps {
  id: string
  name: string
  title: string
  image?: string
  type: 'core' | 'architecture'
  glowColor?: 'amber' | 'cyan'
  education?: string
  license?: string
  className?: string
}

export const MemberCard = ({
  id,
  name,
  title,
  image,
  type,
  glowColor = 'amber',
  education,
  license,
  className,
}: MemberCardProps) => {
  const imageUrl = image || '/placeholder-avatar.svg'
  const linkPath = `/teams/${type}/${id}`

  return (
    <Link to={linkPath} className={cn('block', className)}>
      <GlowCard glowColor={glowColor} className="h-full">
        <div className="flex flex-col items-center text-center">
          {/* Image */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden border-2 border-amber-500/30">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                const target = e.target as HTMLImageElement
                target.src = '/placeholder-avatar.svg'
              }}
            />
          </div>

          {/* Name */}
          <h3 className="text-lg md:text-xl font-semibold mb-1">{name}</h3>

          {/* Title */}
          <p className="text-amber-400 text-sm md:text-base mb-3">{title}</p>

          {/* Badges for architecture team */}
          {type === 'architecture' && (
            <div className="flex flex-col gap-2 w-full">
              {education && (
                <Badge variant="cyan" className="text-xs">
                  {education}
                </Badge>
              )}
              {license && (
                <Badge variant="default" className="text-xs">
                  {license}
                </Badge>
              )}
            </div>
          )}
        </div>
      </GlowCard>
    </Link>
  )
}

