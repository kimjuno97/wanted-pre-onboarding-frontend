import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { TODO } from '../api/todo';

export default function useTodo() {
	const [todoInput, setTodoInput] = useState('');
	const [listArray, setListArray] = useState([]);
	const todoInputHandler = e => setTodoInput(e.target.value);
	const navigate = useNavigate();

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

	const updataList = (e, seletedId) => {
		e.preventDefault();
		if (window.confirm('정말로 수정하시겠습니까?')) {
			const [updateValue] = listArray.filter(({ id }) => id === seletedId);
			TODO.UPDATE(seletedId, updateValue.todo, updateValue.isCompleted);
		}
	};

	const changeChecked = seletedId => {
		setListArray(prev =>
			prev.map(({ id, todo, isCompleted, userId }) => {
				if (id === seletedId) {
					isCompleted = !isCompleted;
				}
				return { id, todo, isCompleted, userId };
			})
		);
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
		if (!localStorage.getItem('token')) {
			navigate('/');
		} else {
			TODO.GET(setListArray);
		}
	}, [navigate]);

	return {
		addList,
		todoInput,
		todoInputHandler,
		listArray,
		changeChecked,
		deleteList,
		updataList,
		changListValue,
	};
}
