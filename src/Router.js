import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Auth from './Auth/Auth';
import Todo from './Todo/Todo';

export default function Router() {
	return (
		<BrowserRouter basename='/wanted-pre-onboarding-frontend'>
			<Routes>
				<Route path='/' element={<Auth />} />
				<Route path='/todo' element={<Todo />} />
			</Routes>
		</BrowserRouter>
	);
}
