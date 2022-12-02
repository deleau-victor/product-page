import React, { FC } from 'react'

type Props = {
	position: string
	onClick: (event: any) => void
}

const ProductPoint: FC<Props> = ({ position, onClick }) => {
	return (
		<span
			className={`absolute w-7 h-7 bg-white/40 z-40 flex rounded-full cursor-pointer ${position}`}
			onClick={onClick}
		>
			<span className="absolute w-4 h-4 rounded-full bg-white z-20 flex left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "></span>
		</span>
	)
}

export default ProductPoint
