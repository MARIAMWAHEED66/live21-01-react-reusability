import { Emoji, Name, GoToGithub, TagWrapper } from "../styles";

const InstructorTag = (props) => {
  return (
    <TagWrapper>
      <Emoji>{props.emoji}</Emoji>
      <Name>{props.name}</Name>

      <GoToGithub onClick={() => window.open(`${props.github}`)}>
        Go to GitHub
      </GoToGithub>
    </TagWrapper>
  );
};

export default InstructorTag;
