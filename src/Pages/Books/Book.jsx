import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ book,wbook }) => {
    // console.log(book);

    return (
        <Link to={`/bookditails/${book.bookId}`}><div className="card bg-base-1006 shadow-sm p-4">
            <figure className='bg-gray-100 rounded-2xl p-5'>
                <img className='h-40 w-28'
                    src={book.image}
                    alt="Book" />
            </figure>
            <div className="grid gap-3">
                <div className="card-actions mt-2">
                    <div className="badge badge-outline border-none bg-gray-100 rounded-2xl text-green-500">{book.tags[0]}</div>
                    <div className="badge badge-outline border-none  bg-gray-100 rounded-2xl text-green-500">{book.tags[1]}</div>
                </div>
                <h2 className="card-title text-2xl">
                    {book.bookName}

                </h2>
                <p className='text-xl border-b border-dashed'>By: {book.author}</p>

                <div className='flex justify-between'>
                    <p className='text-xl'>{book.category}</p>
                    <p className='flex text-xl items-center gap-0.5'>{book.rating} <span className='text-sm'><FaStarHalfAlt /></span></p>
                </div>

            </div>
        </div></Link>
    );
};

export default Book;