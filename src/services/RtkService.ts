import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../models/IUser'
import { IResolveDevice } from '../models/IDevice'
import { IPost } from '../models/IPost'

//Запрос на апи через RTX query
export const queryUserAPI = createApi({
	reducerPath: 'queryUserAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_JSONPLACEHOLDER,
	}),
	endpoints: build => ({
		fetchAllQueryUsers: build.query<IUser[], number>({
			query: (limit: number = 5) => ({
				url: '/users',
				params: {
					_limit: limit,
				},
			}),
		}),
		fetchOneUser: build.query<IUser, number>({
			query: (id: number = 1) => ({
				url: `/users/${id}`,
			}),
		}),
	}),
})
//Запрос на локальный postgres сервер
export const deviceApi = createApi({
	reducerPath: 'deviceAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_MARKET,
	}),
	endpoints: build => ({
		fetchAllDevice: build.query<IResolveDevice, number>({
			query: (limit: number = 10) => ({
				url: `/device?limit=${limit}`,
			}),
		}),
	}),
})
export const monetApi = createApi({
	reducerPath: 'JSONServer',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
	tagTypes: ['Post'],
	endpoints: build => ({
		//Метод получения поста по количеству
		fetchAllPosts: build.query<IPost[], number>({
			query: (limit: number = 5) => ({
				url: `/posts`,
				params: {
					_limit: limit,
				},
			}),
			providesTags: result => ['Post'], // Создание ассоциации с тегом
		}),
		// Метод добавление Поста
		createPost: build.mutation<IPost, IPost>({
			query: post => ({
				url: '/posts',
				method: 'POST',
				body: post,
			}),
			invalidatesTags: ['Post'], // Устаревшие данные по тегу
		}),
		// Обновление поста по ID
		updatePost: build.mutation<IPost, IPost>({
			query: post => ({
				url: `/posts/${post.id}`,
				method: 'PUT',
				body: post,
			}),
			invalidatesTags: ['Post'], // Устаревшие данные по тегу
		}),
		// Удаление поста по ID
		deletePost: build.mutation<IPost, IPost>({
			query: post => ({
				url: `/posts/${post.id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Post'], // Устаревшие данные по тегу
		}),
	}),
})
