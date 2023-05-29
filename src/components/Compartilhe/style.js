import styled from "styled-components";

export const CompartilheStyle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .novidade {
    margin-top: 44px;
    align-items: center;
    display: flex;
    flex-direction: column;
    font: normal normal normal 14px/16px Helvetica Neue;
    letter-spacing: 0px;
    color: #888888;
    opacity: 1;
  }

  .containerFilho {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 720px;
    height: 51px;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  .inputContainer {
    margin-top: 39px;
  }
  .inputContainer label {
    width: 112px;
    height: 14px;
    font: normal normal normal 12px/14px Helvetica Neue;
    letter-spacing: 0px;
    color: #888888;
    opacity: 1;
  }

  .inputContainer input {
    width: 340px;
    height: 30px;
  }
  .bnt {
    margin-top: 69px;
    width: 260px;
    height: 39px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 4px;
    opacity: 1;
  }
  button:hover {
    transform: scale(1.1);
    transition: all 0.2s;

  } 
 
.bnt {
     cursor: pointer;
}


`;
