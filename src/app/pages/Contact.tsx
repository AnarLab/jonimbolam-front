"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Rahmat! Tez orada siz bilan bog'lanamiz.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Biz bilan bog'laning</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Savollaringiz bormi yoki qabulga yozilmoqchimisiz? Biz yordam berishga tayyormiz!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Aloqa ma'lumotlari</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-gray-600">+998 90 123 45 67</p>
                    <p className="text-gray-600">+998 71 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@jonimbolam.uz</p>
                    <p className="text-gray-600">reception@jonimbolam.uz</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Manzil</h3>
                    <p className="text-gray-600">
                      O'zbekiston Respublikasi, Toshkent shahri
                      <br />
                      Amir Temur ko'chasi, 108-uy
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ish vaqti</h3>
                    <p className="text-gray-600">Dushanba - Juma: 08:00 - 20:00</p>
                    <p className="text-gray-600">Shanba: 09:00 - 18:00</p>
                    <p className="text-gray-600">Yakshanba: 09:00 - 15:00</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Xarita</p>
                    <p className="text-sm">Amir Temur ko'chasi, 108</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Qabulga yozilish</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      To'liq ismingiz *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      placeholder="Ismingizni kiriting"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon raqami *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      placeholder="+998 90 123 45 67"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Xizmat turi *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                    >
                      <option value="">Xizmatni tanlang</option>
                      <option value="pediatriya">Pediatriya</option>
                      <option value="terapiya">Terapiya</option>
                      <option value="kardiologiya">Kardiologiya</option>
                      <option value="laboratoriya">Laboratoriya</option>
                      <option value="endokrinologiya">Endokrinologiya</option>
                      <option value="oftalmologiya">Oftalmologiya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kerakli sana *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Qo'shimcha ma'lumot
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none resize-none"
                      placeholder="Shikoyatlaringiz yoki savollaringizni yozing"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Yuborish
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Shoshilinch yordam kerakmi?</h2>
          <p className="text-xl mb-6">24/7 tez tibbiy yordam xizmati</p>
          <a
            href="tel:+998901234567"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors"
          >
            <Phone className="w-6 h-6" />
            +998 90 123 45 67
          </a>
        </div>
      </section>
    </div>
  );
}
