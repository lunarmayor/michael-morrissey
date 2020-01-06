import FlexContainer from "./FlexContainer";
import styled from "styled-components";

const CenterCenter = styled(FlexContainer)`
  justify-content: center;
  align-items: center;
  height: ${props => (props.full ? "100%" : "auto")};
`;

export default CenterCenter;
