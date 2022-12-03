import React from 'react'
import ScrollElement from '../ScrollElement'
import Button from '../UI/Button'
import Image from 'next/image'
import bagPic from '../../public/images/pictures/sac.png'
import dressingPic from '../../public/images/pictures/dressing.png'
import fullWomanPict from '../../public/images/pictures/femme.png'
import womanPict from '../../public/images/pictures/femme -.png'
import manPict from '../../public/images/pictures/homme -.png'
import fullManPict from '../../public/images/pictures/homme.png'

type Props = {}

const FifthSection = (props: Props) => {
	return (
		<ScrollElement id={'fifth'}>
			<>
				<div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[70%] grid grid-cols-4 grid-rows-3 gap-4">
					<div className="gallery-element">
						<Image src={womanPict} alt={''} fill objectFit="cover" />
					</div>
					<div className="row-span-3 gallery-element">
						<Image src={fullManPict} alt={''} fill objectFit="cover" />
					</div>
					<div className="row-span-2 gallery-element">
						<Image src={dressingPic} alt={''} fill objectFit="cover" />
					</div>
					<div className="row-span-3 gallery-element">
						<Image src={fullWomanPict} alt={''} fill objectFit="cover" />
					</div>
					<div className="row-span-2 gallery-element">
						<Image src={bagPic} alt={''} fill objectFit="cover" />
					</div>
					<div className="gallery-element">
						<Image src={manPict} alt={''} fill objectFit="cover" />
					</div>
				</div>
				<Button />
			</>
		</ScrollElement>
	)
}

export default FifthSection
