import React from 'react';
import PrimaryButton from '../../Components/PrimaryButton';

const Sologan = () => {
    return (
        <div className="hero ">
        <div className="hero-content flex-col md:ml-28  md:flex-row justify-center items-center">
            <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
            <div className='md:mx-20 flex-wrap'>
            <h1 className="text-5xl  font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <PrimaryButton name ={'Get Start'}/>
            </div>
        </div>
        </div>

    );
};

export default Sologan;