import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ScreenContainer } from "../SignUp/styled";
import EditProfileForm from "./EditProfileForm";

export default function EditProfilePage() {
    useProtectedPage()
 return(
  <ScreenContainer>
      <EditProfileForm/>
  </ScreenContainer>
 );
};