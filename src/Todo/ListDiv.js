import { useRef, useState } from 'react';
import styled from 'styled-components';
import deleteBtn from '../image/delete.svg';
import useDeleteTodo from '../query/useDeleteTodo';
import useUpdataTodo from '../query/useUpdataTodo';

export default function ListDiv({ todo, id, isCompleted }) {
	const { deleteMutation } = useDeleteTodo();
	const { updateMutation } = useUpdataTodo();

	const checkedInputRef = useRef(null);
	const todoInputRef = useRef(null);

	const [updateToggle, setUpdataToggle] = useState(false);
	const [tooltipToggle, setTooltipToggle] = useState(false);
	const tooltip = updateToggle ? '삭제가능' : '수정가능';

	const updateValue = updateToggle
		? { ref: todoInputRef }
		: { readOnly: true, isCompleted };

	const tryUpdate = () => {
		setUpdataToggle(prev => !prev);
	};

	const showBtn = updateToggle ? (
		<StyledUpdateBtn
			onClick={() => {
				updateMutation.mutate({
					id,
					isCompleted: checkedInputRef.current.checked,
					todo: todoInputRef.current.value,
				});
				tryUpdate();
			}}>
			✍️
		</StyledUpdateBtn>
	) : (
		<StyledDelBtn onClick={() => deleteMutation.mutate(id)}>
			<img src={deleteBtn} alt='delBtn' />
		</StyledDelBtn>
	);

	return (
		<Styledform
			onMouseOver={() => setTooltipToggle(true)}
			onMouseLeave={() => setTooltipToggle(false)}
			onDoubleClick={tryUpdate}
			onSubmit={e => e.preventDefault()}>
			<input
				type='checkbox'
				defaultChecked={isCompleted}
				ref={checkedInputRef}
			/>
			<StyledInput type='text' defaultValue={todo} {...updateValue} />
			{tooltipToggle && <Tooltip>더블클릭시 {tooltip}</Tooltip>}
			{showBtn}
		</Styledform>
	);
}

const Styledform = styled.form`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50rem;
	padding: 1rem 0;
	background: #eeeeee;
	cursor: pointer;
`;

const StyledInput = styled.input`
	width: 40rem;
	height: 3.5rem;
	border: none;
	background: none;
	text-decoration: ${({ isCompleted }) => isCompleted && 'line-through'};
	:focus {
		outline: none;
	}
`;

const Tooltip = styled.div`
	position: absolute;
	top: -50%;
	left: 50%;
	transform: translate(-50%, 0);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 15px;
	font-size: 1.5rem;
	color: blue;
	opacity: 0.8;
`;

const StyledDelBtn = styled.button`
	background: none;
	border: none;
	cursor: pointer;
`;

const StyledUpdateBtn = styled.button`
	font-size: 2.4rem;
	border: none;
	cursor: pointer;
`;
