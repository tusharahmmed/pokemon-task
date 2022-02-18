import React from 'react';
import { useForm } from 'react-hook-form';

const Header = ({ setSerchName }) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        setSerchName(data)
        reset()
    };



    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-col p-5 flex-col items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                    <span className="ml-3 text-4xl font-bold">Pokemon</span>
                </a>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-4 flex'>
                    <input {...register('pokemonName', { required: true })} placeholder="Search" class="w-full h-12 px-4 text-md text-gray-700 bg-white border border-gray-300 rounded-l-lg lg:w-50 xl:transition-all xl:duration-300 xl:w-36 xl:focus:w-44 lg:h-10 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40" />
                    <button type='submit' class="flex items-center justify-center h-12 px-4 text-sm font-semibold text-center text-white rounded-r-md lg:h-10 bg-teal-300">
                        Search</button>
                </form>

            </div>
        </header>
    );
};

export default Header;