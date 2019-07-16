import { Component} from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../service/quotes';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html',
})
export class FavouritePage
{

  quotes: Quote[];
  constructor(private quoteService: QuotesService,
              private modalCtrl:ModalController){}

  ionViewWillEnter()
  {
    this.quotes = this.quoteService.getFavouriteQuote();
  }

  onViewQuote(quote: Quote)
  {
    const modal= this.modalCtrl.create(QuotePage,quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove)
      {
        this.RemoveFromFavourite(quote);
      }
    });
  }

  RemoveFromFavourite(quote: Quote)
  {
        this.quoteService.RemoveQuoteToFavourite(quote);
        const position = this.quotes.findIndex((quoteEL: Quote) => {
          return quoteEL.id == quote.id;
        });
        this.quotes.splice(position,1);
  }

}
