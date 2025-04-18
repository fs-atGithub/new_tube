import { SignUp } from "@clerk/nextjs";
import React from "react";

const Signup = () => {
  return (
    <div className={"flex items-center justify-center min-h-screen"}>
      <SignUp />
    </div>
  );
};
export default Signup;
