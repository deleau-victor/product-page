import Head from 'next/head'
import React from 'react'
import FirstSection from '../components/ScrollSections/FirstSection'
import Navbar from '../components/UI/Navbar'
import SecondSection from '../components/ScrollSections/SecondSection'
import ThirdSection from '../components/ScrollSections/ThirdSection'
import FourthSection from '../components/ScrollSections/FourthSection'
import FifthSection from '../components/ScrollSections/FifthSection'

type Props = {}

const index = (props: Props) => {
	return (
		<>
			<Head>
				<title>Bose Headphones 700</title>
				<link rel="shortcut icon" href={'/favicon.svg'} type="image/svg" />
			</Head>
			<header>
				<Navbar />
			</header>
			<main className="scroll-container w-full">
				<FirstSection />
				<SecondSection />
				<ThirdSection />
				<FourthSection />
				<FifthSection />
			</main>
		</>
	)
}

export default index
