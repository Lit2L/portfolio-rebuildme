'use client'

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

export function ModeToggle() {
	const { theme, setTheme } = useTheme()

	return (
		<Button
			variant='ghost'
			type='button'
			size='icon'
			className='scale-100 hover:scale-110 flex items-center justify-center'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			<SunIcon className='h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200 scale-100 hover:scale-105' />
			<MoonIcon className='hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200 scale-100 hover:scale-105' />
		</Button>
	)
}
