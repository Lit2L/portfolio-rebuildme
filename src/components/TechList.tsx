'use client'

import { motion } from 'framer-motion'
import {
	SiMicrosoftsqlserver,
	SiNeovim,
	SiNextdotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiSnowflake,
	SiTailwindcss,
	SiTypescript
} from 'react-icons/si'
import { FaAws, FaGit } from 'react-icons/fa'
import { AiOutlinePython } from 'react-icons/ai'
import { AnimatedText } from '@/components/animated-text'
import { BsDatabaseDown } from 'react-icons/bs'
import { LuWarehouse } from 'react-icons/lu'
import { GoGraph } from 'react-icons/go'

import { Label } from './ui/label'
import { IoLogoFigma } from 'react-icons/io5'

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
						<BsDatabaseDown size={28} title='Database' />
						<Label className='text-[10px]'>Database</Label>
					</div>
					<div className='bubble'>
						<SiPostgresql size={28} title='PostgreSQL' />
						<Label className='text-[10px]'>P-SQL</Label>
					</div>
					<div className='bubble'>
						<SiMicrosoftsqlserver size={28} title='Sql-Server' />
						<Label className='text-[10px]'>Sql-Server</Label>
					</div>
					<div className='bubble'>
						<FaAws size={28} title='AWS Services' />
						<Label className='text-[10px]'>Cloud</Label>
					</div>
					<div className='bubble'>
						<FaGit size={28} title='Git' />
						<Label className='text-[10px]'>Git</Label>
					</div>

					<div className='bubble'>
						<AiOutlinePython size={28} title='Python' />
						<Label className='text-[10px]'>Python</Label>
					</div>
					<div className='bubble'>
						<SiTypescript size={28} title='TypeScript' />
						<Label className='text-[10px]'>TSX</Label>
					</div>

					<div className='bubble'>
						<LuWarehouse size={28} title='Data Warehouse' />
						<Label className='text-[10px]'>Data Warehouse</Label>
					</div>
					{/* <div className='bubble'>
						<SiTailwindcss size={28} title='TailwindCSS' />
						<Label className='text-[10px]'>P-SQL</Label>
					</div> */}
					<div className='bubble'>
						<SiPrisma size={28} title='Prisma' />
						<Label className='text-[10px]'>Prisma ORM</Label>
					</div>
					<div className='bubble'>
						<GoGraph size={28} title='Data Visualization' />
						<Label className='text-[10px]'>Data Visualization</Label>
					</div>
				</motion.div>
			</motion.section>
		</div>
	)
}
