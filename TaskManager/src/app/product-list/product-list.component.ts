import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit{
	ngOnInit(): void {
		throw new Error("Method not implemented.");
	}
	products = products;
	constructor() { }

	share() {
		window.alert('The product has been shared!');
	}
	onNotify() {
		window.alert('Notified throught the notify from aproduct-alerts cmponent!');
	}
}
