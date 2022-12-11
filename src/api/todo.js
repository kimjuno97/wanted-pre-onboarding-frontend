import { baseUrl } from './api';

const url = `${baseUrl}/todos`;
const token = () => localStorage.getItem('token');

export const TODO = {
	GET: async () => {
		const options = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token()}`,
				'Content-Type': 'application/json',
			},
		};
		const res = await fetch(url, options);
		return await res.json();
	},

	POST: bodyData => {
		const options = {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token()}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(bodyData),
		};

		return fetch(url, options).then(res => res.json());
	},
	DELETE: async id => {
		const deleteUrl = `${url}/${id}`;
		const options = {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token()}`,
				'Content-Type': 'application/json',
			},
		};
		const { ok } = await fetch(deleteUrl, options);
		if (ok) {
			alert('삭제되었습니다');
		}
	},
	UPDATE: ({ id, todo, isCompleted }) => {
		const updateUrl = `${url}/${id}`;
		const options = {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token()}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ todo, isCompleted }),
		};
		fetch(updateUrl, options).then(({ ok }) => {
			if (ok) {
				alert('수정되었습니다.');
			}
		});
	},
};
