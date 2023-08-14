import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const SkillChart = () => {
  const [newUser, setNewUser] = useState({});

  let users = useSelector((state) => state.users.users);
  useEffect(() => {
    const handleAge = (arr) => {
      let arr2 = [];
      arr.forEach((x) => {
        x.skills.map((i) => {
          arr2.push(i);
        });
      });
      const counts = Array.from(
        arr2.reduce((r, c) => r.set(c, (r.get(c) || 0) + 1), new Map()),
        ([key, count]) => ({ key, count })
      );
      console.log(counts);
      setNewUser(counts);
    };
    handleAge(users);
  }, []);
  return (
    <div className="flex justify-center mt-10 w-full">
      {newUser.length !== 0 ? (
        <PieChart width={300} height={300}>
          <Pie
            data={newUser}
            dataKey="count"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      ) : (
        <h3> داده موجود نیست</h3>
      )}
    </div>
  );
};

export default SkillChart;
