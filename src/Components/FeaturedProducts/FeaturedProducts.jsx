import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Discover our handpicked selection of premium products in the Featured section. 
        Here, we showcase the crème de la crème of our inventory, carefully curated to 
        bring you the latest and most sought-after items. From luxurious timepieces that 
        exude timeless elegance to durable sports gear that empowers your adventures, 
        our collection showcases the best of the best. Whether you're looking for a statement 
        piece to elevate your style or a high-performance tool to enhance your daily routine, 
        this section is the gateway to extraordinary products that are sure to impress.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;