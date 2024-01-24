import Navigation from "../components/Navigation.jsx";
import Experiences from "../components/competences/Experiences.jsx";
import Hobbies from "../components/competences/Hobbies.jsx";
import Languages from "../components/competences/Languages.jsx";
import OtherSkills from "../components/competences/OtherSkills.jsx";

export default function Competences() {
  return (
      <div className="competences">
      <Navigation />
      <div className="competencesContent">
        <Languages/>
        <Experiences/>
        <OtherSkills/>
        <Hobbies/>
        </div>
        </div>
  );
}
