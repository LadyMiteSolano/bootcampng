import { Component } from '@angular/core';
import { ProductoDetail } from '../interface/ProductDetail.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  totalProductos: number = 0;
  subtotal: number = 0;
  impuesto: number = 0;
  totalPago: number= 0;

  listaproducto: ProductoDetail[] = [
    {
      productoid: 1,
      producto: 'Play Station 5',
      modelo: 'Ultra Slim',
      proveedor: 'H&B sa',
      precio: 600.00,
      stock: 40
    },
    {
      productoid: 2,
      producto: 'PC Gammer',
      modelo: 'AS-001-wm',
      proveedor: 'Asus',
      precio: 850.00,
      stock: 21
    },
    {
      productoid: 3,
      producto: 'MousePad',
      modelo: 'MP-2001-A',
      proveedor: 'Juan Marcet',
      precio: 10.00,
      stock: 3
    }
  ];

  listaCarrito: ProductoDetail[] = [];

  agregarProducto(producto: ProductoDetail){
    if(this.listaCarrito.length === 0){
      producto.cantidad = 1;
      this.listaCarrito.push(producto);
    } else{
      let productoAgg = this.listaCarrito.filter(reg => reg.productoid === producto.productoid);
      if(productoAgg.length > 0){
        this.listaCarrito.forEach(productoCarrito => {
          if(productoCarrito.productoid === producto.productoid){
            if(productoCarrito.cantidad != undefined){
              productoCarrito.cantidad += 1;
            }
          }
        });
      } else {
        producto.cantidad = 1;
        this.listaCarrito.push(producto);
      }
    }
    this.realizarCalculo();
  }

  eliminarProducto(producto: ProductoDetail){
    let posicionProducto = this.listaCarrito.indexOf(producto);
    this.listaCarrito.splice(posicionProducto, 1);
    this.realizarCalculo();
  }

  realizarCalculo(){
    if(this.listaCarrito.length == 0){
      this.totalProductos = 0;
      this.subtotal = 0;
      this.impuesto = 0;
      this.totalPago = 0;
    }
    this.listaCarrito.forEach(producto =>{
      this.totalProductos += producto.cantidad ?? 0;
      this.subtotal += (producto.precio * (producto.cantidad ?? 0));
      this.impuesto += (producto.precio * (producto.cantidad ?? 0)) * 0.12;
      this.totalPago +=this.subtotal + this.impuesto;
    })
  }

  validarStock(prodSeleccionado: ProductoDetail): boolean{
    let isValid: boolean = true;
    this.listaproducto.forEach(producto =>{
      if(producto.productoid === prodSeleccionado.productoid)
      {
        let cantidad = prodSeleccionado.cantidad ?? 0;
        if(producto.stock > cantidad){
          isValid = true;
        }else{
          isValid = false;
        }
      }
    });
    return isValid;
  }
}
