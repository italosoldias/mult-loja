
import axios from 'axios';



const api = axios.create({
    baseURL: "http://192.168.3.28:8090/"
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

export async function   postCadastrarAnimal(body){
    const res = await api.post('/animal', body)
    
     return res.data
 } 

export async function postCadastrarTutor(body){
    const res = await api.post('/tutor', body)
    
     return res.data
}

export async function getAnimal(params){

    const res = await api.get('/animal:id',{params:params})
    return res.data
}

export default api