import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Utilitis/addToDb';
import Book from '../Books/Book';

const About = () => {
    const [readList,setReadList] = useState([])

    const data = useLoaderData();

    useEffect(()=>{
        const storeBookData = getStoreBook();
        const converteddata = storeBookData.map(id => parseInt(id))
        const myReadList = data.filter(book=> converteddata.includes(book.bookId));
        setReadList(myReadList);
        
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
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            readList.map((b)=> <Book key={b.bookId} book={b}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default About;