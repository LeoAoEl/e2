import { useState } from "react";
import { motion } from "framer-motion";

export default function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
    motivo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // !: Handle form submission logic here
    console.log(formData);
    alert("¡Gracias por contactarnos!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      id="formulario-contacto"
      className="relative w-full py-20 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1571513151379-9612cf354937?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-bold text-center mb-4">
              ¿Interesado?
            </h2>
            <p className="text-xl text-gray-200">
              ¡Deja tu información y nos pondremos en contacto contigo lo más
              pronto posible!
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="nombre" className="block font-medium">
                  Nombre (obligatorio)
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="apellido" className="block font-medium">
                  Apellido
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium">
                Correo electrónico (obligatorio)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="mensaje" className="block font-medium">
                Mensaje (obligatorio)
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
              />
            </div>

            <div className="space-y-3">
              <label className="block font-medium">
                Motivo de Contacto (obligatorio)
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="motivo"
                    value="Información general"
                    required
                    checked={formData.motivo === "Información general"}
                    onChange={handleChange}
                    className="w-5 h-5 text-secondary focus:ring-secondary"
                  />
                  <span>Información general</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="motivo"
                    value="Interés en servicios"
                    required
                    checked={formData.motivo === "Interés en servicios"}
                    onChange={handleChange}
                    className="w-5 h-5 text-secondary focus:ring-secondary"
                  />
                  <span>Interés en servicios</span>
                </label>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="px-8 py-3 cursor-pointer text-2xl bg-secondary text-white font-bold rounded-full hover:bg-secondary-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Enviar
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center space-y-2"
          >
            <p className="text-secondary font-bold text-lg">¡Muchas gracias!</p>
            <p className="text-gray-300">
              Nos pondremos en contacto enseguida.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
