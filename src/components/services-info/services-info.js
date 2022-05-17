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

        <Paragraph>Taking the first step is difficult but Individual therapy is an amazing tool to receive the support and direction to create a healthy relationship with yourself and embrace your authentic self.</Paragraph>
      </Spacer>
      <Spacer>
        <H3 id='group'>Couples Therapy</H3>

        <Paragraph>Couples counseling is an opportunity to learn about yourself and your partner. Partnerships are difficult because we must trust and share ourselves. Uncovering fears is the first step to freedom. Couples counseling usually is 1.5 hours. Sometimes couples come for a couple session and some more. This is always determined on individual needs. You can expect to learn about yourself and your own challenges in trusting. Education of different personalities needs, and love languages can be very helpful. Creating boundaries and addressing personal self-care is essential in a healthy relationship..</Paragraph>
      </Spacer>

      <Spacer>
        <H3 id='equine'>Equine Therapy</H3>

        <Paragraph>We can learn so much from horses and animals to include trust, boundaries, communication, and unconditional love. These are things that sometimes can not be taught but only experiences</Paragraph>
      </Spacer>

      <Spacer>
        <H3 id='equine'>Cost and payment options</H3>

        <Paragraph>Types of counseling techniques used in therapy sessions include, cognitive behavioral, mindfulness, client centered, solution focused, and dialectical behavioral therapy.  Therapy sessions last 1 hour to 1.5hrs and goals can be met in one session to several sessions depending on the individual.  Insurances are billed for services or there is a sliding fee scale from $50 to $220.00.

</Paragraph>
      </Spacer>
    </Container>
  )
}

export default ServiceInfo;
