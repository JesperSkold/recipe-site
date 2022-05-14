import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 44rem;
  @media (max-width:768px){
		width: 80vw;
}
`;

export const StyledWrapper = styled.div`
	display: flex;
  justify-content: center;
`;
