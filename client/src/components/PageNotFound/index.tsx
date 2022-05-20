import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeLink } from "../SideBar/style";
import { StyledWrapper, ErrorStatus, ErrorMessage } from "./style";
import Button from "../Button";
const PageNotFound = () => {
  const navigate = useNavigate()
	return (
		<StyledWrapper>
      <ErrorStatus>404</ErrorStatus>
      <ErrorMessage>Vi kunde inte hitta sidan</ErrorMessage>
				<Button errorPage={navigate}>Ta mig tillbaka</Button>
		</StyledWrapper>
	);
};

export default PageNotFound;
