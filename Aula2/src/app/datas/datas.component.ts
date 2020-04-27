import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css']
})
export class DatasComponent implements OnInit {

  evento = [
    { name: 'Villa Mix ', date: ' 9/26/2020 ', time: ' 10am ', location: { address: ' Mineirão ', city: ' Belo Horizonte ', country: ' Brasil ' } },
    { name: 'Rock In Rio ', date: ' 4/15/2020 ', time: ' 9am ', onlineUrl: ' https://www.rockinrio.com.br/ ' },
    { name: 'Campus Party ', date: ' 6/10/2020 ', time: ' 8am ' },
    { name: 'Loolapalooza ', date: ' 4/15/2020 ', time: ' 9am ', onlineUrl: ' http://www.loolapalooza.com ' },
    { name: 'Samba Prime', date: ' 6/10/2020 ', time: ' 8am ', location: { address: ' Expominas ', city: ' Belo Horizonte ', country: ' Brasil ' }, onlineUrl: ' http://www.sambaprime.com.br ' }

  ]

  constructor() { }

  attEndereco(infor) {
    for (let ex of this.evento) {
      if (ex.name === infor.name) {
        ex.location = infor.location;
      }
    }
  }

  ngOnInit(): void {
  }

}