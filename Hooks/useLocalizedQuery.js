import { useTranslation } from 'react-i18next';
import { useQuery } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '../api/apiSlice';

export const useLocalizedQuery = (queryName, queryOptions) => {
  const { i18n } = useTranslation();

  const updatedQuery = (queryFn) => async (...args) => {
    const language = i18n.language;
    const updatedUrl = queryFn(language, ...args);
    return apiSlice.util.fetchBaseQuery(updatedUrl, queryOptions);
  };

  const endpoint = apiSlice.endpoints[queryName];

  if (!endpoint) {
    throw new Error(`Invalid query name: ${queryName}`);
  }

  return useQuery(queryName, updatedQuery(endpoint.query));
};

