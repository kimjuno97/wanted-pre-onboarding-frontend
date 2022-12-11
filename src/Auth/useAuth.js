import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../api/api';
import InputBox from './InputBox';

export default function useAuth() {
	const navigate = useNavigate();
	const [signMode, setSignMode] = useState('signIn');
	const [inputValues, setInputValues] = useState({
		email: '',
		password: '',
		confirm: '',
	});

	const chckedId = inputValues.email.includes('@');
	const checkePw = inputValues.password.length >= 8;
	const checkConfirm = checkePw && inputValues.password === inputValues.confirm;
	const disableObj = {
		signIn: chckedId && checkePw,
		signUp: chckedId && checkePw && checkConfirm,
	};

	const changeSignMode = () => {
		if (signMode === 'signIn') {
			setSignMode('signUp');
		} else {
			setSignMode('signIn');
		}
	};

	const inputValuesHandler = e => {
		const { name, value } = e.target;
		setInputValues(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const trySignIn = e => {
		e.preventDefault();
		const { email, password } = inputValues;
		const authUrl =
			signMode === 'signIn'
				? `${baseUrl}/auth/signin`
				: `${baseUrl}/auth/signup`;

		const headers = {
			'Content-Type': 'application/json',
		};

		const options = {
			method: 'POST',
			headers,
			body: JSON.stringify({ email, password }),
		};
		fetch(authUrl, options)
			.then(res => res.json())
			.then(data => {
				if (data.access_token) {
					localStorage.setItem('token', data.access_token);
					if (signMode === 'signUp') {
						alert('회원가입이 완료 되었습니다.');
					} else {
						alert('환영 합니다!');
					}
					navigate('/todo');
				} else {
					alert('회원정보를 확인해주세요.');
					window.location.reload();
				}
			});
	};

	useEffect(() => {
		if (localStorage.getItem('token')) {
			alert('자동 로그인 되었습니다.');
			navigate('/todo');
		}
	}, [navigate]);

	const signTitle = signMode === 'signIn' ? 'Sign In' : 'Sign Up';
	const authComment =
		signMode === 'signIn' ? "Don't you have ID?" : 'Go to Sign In!';
	const signTag = signMode === 'signIn' ? 'Sign Up' : 'Sign In';
	const signBtn = signMode === 'signIn' ? 'Log In' : 'Sign Up';
	const commonPropsObj = {
		inputValues,
		inputValuesHandler,
	};
	const showSign =
		signMode === 'signIn' ? (
			<>
				<InputBox
					name='email'
					placeholder='ID'
					type='email'
					valid={chckedId}
					{...commonPropsObj}
				/>
				<InputBox
					name='password'
					placeholder='PW'
					type='password'
					valid={checkePw}
					signMode={signMode}
					{...commonPropsObj}
				/>
			</>
		) : (
			<>
				<InputBox
					name='email'
					placeholder='New ID'
					type='email'
					valid={chckedId}
					{...commonPropsObj}
				/>
				<InputBox
					name='password'
					placeholder='New PW'
					type='password'
					valid={checkePw}
					{...commonPropsObj}
				/>
				<InputBox
					name='confirm'
					placeholder='Checked PW'
					type='password'
					valid={checkConfirm}
					{...commonPropsObj}
				/>
			</>
		);

	return {
		signTitle,
		trySignIn,
		showSign,
		disableObj,
		signMode,
		signBtn,
		authComment,
		changeSignMode,
		signTag,
	};
}
