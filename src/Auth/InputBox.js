import styled from 'styled-components';

export default function InputBox({
	name,
	placeholder,
	type,
	inputValues,
	inputValuesHandler,
	valid,
	signMode,
}) {
	const comment = {
		email:
			valid && name === 'email'
				? '올바른 이메일 형식입니다.'
				: '@를 포함한 이메일을 입력해 주세요',
		password:
			valid && name === 'password' && signMode
				? ''
				: valid && name === 'password'
				? '사용 가능한 비밀번호 입니다.'
				: '8자 이상인 비밀번호를 입력해 주세요',
		confirm:
			valid && name === 'confirm'
				? '비밀번호가 일치합니다'
				: '비밀번호가 일치하지 않습니다',
	};
	return (
		<>
			<StyledInputBox
				name={name}
				type={type}
				placeholder={placeholder}
				value={inputValues[name]}
				onChange={inputValuesHandler}
			/>
			<CheckValues valid={valid}>{comment[name]}</CheckValues>
		</>
	);
}

const StyledInputBox = styled.input`
	width: 40rem;
	height: 5rem;
	font-size: 3rem;
	border: none;
	border-bottom: 2px solid gray;
	:focus {
		outline: none;
	}
	::placeholder {
		font-size: 1.4rem;
		opacity: 0.5;
	}
`;

const CheckValues = styled.div`
	height: 1.8rem;
	color: ${({ valid }) => (valid === true ? 'blue' : 'red')};
	font-size: 1.8rem;
`;
