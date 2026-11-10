import Link from "next/link";

const BreadCumb = ({Title,bgimg}: { Title: string; bgimg: string }) => {
    return (
        <section className="page-hero bg_cover p-r z-1" style={{ backgroundImage: `url(${bgimg})`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="page-content text-center">
                            <h1>{Title}</h1>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li>{Title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    );
};

export default BreadCumb;