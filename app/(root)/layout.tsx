import React, { ReactNode } from "react";

import { HomeNavbar } from "@/components/HomeNavbar";
import { HomeSidebar } from "@/components/HomeSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

type rootLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: rootLayoutProps) => {
  return (
    <SidebarProvider>
      <div className={"w-full"}>
        <HomeNavbar />
        <div className={"flex min-h-screen pt-16"}>
          <HomeSidebar />
          <main className={"flex-1 overflow-y-auto"}>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
export default Layout;
