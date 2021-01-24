import tags from "../data";
import { Emoji, Name, GoToGithub, TagWrapper } from "../styles";

import tags from "../tags";

const InstructorTag = (props) => {
  return (
    <TagWrapper>
      onClick=() => window.open{props.tag.link};<Emoji>{props.tag.emoji}</Emoji>
      <Name>{props.tag.name}</Name>
      <GoToGithub>Go to GitHub</GoToGithub>
    </TagWrapper>
  );
};

export default InstructorTag;
