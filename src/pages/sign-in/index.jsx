import { Button } from "@mui/material";
import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase";

export default function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <Button variant="outlined" onClick={logGoogleUser}>
        sign in with popup
      </Button>
    </div>
  );
}
