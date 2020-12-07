import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto.descripcion.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public productoService: ProductosService ) { }

  ngOnInit() {

    this.route.params
        .subscribe( parametros => {
          //console.log(parametros['id']);
          this.productoService.getProducto(parametros['id'])
              .subscribe( (producto: ProductoDescripcion ) => {
                console.log(producto.);
              });

        });

  }

}
