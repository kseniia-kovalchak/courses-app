import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';

import pipeDuration from '../../helpers/pipeDuration';
import { pipeDate } from '../../helpers/dateGenerator';

import './CourseInfo.css';

import { DataContext } from '../../context';

const CourseInfo = () => {
	let mockedData = useContext(DataContext);

	const { courseId } = useParams();

	const course = mockedData.courses.find((course) => course.id === courseId);

	let authorsString = '';

	mockedData.authors.forEach((author) => {
		authorsString =
			authorsString === ''
				? authorsString + author.name
				: authorsString + `, ${author.name}`;
	});

	if (!course) {
		return <div>Sorry, but the course was not found</div>;
	}

	return (
		<div className='container'>
			<div className='row'>
				<Link to='/courses'>Back to courses</Link>
			</div>
			<div className='row p-3 m-3 border border-success'>
				<div className='col-8'>
					<h1>{course.title}</h1>
					<p>{course.description}</p>
				</div>
				<div className='col-4'>
					<p>
						<b>Authors: </b>
						{authorsString}
					</p>
					<p>
						<b>Duration: </b>
						{pipeDuration(course.duration)} hours
					</p>
					<p>
						<b>Created: </b>
						{pipeDate(course.creationDate)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
