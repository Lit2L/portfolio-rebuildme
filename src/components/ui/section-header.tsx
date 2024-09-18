'use client'

import type { ComponentPropsWithRef } from 'react'
import { forwardRef } from 'react'

import type { HTMLMotionProps, Variants } from 'framer-motion'
import { motion } from 'framer-motion'

const lineVariants = {
	hidden: {
		originX: 0,
		scaleX: 0
	},
	visible: {
		scaleX: 1,
		transition: {
			duration: 0.75,
			ease: 'circOut'
		}
	}
}

const headerVariants = {
	hidden: {
		opacity: 0,
		x: -20
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.75,
			ease: 'circOut'
		}
	}
}

const parentVariants: Variants = {
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
			delayChildren: 0.25
		}
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren'
		}
	}
}

type SectionHeaderProps = {
	heading: string
} & ComponentPropsWithRef<'header'> &
	HTMLMotionProps<'header'>

export const SectionHeader = forwardRef<HTMLElement, SectionHeaderProps>(
	({ heading, ...props }, ref) => (
		<motion.header
			ref={ref}
			{...props}
			className='flex items-center py-12'
			variants={parentVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
		>
			<motion.h2
				variants={headerVariants}
				className='w-44 text-sm font-bold uppercase tracking-wider text-dark-200 dark:text-yellow-500'
			>
				{heading}
			</motion.h2>
			<motion.div
				variants={lineVariants}
				className='h-[5px] flex-1 bg-dark-100 transition-colors duration-200 ease-in-out dark:bg-yellow-500'
			/>
		</motion.header>
	)
)

SectionHeader.displayName = 'SectionHeader'
