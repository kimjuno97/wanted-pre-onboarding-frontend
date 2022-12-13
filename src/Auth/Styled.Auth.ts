import styled from 'styled-components';

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  ${({ theme }) => theme.variables.absoluteCenter};
  padding: 8rem 5rem;
  border-radius: 15px;
  background-color: white;
`;

export const TitleBox = styled.div`
  margin: 0 auto;
  font-size: ${({ theme }) => theme.style.titlFont};
  text-align: center;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 60rem;
`;

export const AuthBtn = styled.button`
  display: block;
  width: 100%;
  max-width: 40rem;
  height: 5rem;
  margin: 0 auto;
  padding: 1rem 0;
  color: white;
  background: rgb(0, 212, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 212, 255, 1) 15%,
    rgba(143, 174, 204, 1) 59%,
    rgba(145, 123, 211, 1) 98%
  );
  border: none;
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'not-allowed')};
  animation: ${({ disabled }) =>
    !disabled
      ? `identifier 1s linear
    alternate infinite`
      : ''};

  @keyframes identifier {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.05);
    }
  }
`;

export const AuthComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 40rem;
  height: 5rem;
  text-align: center;
  font-size: ${({ theme }) => theme.style.smallFont};
`;

export const SignComment = styled.div`
  width: auto;
`;

export const SignTag = styled.div`
  color: #1019ee;
  cursor: pointer;
`;
