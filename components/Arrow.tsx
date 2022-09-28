import styled from "styled-components";

// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  :hover {
    transform: translateX(1rem);
  }

  transition: 150ms;
`;

const ArrowContainer = styled.section`
  border-left: 2px solid #284e73;
  width: 15rem;

  :hover {
    background-color: #254b6b;
    border-left: 2px solid #254b6b;
  }

  transition: 150ms;
`;

const ArrowToProjects = () => {
  return (
    <ArrowContainer>
      <Icon>{/* <FontAwesomeIcon icon={faChevronRight} /> */}</Icon>
    </ArrowContainer>
  );
};

export default ArrowToProjects;
