import styled, { keyframes } from "styled-components";

const drift1 = keyframes`
  0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
  50%  { transform: translate(200px, -150px) scale(1.3) rotate(12deg); }
  100% { transform: translate(0, 0) scale(1) rotate(0deg); }
`;

const drift2 = keyframes`
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(-220px, 180px) scale(1.2); }
  100% { transform: translate(0, 0) scale(1); }
`;

const drift3 = keyframes`
  0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
  50%  { transform: translate(150px, 220px) scale(1.35) rotate(-10deg); }
  100% { transform: translate(0, 0) scale(1) rotate(0deg); }
`;

const drift4 = keyframes`
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(-180px, -200px) scale(1.25); }
  100% { transform: translate(0, 0) scale(1); }
`;

const drift5 = keyframes`
  0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
  50%  { transform: translate(260px, 100px) scale(1.4) rotate(15deg); }
  100% { transform: translate(0, 0) scale(1) rotate(0deg); }
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  background: #050505;
  overflow: hidden;
  z-index: -1;
`;

const Blob = styled.div`
  position: absolute;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  filter: blur(50px);
  opacity: 0.5;
`;

const Blob1 = styled(Blob)`
  background: radial-gradient(circle, #ffae00, transparent 70%);
  top: 8%;
  left: 10%;
  animation: ${drift1} 6s ease-in-out infinite;
`;

const Blob2 = styled(Blob)`
  background: radial-gradient(circle, #f87f50, transparent 70%);
  bottom: 12%;
  right: 12%;
  animation: ${drift2} 9s ease-in-out infinite;
`;

const Blob3 = styled(Blob)`
  background: radial-gradient(circle, #ffa703, transparent 70%);
  top: 10%;
  right: 5%;
  animation: ${drift3} 7s ease-in-out infinite;
`;

const Blob4 = styled(Blob)`
  background: radial-gradient(circle, #ff8c00, transparent 70%);
  bottom: 35%;
  left: 5%;
  animation: ${drift4} 11s ease-in-out infinite;
`;

const Blob5 = styled(Blob)`
  background: radial-gradient(circle, #f75636, transparent 70%);
  top: 64%;
  left: 55%;
  animation: ${drift5} 8s ease-in-out infinite;
`;

const Blob6 = styled(Blob)`
  background: radial-gradient(circle, #c04113, transparent 70%);
  top: 0%;
  left: 45%;
  animation: ${drift2} 10s ease-in-out infinite reverse;
`;

const Blob7 = styled(Blob)`
  background: radial-gradient(circle, #ffa500, transparent 70%);
  bottom: 5%;
  left: 0%;
  animation: ${drift3} 12s ease-in-out infinite;
`;

const Blob8 = styled(Blob)`
  background: radial-gradient(circle, #ee3928, transparent 70%);
  bottom: 4%;
  left: 22%;
  animation: ${drift4} 4s ease-in-out infinite;
`;

const Blob9 = styled(Blob)`
    background: radial-gradient(circle, #ffa703, transparent 70%);
  bottom: 40%;
  left: 40%;
  animation: ${drift1} 7s ease-in-out infinite; 
`

export default function AnimatedBackground() {
  return (
    <Background>
      <Blob1 />
      <Blob2 />
      <Blob3 />
      <Blob4 />
      <Blob5 />
      <Blob6 />
      <Blob7 />
      <Blob8/>
      <Blob9/>
    </Background>
  );
}
