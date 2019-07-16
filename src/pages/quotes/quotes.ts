import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface'
import { QuotesService } from '../../service/quotes';


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})

export class QuotesPage implements OnInit
{
  quoteGroup: {category:string, quotes: Quote[],icon:string};

    constructor(private navParams: NavParams, 
                private quoteService: QuotesService,
                private alertCtrl:AlertController      
          ){}

    ngOnInit()
    {
      this.quoteGroup = this.navParams.data;
    }

    onAddFavourite(selectedQuote: Quote)
    {
      const alert = this.alertCtrl.create({

        title: 'Add Quote',
        subTitle: 'Are you sure?',
        message: 'Are you sure to add the quote?',
        buttons: [
          {
            text: 'Yes Go,Ahead',
            handler: () => {
                this.quoteService.AddQuoteToFavourite(selectedQuote);
            }
          },
          {
            text: 'No,My mind changed',
            handler: () =>{

            }
          }
        ]
      });

      alert.present();
    }

    onRemoveFavourite(quote: Quote)
    {
      this.quoteService.RemoveQuoteToFavourite(quote);
    }

    isFavourite(quote: Quote)
    {
      return this.quoteService.isQuoteFavourite(quote);
    }

}
