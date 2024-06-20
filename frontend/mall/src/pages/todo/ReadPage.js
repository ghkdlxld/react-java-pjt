import React from 'react';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';

function ReadPage(props) {

  // const obj = useParams()
  // console.log(obj)

  // url로 넘어오는 param
  const navigate = useNavigate()
  const {tno} = useParams()
  console.log(tno)

  const [queryParams] = useSearchParams()
  const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1
  const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10

  const queryStr = createSearchParams({page:page, size:size}).toString() // 자동으로 queryString을 만들어주는함수 (?뒤에 params)

  
  const moveToModify = (tno) => {

    navigate({
      pathname:`/todo/modify/${tno}`,
      search: queryStr
    }) // search에 queryStr로 만든 searchParams를 넣어줌으로써 페이지 이동할때에도 뒤에 값을 유지
    // http://localhost:3000/todo/read/13?page=3&size=20
    // -> 이동 : http://localhost:3000/todo/modify/13?page=3&size=20
    // ?뒤의 page=3&size=20 값 유지
  }

  const moveToList = () => {
    navigate({
      pathname:`/todo/list/`,
      search: queryStr
    })
  }

  return (
    <div className={'text-3xl'}>
      Todo Read Page {tno}

      <div>
        <button onClick={() => moveToModify(tno)}> Test Modify </button>
        <br></br>
        <button onClick={moveToList}> go List </button>
      </div>
    </div>
  );
}

export default ReadPage;