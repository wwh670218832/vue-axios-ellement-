import axios from "axios";

//不带参数请求get
export function getDataList() {
    const url = '/api/getDataList';
    return axios.get(url);
}
//带参数请求get
export function getProductList(data) {
    const url = '/api/getProductList';
    return axios.get(url,{
        params: {
            range: data
        }
      });
}
//带参数请求post
export function getSearchList(data) {
    const url = '/api/getSearchList';
    return axios.post(url,data);
}