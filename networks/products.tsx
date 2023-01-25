import axios from "axios";
import { FAKE_STORE_API } from "../config";
import { ProductDataIFace } from "../interfaces";
import products_json from "../.data/products.json"

export const getProduct = async ({id}:Pick<ProductDataIFace, "id">) =>{
    try{
        let {data} = await axios.get<ProductDataIFace>(FAKE_STORE_API(id), {timeout: 300});
        // check is data is valid or not
        if (!('title' in data))
            throw "data is not valid";
        return data;
    }catch(e){
        // fake api timeout
        // use internal data
        return (products_json.find(p=>p.id == id) || null)
    }
}