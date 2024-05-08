import ProductCard from "./ProductCard.jsx";

const ProductsList = ({data}) =>{
    return (
        <>
            {
                data?.map((item, index) => (
                    // eslint-disable-next-line react/jsx-key
                        <ProductCard item={item} key={index}/>
                ))
            }
        </>
    )
};

export default ProductsList;