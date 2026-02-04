import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateUser } from "../redux/slice/slice";
import "./css/profile.css";

export default function Profile() {
  const user = useSelector((state) => state.products.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [job, setJob] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ name, surname, job }));
  };
  return (
    <>
      <div className="profile-container">
        <button onClick={() => navigate("/")} className="button-back">
          Back to products list
        </button>
        <div className="profile-form">
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </label>
            <label>
              Surname
              <input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Surname"
              />
            </label>
            <label>
              Job
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                placeholder="Job"
              />
            </label>
            <button type="submit">Save changes</button>
          </form>
        </div>
      </div>
    </>
  );
}
