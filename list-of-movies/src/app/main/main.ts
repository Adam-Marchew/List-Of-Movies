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

  isHiddenSF: boolean = false;
  isHiddenAnime: boolean = false;
  isHiddenRomance: boolean = false;

  selectionAll(){
    
    if(this.isCheckedAll == false){
       this.isCheckedAnime = false;
       this.isCheckedSF = false;
       this.isCheckedRomance = false;

       this.isHiddenSF = false;
       this.isHiddenAnime = false;
       this.isHiddenRomance = false;
    }
  }

  selectionSF(){
      if(this.isCheckedSF == false){
         this.isHiddenSF = false;
         this.isHiddenAnime = true;
         this.isHiddenRomance = true;

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

         this.isCheckedAll = false;
         this.isCheckedAnime = false;
         this.isCheckedSF = false;
       }
  }

}
