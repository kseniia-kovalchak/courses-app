import {
	TITLE_LABEL_TEXT,
	TITLE_PLACEHOLDER_TEXT,
	CREATE_COURSE_BUTTON_TEXT,
	CREATE_AUTHOR_LABEL_TEXT,
	CREATE_AUTHOR_PLACEHOLDER_TEXT,
	CREATE_AUTHOR_BUTTON_TEXT,
	DURATION_LABEL_TEXT,
	DURATION_PLACEHOLDER_TEXT,
	ADD_AUTHOR_BUTTON_TEXT,
	DELETE_AUTHOR_BUTTON_TEXT,
	UPDATE_COURSE_BUTTON_TEXT,
} from '../../constants';

import './courseForm.css';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import CourseModel from '../../models/CourseModel';
import AuthorModel from '../../models/AuthorModel';

import pipeDuration from '../../helpers/pipeDuration';

import { addCourse, addAuthor, getCourseById } from '../../services';
import { getAuthors } from '../../store/selectors';
import { authorAdded } from '../../store/authors/actionCreators';
import { updateCourseThunk } from '../../store/courses/thunk';

const CreateCourse = () => {
	const { courseId } = useParams();

	const dispatch = useDispatch();

	const authors = useSelector(getAuthors);

	const navigate = useNavigate();

	const [newAuthor, setNewAuthor] = useState(new AuthorModel(''));
	const [course, setCourse] = useState(new CourseModel('', '', '', []));
	const [duration, setDuration] = useState(0);

	useEffect(() => {
		if (courseId)
			getCourseById(courseId)
				.then((data) => {
					setCourse({
						title: data.result.title,
						description: data.result.description,
						duration: data.result.duration,
						authors: data.result.authors,
						creationDate: data.result.creationDate,
					});
					setDuration(pipeDuration(parseFloat(data.result.duration)));
				})
				.catch((error) => console.log(error));
	}, []);

	const handleAuthorNameChange = (e) => {
		setNewAuthor({ ...newAuthor, name: e.target.value });
	};

	const handleCreateAuthorSubmit = () => {
		addAuthor(newAuthor).then((response) => {
			dispatch(authorAdded(response.result.id, response.result.name));
		});
		setNewAuthor(new AuthorModel(''));
	};

	const handleAddAuthorSubmit = (id) => {
		if (!course.authors.find((authorId) => authorId === id)) {
			setCourse({ ...course, authors: [...course.authors, id] });
		}
	};

	const handleDeleteAuthorSubmit = (id) => {
		const newAuthorsList = course.authors.filter((author) => author !== id);

		setCourse({ ...course, authors: newAuthorsList });
	};

	const handleInputChange = (e) => {
		setCourse({ ...course, [e.target.name]: e.target.value });
	};

	const handleDurationChange = (e) => {
		const duration = +e.target.value;

		if (duration) {
			handleInputChange(e);
			setDuration(pipeDuration(duration));
		}
	};

	const handleCreateCourseSubmit = () => {
		if (
			course.title === '' ||
			course.description === '' ||
			course.duration === ''
		) {
			alert('Please, fill in all fields');
			return;
		}

		addCourse(course);

		setCourse(new CourseModel('', '', '', []));
		navigate('/courses');
	};

	const handleUpdateCourseSubmit = () => {
		if (
			course.title === '' ||
			course.description === '' ||
			course.duration === ''
		) {
			alert('Please, fill in all fields');
			return;
		}

		dispatch(updateCourseThunk(courseId, course));

		setCourse(new CourseModel('', '', '', []));
		navigate('/courses');
	};

	return (
		<div>
			<div className='row p-3'>
				<div className='col-8'>
					<Input
						labelText={TITLE_LABEL_TEXT}
						placeholderText={TITLE_PLACEHOLDER_TEXT}
						name={'title'}
						value={course.title}
						onChange={handleInputChange}
					/>
				</div>
				<div className='col-4 text-end'>
					{!courseId ? (
						<Button
							buttonText={CREATE_COURSE_BUTTON_TEXT}
							onClick={handleCreateCourseSubmit}
						/>
					) : (
						<Button
							buttonText={UPDATE_COURSE_BUTTON_TEXT}
							onClick={handleUpdateCourseSubmit}
						/>
					)}
				</div>
			</div>
			<div className='row'>
				<label className='m-3'>
					description
					<textarea
						name='description'
						onChange={handleInputChange}
						className='w-100 border border-warning'
						rows={5}
						value={course.description}
					/>
				</label>
			</div>
			<div className='row border border-dark m-3'>
				<div className='col-6'>
					<div>
						<h3>Add author</h3>
						<Input
							labelText={CREATE_AUTHOR_LABEL_TEXT}
							placeholderText={CREATE_AUTHOR_PLACEHOLDER_TEXT}
							onChange={handleAuthorNameChange}
							value={newAuthor.name}
						/>
						<Button
							buttonText={CREATE_AUTHOR_BUTTON_TEXT}
							onClick={handleCreateAuthorSubmit}
						/>
					</div>
					<div>
						<h3>Duration</h3>
						<Input
							labelText={DURATION_LABEL_TEXT}
							placeholderText={DURATION_PLACEHOLDER_TEXT}
							name={'duration'}
							onChange={handleDurationChange}
							value={course.duration}
						/>
						<p>
							Duration <b>{duration}</b> hours
						</p>
					</div>
				</div>
				<div className='col-6'>
					<div>
						<h3 className='text-center'>Authors</h3>
						<ul>
							{authors.map((author) => {
								return (
									<li
										key={author.id}
										className='d-flex justify-content-between'
									>
										<div>author:{author.name}</div>
										<div>
											<Button
												buttonText={ADD_AUTHOR_BUTTON_TEXT}
												onClick={() => handleAddAuthorSubmit(author.id)}
											/>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
					<div>
						<h3>Course authors</h3>
						{course.authors.length === 0 && <p>Author list is empty</p>}
						{course.authors.length > 0 && (
							<ul>
								{course.authors.map((authorId) => {
									const authorData = authors.find(
										(data) => data.id === authorId
									);
									return (
										<li key={authorId}>
											<div>{authorData.name}</div>
											<Button
												buttonText={DELETE_AUTHOR_BUTTON_TEXT}
												onClick={() => {
													handleDeleteAuthorSubmit(authorId);
												}}
											/>
										</li>
									);
								})}
							</ul>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
