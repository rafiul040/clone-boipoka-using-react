import React, { useEffect, useState } from 'react';

const Books = () => {

    const [allBooks, setAllBooks] = useState([]);


    useEffect(() => {
        fetch('booksData.json')
        // fetch(fetchingData)
        .then(res=> res.json())
        .then(data => {
            console.log(data)
        })
    }, [])

    return (
        <div className='text-black'>
            <h1>
                Hello I am Books
            </h1>
        </div>
    );
};

export default Books;