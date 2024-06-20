import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter";

const {createBrowserRouter} = require("react-router-dom");


const Loading = <div className={'bg-red-700'}>Loading. . . .</div>
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))

const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))
// TodoList 따로 라우터 함수로 빼줌
// const TodoList = lazy(() => import("../pages/todo/ListPage"))

// root 라는 라우터를 App.js에 넣어줄 것(RouterProvider)
// 배열에 아무것도 넣지 않을 경우 콘솔에 non-empty routes에러가 뜸
const root = createBrowserRouter([
  // 객체 형태로 넣어줌
  {
    path: "", // 경로, 빈경로=맨처음 페이지
    element: <Suspense fallback={Loading}><Main/></Suspense> // 보여줄 컴포넌트
  },
  {
    path: "about", // 경로
    element: <Suspense fallback={Loading}><About/></Suspense> // 보여줄 컴포넌트
  },
  {
    path: "todo",
    element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
    // children: [
    //   {
    //     path: 'list',
    //     element: <Suspense fallback={Loading}><TodoList/></Suspense>,
    //   }
    // ]

    // 위에 배열을 직접 입력해주는 대신 함수로 빼줌
    children: todoRouter()
  },
])

export default root;