import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AgeChart = () => {
  const [newUser, setNewUser] = useState({});
  let users = useSelector((state) => state.users.users);
  useEffect(() => {
    const handleAge = (arr, key) => {
      let arr2 = [];

      arr.forEach((x) => {
        if (
          arr2.some((val) => {
            return val[key] == x[key];
          })
        ) {
          arr2.forEach((k) => {
            if (k[key] === x[key]) {
              k["occurrence"]++;
            }
          });
        } else {
          let a = {};
          a[key] = x[key];
          a["occurrence"] = 1;
          arr2.push(a);
        }
      });

      setNewUser(arr2);
    };
    handleAge(users, "age");
  }, []);

  return (
    <div className="flex justify-center mt-10 w-full">
      {newUser.length !== 0 ? (
        <BarChart
          width={900}
          height={300}
          data={newUser}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="occurrence" fill="#8884d8" />
        </BarChart>
      ) : (
        <h3> داده موجود نیست</h3>
      )}
    </div>
  );
};

export default AgeChart;
