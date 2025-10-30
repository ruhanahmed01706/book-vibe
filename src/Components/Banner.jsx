import React from 'react';
import bookimage from '../assets/pngwing 1.png'
const Banner = () => {
    return (
        <div className='flex items-center justify-around bg-gray-100 rounded-3xl my-10 p-5  '>
            
            <div>
                <h1 className='lg:text-4xl text-2xl font-bold mb-5'>Books to <br />freshen up <br />your <br />bookshelf</h1>
                <button className="btn btn-active btn-success text-sm lg:text-2xl text-white">View The List</button>
            </div>

            <div className='mb-5'><img className='lg:w-72 lg:h-84 w-44' src={bookimage} alt="" /></div>
            
        </div>
    );
};

export default Banner;