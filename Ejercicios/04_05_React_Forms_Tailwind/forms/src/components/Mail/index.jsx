import React from "react";

const Mail = ({ datos }) => {
  const { nombre = '', asunto = '', email = '', observaciones = '' } = datos;

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
      <div className="email-header mb-4">
        <h2 className="text-2xl font-semibold text-blue-400">{asunto}</h2>
        <p className="email-from text-gray-300 mt-2">
          <span className="font-bold">De: </span>
          <span>{nombre}</span> 
          <span className="text-gray-500"> ({email})</span>
        </p>
      </div>
      <div className="email-body mt-4 bg-gray-700 p-4 rounded-lg shadow-inner border border-gray-600">
        <p className="text-gray-300 leading-relaxed">{observaciones}</p>
      </div>
    </div>
  );
};

export default Mail;
