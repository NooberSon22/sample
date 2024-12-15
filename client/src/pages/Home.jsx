import PermissionLayer from "./PermissionLayer";

const Home = () => {
  return (
    <PermissionLayer permission={"can edit"}>
      <h1>Can Edit</h1>
      <h1>Can Edit</h1>
      <h1>Can Edit</h1>
      <h1>Can Edit</h1>
    </PermissionLayer>
  );
};

export default Home;
