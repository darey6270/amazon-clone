import Product from "./Product";

const ProductsFeed = ({products}) => {
    return (
        <div className={"grid grid-flow-row-dense md:grid-cols-2" +
        " lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto"}>
            {products.slice(0, 4).map((product, index) => <Product key={index} product={product} />)}

            <img src="https://links.papareact.com/dyz" className={"col-span-full"} alt=""/>

            <div className={"md:col-span-2"}>
                {products.slice(5, 6).map((product, index) => <Product key={index} product={product} />)}
            </div>

            {products.slice(5, products.length).map((product, index) => <Product key={index} product={product} />)}

        </div>
    );
};

export default ProductsFeed;