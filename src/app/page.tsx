import { AnimatedBeamDemo } from '@/components/AnimatedBeamOutputs'
import { Container } from '@/components/Container'
import DatetimePickerDemo from '@/components/DateTimeWidget'
import { Example } from '@/components/Example'
import { Heading } from '@/components/Heading'
import { Highlight } from '@/components/Highlight'
import { Paragraph } from '@/components/Paragraph'
import { Products } from '@/components/Products'
import { TechStack } from '@/components/TechStack'
import { Hero } from '@/components/templates/Hero'
import { TextureButtonDemo } from '@/components/TextureButton'
import { Button } from '@/components/ui/shadcn-button'
import Image from 'next/image'

export default function Home() {
	return (
		<div className=''>
			<Container>
				<Hero />
			</Container>
			<Container>
				<Example />
				<Products />
				<TechStack />
				<AnimatedBeamDemo />
				<TextureButtonDemo />
			</Container>
		</div>
	)
}
