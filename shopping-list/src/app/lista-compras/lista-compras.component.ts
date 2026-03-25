import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './item-lista-interface';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  item: string = '';
  listaDeItens: ItemLista[] = [];

  adicionarItemLista() {
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.listaDeItens.length + 1;

    this.listaDeItens.push(itemLista);
    this.item = '';
  }
}
