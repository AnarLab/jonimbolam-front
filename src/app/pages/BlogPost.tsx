import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";

export function BlogPost({ id }: { id?: string }) {
  void id;

  // Mock data for blog post
  const post = {
    title: "Bolalar uchun to'g'ri ovqatlanish qoidalari",
    image: "https://images.unsplash.com/photo-1632052999485-d748103abf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBkb2N0b3IlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzYyNTE4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Dr. Karimova Dilnoza",
    date: "10 Aprel 2026",
    category: "Pediatriya",
    content: `
      <p>Bolalar organizmining to'g'ri rivojlanishi uchun muvozanatli ovqatlanish juda muhim ahamiyatga ega. Pediatr sifatida ko'p yillik amaliyotimda bolalar ovqatlanishiga oid ko'plab savollar bilan duch kelganman.</p>

      <h2>1. Nonushta - kunning eng muhim taomi</h2>
      <p>Bolalar uchun to'q va sog'lom nonushta juda zarur. Nonushtada oqsillar, uglevodlar va vitaminlar bo'lishi kerak. Ideal nonushta:</p>
      <ul>
        <li>Tuxum yoki tvorog</li>
        <li>Don mahsulotlari (sho'rvalar, guruch)</li>
        <li>Meva yoki meva sharbati</li>
        <li>Sut mahsulotlari</li>
      </ul>

      <h2>2. Muntazam ovqatlanish tartibi</h2>
      <p>Bolalar kuniga 4-5 marta muntazam ovqatlanishi kerak. Bu ularning metabolizmini tartibga soladi va energiya darajasini barqaror saqlaydi.</p>

      <h2>3. Meva va sabzavotlar</h2>
      <p>Har kuni kamida 5 xil meva va sabzavot iste'mol qilish tavsiya etiladi. Ular vitaminlar va minerallar bilan boyitilgan.</p>

      <h2>4. Sut mahsulotlari</h2>
      <p>Suyaklar va tishlarning sog'lom rivojlanishi uchun kaltsiy zarur. Bolalar har kuni sut mahsulotlarini iste'mol qilishi kerak.</p>

      <h2>5. Shakar va tuzni cheklash</h2>
      <p>Ortiqcha shakar va tuz bolalar salomatligi uchun zararli. Shirinliklar va gazlangan ichimliklarni cheklang.</p>

      <h2>Xulosa</h2>
      <p>Sog'lom ovqatlanish odat - bu bolalaringizga beradigan eng yaxshi sovg'a. Erta yoshdan to'g'ri ovqatlanish odatlarini shakllantirish kelajakda ko'plab sog'liq muammolarining oldini oladi.</p>

      <p>Agar sizda bolangizning ovqatlanishiga oid savollar bo'lsa, klinikamizga murojaat qiling. Bizning pediatrlarimiz sizga individual maslahat berishga tayyor!</p>
    `,
  };

  const relatedPosts = [
    {
      id: "2",
      title: "Yurak sog'lig'ini saqlashning 10 ta usuli",
      image: "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMG1vZGVybnxlbnwxfHx8fDE3NzYyMzAxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Kardiologiya",
    },
    {
      id: "3",
      title: "Qandli diabetning dastlabki belgilari",
      image: "https://images.unsplash.com/photo-1655313719494-1d700d4aedd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzc2MjI3MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Endokrinologiya",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-teal-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Blogga qaytish
          </Link>
          <div className="inline-block bg-teal-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-teal-100">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Ulashish</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: "1.8",
            }}
          />
          <style>{`
            article h2 {
              font-size: 1.75rem;
              font-weight: 700;
              margin-top: 2rem;
              margin-bottom: 1rem;
              color: #0f766e;
            }
            article p {
              margin-bottom: 1.5rem;
              color: #374151;
            }
            article ul {
              margin-bottom: 1.5rem;
              padding-left: 2rem;
              list-style-type: disc;
            }
            article li {
              margin-bottom: 0.5rem;
              color: #374151;
            }
          `}</style>
        </div>
      </section>

      {/* Author Info */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1612944095914-33fd0a85fcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzYyMzc0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt={post.author}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">{post.author}</h3>
              <p className="text-gray-600 mb-3">
                Pediatr, 15 yillik tajribaga ega mutaxassis. Bolalar sog'lig'i va rivojlanishi bo'yicha ekspert.
              </p>
              <Link
                href="/doctors"
                className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
              >
                Batafsil →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">O'xshash maqolalar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <ImageWithFallback
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {relatedPost.category}
                    </div>
                    <h3 className="text-xl font-bold hover:text-teal-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
