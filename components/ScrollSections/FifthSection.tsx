import React from 'react'
import ScrollElement from '../ScrollElement'
import Button from '../UI/Button'

type Props = {}

const FifthSection = (props: Props) => {
	return (
		<ScrollElement id={'fifth'}>
			<>
				<div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-60 text-center justify-center">
					<p>FifthSection</p>
				</div>
				<Button />
			</>
		</ScrollElement>
	)
}

export default FifthSection
