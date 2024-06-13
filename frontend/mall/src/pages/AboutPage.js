import React from "react";
import { Link } from "react-router-dom";

function AboutPage(props) {
  return (
    <div className={'text-3xl'}>
      <div className={'flex'}>
        {/* Link , a태그랑 동일한 역할 */}
        <Link to={'/about'}>About</Link> 
      </div>
      <div>About Page</div>
    </div>
  );
}

export default AboutPage;