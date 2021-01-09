export default class Image {
  constructor({url, large_url, largeUrl}) {
    this.url = url
    this.largeUrl = largeUrl || large_url
  }

}