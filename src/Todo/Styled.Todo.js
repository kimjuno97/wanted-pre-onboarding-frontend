import styled from 'styled-components';

export const TodoDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	${({ theme }) => theme.variables.absoluteCenter};
	border-radius: 15px;
	background-color: white;
	overflow: hidden;
`;

export const TodoAddBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	width: 100%;
	padding: 5rem 0;
	background-color: #02b1b0;
`;

export const TodoTitle = styled.h1`
	font-size: ${({ theme }) => theme.style.titlFont};
	color: white;
`;

export const TodoFrom = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 50rem;
	padding-left: 3rem;
`;

export const TodoInput = styled.input`
	width: 35rem;
	height: 3.5rem;
	border: none;
	border-radius: 15px;
	padding-left: 20px;
	:focus {
		outline: none;
	}
`;

export const TodoBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: none;
	border: none;
	border-radius: 50%;
	cursor: pointer;
`;

export const TodoBtnEmoge = styled.img`
	width: 100%;
	height: 100%;
`;

export const TodoListDiv = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 10rem;
`;

export const Loading = styled.h1`
	font-size: 100px;
	text-align: center;
`;
