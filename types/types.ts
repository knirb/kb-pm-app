export interface IProject {
	id: string;
	title: string;
	description: string;
	tasks: ITask[];
}

export interface ITask {
	id: string;
	title: string;
	description: string;
	assignedTo: IMember;
}

export interface IMember {
	id: string;
	className: string;
	lastEdited: string;
	created: string;
	firstName: string;
	surname: string;
	email: string;
}
