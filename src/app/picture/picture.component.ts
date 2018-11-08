import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  @Input() sources: object[];
  @Input() img: string;
  @Input() alt: string;
  @Input() id: string;

  constructor() { }

  ngOnInit() {
  }

}
