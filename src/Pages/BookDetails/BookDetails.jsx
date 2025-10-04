import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDb } from '../../Utilities/addToDb';

const BookDetails = () => {

    const {id} = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData()
    const singleBook = data.find(book => book.bookId == bookId)
    const {bookName, image, author, publisher, totalPages, category, rating} = singleBook


    const handleMarkAsRead = id => {
        addToStoredDb(id)
    }




    return (
        <div className="card bg-white text-black w-96 shadow-sm">
          <figure className='bg-[#f5f5f5] p-5 m-4'>
            <img className='w-[125px] h-[166px]'
              src={image}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className='flex justify-center gap-5'>
        
            {/* {
                tags.map((tag, index) => <button key={index}>{tag}</button>)
            } */}
            </div>
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">{author}</div>
        
        
            </h2>
            <p>Book By: {publisher}</p>
        
                <div className='border-t-1 border-dashed'>
        
                </div>
        
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{totalPages}</div>
              <div className="badge badge-outline">{category}</div>
              <div className="badge badge-outline">{rating} </div>
            </div>
          </div>
          <button onClick={() => handleMarkAsRead(id)} className='btn btn-accent m-2'>Mark As Read</button>
          <button className='btn btn-accent m-2'>Add To Wishlist</button>
        </div>
    );
};

export default BookDetails;