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
}
