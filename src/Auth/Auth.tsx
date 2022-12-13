import * as S from './Styled.Auth';
import useAuth from './useAuth';

export default function Auth() {
	const {
		signTitle,
		trySignIn,
		showSign,
		disableObj,
		signMode,
		signBtn,
		authComment,
		changeSignMode,
		signTag,
	} = useAuth();
	return (
		<S.LoginBox>
			<S.TitleBox>{signTitle}</S.TitleBox>
			<S.FormBox className='AuthForm' onSubmit={trySignIn}>
				{showSign}
				<S.AuthBtn disabled={!disableObj[signMode]}>{signBtn}</S.AuthBtn>
			</S.FormBox>
			<S.AuthComment>
				<S.SignComment>{authComment}</S.SignComment>
				<S.SignTag onClick={changeSignMode}>{signTag}</S.SignTag>
			</S.AuthComment>
		</S.LoginBox>
	);
}
