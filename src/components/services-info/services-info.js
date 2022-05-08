// import react from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 100px 2rem 50px 2rem;
`;

const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H3 = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: .5rem;
`;

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spacer = styled.div`
  margin: 50px 2rem;

  @media screen and (max-width: 820px) {
    margin: 50px 1rem;
  }
`;



const ServiceInfo = () => {



  return (
    <Container>
      <Header>Services</Header>
      <Spacer>
        <H3 id='individual'>Individual Therapy</H3>

        <Paragraph>People have many different motivations for coming to psychotherapy. Some may be going through a major life transition (employment, divorce, new job, etc.), or are not handling stressful circumstances well. Some people need assistance managing a range of other issues such as low self-esteem, depression, anxiety, addictions, relationship problems, spiritual conflicts and creative blocks. Therapy can help provide some much needed encouragement and support.
        Others may be at a point where they are ready to learn more about themselves or want to be more effective with their goals in life. In short, people seeking psychotherapy are ready to meet the challenges of their lives and ready to make changes in their lives.</Paragraph>
      </Spacer>
    <Spacer>
      <H3 id='group'>Couples Therapy</H3>

      <Paragraph>I can usually handle my problems.
      Every one goes through challenging situations in life, and while you may have successfully navigated through other difficulties you've faced, there's nothing wrong with seeking out extra support when you need it. In fact, therapy is for people who have enough self-awareness to realize they need a helping hand, and that is something to be admired. You are taking responsibility by accepting where you're at in life and making a commitment to change the situation by seeking therapy. Therapy provides long-lasting benefits and support, giving you the tools you need to avoid triggers, re-direct damaging patterns, and overcome whatever challenges you face.</Paragraph>
    </Spacer>

    <Spacer>
      <H3 id='equine'>Equine Therapy</H3>

      <Paragraph>A number of benefits are available from participating in therapy. Therapists can provide support, problem-solving skills, and enhance coping strategies for issues such as depression, anxiety, relationship troubles, unresolved childhood issues, grief, stress management, body image issues and creative blocks. Many people also find that counselors can be a tremendous asset to managing personal growth, interpersonal relationships, family concerns, marriage issues, and the hassles of daily life. Therapists can provide a fresh perspective on a difficult problem or point you in the direction of a solution. The benefits you obtain from therapy depend on how well you use the process and put into practice what you learn. Some of the benefits available from therapy include:</Paragraph>
  </Spacer>
    <Spacer>
      <H3 id='cost'>Billing and costs</H3>

      <Paragraph>People have many different motivations for coming to psychotherapy. Some may be going through a major life transition (employment, divorce, new job, etc.), or are not handling stressful circumstances well. Some people need assistance managing a range of other issues such as low self-esteem, depression, anxiety, addictions, relationship problems, spiritual conflicts and creative blocks. Therapy can help provide some much needed encouragement and support.
      Others may be at a point where they are ready to learn more about themselves or want to be more effective with their goals in life. In short, people seeking psychotherapy are ready to meet the challenges of their lives and ready to make changes in their lives.</Paragraph>
    </Spacer>
    </Container>
  )
}

export default ServiceInfo;
