import { Injectable } from '@angular/core';
import { Product } from '../Product';
@Injectable()
export class ProductService {

  constructor() { }

  getProducts() {
    const products: Product[] = [];

    products.push(
      new Product('EQT PDX Short', 'http://demandware.edgesuite.net/sits_pod14-adidas/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-products/default/dw67b8bd51/zoom/BS2817_01_laydown.jpg', 'Adidas', 100, 5,0,false),
      new Product('UTILITY JACKET', 'http://demandware.edgesuite.net/sits_pod14-adidas/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-products/default/dw18a9f548/zoom/CE5635_01_laydown.jpg', 'Adidas', 200, 10,0,false),
      new Product('MINOH CREW TEE', 'http://demandware.edgesuite.net/sits_pod14-adidas/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-products/default/dw32d0858e/zoom/BR6930_01_laydown.jpg', 'Adidas', 150, 7,0,false),
      new Product('CUSTOM SLIM FIT MESH T-SHIRT', 'http://www.ralphlauren.com/graphics/product_images/pPOLO2-26008713_alternate2_v400.jpg', 'Ralph Lauren', 59, 20,0,false),
      new Product('WAFFLE COTTON-BLEND HOODIE', 'http://www.ralphlauren.com/graphics/product_images/pPOLO2-26008761_alternate2_v400.jpg', 'Ralph Lauren', 125, 35,0,false)
                 );
    return products;
  }

}
