import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingDoctor, refetch, setDeletingDoctor}) => {
    const {name, email} = deletingDoctor;
    const handleDeletingDoctor = ()=>{
        const url =`http://localhost:5000/doctors/${email}`;
        fetch(url,{
            method:'DELETE',
            headers:{
                'authorization': `user ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                toast.success(`Deleted Doctor ${name}`); 
                refetch()
            }
            else{
                toast.error(`Failed to delete Doctor ${name}`);
            }
        })
    }
    return (
        <div>
        <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {name}!</h3>
                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div class="modal-action">
                    <button onClick={() => handleDeletingDoctor()} class="btn !bg-red-600 btn-xs !btn-error ">Delete</button>
                    <label htmlFor="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                </div>
            </div>
        </div>
    </div >
    );
};

export default DeleteConfirmModal;