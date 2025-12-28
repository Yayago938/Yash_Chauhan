import React, { useState } from 'react';
import { emailvalidate, passwordvalidate, usernamevalidate,gendervalidate,dobvalidate } from '../components/validation.js';
import Emoji from '../assets/login.jpg'
const baseurl="https://task4-authdb.onrender.com/auth";
const Signup = () => {
  const [signup, setSignup] = useState({
    name:'',
    email: '',
    password: '',
    city: '',
    gender: '',
    dob:'',
    bio:'',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
    username: '',
    dob: '',
    gender:'',
  });

  const validate = () => {
    let newErrors = {};

    // Email validation
    if (!signup.email) {
      newErrors.email = emailvalidate.required;
    } else if (!emailvalidate.pattern.value.test(signup.email)) {
      newErrors.email = emailvalidate.pattern.message;
    }

    // Password validation
    if (!signup.password) {
      newErrors.password = passwordvalidate.required;
    } else if (!passwordvalidate.pattern.value.test(signup.password)) {
      newErrors.password = passwordvalidate.pattern.message;
    } else if (signup.password.length < passwordvalidate.minLength.value) {
      newErrors.password = passwordvalidate.minLength.message;
    }

    // Username validation
    if (!signup.name) {
      newErrors.username = usernamevalidate.required;
    } else if (!usernamevalidate.pattern.value.test(signup.name)) {
      newErrors.username = usernamevalidate.pattern.message;
    } else if (signup.name.length < usernamevalidate.minLength.value) {
      newErrors.username = usernamevalidate.minLength.message;
    } else if (signup.name.length > usernamevalidate.maxLength.value) {
      newErrors.username = usernamevalidate.maxLength.message;
    }

    // Confirm password
    // if (signup.password !== signup.confirmpassword) {
    //   newErrors.confirmpassword = "The password does not match";
    // }
    if (!signup.gender) {
      newErrors.email = gendervalidate.required;
    } else if (!gendervalidate.pattern.value.test(signup.gender)) {
      newErrors.gender = gendervalidate.pattern.message;
    }

    if (!signup.dob) {
      newErrors.dob = dobvalidate.required;
    } else if (!dobvalidate.pattern.value.test(signup.dob)) {
      newErrors.dob = dobvalidate.pattern.message;
    }

    setError(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", signup);
      const response = await fetch(`${baseurl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signup),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Registration failed:', data);
      alert(data.message || 'Registration failed');
      return;
    }
    console.log("Successfull");
    alert("User added successfully");
      setSignup({ name:'',email: '', password: '', city:'', gender:'',dob:'',bio:'' });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[linear-gradient(to_bottom_right,#FFD2A8_0%,#B0D0E0_100%)] px-4 bg-center bg-cover" style={{ backgroundImage: `url(${Emoji})`}}>
    <div className=" bg-pink-100 w-[80%] h-fit flex flex-col gap-8 max-w-md rounded-3xl justify-center items-center">
      <div className="text-center text-6xl md:text-[16vh] h-fit text-shadow-2xs leading-[1.8] font-extrabold text-red-600  text-shadow-lg text-shadow-pink-300  ">
        Register
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-[2vh] items-center">
        
                <input
          type="text"
          value={signup.name}
          onChange={(e) => setSignup({ ...signup, name: e.target.value })}
          placeholder="Enter Name"
          className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 bg-gray-200 rounded-md"
        />
        {error.username && <p className="text-red-600 text-sm">{error.username}</p>} 
        {/* Username */}

        {/* <input
          type="text"
          value={signup.username}
          onChange={(e) => setSignup({ ...signup, username: e.target.value })}
          placeholder="Enter username"
          className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 bg-gray-200 rounded-md"
        />
        {error.username && <p className="text-red-600 text-sm">{error.username}</p>} */}

        {/* Email */}

        <input
          type="text"
          value={signup.email}
          onChange={(e) => setSignup({ ...signup, email: e.target.value })}
          placeholder="Enter email"
          className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 bg-gray-200 rounded-md"
        />
        {error.email && <p className="text-red-600 text-sm">{error.email}</p>}

        {/* Password */}

        <input
          type="password"
          value={signup.password}
          onChange={(e) => setSignup({ ...signup, password: e.target.value })}
          placeholder="Enter password"
          className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 bg-gray-200 rounded-md"
        />
        {error.password && <p className="text-red-600 text-sm">{error.password}</p>}

        {/* Confirm Password */}

        {/* <input
          type="password"
          value={signup.confirmpassword}
          onChange={(e) => setSignup({ ...signup, confirmpassword: e.target.value })}
          placeholder="Confirm password"
          className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 bg-gray-200 rounded-md"
        />
        {error.confirmpassword && <p className="text-red-600 text-sm">{error.confirmpassword}</p>} */}

          <input
          type="text"
          value={signup.city}
          onChange={(e) => setSignup({ ...signup, city: e.target.value })}
          placeholder="Enter city"
          className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 bg-gray-200 rounded-md"
        />
        {/* {error.password && <p className="text-red-600 text-sm">{error.password}</p>} */}

        <input
          type="text"
          value={signup.gender}
          onChange={(e) => setSignup({ ...signup, gender: e.target.value })}
          placeholder="Enter gender"
          className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 bg-gray-200 rounded-md"
        />
        {error.gender && <p className="text-red-600 text-sm">{error.gender}</p>}

        <input
          type="text"
          value={signup.dob}
          onChange={(e) => setSignup({ ...signup, dob: e.target.value })}
          placeholder="Enter dob"
          className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 bg-gray-200 rounded-md"
        />
        {error.dob && <p className="text-red-600 text-sm">{error.dob}</p>}
          <input
          type="text"
          value={signup.bio}
          onChange={(e) => setSignup({ ...signup, bio: e.target.value })}
          placeholder="Enter bio"
          className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 bg-gray-200 rounded-md"
        />
        <input
          type="submit"
          value="Submit"
          className="cursor-pointer w-[60%] py-3 rounded-4xl bg-gradient-to-r from-green-600 via-green-400 to-green-400 text-white font-semibold text-lg shadow-md hover:from-green-600 hover:via-green-500 hover:to-green-400 transition transform duration-150 active:scale-95"
        />
      </form>
    </div>
    </div>
  );
};

export default Signup;
