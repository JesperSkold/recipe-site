import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../global-styles/global-colors"
interface Hamburger {
	hamburger?: boolean;
}

export const HomeLink = styled(Link)`
	color: white;
	text-decoration: none;
`;

export const RecipeLink = styled(Link)<{ paramcategory: string | undefined; category: string | undefined }>`
	color: white;
	text-decoration: none;
	font-weight: ${(props) => {
		return props.paramcategory === props.category ? "bold" : "normal";
	}};
	text-decoration: ${(props) => {
		return props.paramcategory === props.category ? "underline" : "";
	}};
	font-size: ${(props) => {
		return props.paramcategory === props.category ? "1.2rem" : "";
	}};
`;

export const TextWrapper = styled.div`
	position: fixed;
`;

export const StyledParagraph = styled.p`
	font-size: 1.5rem;
`;

export const StyledAside = styled.aside<Hamburger>`
	z-index: 999;	
	position: ${(props) => (props.hamburger ? "fixed" : "")};
	left: ${(props) => (props.hamburger ? "0" : "")};
	background-color: #125b50;
	width: ${(props) => (props.hamburger ? "6rem" : "10rem")};
	padding: 0 1rem 0 1rem;
	min-height: ${(props) => (props.hamburger ? "100%" : "100vh")};
	color: white;
`;

export const StyledH1 = styled.h1<Hamburger>`
margin-top: ${(props) => (props.hamburger ? "4rem" : "1rem")};
`;

export const StyledUl = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const Category = styled.li`
	margin-top: 0.5rem;
	&:hover {
		cursor: pointer;
	}
`;

export const MenuLabel = styled.label<{clicked: boolean}>`
	background-color: ${COLORS.secondary};
	position: fixed;
	top: ${(props) => (props.clicked ? "0.5rem" : "3rem")}; 
	left: ${(props) => (props.clicked ? "0" : ".5rem")}; 
	border-radius: 100%;
	height: 2rem;
	width: 2rem;
	padding: .8rem;
	cursor: pointer;
	z-index: 1000;
	text-align: center;
`;

export const Icon = styled.span<{ clicked: boolean }>`
	position: relative;
	background-color: ${(props) => (props.clicked ? "transparent" : "black")};
	width: 1.5rem;
	height: 3px;
	display: inline-block;
	margin-top: 0.9rem;
	background-color: white;
	transition: all 0.3s;
	&::before,
	&::after {
		content: "";
		background-color: white;
		width: 1.5rem;
		height: 3px;
		display: inline-block;
		position: absolute;
		left: .1px;
		transition: all 0.3s;
	}
	&::before {
		top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
		transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
	}
	&::after {
		top: ${(props) => (props.clicked ? "0" : "0.8rem")};
		transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
	}
`;
