import { Quote } from "../data/quote.interface";


export class QuotesService
{
    private favouriteQuotes: Quote[] = [];

    AddQuoteToFavourite(quote: Quote)
    {
        this.favouriteQuotes.push(quote);
        console.log(this.favouriteQuotes);
    }

    RemoveQuoteToFavourite(quote: Quote)
    {
        const position = this.favouriteQuotes.findIndex((quoteEL: Quote) => {
            return quoteEL.id == quote.id;
        });
        this.favouriteQuotes.splice(position,1);
    }
    getFavouriteQuote()
    {
        return this.favouriteQuotes.slice();
    }

    isQuoteFavourite(quote: Quote)
    {
        return this.favouriteQuotes.find((quoteEL: Quote) => {
            return quoteEL.id == quote.id;
        });
    }
}