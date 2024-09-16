import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/use-theme'
import Image from 'next/image'
import ProfileLight from '../../public/LarryProfileBW.png'
import ProfileDark from '../../public/LarryProfile.png'
import { DownloadCV } from './DownloadCv'
const MotionImage = motion(Image)

export const Profile = () => {
	const { theme } = useTheme()
	const activeTheme = theme === 'dark' ? 'light' : 'dark'

	return (
		<div className='flex'>
			<motion.figure
				variants={{
					hidden: { scaleX: 0, originX: 0 },
					visible: {
						scaleX: 1,
						opacity: 1,
						transition: {
							duration: 0.75,
							ease: [0.9, 0.1, 0.3, 0.96],
							when: 'beforeChildren',
							delayChildren: 0.15,
							delay: 0.25
						}
					}
				}}
				initial='hidden'
				whileInView='visible'
				exit='hidden'
				viewport={{ once: true }}
				className={cn(
					'w-44 h-44 relative aspect-w-4 aspect-h-3 overflow-hidden bg-muted rounded-full shadow-xl shadow-black/50 border-4',
					{
						'bg-dark-100': theme === 'light',
						'bg-dark-700': theme === 'dark',
						'border-4': theme === 'light',
						'border-8': theme === 'dark'
					}
				)}
			>
				<MotionImage
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] }
						}
					}}
					fill
					priority
					quality={95}
					src={activeTheme === 'dark' ? ProfileLight : ProfileDark}
					alt='Portrait of Larry Ly'
					// loading='lazy'
					className='rounded-full w-full object-cover'
				/>
			</motion.figure>
			<div className='-translate-x-12'>
				<DownloadCV />
			</div>
		</div>
	)
}
