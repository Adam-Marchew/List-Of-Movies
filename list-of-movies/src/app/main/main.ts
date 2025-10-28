import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

  isCheckedAll: boolean = true;
  isCheckedSF: boolean = false;
  isCheckedRomance: boolean = false;
  isCheckedAnime: boolean = false;
  isCheckedHistory: boolean = false;
  isCheckedHorror: boolean = false;

  isHiddenSF: boolean = false;
  isHiddenAnime: boolean = false;
  isHiddenRomance: boolean = false;
  isHiddenHistory: boolean = false;
  isHiddenHorror: boolean = false;

  selectionAll(){
    
    if(this.isCheckedAll == false){
      this.isCheckedAnime = false;
      this.isCheckedSF = false;
      this.isCheckedRomance = false;
      this.isCheckedHistory = false;
      this.isCheckedHorror = false;

      this.isHiddenSF = false;
      this.isHiddenAnime = false;
      this.isHiddenRomance = false;
      this.isHiddenHistory = false;
      this.isHiddenHorror = false;
    }
  }

  selectionSF(){
      if(this.isCheckedSF == false){
        this.isHiddenSF = false;
        this.isHiddenAnime = true;
        this.isHiddenRomance = true;
        this.isHiddenHistory = true;
        this.isHiddenHorror = true;

        this.isCheckedHistory = false;
        this.isCheckedHorror = false;
        this.isCheckedAll = false;
        this.isCheckedAnime = false;
        this.isCheckedRomance = false;
       }
  }

  selectionAnime(){
    if(this.isCheckedAnime == false){
        this.isHiddenSF = true;
        this.isHiddenRomance = true;
        this.isHiddenAnime = false;
        this.isHiddenHistory = true;
        this.isHiddenHorror = true;

        this.isCheckedHistory = false;
        this.isCheckedHorror = false;
        this.isCheckedAll = false;
        this.isCheckedRomance = false;
        this.isCheckedSF = false;
       }
  }

  selectionRomance(){
    if(this.isCheckedRomance == false){
        this.isHiddenSF = true;
        this.isHiddenAnime = true;
        this.isHiddenRomance = false;
        this.isHiddenHistory = true;
        this.isHiddenHorror = true;

        this.isCheckedHistory = false;
        this.isCheckedHorror = false;
        this.isCheckedAll = false;
        this.isCheckedAnime = false;
        this.isCheckedSF = false;
       }
  }

  selectionHistory(){
      if(this.isCheckedHistory == false){
        this.isHiddenSF = true;
        this.isHiddenAnime = true;
        this.isHiddenRomance = true;
        this.isHiddenHistory = false;
        this.isHiddenHorror = true;

        this.isCheckedRomance = false;
        this.isCheckedHorror = false;
        this.isCheckedAll = false;
        this.isCheckedAnime = false;
        this.isCheckedSF = false;
       }
  }

  selectionHorror(){
      if(this.isCheckedHorror == false){
        this.isHiddenSF = true;
        this.isHiddenAnime = true;
        this.isHiddenRomance = true;
        this.isHiddenHistory = true;
        this.isHiddenHorror = false;

        this.isCheckedHistory = false;
        this.isCheckedRomance = false;
        this.isCheckedAll = false;
        this.isCheckedAnime = false;
        this.isCheckedSF = false;
       }
  }

}
