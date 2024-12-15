import { useParams } from "react-router-dom";
import Component1 from "./Component1.jsx";
import SampleStore from "../state/sample.js";

const About = () => {
  // aboutId
  const { aboutId } = useParams();
  const store = SampleStore();
  store.updateAboutId(aboutId);

  return (
    <div>
      <div>This is aboutId: {aboutId}</div>
      <Component1 aboutId={aboutId} />
    </div>
  );
};

export default About;
