import { Component, OnInit } from '@angular/core';


declare var window: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  modal: any;
  arr: any[]=[];
  platform: any = {
    platform: '',
    link:'',
  };
  constructor() {

 }
  ngOnInit(): void {
    const localData = localStorage.getItem('platformsList')
    if (localData != null) {
      this.arr = JSON.parse(localData);
    }
      //Open the modal
      this.modal=new window.bootstrap.Modal(document.getElementById('Modal'),{Keyboard: false});

  }
  openAddModel() {
      this.modal.show();

  }

  saveLink(form: any) {
    console.log(form.value.platform)
    this.platform.platform = form.value.platform;
    this.platform.link = form.value.link;
console.log(this.platform)
    this.arr.push(this.platform);
    this.modal.hide();
    localStorage.setItem('platformsList', JSON.stringify(this.arr));
     this.platform= {
    platform: '',
    link:'',
  };
  }
}
