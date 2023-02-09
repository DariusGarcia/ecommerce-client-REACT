import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://localhost:3001'

export const userLogin = createAsyncThunk(
	'user/login',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			// configure header's Content-Type as JSON
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			}
			const { data } = await axios.post(
				`${backendURL}/api/user/login`,
				{ email, password },
				config
			)
			// store user's token in local storage
			localStorage.setItem('userToken', data.userToken)

			return data
		} catch (error) {
			// return custom error message from API if any
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message)
			} else {
				return rejectWithValue(error.message)
			}
		}
	}
)

export const registerUser = createAsyncThunk(
	'user/register',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			}

			await axios.post(
				`${backendURL}/api/user/register`,
				{ email, password },
				config
			)
		} catch (error) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message)
			} else {
				return rejectWithValue(error.message)
			}
		}
	}
)
