import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bildkarussell';
  counter = 0;
  Bilder:string[] = ["https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg", "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg"];

  onNext(){
    if(this.counter < this.Bilder.length-1){
      this.counter++;
      console.log(this.counter);
    }else{
      this.counter = 0;
    }
  }

  addUrl(event: Event){
    const url = (<HTMLInputElement>event.target).value;
    if(url.endsWith(".jpg")){
      this.Bilder.push(url);
    }else{
      console.log("Bitte gültige Url angeben")
    }
  }
}
