import styled from "styled-components";
export const HeaderStyle = styled.header`
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 48%);
  width: 100%;
  height: 500px;
  background: #707070 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  .HeaderFontes {
    margin-top: 69px;
    color: #ffffff;
    opacity: 1;
    h2 {
      font-size: 20px;
      line-height: 16px;
      font-weight: 400;
    }
    h1 {
      font-size: 40px;
      line-height: 45px;
      font-weight: 500;
    }
    h3 {
      font-size: 14px;
      margin-top: 24px;
      font-weight: 400;
    }
  }
  .bnt {
    color: #888888;
    width: 160px;
    margin-left: 40px;
    margin-top: 50px;
    height: 40px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 1px 6px #00000029;
    border: 1px solid #707070;
    border-radius: 4px;
    opacity: 1;
    position:relative
    
  }
  button:hover {
    transform: scale(1.1);
    transition: all 0.2s;

  } 
 
.bnt {
     cursor: pointer;
}
`;
