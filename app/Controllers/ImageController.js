
//TODO Create methods for constructor, and rendering the image to the page

import { ProxyState } from "../AppState.js"
import imageService from "../Services/ImageService.js"

//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
function _drawImage(){
    if(ProxyState.image){
      document.body.style.backgroundImage = ProxyState.image.largeUrl
    }
    console.log(ProxyState.image)
}
export default class ImageController {
  constructor(){
    console.log('Summoning Reality')
    ProxyState.on("image", _drawImage)
    this.getImage()


  }
  getImage() {
    try {
      imageService.getImage()
    } catch (error) {
      console.error(error)
    }
  }
}