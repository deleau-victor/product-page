import React from 'react'
import ScrollElement from '../ScrollElement'
import Button from '../UI/Button'

const ThirdSection = () => {
	return (
		<ScrollElement id={'third'}>
			<>
				<div className="w-[850px] h-[480px] rounded-full relative overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<video className="absolute z-50 w-full" autoPlay loop muted>
						<source
							src={'/video/bose-qc700-video-product.mp4'}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="absolute h-[30vh] flex flex-col font-bold text-5xl w-fit ml-24 top-1/2 -translate-y-1/2 justify-between ">
					<p>Moderne</p>
					<p>Élégant</p>
					<p>Sophistiqué</p>
				</div>
				<Button />
			</>
		</ScrollElement>
	)
}

export default ThirdSection
