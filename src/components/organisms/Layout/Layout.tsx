import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";
import PromotionBanner from "../../molecules/PromotionBanner/PromotionBanner";
import ChatBot from "../../molecules/ChatBot/ChatBot";

interface IProps {
  children: JSX.Element;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <PromotionBanner />
      <div id={"ecommerce-page-root"}>{children}</div>
      <ChatBot />
      <Footer />
    </>
  );
};
export default Layout;
