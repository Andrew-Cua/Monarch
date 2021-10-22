import { FaLaptop } from 'react-icons/fa';
import { AiFillPrinter } from 'react-icons/ai';
import { HiCubeTransparent } from 'react-icons/hi';

const Sidebar = () => {
    return (
        <div className="relative mt-3  p-1 ml-2 left-2 h- w-16 flex flex-col bg-primary
                        text-white shadow-lg rounded-xl">
            <SidebarIcon icon={ <FaLaptop size="28"/>} text="dash" />
            <SidebarIcon icon={ <AiFillPrinter size="28"  />} text="printers" />
            <SidebarIcon icon={ <HiCubeTransparent size="28" />} text="printables" />
        </div>
    );
}


const SidebarIcon = ({icon, text = 'tooltip' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100"> {text} </span>
    </div>
);

export default Sidebar; 