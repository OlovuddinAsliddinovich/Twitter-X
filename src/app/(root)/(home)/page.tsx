import Auth from "@/src/components/auth";
import React from "react";

export default function Page() {
  const user = false;
  if (!user)
    return (
      <div className="container h-screen mx-auto max-w-7xl px-4 md:px-0">
        <Auth />
      </div>
    );
  return <div>Page</div>;
}
