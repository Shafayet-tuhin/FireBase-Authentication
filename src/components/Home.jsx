import React from 'react';
import dogImage from './dog.png'; // Import the image

const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
        <p className='text-2xl mt-4 px-3 py-2 bg-slate-800  rounded-xl text-gray-300'>Please Goto Register Panel</p>
        <br />
        <img className='w-80 h-64 md:w-[40rem] md:h-[30rem]' src={dogImage} alt="" /> {/* Use imported image */}

      </div>
    </div>
  );
};

export default Home;
