import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [allBooks, setAllBooks] = useState([]);


    // useEffect(() => {
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // })






    return (
        <div className='text-black'>
            <h1 className='text-3xl font-semibold text-center p-6'>
                Books
            </h1>



        

        </div>
    );
};

export default Books;