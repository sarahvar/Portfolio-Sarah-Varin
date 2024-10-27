import Navigation from "../components/Navigation";
import Experiences from "../components/competences/Experiences";
import Hobbies from "../components/competences/Hobbies";
import Languages from "../components/competences/Languages";
import OtherSkills from "../components/competences/OtherSkills";

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
