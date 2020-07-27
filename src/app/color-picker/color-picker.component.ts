import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  title = 'Color picker';
  background = '#00e067';

  constructor() { }

  onChange(value){
    this.background =value;
  }

  ngOnInit(): void {
  }

}
