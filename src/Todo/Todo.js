import * as S from './Styled.Todo';

import plus from '../image/plus.svg';
import ListDiv from './ListDiv';
import useTodo from './useTodo';

export default function Todo() {
	const {
		addList,
		todoInputHandler,
		todoInput,
		listArray,
		changeChecked,
		deleteList,
		updataList,
		changListValue,
	} = useTodo();
	return (
		<S.TodoDiv>
			<S.TodoAddBox>
				<S.TodoTitle>Todo List</S.TodoTitle>
				<S.TodoFrom onSubmit={addList}>
					<S.TodoInput value={todoInput} onChange={todoInputHandler} />
					<S.TodoBtn>
						<S.TodoBtnEmoge src={plus} alt='plus' />
					</S.TodoBtn>
				</S.TodoFrom>
			</S.TodoAddBox>
			<S.TodoListDiv>
				{listArray?.map(({ id, todo, isCompleted }) => (
					<ListDiv
						key={id}
						id={id}
						todo={todo}
						isCompleted={isCompleted}
						changeChecked={changeChecked}
						deleteList={deleteList}
						updataList={updataList}
						changListValue={changListValue}
					/>
				))}
			</S.TodoListDiv>
		</S.TodoDiv>
	);
}
