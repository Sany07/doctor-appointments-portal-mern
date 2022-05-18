import React from 'react';

const Service = () => {
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="{service?.img}" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Fluoride Treatment</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="{service?.img}" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Fluoride Treatment</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="{service?.img}" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Fluoride Treatment</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Service;