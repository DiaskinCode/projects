import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://oralbekov.dias19.fvds.ru'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['PopularQuestions', 'CategoryQuestion','QuestionsCategory', 'CategoryTheory', 'CategoryTheoryArticle' ,'Articles','ArticleById','HajjDays','UmrahDays','Translate'],
    endpoints: (builder) => ({
        getQuestionCategory: builder.query({
            query: () => '/ru/api/questions/categories/',
            providesTags: ['QuestionsCategory']
        }),
        getPopularQuestions: builder.query({
            query: () => '/ru/api/questions/popular',
            providesTags: ['PopularQuestions']
        }),
        getCategoryQuestions: builder.query({
            query: (id) => `/ru/api/questions/category/${id}`,
            providesTags: ['CategoryQuestions']
        }),
        getCategoryTheoryMain: builder.query({
            query: () => `/ru/api/info/main`,
            providesTags: ['CategoryTheory']
        }),
        getCategoryTheoryArticle: builder.query({
            query: (id) => `/ru/api/info/${id}`,
            providesTags: ['CategoryTheoryArticle']
        }),
        getArticles: builder.query({
            query: () => `/ru/api/news/`,
            providesTags: ['Articles']
        }),
        getArticleById: builder.query({
            query: (id) => `/ru/api/news/${id}`,
            providesTags: ['ArticleById']
        }),
        getHajjStartDate: builder.query({
            query: () => `/ru/api/calendar/get_hajj_date`,
            providesTags: ['HajjStartDate']
        }),
        getHajjDays: builder.query({
            query: () => `/ru/api/calendar/hajj`,
            providesTags: ['HajjDays']
        }),
        getUmrahDays: builder.query({
            query: () => `/ru/api/calendar/umrah`,
            providesTags: ['UmrahDays']
        }),
        getTranslate: builder.query({
            query: () => `/ru/api/translate`,
            providesTags: ['Translate']
        }),
    })
})

export const { useGetQuestionCategoryQuery, 
    useGetPopularQuestionsQuery, 
    useGetCategoryTheoryMainQuery, 
    useGetArticlesQuery,
    useGetArticleByIdQuery, 
    useGetCategoryTheoryArticleQuery,
    useGetHajjStartDateQuery, useGetHajjDaysQuery, useGetUmrahDaysQuery,useGetTranslateQuery } = apiSlice