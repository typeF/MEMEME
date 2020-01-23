import styled from "styled-components";

const FadingLine = styled.hr`
  display: block;
  border: 0;
  height: 1px;
  margin: 0;
  background: rgba(255, 255, 255, 0);
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
`;

export default FadingLine;
