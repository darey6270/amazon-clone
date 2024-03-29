import Image from "next/image";
import {useState} from "react";
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import {useDispatch} from "react-redux";
import {addToBasket} from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({product}) => {
    const {title, description, price, category, image} = product;
    const randomNumber = Math.floor(Math.random() * (MAX_RATING -MIN_RATING + 1)) + MIN_RATING;
    const [rating] = useState(randomNumber);
    const [hasPrime] = useState(Math.random() < 0.5);
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket({...product, hasPrime, rating}));
    }


    return (
        <div className={"flex flex-col relative bg-white p-10 m-5 z-30"}>
            <p className={"absolute top-2 right-2 text-xs italic text-gray-400"}>{category}</p>
            <Image src={image} alt={""} height={200} width={200} objectFit={"contain"} />
            <h4 className={"my-3"}>{title}</h4>

            <div className={"flex"}>
                {Array(rating).fill().map((_, i) => {
                    return <StarIcon className={"h-5 text-yellow-500"} key={i} />
                })}
            </div>

            <p className={"text-xs my-2 line-clamp-2 "}>{description}</p>

            <div className={"mb-5"}>
                <Currency quantity={price} currency={"GBP"} />
            </div>

            {hasPrime && <div className={"flex items-center space-x-2 -mt-5 "}>
                <img className={"w-12"} src={"https://links.papareact.com/fdw"} alt=""/>
                <p className={"text-gray-500 text-xs"}>FREE Next-day Delivery</p>
            </div>}

            <button onClick={addItemToBasket} className={"mt-auto button font-semibold"}>Add to Basket</button>

        </div>
    );
};

export default Product;