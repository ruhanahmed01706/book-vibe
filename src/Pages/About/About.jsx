import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Utilitis/addToDb';
import Book from '../Books/Book';
import { getWishBook } from '../../Utilitis/addToWishlist';

const About = () => {
    const [readList,setReadList] = useState([])
    const[wishList,setWishList] =useState([])

    const data = useLoaderData();

    useEffect(()=>{
        const storeBookData = getStoreBook();
        const converteddata = storeBookData.map(id => parseInt(id))
        const myReadList = data.filter(book=> converteddata.includes(book.bookId));
        setReadList(myReadList);
        
    },[])

    useEffect(()=>{
        const getWishBookdata = getWishBook();
        const converteddata = getWishBookdata.map(id => parseInt(id))
        const myReadList = data.filter(book=> converteddata.includes(book.bookId));
        setWishList(myReadList);
        
    },[])
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>Wish Book List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Read Book: {readList.length}</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-3'>
                        {
                            readList.map((b)=> <Book key={b.bookId} book={b}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content {wishList.length}</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-3' >
                        {
                            wishList.map((b)=> <Book key={b.bookId} book={b}></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default About;