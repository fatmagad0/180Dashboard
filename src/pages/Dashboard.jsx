import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
  .get("https://fake-form.onrender.com/api/students")
  .then((res) => {
    setData(res.data.data);
    setLoading(false);
  })
  .catch((err) => {
    console.error("Error fetching data:", err);
    setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  const filtered = data.slice(0,5);

  return (
    <div className="flex flex-col mt-24 px-7 space-y-1">
      <h1 className="text-9xl">Hello!</h1>
      <p className="text-2xl">Welcome to the Dashboard</p>

      <table className="w-full border-gray-300 border-t mt-7 text-center">
        <thead>
          <tr>
            <th className="p-2">Id</th>
            <th className="p-2">Name</th>
            <th className="p-2">Age</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Level</th>
            <th className="p-2">University</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((user) => (
            <tr key={user._id} className="border-t border-b border-gray-300">
              <td className="p-2">{user._id}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.age}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.phone}</td>
              <td className="p-2">{user.level}</td>
              <td className="p-2">{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center">
        <button onClick={() => navigate("/data")}
          className="mt-6 bg-red-900 text-white text-2xl py-2 px-3 min-w-fit rounded">
          View All Data
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
