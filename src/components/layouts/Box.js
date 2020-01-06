import {
  handleRelative,
  handleMobileVisibility
} from "components/utils/cssHelpers";
import { Box as GSBox } from "grid-styled";
import styled from "styled-components";

const Box = styled(GSBox)`
  ${handleRelative}
  ${handleMobileVisibility}
`;

export default Box;
