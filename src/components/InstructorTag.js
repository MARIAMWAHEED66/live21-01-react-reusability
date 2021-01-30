import { Emoji, Name, GoToGithub, TagWrapper } from "../styles";

import tags from "../data";

const openWindow = (props) => window.open(props.tag.link);
const InstructorTag = (props) => {
  return (
    <TagWrapper>
      <Emoji>{props.tag.emoji}</Emoji>
      <Name>{props.tag.name}</Name>

      <GoToGithub onClick={openWindow}>Go to GitHub</GoToGithub>
    </TagWrapper>
  );
};

export default InstructorTag;
