export interface IPost {
	id: number | string
	title: string
	body: string
}
export enum Trigger {
	create = 'create',
	change = 'change',
}
