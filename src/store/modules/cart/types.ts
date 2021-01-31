export interface IProduct {	
	id: number;
	title: string;
	price: number;
	src: string;
}

export interface ICartItem {
	product: IProduct;
	quantity: number;
}

export interface ICartState {
	items: ICartItem[]
}
