import Home from "../components/Home";
import Title from "../components/Title";

export default function HomePage({products}) {
    return (
        <div>
            <Title title={"Amazon"} />
            <Home products={products} />
        </div>
    )
}

export const getServerSideProps = async () => {
    const productsRes = await fetch("https://fakestoreapi.com/products");
    const products = await productsRes.json();


    return {
        props: {products}
    }
}
