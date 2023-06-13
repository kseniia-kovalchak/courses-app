import './courses.css';

import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ADD_NEW_COURSE_BUTTON_TEXT } from './../../constants';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';

import { getCoursesList, getAuthorsList } from './../../services';

import { getAuthors, getCourses, getUser } from '../../store/selectors';
import { coursesReceived } from '../../store/courses/actionCreators';
import { authorsReceived } from '../../store/authors/actionCreators';

import { DataContext } from '../../context';

const Courses = () => {
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);
	const user = useSelector(getUser);

	const dispatch = useDispatch();

	useEffect(() => {
		if (user.isAuth === false) {
			navigate('/login');
		}
	}, [user]);

	useEffect(() => {
		getCoursesList()
			.then((data) => {
				dispatch(coursesReceived(data.result));
			})
			.catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		getAuthorsList()
			.then((data) => {
				dispatch(authorsReceived(data.result));
			})
			.catch((error) => console.log(error));
	}, []);

	const navigate = useNavigate();

	const handleAddButtonClick = () => {
		navigate('/courses/add');
	};

	const renderCourses = (
		<div>
			<ul>
				{courses.map((course) => {
					return (
						<li key={course.id}>
							<CourseCard
								id={course.id}
								title={course.title}
								description={course.description}
								authorsList={course.authors?.map((authorId) => {
									return authors.find((author) => author.id === authorId);
								})}
								duration={course.duration}
								creationDate={course.creationDate}
							/>
						</li>
					);
				})}
			</ul>
			{user.role === 'admin' && (
				<Button
					buttonText={ADD_NEW_COURSE_BUTTON_TEXT}
					onClick={handleAddButtonClick}
					className={'add-button'}
				/>
			)}
		</div>
	);

	return renderCourses;
};

export default Courses;
