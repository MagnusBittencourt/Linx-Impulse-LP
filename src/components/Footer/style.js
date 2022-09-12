import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  height: 160px;
  background-color: #707070;
  clip-path: polygon(0 25%, 100% 0, 100% 100%, 0 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  p {
    font-size: 14px;
    text-align: center;
    color: #ffffff;
    margin-top: 0.2rem;
  }
  div {
    margin-top: 1rem;
  }
`;
