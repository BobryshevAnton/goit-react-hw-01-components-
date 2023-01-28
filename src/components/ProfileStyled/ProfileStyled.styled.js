import styled from 'styled-components';

export const Description = styled.div`
  color: grey;
`;
export const Profile = styled.div`
  display: block;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;

  text-align: center;
  width: 400px;
  border-radius: 5px;
  background-color: rgb(247, 248, 248);
  font-size: 30px;
  box-shadow: 2px 2px 5px rgb(124, 123, 123);
`;
export const Avatar = styled.img`
  margin-top: 20px;
  width: 350px;
`;
export const Stats = styled.ul`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;

  background-color: rgb(188, 183, 183);
  justify-content: space-around;

  color: grey;
  font-size: 20px;

  flex-direction: row;
  margin-top: 0px;
  margin-bottom: 0px;
`;
export const LabelSpan = styled.span`
  color: rgb(87, 86, 86);
`;
export const LabelQuantity = styled.span`
  color: black;
  margin: 10px;
  font-weight: bold;
`;
export const Name = styled.p`
  text-transform: uppercase;
  color: black;
  font-weight: bold;
`;
export const Tag = styled.p`
  text-transform: uppercase;
  color: grey;
`;
export const Location = styled.p`
  text-transform: uppercase;
  color: grey;
`;
