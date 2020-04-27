import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() location;
  @Input() nome;
  @Output() attEnd = new EventEmitter();

  constructor() { }

  Atualizar(local, cidade, pais) {
    this.attEnd.emit({ name: this.nome, location: { address: local, city: cidade, country: pais } });
  }


  ngOnInit(): void {
  }

}
