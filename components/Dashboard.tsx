import styled from "styled-components";

import Arrow from "./Arrow";

const Section = styled.section`
  grid-column: 2 / -1;
  grid-row: 2 / -1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IntroSection = styled.div`
  padding: 6rem;
`;

const Heading = styled.p`
  font-size: 5rem;
  font-weight: 300;
`;

const HeadingAccent = styled.span`
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 2rem;
  font-weight: 300;

  margin-bottom: 6rem;
`;

const ImgContainer = styled.div`
  background-color: red;
  height: 200px;
  width: 200px;
  border-radius: 10rem;

  margin-right: 2.5rem;

  overflow: hidden;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  margin-bottom: 2.5rem;
`;

const Dashboard: React.FC = () => {
  return (
    <Section>
      <IntroSection>
        <HeadingContainer>
          <ImgContainer>
            {/* <Image alt="me" src="/me.png" height={200} width={200} /> */}
          </ImgContainer>
          <Heading>
            Mobile App <HeadingAccent>Developer</HeadingAccent>
          </Heading>
        </HeadingContainer>
        <Description>
          I design and create beautiful, modern, and powerful full-stack
          applications for IOS and Android.
        </Description>
        <Description>
          Slide right to view my projects and main technologies I use.
        </Description>
      </IntroSection>
      <Arrow />
    </Section>
  );
};

export default Dashboard;
