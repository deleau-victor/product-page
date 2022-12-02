import React from 'react'
import ScrollElement from '../ScrollElement'
import Product from '../UI/Product'
import Button from '../UI/Button'
import MediaBar from '../UI/MediaBar'

function FirstSection() {
	return (
		<ScrollElement id={'first'}>
			<>
				<Product />
				<Button />
				<MediaBar></MediaBar>
				<p className="absolute left-1/2 bottom-28 -translate-x-1/2 text-white font-bold text-4xl">
					255 €
				</p>
			</>
		</ScrollElement>
	)
}

export default FirstSection
