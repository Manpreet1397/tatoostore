export default function Intro() {
    return (
        <div className="mx-auto bg-black text-white flex flex-col gap-4 text-center ">

           

            <div className="flex flex-col gap-4  md:flex-col  justify-center"  style={
            {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url('homebg.avif')`,
                backgroundImage: 'url(homebg.avif)',
                backgroundSize: 'cover', // Adjust as needed
                backgroundRepeat: 'no-repeat', // Adjust as needed
                width: '100%',
                height: '100vh',
                backgroundPosition: 'right-10px',
            }
        }>
                <div> <h1 className="text-3xl font-bold text-center justify-center">TESTIMONIALS</h1></div>
                <div className=" w-full lg:w-1/2 flex flex-col gap-6">
                    <div className="w-full lg:w-2/3 flex flex-col gap-2">
                        <h1 className="text-3xl font-bold justify-center"></h1>
                    </div>

                </div>


                <div className=" w-full flex lg:justify-center ">
                    <div className="w-full gap-4" >

                        <p>Wonderful friendly staff super clean saloon,welcoming enviornment!Thankyou so much for friendly tatoos!</p>
                        <p className="font-bold">MANPREET SINGH</p>
                    </div>
                </div>
            </div>
        </div>
    )
}