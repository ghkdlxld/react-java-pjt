import React from "react";
// import {Link} from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

function MainPage(props) {
  return (
    // <div className={'text-3xl'}>
    //   <div className={'flex'}>
    //     {/* Link , a태그랑 동일한 역할 */}
    //     <Link to={'/about'}>About</Link> 
    //   </div>
    //   <div>Main Page</div>
    // </div>

    // BasicLayout 이라는 prop을 받는 컴포넌트를 하나 만들음
    // BasicLayout이 감싸고있는 태그들 -> children으로 prop
    <BasicLayout>
      <div className={'text-3xl'}>Main Page</div>
    </BasicLayout>
  );
}

export default MainPage;