import ico_menu from "./assets/icon-menu.svg";
import cart from "./assets/icon-cart.svg";
import avatar from "./assets/image-avatar.png";
import sneakers from "./assets/sneakers 2.svg";
import "./Header.css";
export default function Header() {
  return (
    <>
      <div className="header flex justify-between max-h-10  px-8">
        <div className="left-side flex gap-8">
          <div id="menu" className="img-holder flex items-center">
            <img src={ico_menu} alt="icon_menu" />
          </div>

          <div className="img-holder flex items-center">
            <img src={sneakers} alt="sneakers" />
          </div>
        </div>

        <ul>
          <li>
            <a href="#" className="text-black">
              Collections
            </a>
          </li>
          <li>
            <a href="#" className="text-black">
              Man
            </a>
          </li>
          <li>
            <a href="#" className="text-black">
              Woman
            </a>
          </li>
          <li>
            <a href="#" className="text-black">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-black">
              Contact
            </a>
          </li>
        </ul>

        <div className="right-side flex flex-row justify-between items-center gap-6">
          <div className="cart image-holder  justify-center">
            <img src={cart} alt="icon_cart" />
          </div>
          <div id="avatar" className="image-holder">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
      <div className=" px-8 pt-1.5">
        <hr className="w-full h-0.5 bg-amber-950" />
      </div>
    </>
  );
}
