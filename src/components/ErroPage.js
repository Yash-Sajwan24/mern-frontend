import React from "react";

const ErroPage = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1>Error 404!</h1>
        <h3>Page not Found</h3>
      </div>
    </>
  );
};

export default ErroPage;
