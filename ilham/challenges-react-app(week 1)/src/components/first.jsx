import React from "react";
import Navbar from "./fragments/navbar";
import Navigation from "./fragments/butnav";
import Example from "./fragments/crslnw";

const First = () => {
  return (
    <div className="flex flex-col h-screen bg-cover bg-center " style={{backgroundImage: "url('/images/schlcls.png')" }}>
      <div className="flex flex-col items-center justify-center bg-black">
        <Navbar />
      </div>
  <div className="flex flex-1 flex-col ">
  <h1 className="text-4xl font-mono font-bold mt-4 text-white">
          Selamat datang di Learnsite😁
        </h1>
      <Example/>
  </div>
      <Navigation/>
    </div>
  );
};

export default First;