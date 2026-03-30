import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './item-lista-interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, NgClass],
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

  riscarItemLista(itemLista: ItemLista) {
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista() {
    this.listaDeItens = [];
  }
}
