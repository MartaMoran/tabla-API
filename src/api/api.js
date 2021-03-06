 
 const getUsers = async () => {
    try {
     const response = await fetch(`https://reqres.in/api/users?delay=3`);
     const {data} = await response.json();
     if (!response.ok) {
      throw Error(response.statusText);
     }
    
     return data 
    } catch (error) {
     console.log(error);
    }


   }

   const getUserInfo = async (id) => {
      
    try {
     const response = await fetch(`https://reqres.in/api/users/${id}`);
     const {data} = await response.json();
     if (!response.ok) {
      throw Error(response.statusText);
     }
    console.log(data)
     return data 
    } catch (error) {
     console.log(error);
    }


   }

   export { getUsers, getUserInfo};