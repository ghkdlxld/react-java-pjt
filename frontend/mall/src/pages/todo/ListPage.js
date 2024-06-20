import React from 'react';
import { useSearchParams } from 'react-router-dom';

function ListPage(props) {

  //queryString에 사용
  const [queryParams] = useSearchParams()

  // page와 size를 알아보기
  // page를 가져와라 있으면 parseInt, 없으면 1
  //http://localhost:3000/todo/list?page=6&size=30 이렇게 queryParmas로 넘겨주면 저값을 볼 수 있음
  const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1
  const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10
  



  return (
    // Outlet으로 감싸줘서(IndexPage에서) Basiclayout으로 감싸주지 않아도 됨
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">
        Todo List Page Component --- {page} --- {size}
      </div>
    </div>
  );
}

export default ListPage;