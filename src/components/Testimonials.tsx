import { Card, CardContent } from '@/components/ui/card';
import { Users, GraduationCap, Star, TrendingUp, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rizka Amelia',
    role: 'Mahasiswa Teknik Informatika',
    avatar: 'RA',
    content: 'JurusanKu membantu saya menemukan passion di bidang teknologi. Sekarang saya sudah kuliah di jurusan impian!',
    rating: 5,
  },
  {
    name: 'Dimas Pratama',
    role: 'Mahasiswa Kedokteran',
    avatar: 'DP',
    content: 'Awalnya bingung antara Kedokteran dan Farmasi. Hasil asesmen sangat akurat dan membantu keputusan saya.',
    rating: 5,
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Mahasiswa Psikologi',
    avatar: 'SN',
    content: 'Metode Certainty Factor yang digunakan sangat ilmiah. Rekomendasi yang diberikan sesuai dengan minat saya.',
    rating: 5,
  },
];

const stats = [
  {
    icon: Users,
    value: '5,000+',
    label: 'Pengguna Aktif',
    description: 'Siswa sudah menggunakan JurusanKu',
  },
  {
    icon: GraduationCap,
    value: '16',
    label: 'Jurusan',
    description: 'Pilihan jurusan yang tersedia',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Rating',
    description: 'Kepuasan pengguna',
  },
  {
    icon: TrendingUp,
    value: '95%',
    label: 'Akurasi',
    description: 'Tingkat kecocokan rekomendasi',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dipercaya Ribuan Siswa Indonesia
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              JurusanKu telah membantu banyak siswa menemukan jurusan kuliah yang tepat
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="text-center border-none bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 pb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="font-semibold mb-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Testimoni dari siswa yang sudah menggunakan JurusanKu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-12 h-12 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
