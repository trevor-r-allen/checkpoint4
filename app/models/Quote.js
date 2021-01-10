export default class Quote {
  constructor(data){
    this.quote = data.quote.body
    this.author = data.quote.author
  }
  
  get Template() {
    return /*html*/ `
    <div class="card-body text-center quote">
    <h6 id="quoteText">${this.quote}</h6><span id="authorText">${this.author}</span>
    </div>
    `
  }
}