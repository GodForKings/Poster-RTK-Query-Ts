export interface IDevice {
	id: number
	name: string
	price: number
	rating?: number
	img?: string
	createdAt: string
	updatedAt: string
	typeId?: number | undefined
	brandId?: number | undefined
}

export interface IResolveDevice {
	count?: number
	rows: IDevice[]
}
