import { baseUrl } from './api';
import { TypeTodo } from '../Todo/useTodo';

const url = `${baseUrl}/todos`;
const token = () => localStorage.getItem('token');

export const TODO = {
	GET: (setListArray: React.Dispatch<React.SetStateAction<TypeTodo[]>>) => {
		const options = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token()}`,
				'Content-Type': 'application/json',
			},
		};
		fetch(url, options)
			.then(res => res.json())
			.then(data => setListArray([...data]));
	},

	POST: (
		bodyData: { todo: string },
		setListArray: React.Dispatch<React.SetStateAction<TypeTodo[]>>
	) => {
		const options = {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token()}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(bodyData),
		};

		fetch(url, options)
			.then(res => res.json())
			.then(data => setListArray(prev => [...prev, data]));
	},
	DELETE: (id: number) => {
		const deleteUrl = `${url}/${id}`;
		const options = {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token()}`,
				'Content-Type': 'application/json',
			},
		};
		fetch(deleteUrl, options).then(({ ok }) => {
			if (ok) {
				alert('삭제되었습니다');
			}
		});
	},
	UPDATE: (id: number, body: { todo: string; isCompleted: boolean }) => {
		const updateUrl = `${url}/${id}`;
		const options = {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token()}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		};
		fetch(updateUrl, options).then(({ ok }) => {
			if (ok) {
				alert('수정되었습니다.');
			}
		});
	},
};
