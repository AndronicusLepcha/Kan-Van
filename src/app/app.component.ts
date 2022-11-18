import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  one:any=["one","two","three"]
  two:any=["one","two","three"]
  three:any=["one","two","three"]
  text=""
  addText=()=>{
    this.one.push(this.text)
  }
  toTwo=(one:any)=>{
    this.one=this.one.filter((text:any)=>{
      return text!==one
    })
    this.two.push(one)
  }
  toThree=(one:any)=>{
    this.two=this.two.filter((text:any)=>{
      return text!==one
    })
    this.three.push(one)
  }
}
