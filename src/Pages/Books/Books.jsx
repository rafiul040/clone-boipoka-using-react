import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    const [allBooks, setAllBooks] = useState([]);


    // useEffect(() => {
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // })






    return (
        <div className='text-black grid justify-center'>
            <h1 className='text-3xl font-semibold text-center p-6'>
                Books
            </h1>


            <Suspense fallback={<span>Loading......</span>}>
            <div className='grid gap-4 justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
            </div>
            </Suspense>



        

        </div>
    );
};

export default Books;