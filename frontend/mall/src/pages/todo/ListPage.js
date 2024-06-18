import React from 'react';

function ListPage(props) {
  return (
    // Outlet으로 감싸줘서(IndexPage에서) Basiclayout으로 감싸주지 않아도 됨
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">
        Todo List Page Component
      </div>
    </div>
  );
}

export default ListPage;