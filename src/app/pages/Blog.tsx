import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";

export function Blog() {
  const blogPosts = [
    {
      id: "1",
      title: "Bolalar uchun to'g'ri ovqatlanish qoidalari",
      excerpt: "Farzandingizning sog'lig'i va rivojlanishi uchun to'g'ri ovqatlanish juda muhim. Ushbu maqolada pediatrlarimizning maslahatlari bilan tanishing.",
      image: "https://images.unsplash.com/photo-1632052999485-d748103abf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBkb2N0b3IlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzYyNTE4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "Dr. Karimova Dilnoza",
      date: "10 Aprel 2026",
      category: "Pediatriya",
    },
    {
      id: "2",
      title: "Yurak sog'lig'ini saqlashning 10 ta usuli",
      excerpt: "Yurak-qon tomir kasalliklari oldini olish uchun oddiy ammo samarali usullar. Kardiologimizning professional maslahatlari.",
      image: "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMG1vZGVybnxlbnwxfHx8fDE3NzYyMzAxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "Dr. Tursunov Jamshid",
      date: "8 Aprel 2026",
      category: "Kardiologiya",
    },
    {
      id: "3",
      title: "Qandli diabetning dastlabki belgilari",
      excerpt: "Qandli diabetni erta bosqichda aniqlash davolashni osonlashtiradi. Endokrinologimiz aytadigan asosiy belgilar.",
      image: "https://images.unsplash.com/photo-1655313719494-1d700d4aedd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzc2MjI3MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "Dr. Azimova Sevara",
      date: "5 Aprel 2026",
      category: "Endokrinologiya",
    },
    {
      id: "4",
      title: "Har yili o'tkazish kerak bo'lgan tibbiy ko'riklar",
      excerpt: "Sog'ligingizni saqlash uchun muntazam tibbiy ko'riklar o'tkazish zarur. Qaysi yoshda qanday ko'riklar kerak?",
      image: "https://images.unsplash.com/photo-1612944095914-33fd0a85fcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzYyMzc0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "Dr. Aliyev Rustam",
      date: "1 Aprel 2026",
      category: "Terapiya",
    },
    {
      id: "5",
      title: "Ko'z sog'lig'ini saqlash: Zamonaviy ekranlar davri",
      excerpt: "Kompyuter va telefon ekranlarining ko'zga ta'siri va uni qanday kamaytirish mumkin. Oftalmologimizning maslahatlari.",
      image: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc3NjIwNjgxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "Dr. Mirzayev Otabek",
      date: "28 Mart 2026",
      category: "Oftalmologiya",
    },
    {
      id: "6",
      title: "Immunitentni mustahkamlash: Bahor faslida",
      excerpt: "Bahor fasli kelishi bilan immunitentni qanday mustahkamlash mumkin? Terapevtimizning amaliy maslahatlari.",
      image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzYyNTE4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "Dr. Aliyev Rustam",
      date: "25 Mart 2026",
      category: "Terapiya",
    },
  ];

  const categories = ["Hammasi", "Pediatriya", "Kardiologiya", "Terapiya", "Endokrinologiya", "Oftalmologiya"];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Tibbiyot blogi</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Sog'liqni saqlash, kasalliklarni oldini olish va sog'lom turmush tarzi haqida foydali maqolalar
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-colors ${
                  index === 0
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <Link href={`/blog/${blogPosts[0].id}`}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow grid grid-cols-1 lg:grid-cols-2">
                <ImageWithFallback
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                    {blogPosts[0].category}
                  </div>
                  <h2 className="text-3xl font-bold mb-4 hover:text-teal-600 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-teal-600 font-semibold">
                    O'qish <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3 hover:text-teal-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Yangi maqolalardan xabardor bo'ling</h2>
          <p className="text-gray-600 mb-8">
            Email manzilingizni qoldiring va eng so'nggi tibbiyot yangiliklari haqida birinchi bo'lib bilib oling
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email manzilingiz"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
            />
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
              Obuna bo'lish
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
