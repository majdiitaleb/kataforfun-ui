import {Component,OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Result} from "../model/result";
import {KataForFunService} from "../kata-for-fun.service";
@Component({
  selector: 'app-kata-for-fun-form',
  templateUrl:  './kata-for-fun-form.component.html'
})
export class KataForFunFormComponent implements OnInit {
   numberInput: number;
   result = new Result();
  convertedNumber: number;

  constructor(private kataforfunservice: KataForFunService) { }


  ngOnInit(): void {
  }

  submitNumber(): void {
    console.log("start")
   this.kataforfunservice.getConvertedNumber(this.numberInput).subscribe((result: Result)=>{

     this.result=result
     console.log(this.result);
     }

   )
  }







}
