import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const customBaseQuery = async (url, options) => {
//     const language = await AsyncStorage.getItem('Language') == 1 ? 'en' : 'ru'
//     return fetchBaseQuery({ baseUrl })(url, options);
//   };

const baseUrl = `http://oralbekov.dias19.fvds.ru/`;
  
export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: [
        'PopularQuestions',
        'CategoryQuestion',
        'QuestionsCategory',
        'CategoryTheory',
        'CategoryTheoryArticle',
        'Articles',
        'ArticleById',
        'HajjDays',
        'HajjStartDate',
        'UmrahDays',
        'Translate',
        'CategoryTheoryWhatTake',
        'CategoryQuestions',
      ],
      
    endpoints: (builder) => ({
        getQuestionCategory: builder.query({
            query: (language) => `${language}/api/questions/categories/`,
            providesTags: ['QuestionsCategory']
        }),
        getPopularQuestions: builder.query({
            query: (language) => `${language}/api/questions/popular`,
            providesTags: ['PopularQuestions']
        }),
        getPopularQuestionsHajj: builder.query({
            query: (language) => `${language}/api/questions/popular/hajj`,
        }),
        getPopularQuestionsUmrah: builder.query({
            query: (language) => `${language}/api/questions/popular/umrah`,
        }),
        getCategoryQuestions: builder.query({
            query: ({ language, id }) => `${language}/api/questions/category/${id}`,
            providesTags: ['CategoryQuestions']
        }),
        getCategoryTheoryMain: builder.query({
            query: (language) => `${language}/api/info/main`,
            providesTags: ['CategoryTheory']
        }),
        getCategoryTheoryWhatTake: builder.query({
            query: (language) => `${language}/api/info/what-to-take`,
            providesTags: ['CategoryTheoryWhatTake']
        }),
        getCategoryTheoryArticle: builder.query({
            query: ({ language, id }) => `${language}/api/info/${id}`,
            providesTags: ['CategoryTheoryArticle']
        }),
        getArticles: builder.query({
            query: (language) => `${language}/api/news/`,
            providesTags: ['Articles']
        }),
        getArticleById: builder.query({
            query: ({ language, id }) => `${language}/api/news/${id}`,
            providesTags: ['ArticleById']
        }),
        getHajjStartDate: builder.query({
            query: (language) => `${language}/api/calendar/get_hajj_date`,
            providesTags: ['HajjStartDate']
        }),
        getHajjDays: builder.query({
            query: (language) => `${language}/api/calendar/hajj`,
            providesTags: ['HajjDays']
        }),
        getUmrahDays: builder.query({
            query: (language) => `${language}/api/calendar/umrah`,
            providesTags: ['UmrahDays']
        }),
        getTranslate: builder.query({
            query: (language) => `${language}/api/translate`,
            providesTags: ['Translate']
        }),
        getPlaces: builder.query({
            query: (language) => `${language}/api/maps/places`
        }),
        getRestaurants: builder.query({
            query: (language) => `${language}/api/maps/restaurants`
        }),
        getRestaurantById: builder.query({
            query: ({ language, id }) => `${language}/api/maps/restaurants/${id}`
        }),
        getPlaceById: builder.query({
            query: ({ language, id }) => `${language}/api/maps/places/${id}`
        }),
    }),
})


export const { 
    useGetQuestionCategoryQuery,
    useGetCategoryQuestionsQuery, 
    useGetPopularQuestionsUmrahQuery, useGetPopularQuestionsHajjQuery, useGetPopularQuestionsQuery, 
    useGetCategoryTheoryMainQuery, 
    useGetCategoryTheoryWhatTakeQuery,
    useGetArticlesQuery,
    useGetArticleByIdQuery, 
    useGetCategoryTheoryArticleQuery,
    useGetHajjStartDateQuery,
    useGetHajjDaysQuery,
    useGetUmrahDaysQuery,
    useGetTranslateQuery,
    useGetPlacesQuery,
    useGetPlaceByIdQuery,
    useGetRestaurantsQuery,
    useGetRestaurantByIdQuery} = apiSlice

    