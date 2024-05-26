import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu and close icons from react-icons/fa

export default function ToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 p-4">
      <button onClick={toggleMenu} className="text-white px-1 py-2 bg-yellow-600 flex items-center">
       
        {isOpen ? <FaTimes className="mr-2" /> : <FaBars className="mr-2" />}
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>
      {isOpen && (
        <div className="bg-yellow-600 p-4 mt-2 rounded">
          <ul>
            <li className="text-white">Menu Item 1</li>
            <li className="text-white">Menu Item 2</li>
            <li className="text-white">Menu Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}
