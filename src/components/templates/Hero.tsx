'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { AnimatedLetters, AnimatedText } from '@/components/animated-text'

import { useTheme } from '@/hooks/use-theme'
import { useMounted } from '@/hooks/use-mounted'
import Image from 'next/image'

import { TechList } from '@/components/TechList'
import { Profile } from '@/components/Profile'
import { NavbarDemo } from '@/components/NavbarPopup'
import { GridBeam } from '../ui/grid-beam'

const MotionImage = motion(Image)

export const Hero = () => {
	const { theme } = useTheme()
	const mounted = useMounted()

	if (!mounted) return null

	return (
		// <header
		// 	id='intro'
		// 	className='pt-0 pb-24 shadow-[inset_0_-40px_15px_-10px_#ededed] transition duration-300 ease-in-out dark:shadow-[inset_0_-40px_15px_-10px_#171717] md:bg-auto w-full border-4 h-[400px] dark:bg-grid-white/[0.05] bg-grid-black/[0.07]'
		// >
		<header
			id='intro'
			className='pt-0 pb-24 shadow-[inset_0_-40px_15px_-10px_#ededed] transition duration-300 ease-in-out dark:shadow-[inset_0_-40px_15px_-10px_#171717] md:bg-auto w-full border-4 h-[400px] '
		>
			<GridBeam className='sm:pl-16 pt-28 pl-4 flex items-start justify-start'>
				<div className='flex md:flex-row flex-col w-full md:justify-between items-center'>
					<motion.section
						variants={{
							hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
							visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } }
						}}
						initial='hidden'
						whileInView='visible'
						exit='hidden'
						viewport={{ once: true }}
						className='relative container mb-12 flex flex-col space-y-6 w-full lg:max-w-[50%]'
					>
						<AnimatePresence>
							<article className=''>
								<AnimatedText
									as='p'
									className='text-xl  font-light tracking-widest uppercase text-dark-400 dark:text-dark-200'
									text='Larry Ly'
								/>
								<AnimatedLetters
									as='p'
									text='Data Analyst and Developer'
									className='text-3xl font-black md:text-4xl lg:text-5xl'
									textVariants={{
										hidden: { transition: { staggerChildren: 0.05 } },
										visible: { transition: { staggerChildren: 0.05 } }
									}}
									letterVariants={{
										hidden: { opacity: 0, y: 75 },
										visible: {
											opacity: 1,
											y: 0,
											transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 }
										}
									}}
								/>
							</article>
						</AnimatePresence>
						<Profile />
						<TechList />
					</motion.section>
					<motion.section
						variants={{
							hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
							visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } }
						}}
						initial='hidden'
						whileInView='visible'
						exit='hidden'
						viewport={{ once: true }}
						className='relative container flex flex-col lg:max-w-[50%]'
					>
						{' '}
						<div className='border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-sky-900 p-3 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none rounded-lg z-10 hidden md:block'>
							<motion.div
								style={{
									boxShadow:
										'0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003'
								}}
								className='mx-auto h-[24rem] w-full  border-[#6C6C6C] p-2 md:p-6 bg-[#f7f7f7]/90 rounded-[30px] shadow-2xl'
							>
								<div className='h-full w-full rounded-2xl dark:bg-zinc-900 md:rounded-2xl md:p-4'>
									<NavbarDemo />
								</div>
							</motion.div>
						</div>
					</motion.section>
				</div>
			</GridBeam>
		</header>
	)
}
