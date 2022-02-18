import React from 'react';

const CardItem = ({ data }) => {

    const {abilities,name,height,weight,types,sprites} = data;

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-10 mx-auto">
                <div className="lg:w-3/5 mx-auto flex flex-wrap">
                    <img className="bg-slate-200 lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={sprites?.back_default} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 capitalize">{name}</h1>
                        <div className='bg-sky-500 rounded-md grid grid-cols-2 gap-4 p-4 px-6 text-left my-3'>
                            <div>
                                <h3 className='text-white font-medium'>Height</h3>
                                <p className='text-black text-xl'>{height}</p>
                            </div>
                            <div>
                                <h3 className='text-white font-medium'>Type</h3>
                                {
                                  types &&  types.map(item => {
                                       return <p className='text-black text-xl capitalize'>{item?.type?.name}</p>
                                    })
                                }
                            </div>
                            <div>
                                <h3 className='text-white font-medium'>Weight</h3>
                                <p className='text-black text-xl'>{weight}</p>
                            </div>
                            <div>
                                <h3 className='text-white font-medium'>Abilities</h3>
                                {
                                  abilities &&  abilities.map(item => {
                                       return <p className='text-black text-xl capitalize'>{item?.ability?.name}</p>
                                    })
                                }
                            </div>
                        </div>
                        
                            
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardItem;