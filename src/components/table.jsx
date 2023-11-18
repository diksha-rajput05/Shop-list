import React from "react"; 
function Table (props) {
    return (
        <table className="table">
            <thead>
                <tr>
                <th className="p-3">S.no</th>
                    <th className="p-3">Product id</th>
                    <th className="p-3">Product name</th>
                    <th className="p-3">Product category</th>
                    <th className="p-3">Product Prize</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user=> (
                    <tr key={user.number}>
                    <td>{user.number}</td>
                    <td>{user.productid}</td>
                    <td>{user.productname}</td>
                    <td>{user.productcategory}</td>
                    <td>{user.productprize}</td>
                </tr>
                ))}
                
            </tbody>
        </table>

    )
}
export default Table;
