import React from 'react'

export const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className={`2xl:max-w-7xl xl:max-w-5xl w-full mx-auto py-20 px-4 md:px-10`}>
			{children}
		</main>
	)
}
