import { useState } from "react";
import { motion } from "framer-motion";

export default function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
    motivo: "",
    fechaNacimiento: "",
    ciudad: "",
    codigoPostal: "",
    servicioTipo: "",
    subServicio: "",
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
            <div className="space-y-6">
              {/* Motivo de Contacto - Always visible initially */}
              <div className="space-y-3">
                <label className="block font-medium text-xl">
                  Motivo de Contacto (obligatorio)
                </label>
                <div className="flex flex-wrap gap-4">
                  {["Información general", "Interés en servicios", "Otro"].map(
                    (option) => (
                      <label
                        key={option}
                        className={`flex items-center space-x-3 cursor-pointer px-4 py-2 rounded-full border transition-all ${
                          formData.motivo === option
                            ? "bg-secondary border-secondary text-white"
                            : "bg-white/10 border-white/30 hover:bg-white/20"
                        }`}
                      >
                        <input
                          type="radio"
                          name="motivo"
                          value={option}
                          required
                          checked={formData.motivo === option}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <span>{option}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Flow 1: Información General or Otro */}
              {(formData.motivo === "Información general" ||
                formData.motivo === "Otro") && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
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
                        className="w-full px-4 py-3 rounded-lg bg-white/90 text-primary-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="apellido" className="block font-medium">
                        Apellido (obligatorio)
                      </label>
                      <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        required
                        value={formData.apellido}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/90 text-primary-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 rounded-lg bg-white/90 text-primary-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telefono" className="block font-medium">
                        Teléfono (obligatorio)
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/90 text-primary-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="block font-medium">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/90 text-primary-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="px-8 py-3 cursor-pointer text-2xl bg-secondary text-white font-bold rounded-full hover:bg-secondary-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      Enviar
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Flow 2: Interés en servicios */}
              {formData.motivo === "Interés en servicios" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-6"
                >
                  {/* Service Type Selection */}
                  <div className="space-y-3">
                    <label className="block font-medium text-lg">
                      Tipo de Seguro
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Seguros empresariales/colectivos",
                        "Seguros individuales",
                      ].map((type) => (
                        <label
                          key={type}
                          className={`flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.servicioTipo === type
                              ? "bg-white text-secondary border-white font-bold"
                              : "border-white/30 hover:bg-white/10"
                          }`}
                        >
                          <input
                            type="radio"
                            name="servicioTipo"
                            value={type}
                            checked={formData.servicioTipo === type}
                            onChange={handleChange}
                            className="hidden"
                          />
                          <span>{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Sub-services Selection */}
                  {formData.servicioTipo && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-3"
                    >
                      <label className="block font-medium text-lg">
                        Especifique el servicio
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {(formData.servicioTipo ===
                        "Seguros empresariales/colectivos"
                          ? [
                              "Gastos médicos mayores",
                              "Vida",
                              "Hombre clave",
                              "Intersocios",
                            ]
                          : [
                              "Gastos médicos mayores",
                              "Protección",
                              "Ahorro",
                              "Segubeca",
                              "Retiro",
                            ]
                        ).map((sub) => (
                          <label
                            key={sub}
                            className={`px-4 py-2 rounded-lg border cursor-pointer transition-all ${
                              formData.subServicio === sub
                                ? "bg-secondary border-secondary text-white"
                                : "bg-white/10 border-white/30 hover:bg-white/20"
                            }`}
                          >
                            <input
                              type="radio"
                              name="subServicio"
                              value={sub}
                              checked={formData.subServicio === sub}
                              onChange={handleChange}
                              className="hidden"
                            />
                            <span>{sub}</span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Contact Details for Services Flow */}
                  {formData.subServicio && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-6 pt-6 border-t border-white/20"
                    >
                      <h3 className="text-2xl font-bold">Datos de Contacto</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="nombreCompleto"
                            className="block font-medium"
                          >
                            Nombre completo (obligatorio)
                          </label>
                          <input
                            type="text"
                            id="nombreCompleto"
                            name="nombre"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/90 text-primary-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="telefonoServicio"
                            className="block font-medium"
                          >
                            Teléfono (obligatorio)
                          </label>
                          <input
                            type="tel"
                            id="telefonoServicio"
                            name="telefono"
                            required
                            value={formData.telefono}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/90 text-primary-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="emailServicio"
                            className="block font-medium"
                          >
                            Correo (opcional)
                          </label>
                          <input
                            type="email"
                            id="emailServicio"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/90 text-primary-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="fechaNacimiento"
                            className="block font-medium"
                          >
                            Fecha de nacimiento (obligatorio)
                          </label>
                          <input
                            type="date"
                            id="fechaNacimiento"
                            name="fechaNacimiento"
                            required
                            value={formData.fechaNacimiento}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/90 text-primary-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="ciudad" className="block font-medium">
                            Ciudad (obligatorio)
                          </label>
                          <input
                            type="text"
                            id="ciudad"
                            name="ciudad"
                            required
                            value={formData.ciudad}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/90 text-primary-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="codigoPostal"
                            className="block font-medium"
                          >
                            Código Postal (obligatorio)
                          </label>
                          <input
                            type="text"
                            id="codigoPostal"
                            name="codigoPostal"
                            required
                            value={formData.codigoPostal}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-white/90 text-primary-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                          />
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
                    </motion.div>
                  )}
                </motion.div>
              )}
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
