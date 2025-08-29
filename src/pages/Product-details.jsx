import React from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../data/product-data";
import Benefit from "../components/Benefit";
import Review from "../components/Review";
import DecorDetails from "../components/DecorDetails";
import InnerBanner from "../components/InnerBanner";



function ProductDetailsPage() {
    const { slug } = useParams();
    const product = allProducts.find(findproduct => findproduct.slug === slug);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        
        <>
            <InnerBanner
                bannerTitle="Product Details"
                pageName="Shop"
                productName={`/ ${product.prodTitle}`}
            />

            <DecorDetails product={product}  />

            <Benefit />

            <Review 
                innerPageClass=" inner_page"
            />

        </>
    );
}

export default ProductDetailsPage;