import React from 'react'
import ScrollElement from '../ScrollElement'
import Product from '../UI/Product'
import Button from '../UI/Button'
import ProductPoint from '../UI/ProductPoint'

function SecondSection() {
	const handleDisplayModal = (event: any) => {
		event.preventDefault()
		let current
		if (event.target === event.currentTarget) {
			current = event.target
		} else {
			current = event.target.parentNode
		}
		let modalOfCurrent = current.nextSibling.className

		if (modalOfCurrent !== 'active-modal') {
			for (let i = 2; i < current.parentNode.children.length; i = i + 2) {
				current.parentNode.children[i].className = 'modal'
			}
			current.nextSibling.className = 'active-modal'
		} else {
			current.nextSibling.className = 'modal'
		}
	}

	return (
		<ScrollElement id={'second'}>
			<>
				<Product>
					<>
						{/* TOP */}
						<ProductPoint
							position="top-16 left-1/2 -translate-x-1/2"
							onClick={(event) => handleDisplayModal(event)}
						/>
						<div className="modal">
							<span className="absolute top-16 left-1/2 translate-y-[14px] w-72 h-[2px] bg-white"></span>
							<span className="absolute top-16 left-1/2 translate-y-[14px] translate-x-72 w-32 h-[2px] bg-white rotate-45 origin-top-left"></span>
							<span className="absolute top-16 left-1/2 translate-x-52 translate-y-32 font-bold text-2xl text-center">
								Mousse douce recouverte de silicone
							</span>
						</div>
						{/* BOTTOM LEFT */}
						<ProductPoint
							position="bottom-24 left-[15.5rem] -translate-x-1/2"
							onClick={(event) => handleDisplayModal(event)}
						/>
						<div className="modal">
							<span className="absolute bottom-24 left-[15.5rem] -translate-y-[14px] -translate-x-full w-52 h-[2px] bg-white"></span>
							<span className="absolute bottom-24 left-[2.5rem] -translate-y-[14px] -translate-x-full w-40 h-[2px] bg-white origin-bottom-right rotate-45"></span>
							<span className="absolute bottom-64 -left-[32rem] translate-x-72  font-bold text-2xl text-center">
								Réduction de bruit active
							</span>
						</div>
						{/* Mid */}
						<ProductPoint
							position="bottom-44 left-[20.5rem] -translate-x-1/2"
							onClick={(event) => handleDisplayModal(event)}
						/>
						<div className="modal">
							<span className="absolute bottom-44 left-[20.5rem] -translate-y-[14px] -translate-x-full w-56 h-[2px] bg-white origin-bottom-right rotate-45"></span>
							<span className="absolute bottom-[20.9rem] left-[10.7rem] -translate-y-[14px] -translate-x-full w-24 h-[2px] bg-white origin-bottom-right"></span>
							<span className="absolute bottom-[20.9rem] left-[4.7rem] -translate-y-[14px] -translate-x-full w-44 h-[2px] bg-white origin-bottom-right rotate-45"></span>
							<span className="absolute top-32 -left-[29rem] translate-x-72  font-bold text-2xl text-center">
								Technologie Bose <br /> Son puissant
							</span>
						</div>
						{/* BOTTOM RIGHT */}
						<ProductPoint
							position="bottom-28 right-[21rem]"
							onClick={(event) => handleDisplayModal(event)}
						/>
						<div className="modal">
							<span className="absolute bottom-28 right-[21rem] -translate-y-[14px] translate-x-full w-52 h-[2px] bg-white"></span>
							<span className="absolute bottom-28 right-[8rem] -translate-y-[14px] translate-x-full w-24 h-[2px] bg-white origin-bottom-left -rotate-45"></span>
							<span className="absolute bottom-[14rem] -right-[4rem] font-bold text-2xl text-center">
								Commandes tactiles
							</span>
						</div>
						{/* RIGHT */}
						<ProductPoint
							position="bottom-72 right-[15.5rem]"
							onClick={(event) => handleDisplayModal(event)}
						/>
						<div className="modal">
							<span className="absolute bottom-72 right-[15.5rem] -translate-y-[14px] translate-x-full w-32 h-[2px] bg-white"></span>
							<span className="absolute bottom-72 right-[7.5rem] -translate-y-[14px] translate-x-full w-16 h-[2px] bg-white origin-bottom-left -rotate-45"></span>
							<span className="absolute bottom-[23rem] -right-[1rem] font-bold text-2xl text-center">
								Bandeau en acier
							</span>
						</div>
					</>
				</Product>
				<Button />
			</>
		</ScrollElement>
	)
}

export default SecondSection
