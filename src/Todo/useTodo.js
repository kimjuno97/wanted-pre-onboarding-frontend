import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useTodo() {
	const [todoInput, setTodoInput] = useState('');

	const todoInputHandler = e => setTodoInput(e.target.value);

	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			navigate('/');
		}
	});

	return {
		todoInput,
		todoInputHandler,
		setTodoInput,
	};
}
