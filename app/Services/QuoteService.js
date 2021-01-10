import { ProxyState } from "../AppState.js";
import Quote from "../models/Quote.js";
import { api } from "./AxiosService.js";


class QuoteService {
  async getQuote() {
    let res = await api.get("quotes")
    console.log(res.data)
    ProxyState.quote = new Quote(res.data)
    console.log(ProxyState.quote)

  }
}

const quoteService = new QuoteService();
export default quoteService;