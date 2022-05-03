import { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
// import api from '../services/api'

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://gorest.co.in',
})

export function funcaoGet<T = unknown>(
  url: string,
  options?: AxiosRequestConfig,
) {
  const [data, setData] = useState<T>({} as T)

  useEffect(() => {
    async function fetchData() {
      try {
        await api.get(url, options).then((response) => setData(response.data))
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return { data }
}
// Token 51bd36346f73e59623b55b00cbab3d45ca5d9b3e4d0c224e6ae3ed663891edb4
// put /public/v2/users/100

//  export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

// function createPost() {
//   axios
//     .post(baseURL, {
//       title: "Hello World!",
//       body: "This is a new post."
//     })
//     .then((response) => {
//       setPost(response.data);
//     });
// }

// export async function funcaoPost(name:string, email:string) {
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     api.get(url)).then((response) => {
//       setPost(response.data);
//     });
//   }, []);
//   try {
//     await api.post('/public/v2/users/100', {
//       name: name,
//       email: email
//     })
//     return 'sucesso'
//   } catch (error) {
//     console.log(error)
//     return 'erro'
//   }
// }

// export async function criarRepositoriosDoUsuario(postId, nome, data){
//     try {
//         await api.post(`/repos`, {
//             name: nome,
//             data: data,
//             postId: postId
//         });
//         return 'sucesso'
//     }
//     catch (error){
//         console.log(error)
//         return 'erro'
//     }
// }

// export async function deletarRepositorioDoUsuario(id){
//     try {
//         await api.delete(`/repos/${id}`);
//         return 'sucesso'
//     }
//     catch (error){
//         console.log(error)
//         return 'erro'
//     }
// }
