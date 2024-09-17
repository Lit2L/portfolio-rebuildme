import './globals.css'
import type { Metadata } from 'next'
import { Inter, Work_Sans } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { Footer } from '@/components/Footer'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import { FloatingNavDock } from '@/components/FloatingDock'
import DatetimePickerDemo from '@/components/DateTimeWidget'

const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
const workSans = Work_Sans({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	style: ['normal', 'italic']
})

export const metadata: Metadata = {
	title: 'John Doe - Developer',
	description:
		'John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={twMerge(
					inter.className,
					workSans.className,
					'antialiased min-h-screen w-full relative max-w-full overflow-x-hidden bg-background'
				)}
			>
				<DatetimePickerDemo />
				{/* <Sidebar /> */}``
				{children}
				<FloatingNavDock />
				<TailwindIndicator />
				<Footer />
			</body>
		</html>
	)
}
