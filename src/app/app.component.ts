import {Component, OnInit} from '@angular/core';
import {CartClass} from "./cartClass";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'E-techsup';
  TotalPrice: number = 0;
  plusIsActive: boolean = true;
  minusIsActive: boolean = false;
  lists: Array<{ id: number, ProductName: string, count: number, Price: number, image: string, UnitPrice: number }> = [];

  constructor() {
    this.TotalPrice = this.calculateFinalPrice();
  }

  ngOnInit(): void {
    const productsLocalStorage = localStorage.getItem('products');
    if (!productsLocalStorage) {
      this.lists = new CartClass().lists;
      localStorage.setItem('products', JSON.stringify(this.lists));
    } else {
      this.lists = JSON.parse(productsLocalStorage);
      this.TotalPrice = this.calculateFinalPrice()
    }
  }

  incrementAmount(Index: number, Numbers: number): void {
    const currentItemIndex = this.lists.findIndex(x => x.id === Index) as any;
    this.lists[currentItemIndex].count += Numbers;
    this.lists[currentItemIndex].Price = this.calculateProductPrice(currentItemIndex)
    this.TotalPrice = this.calculateFinalPrice();
    localStorage.setItem("products", JSON.stringify(this.lists));
  }

  calculateProductPrice(i: number): number {

    this.lists[i].Price = this.lists[i].count * this.lists[i].UnitPrice;
    return this.lists[i].Price;
  }

  calculateFinalPrice(): number {
    let finalPrice = 0;
    this.lists.forEach(item => {
      finalPrice += item.Price
    })
    return finalPrice;
  }

  DeleteItem(i: number) {
    this.lists = this.lists.filter(item => item.id !== i)
  }
}

