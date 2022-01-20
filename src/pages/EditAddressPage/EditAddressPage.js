import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ScreenContainer } from "../SignUp/styled";
import EditAddressForm from "./EditAddressForm";

export default function EditAddressPage() {
    useProtectedPage()
 return(
  <ScreenContainer>
   <EditAddressForm/>
  </ScreenContainer>
 );
};