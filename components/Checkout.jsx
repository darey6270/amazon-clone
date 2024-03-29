import Header from "./Header";
import Title from "./Title";
import Image from "next/image";
import ads from "../public/images/ads.png";
import {useSelector} from "react-redux";
import {selectItems, selectTotal} from "../slices/basketSlice";
import CheckoutProduct from "./CheckoutProduct";
import Currency from "react-currency-formatter";

const Checkout = () => {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);

    return (
        <>
            <Title title={"Checkout"}/>

            <div className={"bg-gray-100"}>
                <Header />
                <main className={"lg:flex max-w-screen-xl mx-auto"}>
                    <div className={"flex-grow m-5 shadow-sm"}>
                        <Image src={ads} alt={""} width={1020} height={250} objectFit={"contain"} />

                        <div className={"border flex flex-col p-5 bg-white space-y-10"}>
                            <h1 className={"text-2xl pb-4 border-b"}>{!items.length ? "Your Amazon basket is empty" : "Shopping Basket"}</h1>
                            
                            {items.map((item, index) => <CheckoutProduct item={item} key={index}/>)}
                        </div>
                    </div>

                    <div className={"flex flex-col bg-white p-10 shadow-md"}>
                        {items.length > 0 && <div>
                            <h2 className={"whitespace-nowrap"}>
                                Subtotal({items.length} items):{" "}
                                <span className="font-bold"><Currency quantity={total} currency={"GBP"} /></span>
                            </h2>

                            <button className={"button mt-2"}>Proceed to checkout</button>

                        </div>}

                    </div>
                </main>
            </div>
        </>
    );
};

export default Checkout;