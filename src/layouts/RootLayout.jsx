const RootLayout = () => {
  return (
    <div className="header">
      <nav>
        <h1 className="logo">no-brand</h1>
        <Cart count={count} />
        <Link to="/">Home</Link>
        <Link to="about">About Us</Link>
        <Link to="product/1">go to product 1</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default RootLayout;