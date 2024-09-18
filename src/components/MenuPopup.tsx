'use client'
import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/menu-popup'
import { cn } from '@/lib/utils'

export function MenuPopup() {
	return (
		<div className='relative w-full flex flex-col items-center justify-center border-4'>
			<Menubar className='' />
		</div>
	)
}

function Menubar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null)
	return (
		<div
			className={cn('inset-x-0 h-[20rem] bg-grid-slate-600/[0.09] mx-auto z-0 max-w-xs', className)}
		>
			<Menu setActive={setActive}>
				<MenuItem setActive={setActive} active={active} item='Nerds Fighting'>
					<div className='text-sm gap-10 p-4 border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-slate-200 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none w-[20rem] text-secondaryBlack'>
						<ProductItem
							title='Nerds Fighting'
							href='/#applications'
							src='/nerds-collage1.png'
							description='Kickboxing & Martial Arts Club'
						/>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item='Hippo Docs'>
					<div className='text-sm gap-10 p-4 border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-[#f7f7f7] transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none'>
						<ProductItem
							title='Hippo Docs'
							href='/#applications'
							src='/hippo-collage.png'
							description='Legal Document Prepping Business.'
						/>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item='Louvair'>
					<div className='text-sm gap-10 p-4 border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-[#f7f7f7] transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none'>
						<ProductItem
							title='Louvair'
							href='/#applications'
							src='/louvair-collage.png'
							description='E-commerce store for a fragrance business.'
						/>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item='Swim Coach'>
					<div className='text-sm gap-10 p-4 border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-[#f7f7f7] transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none z-50'>
						<ProductItem
							title='Swim Coach App'
							// href='https://louvair.com'
							href='/#applications'
							src='/adam-collage.png'
							description='Application for swim coaches to manage their teams.'
						/>
					</div>
				</MenuItem>
			</Menu>
		</div>
	)
}
