import React from 'react'

const Work = () => {
    return (
        <div>
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
                    <div className='flex justify-center w-full'>
    <img src="work.png" alt="image" className="w-full h-auto max-w-full" />
</div>

<div>
    <div className='px-2 py-1 bg-yellow-600 drop-shadow-2xl text-white'>
        <button className='w-full p-1 text-xs' type="submit">+ VIEW ALL</button>
    </div>
</div>

                </div>
            </div>
        </div>
    )
}

export default Work
