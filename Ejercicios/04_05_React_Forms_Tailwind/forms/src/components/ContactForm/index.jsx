import React from "react";
import { useForms } from "../../hooks/useForms";
import Loader from '../Loader';
import Mail from '../Mail';
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";

const valorDefecto = {
  nombre: "",
  email: "",
  asunto: "",
  observaciones: "",
};

const validaciones = (form) => {
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,6}$/;
  let regexComments = /^.{1,255}$/;

  let errorsFormulario = {};

  if (!form.nombre.trim()) {
    errorsFormulario.nombre = "El campo es obligatorio";
  }
  if (!form.email.trim()) {
    errorsFormulario.email = "El campo es obligatorio";
  } else if (!regexEmail.test(form.email.trim())) {
    errorsFormulario.email =
      "El campo no tiene el formato de un correo electrónico";
  }
  if (!form.asunto.trim()) {
    errorsFormulario.asunto = "El campo es obligatorio";
  }
  if (!form.observaciones.trim()) {
    errorsFormulario.observaciones = "El campo es obligatorio";
  } else if (!regexComments.test(form.observaciones.trim())) {
    errorsFormulario.observaciones =
      "El campo debe tener mínimo 1 carácter y máximo 255 caracteres";
  }

  return errorsFormulario;
};

const ContactForm = () => {
  const { form, errores, cargando, bd, respuesta, manejadorCambios, manejadorSalidaInput, enviarFormulario } = useForms(
    valorDefecto,
    validaciones
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 text-gray-100 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-300">Formulario de Contacto</h1>
      <form onSubmit={enviarFormulario} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="flex items-center space-x-2 mb-1 text-gray-300">
              <FiUser className="text-xl text-blue-400" />
              <span>Nombre</span>
            </label>
            <input
              type="text"
              name="nombre"
              placeholder="Escribe tu nombre..."
              value={form.nombre}
              onChange={manejadorCambios}
              onBlur={manejadorSalidaInput}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-transform transform hover:scale-105 text-gray-100"
            />
            {errores.nombre && <p className="text-red-400 text-sm mt-1">{errores.nombre}</p>}
          </div>

          <div>
            <label className="flex items-center space-x-2 mb-1 text-gray-300">
              <FiMail className="text-xl text-blue-400" />
              <span>Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Escribe tu correo electrónico..."
              value={form.email}
              onChange={manejadorCambios}
              onBlur={manejadorSalidaInput}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-transform transform hover:scale-105 text-gray-100"
            />
            {errores.email && <p className="text-red-400 text-sm mt-1">{errores.email}</p>}
          </div>

          <div>
            <label className="flex items-center space-x-2 mb-1 text-gray-300">
              <FiMessageSquare className="text-xl text-blue-400" />
              <span>Asunto</span>
            </label>
            <input
              type="text"
              name="asunto"
              placeholder="Asunto..."
              value={form.asunto}
              onChange={manejadorCambios}
              onBlur={manejadorSalidaInput}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-transform transform hover:scale-105 text-gray-100"
            />
            {errores.asunto && <p className="text-red-400 text-sm mt-1">{errores.asunto}</p>}
          </div>
        </div>

        <div>
          <div>
            <label className="flex items-center space-x-2 mb-1 text-gray-300">
              <FiMessageSquare className="text-xl text-blue-400" />
              <span>Observaciones</span>
            </label>
            <textarea
              name="observaciones"
              placeholder="Escribe tus observaciones..."
              cols={50}
              rows={7}
              value={form.observaciones}
              onChange={manejadorCambios}
              onBlur={manejadorSalidaInput}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-transform transform hover:scale-105 text-gray-100"
            />
            {errores.observaciones && <p className="text-red-400 text-sm mt-1">{errores.observaciones}</p>}
          </div>
        </div>

        <div className="col-span-2 text-center mt-4">
          <button
            type="submit"
            disabled={cargando}
            className={`px-6 py-3 font-bold text-white rounded-lg transition-colors ${cargando ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
          >
            {cargando ? "Enviando..." : (
              <span className="flex items-center justify-center space-x-2">
                <FiSend />
                <span>Enviar</span>
              </span>
            )}
          </button>
        </div>
      </form>

      {cargando && <Loader />}
      {respuesta && <Mail datos={bd} />}
    </div>
  );
};

export default ContactForm;
