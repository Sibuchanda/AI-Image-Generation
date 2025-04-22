import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import previweImg from "../assets/preview.png";
import { getRandomPrompts } from "../utils";
import { FormField, Loader } from "../components";
import { toast } from "react-toastify";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [loading, setLoading] = useState(false);
  const [generatingImg, setGeneratingImg] = useState(false);

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await axios.post("http://localhost:8080/generateImage", {
          prompt: form.prompt,
        });
        const { resultImg } = response.data;
        setForm({ ...form, photo: resultImg });
        toast.success("Image generated successfully");
      } catch (err) {
        toast.error("Error occurs while generating image")
      } finally {
        setGeneratingImg(false);
      }
    } else {
      toast.warn("Please enter a prompt to generate an image.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/postImage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        toast.success("Image posted successfully")
        navigate('/');
      } catch (err) {
        toast.error("Error occurs while posting images")
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please generate an image with proper details");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompts(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center">
        <h1 className="font-extrabold text-blue-400 text-4xl sm:text-5xl">Create an AI Image</h1>
        <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Unleash your imagination with stunning visuals powered by ClipDrop AI.
        </p>
      </div>

      <form className="mt-12 bg-white shadow-xl rounded-2xl p-8 space-y-6" onSubmit={handleSubmit}>
        <FormField
          labelName="Your Name"
          type="text"
          name="name"
          placeholder="Ex. John Doe"
          value={form.name}
          handleChange={handleChange}
        />

        <FormField
          labelName="Prompt"
          type="text"
          name="prompt"
          placeholder="A cow in a jungle..."
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
        />

        <div className="relative bg-gray-100 border border-gray-300 rounded-lg w-full h-80 flex justify-center items-center">
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              className="w-full h-full object-contain rounded-md"
            />
          ) : (
            <img
              src={previweImg}
              alt="preview"
              className="w-1/2 h-1/2 object-contain opacity-40"
            />
          )}
          {generatingImg && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center rounded-lg">
              <Loader />
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={generateImage}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow"
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <p className="text-gray-600 mb-3">Once you're happy with the image, share it with the community:</p>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow w-full sm:w-auto"
          >
            {loading ? 'Sharing...' : 'Share with the Community'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
