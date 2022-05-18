import React, { memo } from 'react';
import PrimaryButton from '../../Components/PrimaryButton';

const DoctorSologan = memo(() => {
    return (
        <div className="hero bg-slate-700 py-28 max-w-7xl mx-auto px-12 ">
        <div className="hero-content flex-col md:ml-28  md:flex-row justify-center items-center">
            <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" alt=''/>
            <div className='md:mx-20 flex-wrap'>
            <p className='text-primary'>Appointment</p>
            <h1 className="text-5xl  font-bold text-white">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <PrimaryButton name ={'Get Start'}/>
            </div>
        </div>
        </div>

    );
});

export default DoctorSologan;