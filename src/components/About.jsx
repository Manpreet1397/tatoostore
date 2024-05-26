import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col  bg-black text-white md:flex-row justify-between px-20 py-20 gap-12">
            {/* Images Div */}
            <div className="flex flex-row  flex-wrap justify-center md:justify-end ">
                <img src="about1.png" alt="image" className="w-full md:w-1/2 max-w-sm lg:max-w-full" />
                <img src="about2.png" alt="image" className="w-full md:w-1/2 max-w-sm lg:max-w-full" />
            </div>

            
                <div className="flex flex-col gap-6 w-full lg:w-2/3">
                    <h1 className="text-3xl font-bold">About Us</h1>
                    {/* Add your testimonials here */}
                    <p>Our tatoo saloon is house to many talanted taoo artists and is a place where your body is turned into a living canvas.</p>
                    <p className="text-slate-400">To get your body inked in our saloon, contact us soon and book your appoinment.You can contact us forn website or phone .We welcome you always in our saloon</p>
                </div>
            
        </div >
    );
};

export default About;
