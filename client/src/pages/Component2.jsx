import SampleStore from "../state/sample";
const Component2 = () => {
  const store = SampleStore();
  return <div>{store.aboutId}</div>;
};

export default Component2;
