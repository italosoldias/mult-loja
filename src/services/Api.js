
import axios from 'axios';



const api = axios.create({
    baseURL: "http://192.168.1.23:8090/"
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