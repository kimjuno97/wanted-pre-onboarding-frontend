import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/them';
import { variables } from './styles/variable';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<QueryClientProvider client={queryClient}>
		<ReactQueryDevtools />
		<ThemeProvider theme={{ style: theme, variables }}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	</QueryClientProvider>
);
