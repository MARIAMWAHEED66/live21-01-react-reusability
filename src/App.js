import "./App.css";
import { AppWrapper } from "./styles";
import InstructorTag from "./components/InstructorTag";
import tags from "./tags";

const App = () => {
  const tagList = tags.map((tag) => <InstructorTag {...tag} key={tag.id} />);

  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      {tagList}
    </AppWrapper>
  );
};

export default App;
