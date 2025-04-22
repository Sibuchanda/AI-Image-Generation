import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from "./assets/logo.png";
import { FaHome, FaEnvelope, FaPlusCircle } from "react-icons/fa";
import './App.css';

import Contact from "./components/Contact";

import { Home, CreatePost } from "./components";

function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      <BrowserRouter>
      <header className="responsive-header w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-gray-200 shadow-sm">

          <Link to="/">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="logo"
                className="w-10 h-10 object-contain logo-small"
              />
              <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 bg-clip-text text-transparent tracking-wide text-small">
                ChitrakaarAI
              </p>
            </div>
          </Link>

          <nav className="flex items-center gap-6 text-gray-700 font-medium">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              <FaHome size={20}/>
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              <FaEnvelope size={20}/>
              <span className="hidden sm:inline">Contact</span>
            </Link>
            <Link
              to="/create-post"
              className="flex items-center gap-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all shadow-md"
            >
              <FaPlusCircle size={20}/>
              <span className="hidden sm:inline">Create</span>
            </Link>
          </nav>
        </header>

        <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="mt-16 border-t pt-6 text-center text-sm text-gray-500 mb-5">
          <p>
            &copy; {new Date().getFullYear()} ChitrakaarAI. All rights reserved.
          </p>
          <p className="mt-1">
            Created by{" "}
            <span className="font-semibold text-blue-600">Sibu Chanda</span>
          </p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
