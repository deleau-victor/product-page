import Head from 'next/head'
import React from 'react'
import FirstSection from '../components/ScrollSections/FirstSection'
import Navbar from '../components/UI/Navbar'
import SecondSection from '../components/ScrollSections/SecondSection'

type Props = {}

const index = (props: Props) => {
	return (
		<main className="scroll-container w-full">
			<Head>
				<title>Bose Headphones 700</title>
				<link rel="shortcut icon" href={'/favicon.svg'} type="image/svg" />
			</Head>
			<Navbar />
			<FirstSection />
			<SecondSection />
			<div className="h-screen w-full bg-slate-200 snap-center"></div>
			<div className="h-screen w-full bg-slate-800 snap-center"></div>
			<div className="h-screen w-full bg-slate-200 snap-center"></div>
			<div className="h-80 w-full bg-slate-800 snap-center"></div>
		</main>
	)
}

export default index
