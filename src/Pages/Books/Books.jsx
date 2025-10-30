import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = ({ allBook }) => {
    // console.log(allBook);

    // const [allBook,setAllBook] = useState([]);
    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res => res.json())
    //     .then(data => setAllBook(data))
    // },[])
    // console.log(allBook);

    return (
        <div>
            <h1 className='text-3xl font-bold text-center m-4'>All Books</h1>
            <div className='grid gap-10 m-4 md:grid-cols-2  lg:grid-cols-3 '>
                {
                    allBook.map((book) => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;