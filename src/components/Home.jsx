import React, { useEffect } from 'react'
import image from '../assets/images/bokku.webp'

const HomeComp = () => {
	useEffect(() => {
		document.title = 'Japanese Sweets - Home'
	}, [])
	return (
		<div className='home-component container'>
			<header className='home-header'>
				<h1 className='main-title'>How it works</h1>
			</header>
			<section className='image-container'>
				{containerData.map((article) => (
					<article className='image-article container' key={article.id}>
						<a href={article.href} key='href'>
							<img
								className='home-image'
								alt={article.alt}
								src={article.img}
								key='image'
							></img>
						</a>
						<figure className='container' key='figure'>
							<h3 className='sub-title' key='title'>
								{article.title}
							</h3>
							<p key='text'>{article.text}</p>
						</figure>
					</article>
				))}
			</section>
		</div>
	)
}

const containerData = [
	{
		img: image,
		href: 'https://placeholder.com',
		alt: 'image',
		title: 'subscribe',
		text: 'and get a box delivered monthly filled with snacks, tea, rewards, and more.',
	},
	{
		img: image,
		href: '',
		alt: 'image',
		title: 'receive',
		text: 'authentic treats like cakes, mochi, & chips packed with care and delivered to your door.',
	},
	{
		img: image,
		href: '',
		alt: 'image',
		title: 'experience',
		text: 'new curated themes each month around festivals, prefectures, and holidays!',
	},
]

export default HomeComp
