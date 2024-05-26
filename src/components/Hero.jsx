import DisplayCard from "./DisplayCard";
import { FaDotCircle } from "react-icons/fa";
import ToggleMenu from "./ToggleMenu";

export default function Hero() {
    return (
        <div className="relative mx-auto bg-black text-white flex flex-col justify-center gap-16 lg:gap-40 pt-40 pb-24 px-12 md:px-32 text-center md:text-left"  style={
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
            {/* Toggle Menu */}
            <div className="absolute top-0 left-0 p-4">
        <ToggleMenu/>
            </div>
            {/* Button on the top right corner */}
            <div className="absolute top-0 right-0 p-4 sm:p-1">
                <button className="px-4 py-2 bg-yellow-600 text-white">MAKE AN APPOINTMENT</button>
            </div>
            {/* Rest of your content */}
            <div className="flex flex-col gap-8 py-8">
                <div className="text-left">
                    <p className="flex gap-4 justify-center items-center pb-4 uppercase">A Hair Salon For Men</p>
                    <div className="flex justify-center">
                        <div className="flex justify-end">
                            <h1 className="text-6xl  font-bold text-center ">TATTOO <br /> SALOON</h1>
                        </div>
                        <div className="hidden md:flex justify-start">
                          
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="w-[80%] lg:w-[60%] xl:w-[40%] text-center">
                        GALLERY * STORE * AND MORE
                    </p>
                </div>
                <div className="flex gap-4 justify-center">
                    <a href="#" className="px-4 py-2 rounded-full text-yellow-600">SCROLL</a>
                </div>
            </div>
     
            <div>
                
            </div>
        </div>
    )
}
