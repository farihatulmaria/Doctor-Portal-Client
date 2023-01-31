import React from 'react';

const SingleComment = ({comment}) => {
    const {name,desc,img,country}= comment;
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{desc}</p>
                <div className="flex items-center my-5">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className="px-5 content">
                        <h2 className="card-title">{name}</h2>
                        <h4 className='my-2'>{country}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleComment;