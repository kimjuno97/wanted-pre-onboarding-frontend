import { useQuery } from '@tanstack/react-query';
import { TODO } from '../api/todo';

export default function useGetTodo() {
	const { isLoading, error, data, isFetching } = useQuery(
		['todo'],
		async () => {
			console.log('===== todo 전체데이터 get 요청 =====');
			if (localStorage.getItem('token')) {
				return TODO.GET();
			} else {
				return [];
			}
		}
	);

	return { isLoading, error, data, isFetching };
}
