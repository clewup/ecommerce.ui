import "./wrapper.scss";

interface IProps {
  children: any;
  id: string;
}

const Wrapper: React.FC<IProps> = ({ children, id }) => {
  return (
    <div id={"wrapper"}>
      <div id={id}>{children}</div>
    </div>
  );
};
export default Wrapper;
