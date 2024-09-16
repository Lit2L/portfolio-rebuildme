import { MdDownload } from 'react-icons/md'

export const DownloadCV = () => {
	return (
		<a
			className='border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-[#EF3E36] p-2 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none text-sm'
			role='button'
			href='/assets/LarryLy-CV.pdf'
		>
			Download CV
			<MdDownload className='inline-block ml-2' />
			<span className='absolute inset-0 -z-10 rounded-lg border-b-4 border-solid border-transparent ' />
		</a>
	)
}
