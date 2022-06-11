import axios from 'axios';
import { useEffect, useState } from 'react';
const useOnSubmit = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email =  user?.user?.email;
        const name = user?.user?.displayName;
        const tokenUser = {name:name,email:email};
        
        if(email){
            axios.put(`http://localhost:5000/users/${email}`,{
                user: tokenUser,
            })
            .then(res=>{
                const accessToken = res?.data?.token;
                localStorage.setItem('accessToken',accessToken)
                setToken(accessToken)
            })
        }
    }, [user])
    return [token]
};

export default useOnSubmit;