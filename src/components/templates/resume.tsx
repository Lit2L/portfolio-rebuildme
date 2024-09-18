'use client'
import React from 'react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import Image from 'next/image'
import Link from 'next/link'
import { SectionShell } from '@/components/ui/section-shell'
import { SectionHeader } from '@/components/ui/section-header'

export function Resume() {
	return (
		<SectionShell id='resume'>
			<SectionHeader heading='resume' />
			<div className='flex flex-col h-full '>
				<ContainerScroll
					titleComponent={
						<p className='text-xl font-semibold text-black dark:text-white'>
							Click to download my CV
						</p>
					}
				>
					<Link href='/public/assets/LarryLy-CV.pdf'>
						<Image
							src={`/LarryLy-CV.png`}
							alt='hero'
							height={720}
							width={1400}
							priority
							className='mx-auto rounded-2xl object-cover h-full object-left-top'
							draggable={false}
						/>
					</Link>
				</ContainerScroll>
			</div>
		</SectionShell>
	)
}
