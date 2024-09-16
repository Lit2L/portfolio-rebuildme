'use client'

import { motion } from 'framer-motion'
import {
	SiMicrosoftsqlserver,
	SiNeovim,
	SiNextdotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiTailwindcss,
	SiTypescript
} from 'react-icons/si'

import { AnimatedText } from '@/components/animated-text'

import { Label } from './ui/label'
import { IoLogoFigma } from 'react-icons/io5'
import { IconBrandNextjs } from '@tabler/icons-react'

export const TechList = () => {
	return (
		<div className=''>
			<motion.section
				variants={{
					visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } }
				}}
				initial='hidden'
				whileInView='visible'
				exit='hidden'
				viewport={{ once: true }}
				className='col-span-full mt-1 md:col-span-6 xl:col-span-8 overflow-hidden'
			>
				<AnimatedText
					as='h3'
					text='Tech I enjoy'
					className='text-dark-200 dark:text-dark-400 text-sm tracking-wider uppercase'
				/>
				<motion.div
					variants={{
						hidden: { y: 50, opacity: 0 },
						visible: {
							y: 0,
							opacity: 1,
							transition: { duration: 0.5, ease: 'circOut' }
						}
					}}
					className='text-dark-300 flex flex-wrap gap-6'
				>
					<div className='bubble'>
						<SiPostgresql size={28} title='PostgreSQL' />
						<Label className='text-[10px]'>P-SQL</Label>
					</div>
					<div className='bubble'>
						<SiMicrosoftsqlserver size={28} title='Sql-Server' />
						<Label className='text-[10px]'>Sql-Server</Label>
					</div>

					<div className='bubble'>
						<SiNextdotjs size={28} title='Nextjs' />
						<Label className='text-[10px]'>NextJs</Label>
					</div>
					<div className='bubble'>
						<SiTypescript size={28} title='TypeScript' />
						<Label className='text-[10px]'>TSX</Label>
					</div>
					<div className='bubble'>
						<SiReact size={28} title='React.js' />
						<Label className='text-[10px]'>P-SQL</Label>
					</div>
					<div className='bubble'>
						<SiNextdotjs size={28} title='Next.js' />
						<Label className='text-[10px]'>P-SQL</Label>
					</div>
					<div className='bubble'>
						<SiTailwindcss size={28} title='TailwindCSS' />
						<Label className='text-[10px]'>P-SQL</Label>
					</div>
					<div className='bubble'>
						<SiPrisma size={28} title='Prisma' />
						<Label className='text-[10px]'>Prisma ORM</Label>
					</div>
					<div className='bubble'>
						<IoLogoFigma size={28} title='Figma' />
						<Label className='text-[10px]'>P-SQL</Label>
					</div>
				</motion.div>
			</motion.section>
		</div>
	)
}
