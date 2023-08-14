import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/reducers/userSlices";
import UserEdit from "./UserEdit";
import { Table, Tag, Button, Modal } from "antd";

const UserTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [item, setItem] = useState();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const columns = [
    {
      title: "نام",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "نام خانوادگی",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "سن",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "مهارت",
      dataIndex: "skills",
      key: "skills",
      render: (tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "عملیات",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <>
          <button
            className="deleteButton"
            onClick={() => handleDeleteUser(record)}
          >
            حذف
          </button>
          {/* <button type="primary" onClick={() => showModal(record)}>
            ویرایش
          </button> */}
        </>
      ),
    },
  ];

  const handleDeleteUser = (user) => {
    dispatch(deleteUser(user.id));
  };
  const showModal = (record) => {
    setIsModalOpen(true);
    setItem(record);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    console.log("first");
    setIsModalOpen(false);
  };

  return (
    <div>
      <Table columns={columns} dataSource={users} />
      <Modal
        title="ویرایش"
        open={isModalOpen}
        footer={null}
        closable={false}
        width={1000}
      >
        {/* <UserEdit data={item} closeModal={setIsModalOpen} /> */}
      </Modal>
    </div>
  );
};

export default UserTable;
