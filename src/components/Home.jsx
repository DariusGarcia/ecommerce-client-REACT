import React from 'react'
import image from '../assets/images/bokku.webp'

const HomeComp = () => {
	return (
		<div className='home-component container'>
			<header className='home-header'>
				<h1 className='main-title'>How it works</h1>
			</header>
			<section className='image-container'>
				{containerData.map((article) => (
					<article className='image-article container'>
						<a href={article.href}>
							<img alt={article.alt} src={article.img}></img>
						</a>
						<figure className='container'>
							<h2 className='sub-title'>{article.title}</h2>
							<p>{article.text}</p>
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
