import React, { useState } from 'react'

const button = () => {
	const [btnStyle, setBtnStyle] = useState<string>('btn')

	const handleClickStyle = () => {
		setBtnStyle('btn-active')
		setTimeout(() => {
			setBtnStyle('btn')
		}, 200)
	}

	return (
		<button className={btnStyle} onClick={handleClickStyle}>
			AJOUTER AU PANIER
		</button>
	)
}

export default button
