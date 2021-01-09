import { ProxyState } from "../AppState.js"
import imageService from "../Services/ImageService.js"


function _drawImage(){
      document.body.style.backgroundImage = `url('${ProxyState.image.largeUrl}')`
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