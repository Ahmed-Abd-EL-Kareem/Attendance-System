import React, { useState } from "react";
import Data from "../../Data/EmpData.json";
import { columns } from "../../Data/EmpColumns";
import Table from "../../Table/Table";
import Head from "../../Head";
import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
let sharedRowData = null; // Placeholder for the clicked row's data
const setSharedRowData = (data) => {
  sharedRowData = data;
};
export const EGetSharedRowData = () => sharedRowData;
const Employee = () => {
  const handleEdit = (rowData) => {
    setSharedRowData(rowData);
    console.log("Edit clicked for row:", EGetSharedRowData());
  };

  const data = Data.data.map((item) => ({
    ...item,
    onEdit: handleEdit, // Attach the onEdit function to each row
  }));

  const [searchItem, setSearchItem] = useState("");
  return (
    <>
      <div className="employee ms-1 mt-6 w-100">
        <div className="container">
          <Head title="Employee" />
          <div className="add_button mb-2">
            <Link to="/employee/add">
              <button className="pushable">
                <span className="shadow" />
                <span className="edge" />
                <span className="front">
                  <span className="pe-2 me-2 border-end">
                    <FaCirclePlus />
                  </span>
                  Add Employee
                </span>
              </button>
            </Link>
          </div>
          <div className="table bg-light ">
            <div className="d-flex align-items-center justify-content-between px-4 text bg-body-secondary bg-gradient text-center border-bottom border-black fw-semibold text-secondary-emphasis p-1">
              <p className="mt-3">DataTable Employee</p>
              <div class="d-flex align-items-center form">
                <input
                  class="form-control "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                />
                <i
                  class="fa-solid fa-magnifying-glass"
                  style={{ marginLeft: "-33px" }}
                ></i>
              </div>
            </div>
            <div className="tab p-2 bg-white">
              <Table columns={columns} data={data} search={searchItem} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;