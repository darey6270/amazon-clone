import Image from "next/image";
import logo from "../public/images/amazon_logo.png"
import {SearchIcon, MenuIcon, ShoppingCartIcon} from "@heroicons/react/outline";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {selectItems} from "../slices/basketSlice";

const Header = () => {
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <header>
            <div className={"bg-amazon_blue p-1 py-2 flex items-center flex-grow"}>
                <div className={"mt-2 flex flex-grow items-center sm:flex-grow-0 cursor-pointer"}>
                    <Image onClick={() => router.push("/")} alt={""} src={logo} width={150} height={40} objectFit={"contain"} />
                </div>

                <div className={"hidden sm:flex items-center h-10 rounded-md flex-grow" +
                " bg-yellow-400 cursor-pointer hover:bg-yellow-500"}>
                    <input className={"h-full p-2 w-6 flex-grow focus:outline-none rounded-l-md "} type= "text"/>
                    <SearchIcon className={"h-12 p-4 "} />
                </div>

                <div className={"text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap"}>
                    <div className={"link"}>
                        <p>Hello Sikal</p>
                        <p className={"font-extrabold md:text-sm"}>Account & lists</p>
                    </div>

                    <div className={"link"}>
                        <p>Returns</p>
                        <p className={"font-extrabold md:text-sm"}>& Orders</p>
                    </div>

                    <div onClick={() => router.push("/checkout")} className={"link flex items-center relative"}>
                        <span className={"absolute top-0 right-0 md:right-10" +
                        " h-4 w-4 text-center text-black font-bold rounded-full bg-yellow-400"}>{items.length}</span>
                        <ShoppingCartIcon className={"h-10"}/>
                        <p className={"font-extrabold hidden md:inline mt-2 md:text-sm"}>Basket</p>
                    </div>
                </div>

            </div>

            <div className={"pl-6 flex items-center space-x-3 bg-amazon_blue-light text-white"}>
                <p className={"link flex items-center"}><MenuIcon className={"h-6 mr-1"} /> All</p>
                <p className={"link"}>Prime Video</p>
                <p>Amazon Business</p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>Today's deals</p>
                <p className={"link hidden lg:inline"}>Electronics</p>
                <p className={"link hidden lg:inline"}>Food & Grocery</p>
                <p className={"link hidden lg:inline"}>Prime</p>
                <p className={"link hidden lg:inline"}>Buy Again</p>
                <p className={"link hidden lg:inline"}>Shopper Toolkit</p>
                <p className={"link hidden lg:inline"}>Health & Personal Care</p>
            </div>
        </header>
    );
};

export default Header;