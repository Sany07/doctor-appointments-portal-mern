import React from 'react';
import PrimaryButton from '../../Components/PrimaryButton';

const Banner = () => {
    return (
      // min-h-screen 
<div className="hero my-24">
  <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" alt=''/>
        <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
      <PrimaryButton name ={'Get Start'}/>
    </div>

  </div>
</div>


    );
};

export default Banner;