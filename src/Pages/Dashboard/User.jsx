import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading/Loading';
import UserRow from './UserRow';
const User = ({date}) => {
    const { isLoading, error,refetch, data:users } = useQuery('users', () =>
    fetch(`http://localhost:5000/users`,{
        method:'GET',
        headers:{
            'authorization': `user ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>
      res.json()))
    if (isLoading){
        return <Loading/>
    }
 
    if (error){ 
        return <h3 className='text-red-700 font-bold'>An error has occurred: {error.message}</h3>
    }
    return (
        <div className='allUsers'>
           <h2 className="text-2xl">All Users: {users?.length}</h2>
           <div className="overflow-x-auto my-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Admins</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             users?.map((user,index) =><UserRow
                             key={user._id}
                             user={user}
                             index={index}
                             refetch={refetch}
                             />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;