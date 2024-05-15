import { axiosInstance } from ".";

//register
export const RegisterUser = async(payload) => {
    try {
        const response = await axiosInstance.post('/register', payload);
        return response.data;
    } catch (err) {
        return err;
    }
}  

//login
export const LoginUser = async(payload) => {
    try {
        const response = await axiosInstance.post('/login', payload);
        return response.data;
    } catch(err) {
        return err;
    }
}

//Get Current User
export const GetCurrentUser = async() => {
    try {
        const response = await axiosInstance.get('/get-current-user', {
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (err) {
        return err; 
    }
}