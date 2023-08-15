import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Select, Space, DatePicker } from "antd";

import { useDispatch } from "react-redux";
import { addUser } from "../redux/reducers/userSlices";

const EntryForm = () => {
  let formRef = React.createRef();
  const [date, setdate] = useState();
  const { Option } = Select;
  const dispatch = useDispatch();

  const onFinish = (values) => {
    let age = parseInt(date.slice(0, 4));
    age = 2024 - age;
    const user = {
      id: Date.now(),
      firstName: values["firstName"],
      lastName: values["lastName"],
      birthDate: date,
      age: age,
      skills: values["skills"],
    };
    dispatch(addUser(user));
    formRef.current.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const dateHandler = (date, dateString) => {
    setdate(dateString);
  };

  return (
    <div className="entryForm">
      <div className="formContainer">
        <Form
          name="basic"
          ref={formRef}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="نام"
            name="firstName"
            rules={[
              {
                required: true,
                message: "نام خود را وارد کنید ",
              },

              {
                pattern: new RegExp(/^[\p{L}\s]*$/u),
                message: "نام معتبر وارد کنید ",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label=" نام خانوادگی"
            name="lastName"
            rules={[
              {
                required: true,
                message: "نام خانوادگی خود را وارد کنید ",
              },
              {
                pattern: new RegExp(/^[\p{L}\s]*$/u),
                message: "نام خانوادگی معتبر وارد کنید ",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label=" تاریخ تولد"
            name="birthday"
            rules={[
              {
                required: true,
                message: "تاریخ تولد خود را وارد کنید ",
              },
            ]}
          >
            <DatePicker
              placeholder="تاریخ را وارد کنید "
              format="YYYY-MM-DD"
              onChange={dateHandler}
            />
          </Form.Item>
          <Form.Item
            label="مهارت"
            name="skills"
            rules={[
              {
                required: true,
                message: "حداقل یک مهارت وارد کنید ",
              },
            ]}
          >
            <Select
              placeholder="مهارت های خود را اضافه کنید "
              // onChange={skillHandder}
              allowClear
              mode="multiple"
            >
              <Option value="JavaScript">JavaScript</Option>
              <Option value="React">React</Option>
              <Option value="Redux">Redux</Option>
              <Option value="HTML/CSS">HTML/CSS</Option>
            </Select>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            className="flex items-center m-0"
          >
            <Button type="primary" htmlType="submit">
              ثبت
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EntryForm;
