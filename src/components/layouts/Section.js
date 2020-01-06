import styled from "styled-components";
import { spacing, palette } from "theme";

const Section = styled.section`
  padding: ${props => (props.big ? spacing * 4 : spacing * 2)}px;
`;

export default Section;
