import styled from "styled-components";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArrowContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  border-left: 2px solid #284e73;
  width: 15rem;

  :hover {
    background-color: #254b6b;
    border-left: 2px solid #254b6b;

    transform: translateX(0.5rem);
  }

  transition: 150ms;
`;

const Icon = styled.p`
  transform: scale(3);
`;

const ArrowToProjects = () => {
  return (
    <ArrowContainer>
      <Icon>
        <FontAwesomeIcon icon={faChevronRight} />
      </Icon>
    </ArrowContainer>
  );
};

export default ArrowToProjects;
