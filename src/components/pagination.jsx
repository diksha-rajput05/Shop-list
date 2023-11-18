import React from "react";
import { returnPaginationRange } from "../utils/apputils";

function Pagination(props) {
  const array = returnPaginationRange(props.totalPage, props.page, props.limit, props.sibling);

  return (
    <ul className="pagination pagination-md justify-content-center">
      <li className="page-item">
        <span onClick={() => props.onPageChange("&laquo;")} className="page-link">
          &laquo;
        </span>
      </li>
      <li className="page-item">
        <span onClick={() => props.onPageChange("&lsaquo;")} className="page-link">
          &lsaquo;
        </span>
      </li>
      {array.map((value) => (
        <li key={value} className={value === props.page ? "page-item active" : "page-item"}>
          <span onClick={() => props.onPageChange(value)} className="page-link">
            {value}
          </span>
        </li>
      ))}
      <li className="page-item">
        <span onClick={() => props.onPageChange("&rsaquo;")} className="page-link">
          &rsaquo;
        </span>
      </li>
      <li className="page-item">
        <span onClick={() => props.onPageChange("&raquo;")} className="page-link">
          &raquo;
        </span>
      </li>
    </ul>
  );
}

export default Pagination;
