import styled from "styled-components";

export const DescriptionStyle = styled.section`
  width: 100%;
  height: 390px;
  color: #888888;
  display: flex;
  justify-content: center;
  .descriptionContainer {
    display: flex;
    align-items: center;
    width: 920p;
  }
  .boxDescription {
    width: 520px;
    height: 320px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-right:60px;
  }
  form {
    width: 340px;
    height: 280px;
    display: flex;
    flex-direction: column;
  }

  .inputContainer{
    display: flex;
    flex-direction: column;
    
  }

.inputContainer label{
text-align: left;
font: normal normal normal 12px/14px Helvetica Neue;
letter-spacing: 0px;
color: #888888;
opacity: 1;
  
}
.inputContainer input{
margin-top: 7px;
margin-bottom: 7px;
width: 340px;
height: 30px;
}

.inputRadio{
  display: flex;
  margin-top: 20px;
  font: normal normal normal 12px/14px Helvetica Neue;
}
.a{
  margin-right: 30px;
letter-spacing: 0px;
color: #888888;
opacity: 1;

}

.envio {margin-top: 23px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #707070;
border-radius: 4px;
opacity: 1;
top: 670px;
left: 870px;
width: 340px;
height: 39px; 
}`;
