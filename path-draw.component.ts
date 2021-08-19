import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-draw',
  templateUrl: './path-draw.component.html',
  styleUrls: ['./path-draw.component.css']
})
export class PathDrawComponent implements OnInit {
  dPathArray=[]
  dPath = ""

  firstX:number
  firstY:number

  constructor() { }

  ngOnInit(): void {
  }

  onDraw(event){
    const x = event.clientX.toString()
    const y = (event.clientY-120).toString()
    let element:string
    
    if(this.dPathArray[this.dPathArray.length-1] === 'Z'){
      this.dPathArray = []
    }

    if(this.dPathArray.length === 0){
      this.firstX = +x
      this.firstY = +y
      element = 'M'+ x + ',' + y
      this.dPathArray.push(element)
      this.dPath = ""
      this.dPathArray.map((element)=>{
        this.dPath = this.dPath +' '+ element
      })
      return
    }
    if( ((this.firstX +10)>(+x) &&  (this.firstX -10)<(+x)) && ((this.firstY +10)>(+y) &&  (this.firstY -10)<(+y))){
      element = 'Z'
      this.dPathArray.push(element)
      this.dPath = ""
      this.dPathArray.map((element)=>{
        this.dPath = this.dPath +' '+ element
      })
      return
    }

    element = 'L' + x + ',' + y
    this.dPathArray.push(element)
    this.dPath = ""
    this.dPathArray.map((element)=>{
      this.dPath = this.dPath +' '+ element
    })
  }
}
