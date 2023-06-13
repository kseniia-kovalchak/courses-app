export const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum 
    has been the industry's standard dummy text ever since the
   1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type
   specimen book. It has survived 
    not only five centuries, but also the leap into electronic
    typesetting, remaining essentially u
    nchanged.`,
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum 
    has been the industry's standard dummy text ever since the
   1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type
   specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];

export const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];

export const ADD_NEW_COURSE_BUTTON_TEXT = 'Add new course',
	COURSE_CARD_BUTTON_TEXT = 'Show course',
	COURSE_CARD_DELETE_BUTTON_TEXT = 'Delete',
	COURSE_CARD_EDIT_BUTTON_TEXT = 'Edit',
	SEARCH_BAR_BUTTON_TEXT = 'Search',
	SEARCH_BAR_LABEL_TEXT = 'Course name or id',
	SEARCH_BAR_PLACEHOLDER_TEXT = 'Enter course name or id...',
	TITLE_LABEL_TEXT = 'Title',
	TITLE_PLACEHOLDER_TEXT = 'Enter title...',
	CREATE_COURSE_BUTTON_TEXT = 'Create course',
	UPDATE_COURSE_BUTTON_TEXT = 'Save course',
	CREATE_AUTHOR_LABEL_TEXT = 'Author name',
	CREATE_AUTHOR_PLACEHOLDER_TEXT = 'Author name',
	CREATE_AUTHOR_BUTTON_TEXT = 'Create author',
	DURATION_LABEL_TEXT = 'Duration',
	DURATION_PLACEHOLDER_TEXT = 'Enter duration in minutes...',
	ADD_AUTHOR_BUTTON_TEXT = 'Add author',
	DELETE_AUTHOR_BUTTON_TEXT = 'Delete author';
