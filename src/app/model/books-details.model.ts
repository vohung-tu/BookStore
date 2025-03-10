export interface BookDetails {
  book_id: number,
  title: string,
  description: string,
  author: string,
  price: number,
  flashsale_price: number,
  discount_percent: number,
  coverImage: string, //link
  publishedDate: Date 
}