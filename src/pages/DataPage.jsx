import { useEffect, useState } from "react";
import axios from "axios";

function DataPage() {

  return (
    <div className="mt-4 px-7">
      <h1 className="text-4xl mb-6 font-bold">Data</h1>

      <table className="w-full border text-left">
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
            <tr key={user._id} className="border-t">
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
                  onClick={() => alert("Edit not implemented")}
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
