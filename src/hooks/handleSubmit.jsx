import { useState, useEffect } from 'react'

const HandleSubmit = (formData, url) => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	const options = {
		method: 'POST',
		// mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	}
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			try {
				const response = await fetch(url, options)
				const data = await response.json()
				setData(data)
			} catch (error) {
				setError(error)
			}
			setIsLoading(false)
		}
		fetchData()
	}, [])

	return { data, isLoading, error }
}

export default HandleSubmit
