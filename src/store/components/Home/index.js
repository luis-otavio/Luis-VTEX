import "./index.scss";
import { MainBanner } from "./components/MainBanner";

export const Home = () => {

  var data = null;

  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open("GET", "https://apiexamples.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/skuId");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("accept", "application/json");

  xhr.send(data);
  
};

