import { useState, useEffect } from 'react';
import * as S from './Styled.Todo';
import plus from '../image/plus.svg';
import { TODO } from '../api/todo';
import ListDiv from './ListDiv';

export default function Todo() {
  const [todoInput, setTodoInput] = useState('');
  const [listArray, setListArray] = useState([]);
  const todoInputHandler = e => setTodoInput(e.target.value);

  const addList = e => {
    e.preventDefault();
    TODO.POST({ todo: todoInput }, setListArray);
    setTodoInput('');
  };

  const deleteList = seletedId => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      setListArray(prev => prev.filter(({ id }) => id !== seletedId));
      TODO.DELETE(seletedId);
    }
  };

  const updataList = seletedId => {
    if (window.confirm('정말로 수정하시겠습니까?')) {
      const [updateValue] = listArray.filter(({ id }) => id === seletedId);
      TODO.UPDATE(seletedId, updateValue.todo);
    }
  };

  const changListValue = (e, seletedId) => {
    setListArray(prev =>
      prev.map(({ id, todo, isCompleted, userId }) => {
        if (id === seletedId) {
          todo = e.target.value;
        }
        return { id, todo, isCompleted, userId };
      })
    );
  };

  useEffect(() => {
    TODO.GET(setListArray);
  }, []);
  return (
    <S.TodoDiv>
      <S.TodoAddBox>
        <S.TodoTitle>Todo List</S.TodoTitle>
        <S.TodoFrom onSubmit={addList}>
          <S.TodoInput value={todoInput} onChange={todoInputHandler} />
          <S.TodoBtn>
            <S.TodoBtnEmoge src={plus} alt="plus" />
          </S.TodoBtn>
        </S.TodoFrom>
      </S.TodoAddBox>
      <S.TodoListDiv>
        {listArray?.map(({ id, todo }) => (
          <ListDiv
            key={id}
            id={id}
            todo={todo}
            deleteList={deleteList}
            updataList={updataList}
            changListValue={changListValue}
          />
        ))}
      </S.TodoListDiv>
    </S.TodoDiv>
  );
}
