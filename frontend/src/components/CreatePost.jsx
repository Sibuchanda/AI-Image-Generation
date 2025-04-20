import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import previweImg from "../assets/preview.png";
import { getRandomPrompts } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [loading, setLoading] = useState(false);
  const [generatingImage, setGeneratingImage] = useState(false);

  const handleSubmit = () => {};
  const handleChange = (e)=>{};
  const handleSurpriseMe=()=>{};
  
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Create a collection of imaginative and visually stunning images
          through DALL-E AI
        </p>
      </div>
      {/* Image create form */}
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., john doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A photograph of a cyborg exploring Tokyo at night, lomography..."
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
