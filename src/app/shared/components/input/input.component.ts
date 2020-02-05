import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bill-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() labelTexto: string;
  @Input() required: boolean;
  @Input() placeholder = '';
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.labelTexto)
  }
}
