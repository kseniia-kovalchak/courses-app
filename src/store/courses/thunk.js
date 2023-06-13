import { updateCourse } from '../../services';
import { courseUpdated } from './actionCreators';

export const updateCourseThunk = (id, courseData) => async (dispatch) => {
	updateCourse(id, courseData)
		.then((res) => {
			dispatch(
				courseUpdated(
					res.result.title,
					res.result.description,
					res.result.creationDate,
					res.result.duration,
					res.result.authors
				)
			);
		})
		.catch((error) => {
			console.log(error);
		});
};
