import * as S from './Styled.Todo';

import plus from '../image/plus.svg';
import ListDiv from './ListDiv';
import useTodo from './useTodo';
import useGetTodo from '../query/useGetTodo';
import usePostTodo from '../query/usePostTodo';

export default function Todo() {
	const { setTodoInput, todoInputHandler, todoInput } = useTodo();

	const { data, isLoading } = useGetTodo();
	const { postMutation } = usePostTodo();

	console.log(data);
	return (
		<S.TodoDiv>
			<S.TodoAddBox>
				<S.TodoTitle>Todo List</S.TodoTitle>
				<S.TodoFrom
					onSubmit={e => {
						e.preventDefault();
						postMutation.mutate(todoInput);
						setTodoInput('');
					}}>
					<S.TodoInput value={todoInput} onChange={todoInputHandler} />
					<S.TodoBtn>
						<S.TodoBtnEmoge src={plus} alt='plus' />
					</S.TodoBtn>
				</S.TodoFrom>
			</S.TodoAddBox>
			<S.TodoListDiv>
				{isLoading && <S.Loading>Loading...</S.Loading>}
				{data?.map(({ id, todo, isCompleted }) => (
					<ListDiv key={id} id={id} todo={todo} isCompleted={isCompleted} />
				))}
			</S.TodoListDiv>
		</S.TodoDiv>
	);
}
