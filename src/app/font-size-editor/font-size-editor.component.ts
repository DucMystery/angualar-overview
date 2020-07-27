import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.css']
})
export class FontSizeEditorComponent implements OnInit {
  fontSize = 14;
  title = 'Font size Editor';

  constructor() { }
  onChange (value) {
    this.fontSize = value;
  }
  ngOnInit(): void {
  }

}
