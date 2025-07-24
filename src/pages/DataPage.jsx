import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DataPage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://fake-form.onrender.com/api/students")
      .then((res) => setData(res.data.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`https://fake-form.onrender.com/api/students/${id}`)
      .then(() => {
        setData(data.filter((user) => user._id !== id));
      })
      .catch((err) => console.error("Error deleting data:", err));
  };
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="mt-4 px-7">
      <h1 className="text-4xl mb-6 font-bold">Data</h1>

      <table className="w-full border-t border-gray-300 text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Age</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Level</th>
            <th className="p-2">University</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id} className="border-b border-gray-300">
              <td className="p-2">{user._id}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.age}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.phone}</td>
              <td className="p-2">{user.level}</td>
              <td className="p-2">{user.university}</td>
              <td className="p-2 space-x-2">
                <button
                  className="bg-green-500 px-3 py-1 rounded text-white"
                  onClick={() => handleEdit(user._id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 px-3 py-1 rounded text-white"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataPage;
