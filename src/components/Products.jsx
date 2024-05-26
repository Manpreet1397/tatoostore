import React from 'react'
import DisplayCard from "./DisplayCard";

const Products = () => {
    return (
        <div>

            <div className="mx-auto bg-black text-white flex flex-col justify-center gap-16 lg:gap-40 pt-40 pb-24 px-12 md:px-32 text-center md:text-left">
                <div className="flex flex-col gap-8 py-8">
                    <div className="text-left">


                        <div className="flex justify-center">
                            <div className="flex justify-end">
                                <h1 className="text-5xl  font-bold text-center ">OUR PRODUCTS</h1>
                            </div>

                        </div>
                    </div>


                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <DisplayCard image="ink.png" title="" details=" " />
                    <DisplayCard image="hush.png" title="" details="" />
                    <DisplayCard image="machine.png" title="" details="" />
                    <DisplayCard image="fade.png" title="" details="" />
                </div>
                <div>
                    <div className='px-4 py-2 bg-yellow-600 drop-shadow-2xl text-white'>
                        <button className='w-full p-2 text-sm' type="submit">+ MAKE AN APPOINMENT</button>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Products
