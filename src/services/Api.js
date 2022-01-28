
import axios from 'axios';

import AsyncStorege from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: "http://192.168.1.2:3000"
})
//192.168.1.14
export async function   getAutenticacao(body){
   const res = await api.post('/autenticacao', body)
   
    return res.data
} 

export async function getProduto(body){
    

    const res = await api.get('/estoque-b', body)
   
    return res.data
}


export default api