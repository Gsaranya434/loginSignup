import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  textList = [];
  title = 'test-project';
  public error: any;
  currentText = "";


  loadText(){  
    var data = (<HTMLInputElement>document.getElementById("intext")).value;
    // this.textList.push(data);
    console.log(data);
    debugger
  }

  textDrag(){

  }
  textDelete(){

  }
  textAdd(){

  }
}


