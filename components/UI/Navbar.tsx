import React, { useId } from 'react'
import Image from 'next/image'
import boseLogo from '../../public/images/icons/bose.svg'
import cart from '../../public/images/icons/shopping-cart.svg'
import user from '../../public/images/icons/user.svg'

function Navbar() {
	const id = useId()

	const handleActiveSection = (event: any) => {
		const allLinks = event.target.parentNode.parentNode.children
		const id = event.target.parentNode.id

		const navbtns =
			event.target.parentNode.parentNode.parentNode.parentNode.children[1]
				.children[1].children

		for (let links of allLinks) {
			links.className = 'navlink'
		}
		for (let btn of navbtns) {
			btn.className = 'navbtn'
		}
		navbtns[id].className = 'active-navbtn'
		event.target.parentNode.className = 'active-navlink'
	}

	const handleActiveSectionBtn = (event: any) => {
		const allbtn = event.target.parentNode.children
		const id = event.target.id
		const navlinks =
			event.target.parentNode.parentNode.parentNode.children[0].children[1]
				.children
		for (let btn of allbtn) {
			btn.className = 'navbtn'
		}
		for (let links of navlinks) {
			links.className = 'navlink'
		}
		event.target.className = 'active-navbtn'
		navlinks[id].className = 'active-navlink'
	}

	return (
		<>
			<nav className="flex justify-between w-full fixed top-0 mt-12 z-50 items-center px-12">
				<div className="h-6 w-[198px] mx-8 relative">
					<Image src={boseLogo} alt={'Logo bose'} fill></Image>
				</div>
				<ul className="flex">
					<li className="active-navlink" id={'0'}>
						<a href="#first" onClick={handleActiveSection}>
							Home
						</a>
					</li>
					<li className="navlink" id={'1'}>
						<a href="#second" onClick={handleActiveSection}>
							Fonctionnalités
						</a>
					</li>
					<li className="navlink" id={'2'}>
						<a href="#" onClick={handleActiveSection}>
							Design
						</a>
					</li>
					<li className="navlink" id={'3'}>
						<a href="#" onClick={handleActiveSection}>
							Accessoire
						</a>
					</li>
					<li className="navlink" id={'4'}>
						<a href="#" onClick={handleActiveSection}>
							Gallerie
						</a>
					</li>
				</ul>
				<div className="flex justify-between relative">
					<div className="mx-8 h-6 w-6 relative">
						<Image src={user} alt={'Icône utilisateur'} fill />
					</div>
					<div className="mx-8 h-6 w-6 relative">
						<Image src={cart} alt={'Icône panier de commande'} fill />
					</div>
				</div>
			</nav>
			<aside className="fixed z-20 -right-[260px] rotate-90 top-[450px] flex">
				<p className="navlink mr-20">Bose Headphones 700</p>
				<div className="flex space-x-4">
					<a
						href="#first"
						className="active-navbtn"
						onClick={handleActiveSectionBtn}
						id={'0'}
					></a>
					<a
						href="#second"
						className="navbtn"
						onClick={handleActiveSectionBtn}
						id={'1'}
					></a>
					<a
						href="#"
						className="navbtn"
						onClick={handleActiveSectionBtn}
						id={'2'}
					></a>
					<a
						href="#"
						className="navbtn"
						onClick={handleActiveSectionBtn}
						id={'3'}
					></a>
					<a
						href="#"
						className="navbtn"
						onClick={handleActiveSectionBtn}
						id={'4'}
					></a>
				</div>
			</aside>
		</>
	)
}

export default Navbar
