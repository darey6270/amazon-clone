import {useRouter} from "next/router";

const Footer = () => {
    const router = useRouter();

    return (
        <>
            <h3 onClick={() => router.push("/")} className={"bg-amazon_blue-light cursor-pointer text-white text-center p-3"}>Back to Top</h3>
            <section className={"bg-amazon_blue text-white grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
                <div className={"p-10 m-10"}>
                    <h4 className={"font-semibold mb-2"}>Get to know us</h4>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>About Amazon</p>
                    <p>Investor Relations</p>
                    <p>Amazon Devices</p>
                    <p>Amazon Tours</p>
                </div>

                <div className={"p-10 m-10"}>
                    <h4 className={"font-semibold mb-2"}>Make Money With Us</h4>
                    <p>Sell products on amazon</p>
                    <p>Sell on amazon business</p>
                    <p>Sell books on amazon</p>
                    <p>Advertise your products</p>
                    <p>Become an affiliate</p>
                    <p>Host an amazon hub</p>
                </div>

                <div className={"p-10 m-10"}>
                    <h4 className={"font-semibold mb-2"}>Amazon Payment Products</h4>
                    <p>Amazon business cards</p>
                    <p>Shop with points</p>
                    <p>Reload your balance</p>
                    <p>Amazon currency converter</p>
                </div>

                <div className={"p-10 m-10"}>
                    <h4 className={"font-semibold mb-2"}>Let Us Help You</h4>
                    <p>Amazon and Covid19</p>
                    <p>Your accounts</p>
                    <p>Your orders</p>
                    <p>Shipping rates and policies</p>
                    <p>Returns and replacements</p>
                    <p>Amazon assistant</p>
                    <p>Help</p>
                </div>
            </section>
        </>

    );
};

export default Footer;