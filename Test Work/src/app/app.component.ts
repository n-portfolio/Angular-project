import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  number = '8';
  playlist = [
    {
      id: '1',
      title: 'In Love | A Himitsu feat. Nori',
      link: 'https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0'
    },
    {
      id: '2',
      title: 'Cartoon – On & On (feat. Daniel Levi) [NCS Release]',
      link: 'https://dl.dropboxusercontent.com/s/w99exjxnwoqwz0e/Cartoon-on-on-feat-daniel-levi-ncs-release.mp3?dl=0'
    },
    {
      id: '3',
      title: 'Music',
      link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'
    }
  ];

  triggerOnEnded(event) {
    console.log('ended');
  }
}
