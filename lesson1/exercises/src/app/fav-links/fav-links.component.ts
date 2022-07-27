import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
favLink: string[] = ["https://www.ravelry.com", 'https://www.nasa.gov'];

  constructor() { }

  ngOnInit() {
  }

}
