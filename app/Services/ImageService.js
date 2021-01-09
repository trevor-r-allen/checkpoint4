import { ProxyState } from "../AppState.js";
import Image from "../models/Image.js";
import { api } from "./AxiosService.js";

class ImageService {
  async getImage() {
    let res = await api.get("images")
    console.log(res.data)
    ProxyState.image = new Image(res.data)
    console.log(ProxyState.image)
  }

}

const imageService = new ImageService();
export default imageService;