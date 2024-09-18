'use client'

import { Work_Sans } from 'next/font/google'
import { ReactNode, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
// import { useThemeStore } from '../store'
// import { SessionProvider } from 'next-auth/react'
const workSans = Work_Sans({ subsets: ['latin'] })

export default function Hydrate({ children }: { children: ReactNode }) {
	const [isHydrated, setIsHydrated] = useState(false)
	// const themeStore = useThemeStore()

	// Waits til Nextjs rehydration completes
	useEffect(() => {
		setIsHydrated(true)
	}, [])

	return (
		// <SessionProvider>
		<>
			{isHydrated ? (
				<body
					className={cn(
						`${workSans.className} bg-background workSans antialiased text-dark-600 transition-colors duration-300 ease-in-out max-w-full w-full relative min-h-screen dark:text-dark-50 overflow-hidden}`
					)}
				>
					{children}
				</body>
			) : (
				<body></body>
			)}

			{/* </SessionProvider> */}
		</>
	)
}
