import React from "react";
import { Tabs } from "antd";
import EntryForm from "../views/EntryForm";
import UserTable from "../views/UserTable";

const UserForm = () => {
  const items = [
    {
      key: "1",
      label: `فرم ثبت نام`,
      children: <EntryForm />,
    },
    {
      key: "2",
      label: `لیست کاربران`,
      children: <UserTable />,
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default UserForm;
