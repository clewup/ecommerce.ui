import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";
import React from "react";

interface IProps {
  children: JSX.Element;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
