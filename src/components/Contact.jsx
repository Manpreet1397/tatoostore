import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faBehance, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';
import Form from "./Form";

export default function Contact() {
    return (
        <div id="contact" className="mx-auto bg-black text-white flex flex-col lg:flex-row justify-center gap-16 py-32 px-12 md:px-32 text-center md:text-left border-y-2 border-neutral-900"  style={
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
            <div className="w-full lg:w-1/2 md:order-2">
                <Form />
            </div>
            <div className="w-full lg:w-1/2 md:order-1 flex flex-col justify-center md:justify-start">
                <div className="flex flex-col gap-3 text-center md:text-left text-gray-400">
                    <a href="#" className="hover:text-gray-500">📧: INFO@YURSIE.COM</a>
                    <a href="#" className="hover:text-gray-500">📞: +91 1234567890</a>
                    <a href="#" className="hover:text-gray-500">📍: 227 Lorem Street, San Diago</a>
                    <a href="#" className="hover:text-gray-500">🕒: TUE-FRI 10</a>
                </div>
                <div className="flex justify-center md:justify-start">
                    <div className="rounded-full h-32 w-32">
                        {/* <img className="rounded-full object-cover" src="./profile.webp" alt="image" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
