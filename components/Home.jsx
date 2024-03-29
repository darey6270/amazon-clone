import Header from "./Header";
import Banner from "./Banner";
import ProductsFeed from "./ProductsFeed";
import Footer from "./Footer";

const Home = ({products}) => {
    return (
        <div className={"bg-gray-100 "}>
            <Header />

            <main className={"max-w-screen-xl mx-auto"}>
                <Banner />
            </main>

            <div className={"max-w-7xl mx-auto"}>
                <ProductsFeed products={products} />
            </div>

            <Footer />
        </div>
    );
};

export default Home;