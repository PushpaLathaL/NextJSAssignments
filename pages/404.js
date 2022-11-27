import React, { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //  router.push('/'); //routing to home page
    }, 3000);
  }, []);

  return (
    <div>
      <h2>Page not found</h2>
    </div>
  );
};

export default NotFound;
