import React from "react";
const Dashboard = ({ data }) => {
//   console.log(data);
  return (
    <div>
      <h1>Danh Sách Sản Phẩm</h1>
      <table className="table table-bodered table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Pice</th>
            <th>Action</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td> {item.id} </td>
              <td> {item.title} </td>
              <td> {item.pice} </td>
              <td> {item.action} </td>
              <td>
                {" "}
                <img src={item.thumbnail} alt="" />{" "}
              </td>
              <td>
                <button className="btn btn-danger">Xóa</button>
                <button className="btn btn-warning">Sửa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
