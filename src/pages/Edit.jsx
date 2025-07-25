import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Validation from "../utils/Validation";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ type: "", text: "" });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Validation),
  });

  useEffect(() => {
    axios
      .get(`https://fake-form.onrender.com/api/students/${id}`)
      .then((res) => {
        const user = res.data.data;
        setValue("name", user.name);
        setValue("email", user.email);
        setValue("phone", user.phone);
        setValue("age", user.age);
        setValue("level", user.level);
        setValue("university", user.university);
        setLoading(false);
      });
  }, [id, setValue]);

  const onSubmit = (data) => {
    setLoading(true);
    axios
  .patch(`https://fake-form.onrender.com/api/students/${id}`, data)
  .then(() => {
    setMessage({ type: "success", text: "Updated successfully" });
    setTimeout(() => navigate("/data"), 1500);
  })
  .catch(() => {
    setMessage({ type: "error", text: "Update failed, try again" });
  })
  .finally(() => setLoading(false)

      
  );}

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  
  return (
    <div className="mt-7 px-7 w-full">
      {message.text && (
      <div
        className={`p-3 mb-4 rounded text-sm border flex items-center gap-2 ${
          message.type === "success"
            ? "bg-green-100 text-green-800 border-green-300"
            : "bg-red-100 text-red-800 border-red-300"
        }`}
      >
        <span>{message.text}</span>
        <button onClick={() => setMessage({ type: "", text: "" })} className="ml-auto text-xl font-bold">
          ×
        </button>
      </div>
    )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Name</label>
          <input
            {...register("name")}
            className="border border-gray-300 rounded p-2 w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Email</label>
          <input
            {...register("email")}
            type="email"
            className="border border-gray-300 rounded p-2 w-full"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Phone</label>
          <input
            {...register("phone")}
            className="border border-gray-300 rounded p-2 w-full"
          />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Age</label>
          <input
            {...register("age")}
            type="number"
            className="border border-gray-300 rounded p-2 w-full"
          />
          {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Level</label>
          <input
            {...register("level")}
            type="number"
            className="border border-gray-300 rounded p-2 w-full"
          />
          {errors.level && <p className="text-red-500">{errors.level.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">University</label>
          <input
            {...register("university")}
            className="border border-gray-300 rounded p-2 w-full"
          />
          {errors.university && (
            <p className="text-red-500">{errors.university.message}</p>
          )}
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
