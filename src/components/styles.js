import styled, { keyframes, css } from 'styled-components';

export const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -1px) rotate(-0.5deg); }
  20% { transform: translate(-1px, 0px) rotate(0.5deg); }
  30% { transform: translate(1px, 1px) rotate(0deg); }
  40% { transform: translate(0px, -1px) rotate(0.5deg); }
  50% { transform: translate(-1px, 1px) rotate(-0.5deg); }
  60% { transform: translate(-1px, 0px) rotate(0deg); }
  70% { transform: translate(1px, 0px) rotate(-0.5deg); }
  80% { transform: translate(0px, -1px) rotate(0.5deg); }
  90% { transform: translate(1px, 1px) rotate(0deg); }
  100% { transform: translate(0px, -1px) rotate(-0.5deg); }

  
`;
export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center; /* Center align text content */
  font-family: 'Lunasima', sans-serif;
  background-color: #FDF4F5; /* Change background color */

`;

export const ImageContainer = styled.div`
    width: 170px;
    height: 170px;
    align-self: center;
    @media (min-width: 1000px) {
        position:absolute;
        width: 200px;
        height: 200px;
    }
    `;

export const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
    animation: ${props => props.isShaking ? css`${shake} 0.5s` : 'none'};

    @media (min-width: 1000px) {
      position: absolute;
      left: -80px;
    }
  `;



export const Arrow = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
@media (min-width: 1000px) {
    position:absolute;
    left: -80px;
}

 
`;

export const GithubIcon = styled.img`
  width: 20%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
  animation-delay: 20s; // start animation after 5s delay
@media (min-width: 1000px) {
    position:absolute;
    left: -80px;
}

 
`;

export const YoutubeIcon = styled.img`
  width: 20%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
  animation-delay: 20s; // start animation after 5s delay
@media (min-width: 1000px) {
    position:absolute;
    left: -80px;
}

 
`;

export const TitleContainer = styled.div`
animation: ${shake} 0.5s;
animation-delay: 30s; // start animation after 5s delay
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 20px 0;
`;

export const ParentContainer = styled.div`
display: flex;
position: absolute;
transition: opacity 0.5s ease-in-out;

@media (max-width: 1000px) {
    left: -70px;
}

width: -webkit-fill-available;



`;

export const Title = styled.p`
  a {
    color: black;  /* inherit color from parent */
    text-decoration: none;  /* remove underline */
  }
  animation: ${shake} 0.5s;
  animation-delay: 60s; // start animation after 5s delay

`;

export const Message = styled.p`
  position: fixed;
  bottom: 20px;
  color: white;
  background: #2D4356;
  padding: 10px;
  border-radius: 1.5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  left: 50%; // Move it to the horizontal center
  transform: translateX(-50%); // Center it horizontally
`;

export const DetailContainer = styled.div`
  animation: fadeIn 0.5s;
  opacity: 1; // Start fully visible
  transition: opacity 0.5s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const TextContainer = styled.div`
margin: 2rem
`;

export const Text = styled.p`
a {
    color: #A94438;  /* inherit color from parent */
    text-decoration: none;  /* remove underline */
  }
`;