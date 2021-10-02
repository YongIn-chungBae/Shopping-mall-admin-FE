import { server } from './baseURL';



const ProductAPI = {
    findAll: async (page: number, size: number) => {
        try{
            const { data, status } = await server.get(
                `/products?page=${page}&size=${size}`,
    
            )
            if(status != 200){
                alert("ProductAPI.find를 하지 못했습니다. 에러 코드"+status);
              }
            return {
                data,
                status
            }
        }catch(error){

        }
      
    },
}

export default ProductAPI;