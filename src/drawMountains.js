import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  background: #ffffff;
  color: rgba(255, 255, 255, 0.9);
  box-shawdow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);
  margin-bottom: 2rem;
`;

const Sky = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #399dfb;
  padding-bottom: 3rem;
  height: 260px;
`;

const CardTitle = styled.div`
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 0.325rem;
`;

const CardDescription = styled.div`
  margin-botton: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  color: rgba(255, 255, 255, 0.75);
`;

const Button = styled.button`
  height: 40px;
  padding: 0 1.25rem;
  border-radius: 20px;
  border: 0;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.35);
  color: white;
  margin-top: 1rem;
`;

const Footer = styled.div`
  height: 90px;
`;

const FooterMountains = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transform: translateY(-34px);
  width: 125%;
`;

const MountainStage = styled.div`
  z-index: ${(props) => props.zIndex || 0};
  width: calc(${(props) => props.mountainSize} * 1.25);
  height: calc(${(props) => props.mountainSize} / 2);
  transform: translateX(${(props) => props.shiftLeft || 0});
`;

const MountainWrapper = styled.div`
  width: ${(props) => props.mountainSize};
  height: ${(props) => props.mountainSize};
  transform: rotate(45deg);
`;

const MountainBackground = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => props.mountainSize};
  height: ${(props) => props.mountainSize};
  background: #cbe6fe;
`;

const MountainShawdow = styled.div`
  position: absolute;
  background: linear-gradient(to bottom, #afcae2 40%, #cbe6fe 100%);
  width: 100%;
  height: 100%;
  transform: rotate(-55deg) translate(41%) scale(1, 2);
  transform-origin: 0% 50%;
`;

const MountainBlocker = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 0;
  height: 50%;
  width: 100%;
  background: white;
  transform: rotate(-45deg) scale(2, 1.5) translateY(25%);
`;

const DrawMountains = () => {
  const [mountains] = useState([
    { id: 1, mountainSize: "130px", zIndex: 1, shiftLeft: "0" },
    { id: 2, mountainSize: "100px", zIndex: 0, shiftLeft: "-50px" },
    { id: 3, mountainSize: "160px", zIndex: 2, shiftLeft: "-75px" },
  ]);

  return (
    <Card>
      <Sky>
        <CardTitle>CSS Mountain Tutorial</CardTitle>
        <CardDescription>
          This is a tutorial about creating CSS mountains
        </CardDescription>
        <Button>Click Me!</Button>
      </Sky>
      <Footer>
        <FooterMountains>
          {mountains.map((m) => (
            <MountainStage
              key={m.id}
              mountainSize={m.mountainSize}
              zIndex={m.zIndex}
              shiftLeft={m.shiftLeft}
            >
              <MountainWrapper mountainSize={m.mountainSize}>
                <MountainBackground mountainSize={m.mountainSize}>
                  <MountainShawdow />
                </MountainBackground>
                <MountainBlocker />
              </MountainWrapper>
            </MountainStage>
          ))}
        </FooterMountains>
      </Footer>
    </Card>
  );
};

export default DrawMountains;
