// import React, { use } from 'react';
import { FaStarHalfAlt } from 'react-icons/fa'
import { Link } from 'react-router';



const Book = ({singleBook}) => {


    const {bookName, bookId, author, image, category, publisher, rating, totalPages, tags} = singleBook


    return (
       <Link to={`/bookDetails/${bookId}`}>
       
       <div className="card bg-white w-96 shadow-sm">
  <figure className='bg-[#f5f5f5] p-5 m-4'>
    <img className='w-[125px] h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-center gap-5'>

    {
        tags.map((tag, index) => <button key={index}>{tag}</button>)
    }
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
      <div className="badge badge-outline">{rating} <FaStarHalfAlt></FaStarHalfAlt></div>
    </div>
  </div>
</div>
       
       </Link>
    );
};

export default Book;