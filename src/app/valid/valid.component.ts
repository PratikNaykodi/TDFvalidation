import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valid',
  templateUrl: './valid.component.html',
  styleUrls: ['./valid.component.css']
})
export class ValidComponent implements OnInit {
  public LogChange(data)
  {
    console.log(data);
  }
  public LogChange1(value)
  {
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
