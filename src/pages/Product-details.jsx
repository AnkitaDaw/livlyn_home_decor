import Benefit from "../components/Benefit";
import Review from "../components/Review";
import DecorDetails from "../components/DecorDetails";
import InnerBanner from "../components/InnerBanner";

function ProductDetailsPage() {
    return (
        <>
            <InnerBanner
                bannerTitle="Product Details"
                pageName="Shop"
                productName="/ prod name"
            />

            <DecorDetails />

            <Benefit />

            <Review 
                innerPageClass=" inner_page"
            />

        </>
    );
}

export default ProductDetailsPage;