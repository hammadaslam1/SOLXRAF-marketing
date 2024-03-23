import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        alert(formData.content)
      await axios.get('mongodb://localhost:27017/solXraf', formData); // Sending data to backend route '/api/posts'
      // Optionally, you can do something after successful submission, like showing a success message or redirecting the user
      alert("done!");
    } catch (error) {
        console.error("Error:", error);
        alert(error);
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
        ></textarea>
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      {/* </form> */}
    </>
  );
};

export default Admin;
