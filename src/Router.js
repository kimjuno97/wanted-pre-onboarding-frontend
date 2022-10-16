import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Auth from './Auth/Auth';
import Todo from './Todo/Todo';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}
