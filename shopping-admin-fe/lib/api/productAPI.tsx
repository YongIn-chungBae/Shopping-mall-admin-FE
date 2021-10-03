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
    create: async (reqData: FormData) => {
        try{
            const key = "b89a4aa34bc0fe4afead449120b6019d";
            const { data, status } = await server.post(
                `https://api.imgbb.com/1/upload?key=b89a4aa34bc0fe4afead449120b6019d`,
                reqData
            )
            return {
                data,
                status
            };

        }catch(error) {
            return error.response;
        }
    }

}

export default ProductAPI;