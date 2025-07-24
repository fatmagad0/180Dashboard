import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    level: "",
    university: "",
  });

  useEffect(() => {
    axios
      .get(`https://fake-form.onrender.com/api/students/${id}`)
      .then((res) => setUser(res.data.data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://fake-form.onrender.com/api/students/${id.toString()}`, user)
      .then(() => {
      alert("Updated");
      navigate("/data");
    })
    .catch((err)=> console.log(err));
  };

  return (
    <div className="mt-7 px-7 w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Name</label>
          <input
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-900"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Email</label>
          <input
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-900"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Phone</label>
          <input
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-900"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Age</label>
          <input
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-900"
            value={user.age}
            onChange={(e) => setUser({ ...user, age: e.target.value })}
            type="number"
            min="0"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Level</label>
          <input
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-900"
            value={user.level}
            onChange={(e) => setUser({ ...user, level: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1 font-medium">University</label>
          <input
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-900"
            value={user.university}
            onChange={(e) => setUser({ ...user, university: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col text-2xl gap-4 mt-6">
          <button
            type="submit"
            className="bg-red-900 hover:bg-red-800 text-white px-6 py-2 rounded transition w-full"
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => navigate("/data")}
            className="bg-red-900 hover:bg-red-800 text-white px-6 py-2 rounded transition w-full"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
export default Edit;
