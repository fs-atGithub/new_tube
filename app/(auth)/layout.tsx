import React, { ReactNode } from "react";

type authLayoutProps = {
  children: ReactNode;
};

const authLayout = ({ children }: authLayoutProps) => {
  return <div>{children}</div>;
};
export default authLayout;
