import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram, faBehance, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';
export default function Footer2() {
    return (
        <div className="mx-auto bg-neutral-950 border-t text-gray-400 flex justify-center flex-col md:flex-row py-6 px-12 md:px-32 text-center md:text-left">
            <div className="flex justify-center md:flex-row sm:flex-col">
    <span className="text-slate-700 mr-2 sm:mr-0 sm:mb-2">Copyright@2024. All RIGHTS RESERVED</span>
    <span className="text-white mr-2 sm:mr-0 sm:mb-2">Terms of use</span>
    <span className="text-slate-700 mr-2 sm:mr-0 sm:mb-2">and</span>
    <span className="text-white mr-2 sm:mr-0 sm:mb-2">Privacy Policy</span>
</div>
<div className="flex gap-6 justify-center">
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a> | <a href="#"><FontAwesomeIcon icon={faBehance} /></a> | <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a> | <a href="#"><FontAwesomeIcon icon={faDribbble} /></a>
                        </div>
        </div>
    )
}