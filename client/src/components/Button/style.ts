import styled from "styled-components";

export const FrontBtn = styled.span`
	display: block;
	padding: 1rem;
  font-size: 1rem;
	border-radius: 12px;
	background: #125B50;
	color: white;
	transform: translateY(-6px);
`;
export const PushableBtn = styled.button<{largerBtn:string | undefined}>`
	background: #07241f;
	border-radius: 12px;
	border: none;
	padding: 0;
  width: ${(props) => (props.largerBtn ? "100%" : "")};
	cursor: pointer;
	outline-offset: 4px;
`;

export const Wrapper = styled.div`
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	${FrontBtn}:active, ${PushableBtn}:active {
		transform: translateY(-2px);
	}
`;
