import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { Award, GraduationCap, Briefcase } from "lucide-react";

export function Doctors() {
  const doctors = [
    {
      name: "Dr. Aliyev Rustam",
      specialty: "Bosh shifokor, Terapevt",
      image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzYyNTE4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      experience: "20 yillik tajriba",
      education: "Toshkent Tibbiyot Akademiyasi",
      achievements: "Tibbiyot fanlari nomzodi, 100+ maqola muallifi",
    },
    {
      name: "Dr. Karimova Dilnoza",
      specialty: "Pediatr",
      image: "https://images.unsplash.com/photo-1612944095914-33fd0a85fcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzYyMzc0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      experience: "15 yillik tajriba",
      education: "Sankt-Peterburg Pediatriya Instituti",
      achievements: "Bolalar sog'ligi bo'yicha mutaxassis, 5000+ davolangan bemor",
    },
    {
      name: "Dr. Tursunov Jamshid",
      specialty: "Kardiolog",
      image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzYyNTE4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      experience: "18 yillik tajriba",
      education: "Rossiya Kardiologiya Markazi",
      achievements: "Yurak-qon tomir kasalliklari bo'yicha ekspert",
    },
    {
      name: "Dr. Azimova Sevara",
      specialty: "Endokrinolog",
      image: "https://images.unsplash.com/photo-1612944095914-33fd0a85fcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzYyMzc0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      experience: "12 yillik tajriba",
      education: "Germaniya Endokrinologiya Instituti",
      achievements: "Diabet va gormonal kasalliklar mutaxassisi",
    },
    {
      name: "Dr. Mirzayev Otabek",
      specialty: "Oftalmolog",
      image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzYyNTE4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      experience: "10 yillik tajriba",
      education: "MNTK Oftalmologiya instituti",
      achievements: "Ko'z kasalliklari bo'yicha sertifikatlangan mutaxassis",
    },
    {
      name: "Dr. Rahimova Nigora",
      specialty: "Laborant-shifokor",
      image: "https://images.unsplash.com/photo-1612944095914-33fd0a85fcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzYyMzc0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      experience: "14 yillik tajriba",
      education: "Toshkent Farmatsevtika Instituti",
      achievements: "Laboratoriya diagnostikasi bo'yicha ekspert",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Bizning shifokorlar</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Malakali va tajribali mutaxassislar jamoasi sizning sog'ligingiz uchun g'amxo'rlik qiladi
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-80">
                  <ImageWithFallback
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
                    <p className="text-teal-300">{doctor.specialty}</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Tajriba</p>
                      <p className="font-medium">{doctor.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Ta'lim</p>
                      <p className="font-medium">{doctor.education}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Yutuqlar</p>
                      <p className="font-medium">{doctor.achievements}</p>
                    </div>
                  </div>
                  <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors">
                    Qabulga yozilish
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nima uchun bizni tanlaysiz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Yuqori malaka</h3>
              <p className="text-gray-600">
                Barcha shifokorlarimiz xalqaro sertifikatlar va yuqori malakaga ega
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Katta tajriba</h3>
              <p className="text-gray-600">
                O'rtacha 15 yillik amaliy tajribaga ega professional mutaxassislar
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Doimiy rivojlanish</h3>
              <p className="text-gray-600">
                Shifokorlarimiz muntazam ravishda malaka oshirish kurslarida qatnashadilar
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
