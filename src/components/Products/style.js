import styled from "styled-components";

export const ProductsStyle = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ProductsContainer {
    display: grid;
    width: 100%;
    justify-content: center;
    grid-template-columns: repeat(4, 200px);
    gap: 41px;
  }
  button {
    margin-top: 52px;
    width: 260px;
    height: 39px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 4px;
    opacity: 1;
  }

`;
