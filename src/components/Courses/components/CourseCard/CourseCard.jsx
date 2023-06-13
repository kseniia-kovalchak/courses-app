import './courseCard.css';

import { COURSE_CARD_BUTTON_TEXT } from './../../../../constants';
import { COURSE_CARD_DELETE_BUTTON_TEXT } from './../../../../constants';
import { COURSE_CARD_EDIT_BUTTON_TEXT } from './../../../../constants';

import Button from '../../../../common/Button/Button';

import pipeDuration from './../../../../helpers/pipeDuration';

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse } from '../../../../services';
import { courseDeleted } from '../../../../store/courses/actionCreators';
import { getUser } from '../../../../store/selectors';

const CourseCard = ({
	id,
	title,
	duration,
	creationDate,
	description,
	authorsList,
}) => {
	const user = useSelector(getUser);
	const dispatch = useDispatch();

	let authorsString = '';

	authorsList?.forEach((author) => {
		authorsString =
			authorsString === ''
				? authorsString + author?.name
				: authorsString + ',' + author?.name;
	});

	const navigate = useNavigate();

	const handleShowButtonClick = () => {
		navigate(`/course-info/${id}`);
	};

	const handleDeleteButtonClick = () => {
		deleteCourse(id).then(dispatch(courseDeleted(id)));
	};

	const handleEditButtonClick = () => {
		navigate(`/courses/update/${id}`);
	};

	return (
		<div className='row p-3 m-3 border border-success'>
			<div className='col-8'>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
			<div className='col-4'>
				<p>
					<b>Authors: </b>
					{authorsString}
				</p>
				<p>
					<b>Duration: </b>
					{pipeDuration(duration)} hours
				</p>
				<p>
					<b>Created: </b>
					{creationDate?.replaceAll('/', '.')}
				</p>
				<Button
					buttonText={COURSE_CARD_BUTTON_TEXT}
					onClick={handleShowButtonClick}
				/>
				{user.role === 'admin' && (
					<>
						<Button
							buttonText={COURSE_CARD_DELETE_BUTTON_TEXT}
							onClick={handleDeleteButtonClick}
						/>
						<Button
							buttonText={COURSE_CARD_EDIT_BUTTON_TEXT}
							onClick={handleEditButtonClick}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default CourseCard;
