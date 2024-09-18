import { AnimatedBeamDemo } from '@/components/AnimatedBeamOutputs'
import { Products } from '@/components/Products'
import { TechStack } from '@/components/TechStack'
import { Hero } from '@/components/templates/hero'
import { Resume } from '@/components/templates/resume'
import { TextureButtonDemo } from '@/components/TextureButton'

export default function Home() {
	return (
		<div className='min-h-screen w-full mx-auto flex flex-col max-w-6xl'>
			<Hero />
			<Resume />
			<Products />
			<TechStack />
			{/* <AnimatedBeamDemo />
			<TextureButtonDemo /> */}
		</div>
	)
}
