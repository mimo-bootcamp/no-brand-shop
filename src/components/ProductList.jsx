const ProductList = ({products, count, setCount}) => {
  return (
    <div className="products-list App">
      {products.map((product) => (
        <ProductCard
          product={product}
          setCount={setCount}
          count={count}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;