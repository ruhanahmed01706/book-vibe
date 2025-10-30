import React from 'react';
import Banner from '../../Components/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const allBook = useLoaderData();
    // console.log(allBook);
    
    return (
        <div>
            <Banner></Banner>
            <Books allBook={allBook}></Books>
        </div>
    );
};

export default Home;