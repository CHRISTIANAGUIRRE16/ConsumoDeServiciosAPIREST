import { Component, OnInit } from '@angular/core';
import { CreateProductDto, ProductModel, UpdateProductDto } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = [];
  selectedProduct: UpdateProductDto = { title: '', price: 0, description: '' };

  constructor(private productService: ProductService) {
    this.editProduct();
  }

  ngOnInit(): void {
    // this.getProducts();
    // Aquí debes proporcionar un valor de `id` válido al llamar a `getProduct()`
    // this.getProduct(433); // Reemplaza 123 con el valor de `id` correcto
    // this.createProduct({
    //   title: 'Nombre del producto',
    //   price: 10,
    //   description: 'Descripción del producto',
    //   categoryId: 1,
    //   images: ['https://picsum.photos/id/237/200/300']  // Cambia a un arreglo con una cadena
    // });
    //const updatedProduct: UpdateProductDto = {
      //title: 'Nuevo título',
      //price: 20,
     // description: 'Nueva descripción'
    //};
    //this.updateProduct(441, updatedProduct); // Agrega el segundo argumento si es necesario
     this.deleteProduct(441);
  }

  // getProducts() {
  //   const url = "https://api.escuelajs.co/api/v1/products";
  //   this.productService.getAll().subscribe(
  //     response => {
  //       this.products = response;
  //       console.log(response);
  //     }
  //   );
  // }

  // getProduct(id: ProductModel['id']) {
  //   const url = "https://api.escuelajs.co/api/v1/products/" + 433; // Utiliza el `id` proporcionado
  //   return this.productService.getOne(id).subscribe(
  //     response => {
  //       console.log(response);
  //     }
  //   );
  // }

  createProduct(product: CreateProductDto) {
    this.productService.store(product).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  updateProduct(id: ProductModel['id'], product?: UpdateProductDto) {
    if (product) {
      this.productService.update(id, product).subscribe(
        response => {
          console.log(response);
        }
      );
    } else {
      // Manejar el caso cuando `product` es `undefined`
      console.log('No se proporcionó ningún producto para actualizar.');
    }
  }

  editProduct() {
    this.selectedProduct = { title: 'actualizado', price: 10, description: 'actualizado' };
  }

  deleteProduct(id: ProductModel['id']) {
    this.productService.destroy(id).subscribe(
      response => {
        this.products = this.products.filter(product => product.id != id);
        console.log(response);
      }
    );
  }
}
