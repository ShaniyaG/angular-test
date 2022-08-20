import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  searchText;
  items: any[] = [
    {
      cardTitle: 'Clubs',
      desc: 'Its original French name is Trèfle which means "clover" and the card symbol depicts a three-leafed clover leaf',
      src: 'https://cdn.pixabay.com/photo/2012/04/13/20/38/clubs-33561_1280.png',
    },
    {
      cardTitle: 'Diamonds',
      desc: 'We have the High Volume Production capacity for all segments with strict compliance to Security & Quality Standards.',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Playing_card_diamond_5.svg/1638px-Playing_card_diamond_5.svg.png',
    },
    {
      cardTitle: 'Heart',
      desc: 'Hearts is an "evasion-type" trick-taking playing card game for four players, although most variations can accommodate between three and six players',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/1200px-Playing_card_heart_A.svg.png',
    },
    {
      cardTitle: 'Spade',
      desc: 't is the same shape as the leaf symbol in German-suited cards but looks like a black heart turned upside down with a stalk at its base.',
      src: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Card_spade.svg/1200px-Card_spade.svg.png',
    },
  ];
  @ViewChild('card') imageCard: ElementRef;
  constructor() {}

  ngOnInit() {}
  deleteCard(index: number) {
    this.items.splice(index, 1);
  }
}
