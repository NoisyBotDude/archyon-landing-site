import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../../utils/cn'

interface ProjectCarouselProps {
  images: string[]
  memberId: string
  memberType: 'core' | 'architecture'
  className?: string
}

export const ProjectCarousel = ({
  images,
  memberId,
  memberType,
  className,
}: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // Show fewer items on mobile, more on desktop
  const getItemsToShow = () => {
    if (typeof window === 'undefined') return 4
    if (window.innerWidth < 640) return 2 // mobile
    if (window.innerWidth < 1024) return 3 // tablet
    return 4 // desktop
  }

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow())

  // Update items to show on resize
  useEffect(() => {
    const handleResize = () => {
      const newItemsToShow = getItemsToShow()
      setItemsToShow(newItemsToShow)
      // Reset index if needed
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, images.length - newItemsToShow)))
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [images.length])

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    const maxIndex = Math.max(0, images.length - itemsToShow)
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const handleImageClick = () => {
    // Navigate to member detail page
    navigate(`/teams/${memberType}/${memberId}`)
  }

  const maxIndex = Math.max(0, images.length - itemsToShow)
  const canGoNext = currentIndex < maxIndex
  const canGoPrevious = currentIndex > 0

  return (
    <div className={cn('relative', className)}>
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg">
        <motion.div
          ref={scrollContainerRef}
          className="flex gap-2 md:gap-4"
          animate={{ 
            x: `-${currentIndex * (100 / Math.min(itemsToShow, images.length))}%`
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {images.slice(0, 6).map((imageUrl, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0"
              style={{ 
                width: `${100 / Math.min(itemsToShow, images.length)}%`,
                minWidth: '150px'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div
                className="relative aspect-square rounded-lg overflow-hidden border border-amber-500/30 cursor-pointer group"
                onClick={handleImageClick}
              >
                <img
                  src={imageUrl}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    // Try fallback URL formats
                    const currentSrc = target.src
                    const fileIdMatch = currentSrc.match(/\/([a-zA-Z0-9_-]+)$/) || currentSrc.match(/id=([a-zA-Z0-9_-]+)/) || currentSrc.match(/d\/([a-zA-Z0-9_-]+)/)
                    const fileId = fileIdMatch?.[1]
                    
                    if (fileId) {
                      // Try different formats in order
                      const fallbacks = [
                        `https://drive.google.com/thumbnail?id=${fileId}&sz=w1920-h1080`,
                        `https://drive.google.com/uc?export=view&id=${fileId}`,
                        `https://drive.google.com/uc?export=download&id=${fileId}`,
                      ]
                      
                      const currentIndex = fallbacks.findIndex(url => currentSrc.includes(url.split('?')[0].split('/').pop() || ''))
                      const nextIndex = currentIndex < fallbacks.length - 1 ? currentIndex + 1 : -1
                      
                      if (nextIndex >= 0) {
                        target.src = fallbacks[nextIndex]
                      } else {
                        target.style.display = 'none'
                      }
                    } else {
                      target.style.display = 'none'
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View All Projects
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows - Desktop Only */}
      {images.length > itemsToShow && (
        <>
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className={cn(
              'hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10',
              'w-10 h-10 rounded-full bg-zinc-900/80 border border-amber-500/30',
              'items-center justify-center text-amber-400',
              'hover:bg-amber-500/20 hover:border-amber-500/50 transition-colors',
              'disabled:opacity-30 disabled:cursor-not-allowed'
            )}
            aria-label="Previous projects"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={cn(
              'hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10',
              'w-10 h-10 rounded-full bg-zinc-900/80 border border-amber-500/30',
              'items-center justify-center text-amber-400',
              'hover:bg-amber-500/20 hover:border-amber-500/50 transition-colors',
              'disabled:opacity-30 disabled:cursor-not-allowed'
            )}
            aria-label="Next projects"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Mobile: Show scroll indicator */}
      {images.length > 2 && (
        <div className="md:hidden mt-2 text-center">
          <p className="text-xs text-zinc-400">
            Swipe to view more projects ({images.length} total)
          </p>
        </div>
      )}
    </div>
  )
}

