import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../Utilitis/addToDb';
import { addToWishlist } from '../../Utilitis/addToWishlist';

const BookDitails = () => {
    const { id } = useParams()
    // console.log(id);
    const praId = parseInt(id)
    // console.log(typeof(praId));
    const bookData = useLoaderData();
    const bookArray = Object.values(bookData);
    // console.log(bookData);
    const singleBook = bookArray.find(book => book.bookId === praId);
    // console.log(singleBook);

    const handleMarkRead =(id)=>{

       addToStoreDB(id);
        

    }

    const handleAddToWishList =(id)=>{

       addToWishlist(id);
        

    }




    return (
        <div className='my-10 md:flex justify-between'>
            <div className='md:w-[45%] bg-gray-100 rounded-3xl py-10 flex justify-center items-center'>
                <img className='w-72 h-100 mx-auto' src={singleBook.image} alt="book" />
            </div>
            <div className='md:w-6/12 p-2'>
                <h2 className='text-3xl'>{singleBook.bookName}</h2>
                <p className='border-b-1 text-xl border-gray-300 py-1'>By: {singleBook.author}</p>
                <h4 className='border-b-1 border-gray-300 py-2'>{singleBook.category}</h4>
                <p className='text-gray-600 my-3'><span className='font-extrabold text-black'>Review: </span>{singleBook.review}</p>
                <p className='border-b-1 border-gray-300 pb-3'><span className='font-extrabold text-black'>Tag   </span>
                    <div className="badge badge-outline border-none bg-gray-100 rounded-2xl text-green-500 mx-2">{singleBook.tags[0]}</div>
                    <div className="badge badge-outline border-none  bg-gray-100 rounded-2xl text-green-500">{singleBook.tags[1]}</div>
                </p>



                <div className='flex gap-10 my-3'>
                    <div>
                        <p>Number of pages:</p>
                        <p>Publishar:</p>
                        <p>Year of publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className='font-bold'>
                        <p>{singleBook.totalPages}</p>
                        <p>{singleBook.publisher}</p>
                        <p>{singleBook.yearOfPublishing}</p>
                        <p>{singleBook.rating}</p>
                    </div>
                </div>
                <button onClick={()=> handleMarkRead(id)} className="btn btn-info m-3">Mark As Read</button>
                <button onClick={()=> handleAddToWishList(id)} className="btn btn-success m-3">Add To WishList</button>

            </div>
        </div>
    );
};

export default BookDitails;