import React, { useState } from 'react';
import './App.css';
import Table from './components/table'
import { getUser , getLength} from './api/user';
import Pagination from './components/pagination'


function App() {
   const [ page, setPage] = useState(5);
   const [ limit, setLimit] = useState(10);

   let totalPage = Math.ceil(getLength()/limit);

   function handlePageChange(value) {
    if(value === "&laquo;" || value=== "...") {
      setPage(1);
    }
    else if(value=== "&lsaquo;") {
      if(page!==1) {
        setPage(page-1);
      }
    }
    else if(value === "&rsaquo;") {
      if(page!== totalPage) {
        setPage(page +1);
      }
    }
    else if(value=== "&raquo;" || value === "...") {
      setPage(totalPage);
    }
    else{
      setPage(value);
    }
   }

  return (
    <div className="App">
     <Table users= { getUser(page, limit)} />
     <Pagination totalPage = {totalPage} page = {page} limit = {limit} sibling = {1} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
