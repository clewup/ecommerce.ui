import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";

interface IProps {
  children: JSX.Element;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
