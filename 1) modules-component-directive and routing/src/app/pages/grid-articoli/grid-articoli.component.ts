import {Component, OnInit} from '@angular/core';
import {IArticolo} from "../../models/IArticolo";
import {ArticoliService} from "../../../services/articoli.service";

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent implements OnInit{

  articoli:IArticolo[] = [];
  constructor(private articoliServices:ArticoliService) {
  }

  ngOnInit(): void {
    this.articoli = this.articoliServices.getArticoli();
    console.log(this.articoli);
  }

  handleDelete=(codart:string)=>{
    console.log("Hai cliccato sul tasto delete!!!" + codart)
    this.articoli.splice(this.articoli.findIndex(art => art.codArt === codart),1);
  }
  handleEdit=(codart:string)=>{
    console.log("Hai cliccato sul tasto edit!!! porca merda " + codart)
  }

}
