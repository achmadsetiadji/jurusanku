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
    iconAnimation: 'group-hover:scale-110 group-hover:rotate-6',
    value: '10,000+',
    label: 'Pengguna Aktif',
    description: 'Siswa sudah menggunakan JurusanKu',
  },
  {
    icon: GraduationCap,
    iconAnimation: 'group-hover:animate-bounce',
    value: '55',
    label: 'Jurusan',
    description: 'Pilihan jurusan populer tersedia',
  },
  {
    icon: Star,
    iconAnimation: 'group-hover:rotate-180',
    value: '63',
    label: 'Pertanyaan',
    description: 'Asesmen komprehensif & mendalam',
  },
  {
    icon: TrendingUp,
    iconAnimation: 'group-hover:scale-125 group-hover:-translate-y-1',
    value: '97%',
    label: 'Akurasi',
    description: 'Tingkat kecocokan rekomendasi',
  },
];

interface TestimonialsProps {
  scrollY?: number;
}

const Testimonials = ({ scrollY = 0 }: TestimonialsProps) => {
  return (
    <section className="relative py-20 bg-muted/30 overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-10 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${(scrollY - 600) * 0.1}px)` }}
      />
      <div 
        className="absolute bottom-10 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${(scrollY - 600) * -0.08}px)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Section */}
        <div 
          className="mb-20"
          style={{ transform: `translateY(${(scrollY - 600) * 0.02}px)` }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-text-shimmer">
              Dipercaya Ribuan Siswa Indonesia
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              JurusanKu telah membantu banyak siswa menemukan jurusan kuliah yang tepat
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
              <Card 
                key={stat.label}
                className="group text-center border-none bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                    <StatIcon className={`w-7 h-7 text-primary transition-all duration-500 group-hover:text-primary-foreground ${stat.iconAnimation}`} />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="font-semibold mb-1 transition-colors duration-300 group-hover:text-primary">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div style={{ transform: `translateY(${(scrollY - 800) * 0.015}px)` }}>
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
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-3 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 opacity-10 transition-all duration-500 group-hover:opacity-30 group-hover:scale-110">
                    <Quote className="w-12 h-12 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                      <span className="text-sm font-semibold text-primary transition-colors duration-500 group-hover:text-primary-foreground">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm transition-colors duration-300 group-hover:text-primary">{testimonial.name}</p>
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
