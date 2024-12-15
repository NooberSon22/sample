import Component2 from "./Component2";
const Component1 = ({ aboutId }) => {
  return (
    <>
      <div>{aboutId}</div>
      <Component2 />
    </>
  );
};

export default Component1;
