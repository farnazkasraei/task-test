import React from "react";
import { Tabs } from "antd";
import AgeChart from "../views/AgeChart";
import SkillChart from "../views/SkillChart";

const UserCharts = () => {
  const items = [
    {
      key: "1",
      label: ` نمودار سن  `,
      children: <AgeChart />,
    },
    {
      key: "2",
      label: ` نمودار مهارت  `,
      children: <SkillChart />,
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default UserCharts;
