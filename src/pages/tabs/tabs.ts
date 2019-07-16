import { Component } from '@angular/core';
import { FavouritePage } from '../favourite/favourite';
import { LibraryPage } from '../library/library';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="favouritepage" tabTitle="Favoutite" tabIcon="star"></ion-tab>
      <ion-tab [root]="librarypage" tabTitle="Library" tabIcon="book"></ion-tab>
      <ion-tab [root]="aboutpage" tabTitle="About" tabIcon="home"></ion-tab>
    </ion-tabs>    
  `
})
export class TabsPage 
{

  favouritepage= FavouritePage;
  librarypage= LibraryPage;
  aboutpage=AboutPage;
}
