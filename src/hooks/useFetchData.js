import { useState, useEffect } from 'react'

const useFetchData = (url) => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			try {
				const response = await fetch(url)
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

export default useFetchData
