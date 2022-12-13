import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
	const navigate = useNavigate();
	useEffect(() => navigate('404'), [navigate]);
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '40px',
				width: '100vw',
				height: '100vh',
				fontSize: '100px',
			}}>
			NotFoundPage
			<button
				style={{
					width: '130px',
					height: '50px',
					borderRadius: '9999px',
					border: 'none',
					cursor: 'pointer',
				}}
				onClick={() => navigate('/')}>
				뒤로가기
			</button>
		</div>
	);
}
