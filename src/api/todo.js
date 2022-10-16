import { baseUrl } from './api';

const url = `${baseUrl}/todos`;
function token() {
	return localStorage.getItem('token');
}

export const TODO = {
	GET: setListArray => {
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

	POST: (bodyData, setListArray) => {
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
	DELETE: id => {
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
	UPDATE: (id, todo, isCompleted) => {
		const updateUrl = `${url}/${id}`;
		const options = {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token()}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ todo: todo, isCompleted: isCompleted }),
		};
		fetch(updateUrl, options).then(({ ok }) => {
			if (ok) {
				alert('수정되었습니다.');
			}
		});
	},
};
