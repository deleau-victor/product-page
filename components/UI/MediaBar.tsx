import React from 'react'
import Image from 'next/image'
import twitter from '../../public/images/icons/twitter.svg'
import instagram from '../../public/images/icons/instagram.svg'
import facebook from '../../public/images/icons/facebook-f.svg'
import youtube from '../../public/images/icons/youtube.svg'

const MediaBar = () => {
	return (
		<aside className="absolute z-20 -left-36 rotate-90 top-[360px] flex items-center space-x-8">
			<p className="text-[1.5rem] text-[#BFBDBD]">Suivez-nous</p>
			<span className="w-12 h-[2px] bg-[#BFBDBD]"></span>
			<div>
				<div className="flex space-x-8 items-center">
					<a
						href="https://twitter.com/bosefr"
						target={'blank'}
						className={'relative w-9 h-8 -rotate-90'}
					>
						<Image src={twitter} alt={'Logo Twitter'} fill />
					</a>
					<a
						href="https://www.instagram.com/bose/"
						target={'blank'}
						className={'relative w-9 h-9 -rotate-90'}
					>
						<Image src={instagram} alt={'Logo Instagram'} fill />
					</a>
					<a
						href="https://fr-fr.facebook.com/Bose/"
						target={'blank'}
						className={'relative w-5 h-9 -rotate-90'}
					>
						<Image src={facebook} alt={'Logo Facebook'} fill />
					</a>
					<a
						href="https://www.youtube.com/channel/UCaJBo_nRSL1XF1eewwukTCg"
						target={'blank'}
						className={'relative w-8 h-10 -rotate-90'}
					>
						<Image src={youtube} alt={'Logo Youtube'} fill />
					</a>
				</div>
			</div>
		</aside>
	)
}

export default MediaBar
