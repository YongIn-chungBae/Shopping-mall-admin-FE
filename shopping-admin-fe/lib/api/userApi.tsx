import { server } from './baseURL';



const UserAPI = {
    findAll: async (page: number, size: number) => {
        try{
            const { data, status } = await server.get(
                `/page?page=${page}&size=${size}`,
    
            )
            return {
                data,
                status
            }
        }catch(error){

        }
      
    },
}

export default UserAPI;