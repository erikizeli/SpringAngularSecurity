import { Component,Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit{
  @Input() element: String[] = []
  @Input() role:String = ''
  @Input() addData!: Function

  formData={
    text:''
  }

  

  ngOnInit(): void {
      console.log(this.role)
  }
  

  invokeFunction():void{
    
    console.log(this.role)
    if (this.addData){
      this.addData(this.formData.text,this.role)
    }
  }
}
