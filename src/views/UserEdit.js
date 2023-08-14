import React, { useState } from "react";
import { Button, Form, Input, Select, DatePicker } from "antd";

const UserEdit = ({ data, closeModal }) => {
  const [date, setdate] = useState();
  console.log(data);
  const { Option } = Select;
  let formRef = React.createRef();

  const onFinish = (values) => {
    closeModal(false);
    formRef.current.resetFields();

    console.log(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const dateHandler = (date, dateString) => {
    setdate(dateString);
  };
  return (
    <div>
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
              pattern: new RegExp(/^[A-Za-z]+$/),
              message: "نام معتبر وارد کنید ",
            },
          ]}
        >
          <Input defaultValue={data.firstName} />
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
              pattern: new RegExp(/^[A-Za-z]+$/),
              message: "نام خانوادگی معتبر وارد کنید ",
            },
          ]}
        >
          <Input defaultValue={data.lastName} />
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
            // defaultValue={data.birthDate}
          />
        </Form.Item>
        <Form.Item
          label="مهارت"
          name="skills"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="مهارت های خود را اضافه کنید "
            // onChange={skillHandder}
            defaultValue={data.skills}
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
          className="flex flex-row  m-0"
        >
          <Button className=" m-2" type="primary" htmlType="submit">
            ثبت
          </Button>
          <Button
            type="primary"
            onClick={() => {
              formRef.current.resetFields();
              closeModal(false);
            }}
          >
            لغو
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserEdit;
