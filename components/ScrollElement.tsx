import React, { FC } from 'react'

type Props = {
	children: JSX.Element
	id: string
}

const ScrollElement: FC<Props> = ({ children, id }) => {
	return (
		<section className="scroll-element bg-[#141414] relative" id={`${id}`}>
			{children}
		</section>
	)
}

export default ScrollElement
