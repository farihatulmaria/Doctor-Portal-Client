import React from 'react';
import { toast } from 'react-toastify';
const UserRow = ({user,refetch,index}) => {
    const {role,email} = user;
    const makeAdmin = () =>{
        const url =`http://localhost:5000/users/admin/${email}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'authorization':`user ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to Make an admin');
            }
            return res.json()})
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch();
                toast.success(`Successfully made an admin`);
            }

        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {
                    role !== 'admin' ? <button onClick={makeAdmin} className="rounded-xl btn-xs">Make Admin</button> : 'This person is an admin' 
                }
            </td>
            <td>
                <button className="rounded-xl btn-xs">Remove User</button>
            </td>
        </tr>
    );
};

export default UserRow;