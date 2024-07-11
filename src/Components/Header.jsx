import React from "react";
import LogoIcon from "../Assets/Logo.png"


function Header() {

    return (
        <header className="flex justify-between items-center px-10 mt-4 ">

            <div class="flex gap-3 items-center text-3xl font-bold">
                <img className="w-11 h-11" src={LogoIcon} alt="" />
                Weather<span class="text-blue-500">Checker.</span>
            </div>
            
        </header>
    );
}

export default Header;

