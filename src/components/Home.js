import React from 'react';

const Home = ({ children }) => {
  return(
    <div className="container">
      <a href="/login">Login</a>
      {children}
    </div>
  );
};

export default Home;