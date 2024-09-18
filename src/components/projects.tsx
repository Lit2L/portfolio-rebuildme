import { StaticImageData } from 'next/image'
import ThumbnailNerds from './public/nerds-collage1.png'

export type Project = {
	id: number
	title: string
	thumbnail: StaticImageData
	images: StaticImageData[] | string[]
	href: string
	slug?: string
	stack?: string[]
	description: string
	area: string
	content?: React.ReactNode | string
	image: string
	imageAlt: string
	color: string
}

export const projects: Project[] = [
	{
		id: 0,
		title: `Nerds Fighting`,
		area: 'Booking Appointments, Payments, Marketing',
		description: `Nerds Fighting is a kickboxing and martial arts club that offers classes for all ages and skill levels. The website is built with Next.js, Tailwind CSS, and TypeScript.`,
		thumbnail: ThumbnailNerds,
		images: [ThumbnailNerds, ThumbnailNerds],
		href: 'https://nerdsfighting.com',
		stack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
		slug: 'nerds-fighting',

		image:
			'https://cdn.dribbble.com/userupload/15852012/file/original-c38a5420691f39330385779e018dd19b.png?resize=752x',
		imageAlt: 'louvair',
		color: '#F9F9F9'
	},
	{
		id: 1,
		title: `L'ouvair App`,
		area: 'E-commerce',
		description: `Louvair is an e-commerce store for a fragrance business. The website is built with Next.js, Tailwind CSS, and TypeScript.`,
		thumbnail: ThumbnailNerds,
		images: [ThumbnailNerds, ThumbnailNerds],
		href: 'https://louvair.com',
		stack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
		slug: 'louvair',
		image:
			'https://cdn.dribbble.com/userupload/14580331/file/original-489722bcffe8bab242fa405d066a1303.png?resize=1024x768',
		imageAlt: 'louvair',
		color: '#F9F9F9'
	},
	{
		id: 2,
		title: 'Admin Hippo',
		area: 'Design and Development',
		description: `Admin Hippo is a web streaming service inspired app with a different approach to the design. The website is built with Next.js, Tailwind CSS, and TypeScript.`,
		thumbnail: ThumbnailNerds,
		images: [ThumbnailNerds, ThumbnailNerds],
		href: 'https://admin-hippo.vercel.app/home',
		stack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
		slug: 'admin-hippo',
		image:
			'https://cdn.dribbble.com/userupload/14580218/file/original-c2ffc1b0fe4de77a6cbb42837ee088e8.png?resize=1024x768',
		imageAlt: 'A web streaming service inspired app with a different approach to the design.',
		color: '#1D1D26'
	},
	{
		id: 3,
		title: 'iYam Swim Coach',
		area: 'Payments, Appointments & Scheduling',
		description: `iYam Swim Coach is an application for swim coaches to manage their teams. The website is built with Next.js, Tailwind CSS, and TypeScript.`,
		thumbnail: ThumbnailNerds,
		images: [ThumbnailNerds, ThumbnailNerds],
		href: 'https://iyam.vercel.app',
		stack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
		slug: 'iyam',

		image:
			'https://cdn.dribbble.com/userupload/14580435/file/original-d64910229d568969753a296b260cd631.png?resize=1024x768',
		imageAlt: 'iYam Swim Coach by Larry Ly',
		color: '#E3E3E3'
	}
]
