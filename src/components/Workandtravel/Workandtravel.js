import React, {useState} from 'react';
import styled from 'styled-components';
import Carousel from './Carousel'

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  font-family: sans-serif;
  color: #222;
`;

const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1.1rem;
`;


const Section = styled.section`
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;



const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  line-height: 1.6;
  font-size: 1.05rem;
`;

const ReferenceText = styled.p`
  font-size: 0.95rem;
  margin: 1rem 0 0 0;
  color: #555;
  line-height: 1.5;
`;

const List = styled.ul`
  padding-left: 1.2rem;
  margin-top: 0.5rem;
    line-height: 1.6;

`;

const OrderedList = styled.ol`
  padding-left: 1.5rem;
  margin-top: 0.5rem;

  li {
    margin-bottom: 0.75rem; /* spacing between items */
    line-height: 1.6;
    font-size: 1.05rem;
  }
`;


const ExperienceCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.span`
  font-weight: bold;
`;

const ImageGallery = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;

  img {
        width: 200px;
    height: 200px;
    border-radius: 4px;
    object-fit: cover;
  }
`;

const LocationIcon = styled.img`
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-right: 0.5rem;
`;

const DateIcon = styled.img`
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-right: 0.5rem;
`;

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section>
      <div
        style={{
          display: 'flex',
          cursor: 'pointer',
          userSelect: 'none',
          alignItems: 'baseline'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        
        <Subtitle>{title}</Subtitle>
        <img
          src={isOpen ? '/Icons/collapseIcon.png' : '/Icons/expandIcon.png'}
          alt={isOpen ? 'Collapse Icon' : 'Expand Icon'}
          style={{
            width: '26px',
            height: '26px',
            marginLeft: '0.7rem',
            transition: 'transform 0.2s ease'
          }}
        />
      </div>
      {isOpen && <div>{children}</div>}
    </Section>
  );
};


const WorkAndTravel = () => {
  return (
    <Container>

      <Section>
        <Title>My Work & Travel Experiences</Title>
        <Text>
          Hi, I’m Wilfredo.<br /><br />
          For 2025, I’m open to opportunities involving gardens, wildlife, homes & pet sitting, and creative projects of all kinds—primarily across Europe, but open to other regions as well.
          <br /><br />
          I made this page to share my experiences directly with potential hosts, without relying on third-party platforms—just mutual trust and honest work.
        </Text>
      </Section>
      <Section>

      <CollapsibleSection title="My Work and Pet Sitting Experiences 2025">
        <ExperienceCard>
          <MetaRow>
            <div>
              <LocationIcon src={'/Icons/Location.png'} alt="Location Icon" /> Occitania, France
            </div>
            <div>
              <DateIcon src={'/Icons/Date.png'} alt="Date Icon" /> May 2025 • 1 week
            </div>
          </MetaRow>
          <Text> I am pet sitting 5 goats and 1 cat in another charming house in France while the owner is away.</Text>
          <ImageGallery>
            <img src="/Photos/France/Goats.jpeg" alt="France goatsitting 1" />
          </ImageGallery>
           <ReferenceText>
            <Label>Reference:</Label> Julien<br />
            <Label>Email:</Label> jujacob@gmail.com
          </ReferenceText>
          

        </ExperienceCard>
        <ExperienceCard>
          <MetaRow>
            <div>
              <LocationIcon src={'/Icons/Location.png'} alt="Location Icon" /> Occitania, France
            </div>
            <div>
              <DateIcon src={'/Icons/Date.png'} alt="Date Icon" /> May 2025 • 4 days
            </div>
          </MetaRow>
          <Text>Here I cared for 2 dogs and 2 cats while house sitting for 4 days in a nice little home in the south of France.</Text>
          <ImageGallery>
            <img src="/Photos/France/1.jpeg" alt="France petsitting 1" />
            <img src="/Photos/France/2.jpeg" alt="France petsitting 2" />
            <img src="/Photos/France/4.jpeg" alt="France petsitting 3" />
          </ImageGallery>
              <ReferenceText>
            <Label>Reference:</Label> Julien<br />
            <Label>Email:</Label> jujacob@gmail.com
          </ReferenceText>
        </ExperienceCard>
        <ExperienceCard>
          <MetaRow>

            <div>
              <LocationIcon src={'/Icons/Location.png'} alt="Location Icon" /> Setesdal Valley, Norway
            </div>
            <div>
              <DateIcon src={'/Icons/Date.png'} alt="Date Icon" /> April 2025 • 1 month
            </div>
          </MetaRow>
          <Text>A lovely experience working in the Norwegian wilderness under the guidance of two wonderful hosts.</Text>
          <Text><Label>Projects:</Label> Tree cutting, cabin painting, stone wall construction, cleaning. Also helped with building a website and video production.</Text>
          <ImageGallery>
            <img src="/Photos/Norway/2.jpeg" alt="Norway 2" />
            <img src="/Photos/Norway/3.jpeg" alt="Norway 3" />
            <img src="/Photos/Norway/4.jpeg" alt="Norway 4" />
          </ImageGallery>
          <ReferenceText>
            <Label>Reference:</Label> Mona<br />
            <Label>Email:</Label> mona_bjorgum@hotmail.com
          </ReferenceText>
        </ExperienceCard>
        </CollapsibleSection>

      </Section>
      <Section>
        {/* <Subtitle>Work & Travel Experiences</Subtitle>
  <ExperienceCarousel /> */}
      </Section>

        <CollapsibleSection title="About Me">
      <Section>

        <Carousel />

        <Text><Label>Name:</Label> Wilfredo Casas</Text>
        <Text><Label>Age:</Label> 32</Text>
        <Text><Label>Nationality:</Label> Peruvian</Text>
        <Text><Label>Languages:</Label> Spanish, English, German and some German Sign Language</Text>
        <Text><Label>Current Location:</Label> France</Text>
      </Section>

      <Section>
        <Subtitle>What I Can Help With</Subtitle>
        <List>
          <li>Gardening and forestry tasks</li>
          <li>Animal care</li>
          <li>Cooking and kitchen help</li>
          <li>Cleaning, painting, general maintenance</li>
          <li>House and pet sitting</li>
          <li>Video Production</li>
          <li>Software Development</li>

          <Text>
            I enjoy work that involves physical strength or creative thinking, as well as learning new skills. I’m passionate about working with animals and would like to gain more experience in craftsmanship, wildlife photography, or nature preservation. Always open to new challenges.
          </Text>
        </List>
      </Section>


      <Section>
        <Subtitle>Work Expectations</Subtitle>
        <Text>
          Before starting, I like to have a clear understanding of a few basic things:
        </Text>

        <OrderedList>
          <li>The general working hours and types of projects you have in mind.</li>
          <li>Whether food is provided, and if so, what kind.</li>
          <li>Whether the exchange is purely for experience or includes any payment.</li>
        </OrderedList>

        <Text>
          I value fairness and open communication, and I always aim for a win-win setup.
        </Text>
      </Section>

            <Section>
        <Subtitle>Pet Sitting Expectations</Subtitle>
  <Text>
          Please let me know:
        </Text>
        <OrderedList>
          <OrderedList>
  <li>Pet care instructions — feeding, routines, medications and vet contacts.</li>
  <li>House instructions — cleaning, plants, garbage, internet, areas to use, and whether an occasional guest is allowed.</li>
  <li>Emergencies — emergency numbers and what to do in case of unexpected situations.</li>
</OrderedList>

        </OrderedList>

        <Text>
          I value fairness and open communication, and I always aim for a win-win setup.
        </Text>
      </Section>
      <Section>
        <Subtitle>Dietary Preferences</Subtitle>
        <Text>
          I have a preference for organic, local foods — meat, organs, butter, yogurt, eggs, veggies and nuts.
          I try to avoid processed products, added sugars, and seed oils such as sunflower, rapeseed or margarine.
        </Text>
      </Section>
      <Section>
        <Subtitle>Contact Me</Subtitle>
        <List>
          <li> Signal, Telegram, or WhatsApp: +49 1578 1295360</li>
          <li> inbox@wilfredocasas.com</li>

        </List>

      </Section>

</CollapsibleSection>

    </Container>
  );
};

export default WorkAndTravel;
