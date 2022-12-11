import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TODO } from '../api/todo';

export default function usePostTodo() {
	const queryClient = useQueryClient();

	const postMutation = useMutation({
		mutationFn: todo => {
			console.log('===== post Todo =====');
			return TODO.POST({ todo });
		},
		onMutate: variables => {
			console.log('====== onMutate ======');
			console.log(' variables : ', variables);
			return { todo: variables };
		},
		onError: (error, variables, context) => {
			console.log('====== onError ======');
			// 에러가 났을때,
			console.log('error : ', error);
			console.log('variables : ', variables);
			console.log('context : ', context);
		},
		onSuccess: (data, variables, context) => {
			console.log('====== onSuccess ======');
			// data는 mutationFn이 return한 데이터
			console.log('data : ', data);
			// variables는 mutationFn의 todo이다.
			console.log('variables : ', variables);
			// context는 onMutate에서 내려온 return 값이 담긴다.
			console.log('context : ', context);
			// querykey: 'todo'는 다시 get요청 시도
			queryClient.invalidateQueries({ queryKey: ['todo'] });
		},
		onSettled: (data, error, variables, context) => {
			console.log('====== onSettled ======');
			console.log('제일마지막에 무조건 진행');
		},
	});

	return { postMutation };
}
