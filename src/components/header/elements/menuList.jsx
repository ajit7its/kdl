import Link from "next/link";
import { FaPlus, FaAngleDoubleRight } from "react-icons/fa";
const MenuList = ({ addListing }) => {
  return (
    <ul>
      <li className="menu-icon">
        <Link href="/">
          Home 
        </Link>
        
      </li>
      <li className="menu-icon">
        <Link href="/about">
          About 
        </Link>
      </li>
     
      <li className="menu-icon">
        <Link href="#">
          Services <FaPlus />
          </Link>
          <ul className="sub-menu ">
          <li>
            <Link href="/infra-developers">Infra Developers</Link>
          </li>
          <li>
            <Link href="/land-developers">Land Developers</Link>
          </li>
          <li>
            <Link href="/constructions">Constructions</Link>
          </li>
           <li>
            <Link href="/earth-movers">Earth Movers</Link>
          </li>
          <li>
            <Link href="/interior-designing">Interior Designing</Link>
          </li>
          </ul>
       
      </li>
      <li className="menu-icon">
        <Link href="#">
          Projects <FaPlus />
          </Link>
          <ul className="sub-menu ">
          <li>
            <Link href="/">On Going</Link>
          </li>
          <li>
            <Link href="/">Completed</Link>
          </li>
          </ul>
       
      </li>
      <li className="menu-icon">
        <Link href="/portfolio">
          Gallery 
        </Link>
      </li>
       <li className="menu-icon">
        <Link href="#">
          Investors 
        </Link>
      </li>
      

      {addListing ? (
        <li className="special-link">
          <Link href="/add-listing">Add Listing</Link>
        </li>
      ) : null}
    </ul>
  );
};

export default MenuList;
