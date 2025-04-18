import { SignIn } from "@clerk/nextjs";
import React from "react";

const Signin = () => {
  return (
    <div className={"flex items-center justify-center min-h-screen"}>
      <SignIn />
    </div>
  );
};
export default Signin;
