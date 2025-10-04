import React from 'react';
import bookImage from '../../assets/books.jpg'


const Banner = () => {
    return (
        <div className='text-black flex justify-around items-center p-16 w-full mx-auto'>
        <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, consequuntur.</h1>
            <button className='btn btn-primary'>Test Test</button>
        </div>


        <div>
                <img className='w-3/12' src={bookImage} alt="" />
        </div>
        </div>
    );
};

export default Banner;