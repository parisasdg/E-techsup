export class CartClass {
  lists: Array<{ id: number, ProductName: string, count: number, UnitPrice: number, image: string , Price:number}> = [{
    id: 1,
    ProductName: 'product1',
    count: 0,
    UnitPrice: 1000,
    Price: 0,
    image: './assets/image/pro1.jpeg',
  },
    {
      id: 2,
      ProductName: 'product2',
      count: 0,
      UnitPrice: 100,
      Price: 0,
      image: './assets/image/pro2.jpeg'
    },
    {
      id: 3,
      ProductName: 'product3',
      count: 0,
      UnitPrice: 2000,
      Price: 0,
      image: './assets/image/pro3.jpeg'
    },
    {
      id: 4,
      ProductName: 'product4',
      count: 0,
      UnitPrice: 10,
      Price: 0,
      image: './assets/image/pro4.jpeg'
    },
    {
      id: 5,
      ProductName: 'product5',
      count: 0,
      UnitPrice: 700,
      Price: 0,
      image: './assets/image/pro5.jpeg'
    }];
}
