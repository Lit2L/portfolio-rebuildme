import type { ComponentPropsWithoutRef } from 'react'

type SectionShellProps = ComponentPropsWithoutRef<'section'>

export const SectionShell = ({ children, ...props }: SectionShellProps) => (
	<section className='container pt-12 lg:pt-24 pb-12 md:pb-36' {...props}>
		{children}
	</section>
)
