import React, { FC } from 'react'
import Image from 'next/image'
import Main from '../../public/images/hero/main.png'

type Props = {
	children?: JSX.Element
}

const Product: FC<Props> = ({ children }) => {
	return (
		<>
			<div className="h-[90vh] w-[90vh] rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hero-bg"></div>
			<div
				className={
					'relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[820px] h-[700px]'
				}
			>
				<Image src={Main} alt={'Casque sans fil Bose QC 700'} />
				{children}
			</div>
		</>
	)
}

export default Product
