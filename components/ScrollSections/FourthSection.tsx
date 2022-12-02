import React from 'react'
import ScrollElement from '../ScrollElement'
import Image from 'next/image'
import accessoire from '../../public/images/hero/cq5dam.web.1920.1920.png'
import Button from '../UI/Button'

type Props = {}

const FouthSection = (props: Props) => {
	return (
		<ScrollElement id={'fourth'}>
			<>
				<div className="w-[820px] h-[700px] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<Image src={accessoire} alt={'Etui de transport'} fill></Image>
				</div>
				<div className="flex absolute justify-between h-[30vh] w-[80vw] top-1/2 -translate-y-1/2 font-bold text-5xl text-center items-center left-1/2 -translate-x-1/2">
					<p className="w-[23vw] flex">
						Livré avec un étui de transport pour protéger votre casque
					</p>
					<p className="w-[23vw] flex">Adapté au style de votre casque</p>
				</div>
				<Button />
			</>
		</ScrollElement>
	)
}

export default FouthSection
