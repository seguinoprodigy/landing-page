import React from "react";

function HomePage() {
  return <div>HomePage</div>;
}

export const getServersideProps = async () => {
  return {
    props: {},
  };
};
export default HomePage;
