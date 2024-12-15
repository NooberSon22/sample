import { Outlet, useNavigate } from "react-router-dom";
const navigation = [
  {
    label: "Home",
    path: "/home",
  },
  {
    label: "Settings",
    path: "/settings",
  },
  {
    label: "About",
    path: "/about/12",
  },
];

const App = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  // students?studentId

  return (
    <div className="min-h-screen flex">
      <div className="min-w-[200px] border border-black grid">
        {navigation.map((nav, i) => {
          return (
            <button key={i} onClick={() => handleClick(nav.path)}>
              {nav.label}
            </button>
          );
        })}
      </div>

      <Outlet className="flex-1"></Outlet>
    </div>
  );
};

export default App;
