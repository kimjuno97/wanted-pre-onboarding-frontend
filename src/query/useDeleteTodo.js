import { useQueryClient, useMutation } from '@tanstack/react-query';
import { TODO } from '../api/todo';

export default function useDeleteTodo() {
	const queryClient = useQueryClient();

	const deleteMutation = useMutation({
		mutationFn: id => {
			console.log('===== delete Todo =====');
			return TODO.DELETE(id);
		},
		onMutate: variables => {
			console.log('===== onMutate =====');
			console.log('variables : ', variables);
			return { id: variables };
		},
		onError: (error, variables, context) => {
			console.log('===== onError =====');
			console.log('error : ', error);
			console.log('variables : ', variables);
			console.log('context : ', context);
		},
		onSuccess: (data, variables, context) => {
			console.log('===== onSuccess =====');
			console.log('data : ', data);
			console.log('variables : ', variables);
			console.log('context : ', context);
			queryClient.invalidateQueries({ queryKey: ['todo'] });
		},
		onSettled: (data, error, variables, context) => {
			console.log('===== onSettled =====');
			console.log('제일마지막에 무조건 진행');
		},
	});

	return { deleteMutation };
}
