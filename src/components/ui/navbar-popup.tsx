'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const transition = {
	type: 'spring',
	mass: 0.5,
	damping: 11.5,
	stiffness: 100,
	restDelta: 0.001,
	restSpeed: 0.001
}

export const MenuItem = ({
	setActive,
	active,
	item,
	children
}: {
	setActive: (item: string) => void
	active: string | null
	item: string
	children?: React.ReactNode
}) => {
	return (
		<div
			onMouseEnter={() => setActive(item)}
			className='border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-sky-900 px-3 py-1 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none cursor-pointer flex items-center justify-center z-50'
		>
			<motion.p
				transition={{ duration: 0.5 }}
				className='cursor-pointer text-white font-bold hover:opacity-[0.9] dark:text-white'
			>
				{item}
			</motion.p>
			{active !== null && (
				<motion.div
					initial={{ opacity: 0, scale: 0.85, x: 0, y: 0 }}
					animate={{ opacity: 1, scale: 1, x: 0, y: -10 }}
					transition={transition}
				>
					{active === item && (
						<div className='absolute w-[20rem] h-[15rem] top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2'>
							<motion.div
								transition={transition}
								layoutId='active' // layoutId ensures smooth animation
								className='neo  '
							>
								<motion.div
									layout // layout ensures smooth animation
									className='w-full h-full '
								>
									{children}
								</motion.div>
							</motion.div>
						</div>
					)}
				</motion.div>
			)}
		</div>
	)
}

export const Menu = ({
	setActive,
	children
}: {
	setActive: (item: string | null) => void
	children: React.ReactNode
}) => {
	return (
		<nav
			onMouseLeave={() => setActive(null)} // resets the state
			className='relative rounded-full  shadow-input flex justify-center space-x-4  '
		>
			{children}
		</nav>
	)
}

export const ProductItem = ({
	title,
	description,
	href,
	src
}: {
	title: string
	description: string
	href: string
	src: string
}) => {
	return (
		<Link href={href} className='flex space-x-2 z-0 relative hover:z-50'>
			<Image
				src={src}
				width={140}
				height={70}
				alt={title}
				className='flex-shrink-0 rounded-md shadow-2xl'
			/>
			<div>
				<h4 className='text-xl font-bold mb-1 text-white dark:text-black'>{title}</h4>
				<p className='text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-900'>
					{description}
				</p>
			</div>
		</Link>
	)
}

export const HoveredLink = ({ children, ...rest }: any) => {
	return (
		<Link {...rest} className='text-neutral-700 dark:text-neutral-900 hover:text-black '>
			{children}
		</Link>
	)
}
