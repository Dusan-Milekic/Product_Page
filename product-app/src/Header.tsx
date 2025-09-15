import ico_menu from "./assets/icon-menu.svg";
import cart from "./assets/icon-cart.svg";
import avatar from "./assets/image-avatar.png";
import sneakers from "./assets/sneakers 2.svg";
import close from "./assets/icon-close.svg";
import "./Header.css";
import { useRef } from "react";

export default function Header() {
  const menu = useRef<HTMLDivElement>(null);
  const navigation = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLImageElement>(null);
  function Handler() {
    if (menu.current && navigation.current) {
      menu.current.classList.add("animation");
      navigation.current.classList.remove("hidden");
      console.log(navigation.current);
    }
  }
  function CloseNav() {
    if (closeRef.current && navigation.current) {
      navigation.current.classList.add("hidden");
    }
  }

  return (
    <>
      <div
        ref={navigation}
        className="hidden absolute top-0 z-10 w-60 bg-amber-900 h-full bg-white border-r border-black px-5 py-4 animate-fade-right"
        id="navigation"
      >
        <div onClick={CloseNav} className="mb-7 mt-3">
          <img
            src={close}
            alt="close"
            ref={closeRef}
            className="cursor-pointer"
          />
        </div>
        <ul className="flex flex-col gap-3.5 nav-list">
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
      </div>
      <div className="header flex justify-between max-h-10  px-8">
        <div className="left-side flex gap-8 ">
          <div
            id="menu"
            className="img-holder flex items-center"
            ref={menu}
            onClick={Handler}
          >
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
