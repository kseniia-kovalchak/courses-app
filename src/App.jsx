import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CourseForm from './components/CourseForm/CourseForm';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { mockedCoursesList, mockedAuthorsList } from './constants';
import { DataContext } from './context';
import { getCurrentUserThunk } from './store/user/thunk';
import { PrivateRoute } from './components/PrivateRouter/PrivateRouter';

let data = { courses: mockedCoursesList, authors: mockedAuthorsList };

function App() {
	const dispatch = useDispatch();

	if (localStorage.getItem('token')) {
		dispatch(getCurrentUserThunk());
	}

	return (
		<DataContext.Provider value={data}>
			<Header />
			<main>
				<Routes>
					{
						<Route
							path='/'
							element={
								localStorage.getItem('token') ? (
									<Navigate replace to='/courses' />
								) : (
									<Navigate replace to='/login' />
								)
							}
						/>
					}
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route path='/courses' element={<Courses />} />
					<Route
						path='/courses/add'
						element={
							<PrivateRoute>
								<CourseForm />
							</PrivateRoute>
						}
					/>
					<Route
						path='/courses/update/:courseId'
						element={
							<PrivateRoute>
								<CourseForm />
							</PrivateRoute>
						}
					/>
					<Route path='/course-info/:courseId' element={<CourseInfo />} />
				</Routes>
			</main>
		</DataContext.Provider>
	);
}
export default App;
