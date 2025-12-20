import { Question, Major } from '@/lib/certaintyFactor';

export const majors: Major[] = [
  {
    id: 'teknik-informatika',
    name: 'Teknik Informatika',
    description: 'Mempelajari pengembangan perangkat lunak, algoritma, kecerdasan buatan, dan sistem komputer.',
    careers: ['Software Engineer', 'Data Scientist', 'AI Engineer', 'Full-Stack Developer'],
    icon: '💻',
  },
  {
    id: 'teknik-elektro',
    name: 'Teknik Elektro',
    description: 'Mempelajari sistem kelistrikan, elektronika, telekomunikasi, dan teknologi energi.',
    careers: ['Electrical Engineer', 'Control Engineer', 'Telecom Engineer', 'Power System Engineer'],
    icon: '⚡',
  },
  {
    id: 'kedokteran',
    name: 'Kedokteran',
    description: 'Mempelajari ilmu kesehatan manusia, diagnosis penyakit, dan pengobatan medis.',
    careers: ['Dokter Umum', 'Dokter Spesialis', 'Peneliti Medis', 'Konsultan Kesehatan'],
    icon: '🩺',
  },
  {
    id: 'farmasi',
    name: 'Farmasi',
    description: 'Mempelajari ilmu obat-obatan, formulasi, dan perawatan kesehatan berbasis farmakologi.',
    careers: ['Apoteker', 'Pharmaceutical Researcher', 'Quality Control', 'Medical Representative'],
    icon: '💊',
  },
  {
    id: 'ekonomi-bisnis',
    name: 'Ekonomi & Bisnis',
    description: 'Mempelajari manajemen, keuangan, pemasaran, dan strategi bisnis.',
    careers: ['Financial Analyst', 'Marketing Manager', 'Entrepreneur', 'Konsultan Bisnis'],
    icon: '📊',
  },
  {
    id: 'akuntansi',
    name: 'Akuntansi',
    description: 'Mempelajari pembukuan, audit, perpajakan, dan pelaporan keuangan.',
    careers: ['Akuntan', 'Auditor', 'Tax Consultant', 'Financial Controller'],
    icon: '📈',
  },
  {
    id: 'hukum',
    name: 'Ilmu Hukum',
    description: 'Mempelajari sistem hukum, perundang-undangan, dan keadilan.',
    careers: ['Pengacara', 'Hakim', 'Notaris', 'Legal Consultant'],
    icon: '⚖️',
  },
  {
    id: 'psikologi',
    name: 'Psikologi',
    description: 'Mempelajari perilaku manusia, proses mental, dan kesehatan jiwa.',
    careers: ['Psikolog Klinis', 'HRD', 'Konselor', 'Researcher'],
    icon: '🧠',
  },
  {
    id: 'sastra',
    name: 'Sastra & Bahasa',
    description: 'Mempelajari bahasa, sastra, budaya, dan komunikasi lintas bangsa.',
    careers: ['Penerjemah', 'Content Writer', 'Editor', 'Diplomat'],
    icon: '📚',
  },
  {
    id: 'ilmu-komunikasi',
    name: 'Ilmu Komunikasi',
    description: 'Mempelajari media, jurnalisme, public relations, dan komunikasi massa.',
    careers: ['Journalist', 'PR Specialist', 'Content Creator', 'Media Planner'],
    icon: '📺',
  },
  {
    id: 'desain',
    name: 'Desain Komunikasi Visual',
    description: 'Mempelajari desain grafis, branding, dan komunikasi visual.',
    careers: ['Graphic Designer', 'UI/UX Designer', 'Art Director', 'Creative Director'],
    icon: '🎨',
  },
  {
    id: 'arsitektur',
    name: 'Arsitektur',
    description: 'Mempelajari perancangan bangunan, tata ruang, dan desain struktural.',
    careers: ['Arsitek', 'Urban Planner', 'Interior Designer', 'Project Manager'],
    icon: '🏛️',
  },
  {
    id: 'teknik-sipil',
    name: 'Teknik Sipil',
    description: 'Mempelajari konstruksi, infrastruktur, dan perencanaan bangunan.',
    careers: ['Civil Engineer', 'Project Manager', 'Quantity Surveyor', 'Structural Engineer'],
    icon: '🏗️',
  },
  {
    id: 'teknik-mesin',
    name: 'Teknik Mesin',
    description: 'Mempelajari perancangan mesin, manufaktur, dan sistem mekanik.',
    careers: ['Mechanical Engineer', 'Manufacturing Engineer', 'Automotive Engineer', 'Maintenance Manager'],
    icon: '⚙️',
  },
  {
    id: 'pendidikan',
    name: 'Ilmu Pendidikan',
    description: 'Mempelajari teori pendidikan, kurikulum, dan metodologi pengajaran.',
    careers: ['Guru', 'Dosen', 'Education Consultant', 'Curriculum Developer'],
    icon: '🎓',
  },
  {
    id: 'hubungan-internasional',
    name: 'Hubungan Internasional',
    description: 'Mempelajari diplomasi, politik global, dan kerja sama antar negara.',
    careers: ['Diplomat', 'International Relations Analyst', 'NGO Worker', 'Trade Specialist'],
    icon: '🌍',
  },
];

export const questions: Question[] = [
  // ==================== INTEREST QUESTIONS ====================
  
  // Technology & Engineering
  {
    id: 'int1',
    text: 'Saya tertarik dengan teknologi dan komputer',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.9 },
      { majorId: 'teknik-elektro', cf: 0.6 },
      { majorId: 'desain', cf: 0.4 },
    ],
  },
  {
    id: 'int2',
    text: 'Saya suka membuat program atau aplikasi',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.95 },
      { majorId: 'teknik-elektro', cf: 0.3 },
    ],
  },
  {
    id: 'int3',
    text: 'Saya tertarik dengan kelistrikan dan elektronika',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-elektro', cf: 0.9 },
      { majorId: 'teknik-informatika', cf: 0.4 },
      { majorId: 'teknik-mesin', cf: 0.3 },
    ],
  },
  {
    id: 'int4',
    text: 'Saya senang mempelajari cara kerja robot dan otomasi',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-elektro', cf: 0.8 },
      { majorId: 'teknik-informatika', cf: 0.7 },
      { majorId: 'teknik-mesin', cf: 0.6 },
    ],
  },
  {
    id: 'int5',
    text: 'Saya tertarik dengan mesin dan otomotif',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-mesin', cf: 0.9 },
      { majorId: 'teknik-elektro', cf: 0.5 },
      { majorId: 'teknik-sipil', cf: 0.3 },
    ],
  },
  {
    id: 'int6',
    text: 'Saya suka membongkar dan merakit peralatan mekanik',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-mesin', cf: 0.85 },
      { majorId: 'teknik-elektro', cf: 0.5 },
    ],
  },
  
  // Health & Medicine
  {
    id: 'int7',
    text: 'Saya senang membantu orang yang sedang sakit',
    category: 'interest',
    relatedMajors: [
      { majorId: 'kedokteran', cf: 0.9 },
      { majorId: 'farmasi', cf: 0.7 },
      { majorId: 'psikologi', cf: 0.5 },
    ],
  },
  {
    id: 'int8',
    text: 'Saya tertarik dengan anatomi dan cara kerja tubuh manusia',
    category: 'interest',
    relatedMajors: [
      { majorId: 'kedokteran', cf: 0.9 },
      { majorId: 'farmasi', cf: 0.5 },
      { majorId: 'psikologi', cf: 0.3 },
    ],
  },
  {
    id: 'int9',
    text: 'Saya tertarik dengan obat-obatan dan dunia farmasi',
    category: 'interest',
    relatedMajors: [
      { majorId: 'farmasi', cf: 0.9 },
      { majorId: 'kedokteran', cf: 0.5 },
    ],
  },
  {
    id: 'int10',
    text: 'Saya suka melakukan eksperimen di laboratorium',
    category: 'interest',
    relatedMajors: [
      { majorId: 'farmasi', cf: 0.8 },
      { majorId: 'kedokteran', cf: 0.6 },
      { majorId: 'teknik-mesin', cf: 0.3 },
    ],
  },
  
  // Business & Finance
  {
    id: 'int11',
    text: 'Saya tertarik dengan dunia bisnis dan keuangan',
    category: 'interest',
    relatedMajors: [
      { majorId: 'ekonomi-bisnis', cf: 0.9 },
      { majorId: 'akuntansi', cf: 0.8 },
      { majorId: 'hukum', cf: 0.3 },
    ],
  },
  {
    id: 'int12',
    text: 'Saya ingin memiliki usaha sendiri suatu hari nanti',
    category: 'interest',
    relatedMajors: [
      { majorId: 'ekonomi-bisnis', cf: 0.85 },
      { majorId: 'akuntansi', cf: 0.5 },
      { majorId: 'ilmu-komunikasi', cf: 0.4 },
    ],
  },
  {
    id: 'int13',
    text: 'Saya suka menganalisis laporan keuangan dan investasi',
    category: 'interest',
    relatedMajors: [
      { majorId: 'akuntansi', cf: 0.9 },
      { majorId: 'ekonomi-bisnis', cf: 0.7 },
    ],
  },
  {
    id: 'int14',
    text: 'Saya tertarik dengan pasar saham dan trading',
    category: 'interest',
    relatedMajors: [
      { majorId: 'ekonomi-bisnis', cf: 0.8 },
      { majorId: 'akuntansi', cf: 0.6 },
    ],
  },
  
  // Law & Politics
  {
    id: 'int15',
    text: 'Saya suka membaca dan menganalisis peraturan/undang-undang',
    category: 'interest',
    relatedMajors: [
      { majorId: 'hukum', cf: 0.9 },
      { majorId: 'hubungan-internasional', cf: 0.4 },
      { majorId: 'ekonomi-bisnis', cf: 0.2 },
    ],
  },
  {
    id: 'int16',
    text: 'Saya tertarik dengan kasus-kasus hukum dan pengadilan',
    category: 'interest',
    relatedMajors: [
      { majorId: 'hukum', cf: 0.9 },
      { majorId: 'psikologi', cf: 0.3 },
    ],
  },
  {
    id: 'int17',
    text: 'Saya tertarik dengan politik dan hubungan antar negara',
    category: 'interest',
    relatedMajors: [
      { majorId: 'hubungan-internasional', cf: 0.9 },
      { majorId: 'hukum', cf: 0.5 },
      { majorId: 'ilmu-komunikasi', cf: 0.3 },
    ],
  },
  {
    id: 'int18',
    text: 'Saya suka mengikuti berita internasional dan isu global',
    category: 'interest',
    relatedMajors: [
      { majorId: 'hubungan-internasional', cf: 0.85 },
      { majorId: 'ilmu-komunikasi', cf: 0.6 },
      { majorId: 'hukum', cf: 0.3 },
    ],
  },
  
  // Psychology & Social
  {
    id: 'int19',
    text: 'Saya tertarik memahami perilaku dan pikiran manusia',
    category: 'interest',
    relatedMajors: [
      { majorId: 'psikologi', cf: 0.9 },
      { majorId: 'pendidikan', cf: 0.5 },
      { majorId: 'kedokteran', cf: 0.3 },
    ],
  },
  {
    id: 'int20',
    text: 'Saya senang mendengarkan curhat dan masalah orang lain',
    category: 'interest',
    relatedMajors: [
      { majorId: 'psikologi', cf: 0.85 },
      { majorId: 'pendidikan', cf: 0.5 },
      { majorId: 'kedokteran', cf: 0.3 },
    ],
  },
  {
    id: 'int21',
    text: 'Saya tertarik dengan kesehatan mental dan terapi',
    category: 'interest',
    relatedMajors: [
      { majorId: 'psikologi', cf: 0.9 },
      { majorId: 'kedokteran', cf: 0.4 },
    ],
  },
  
  // Arts & Design
  {
    id: 'int22',
    text: 'Saya suka menggambar dan berkreasi secara visual',
    category: 'interest',
    relatedMajors: [
      { majorId: 'desain', cf: 0.9 },
      { majorId: 'arsitektur', cf: 0.6 },
    ],
  },
  {
    id: 'int23',
    text: 'Saya tertarik dengan desain grafis dan digital art',
    category: 'interest',
    relatedMajors: [
      { majorId: 'desain', cf: 0.9 },
      { majorId: 'ilmu-komunikasi', cf: 0.4 },
    ],
  },
  {
    id: 'int24',
    text: 'Saya suka membuat konten visual untuk media sosial',
    category: 'interest',
    relatedMajors: [
      { majorId: 'desain', cf: 0.8 },
      { majorId: 'ilmu-komunikasi', cf: 0.7 },
    ],
  },
  
  // Architecture & Construction
  {
    id: 'int25',
    text: 'Saya tertarik dengan desain bangunan dan tata ruang',
    category: 'interest',
    relatedMajors: [
      { majorId: 'arsitektur', cf: 0.9 },
      { majorId: 'teknik-sipil', cf: 0.6 },
    ],
  },
  {
    id: 'int26',
    text: 'Saya suka membuat maket atau model bangunan',
    category: 'interest',
    relatedMajors: [
      { majorId: 'arsitektur', cf: 0.85 },
      { majorId: 'teknik-sipil', cf: 0.5 },
      { majorId: 'desain', cf: 0.4 },
    ],
  },
  {
    id: 'int27',
    text: 'Saya tertarik dengan konstruksi dan infrastruktur',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-sipil', cf: 0.9 },
      { majorId: 'arsitektur', cf: 0.4 },
      { majorId: 'teknik-mesin', cf: 0.3 },
    ],
  },
  {
    id: 'int28',
    text: 'Saya suka mempelajari struktur jembatan dan gedung tinggi',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-sipil', cf: 0.9 },
      { majorId: 'arsitektur', cf: 0.5 },
    ],
  },
  
  // Communication & Media
  {
    id: 'int29',
    text: 'Saya suka membaca buku sastra dan menulis',
    category: 'interest',
    relatedMajors: [
      { majorId: 'sastra', cf: 0.9 },
      { majorId: 'ilmu-komunikasi', cf: 0.5 },
      { majorId: 'pendidikan', cf: 0.4 },
    ],
  },
  {
    id: 'int30',
    text: 'Saya tertarik dengan bahasa asing dan budaya lain',
    category: 'interest',
    relatedMajors: [
      { majorId: 'sastra', cf: 0.85 },
      { majorId: 'hubungan-internasional', cf: 0.7 },
      { majorId: 'pendidikan', cf: 0.4 },
    ],
  },
  {
    id: 'int31',
    text: 'Saya tertarik dengan media dan jurnalisme',
    category: 'interest',
    relatedMajors: [
      { majorId: 'ilmu-komunikasi', cf: 0.9 },
      { majorId: 'sastra', cf: 0.4 },
      { majorId: 'hubungan-internasional', cf: 0.3 },
    ],
  },
  {
    id: 'int32',
    text: 'Saya suka membuat video atau podcast',
    category: 'interest',
    relatedMajors: [
      { majorId: 'ilmu-komunikasi', cf: 0.85 },
      { majorId: 'desain', cf: 0.5 },
    ],
  },
  {
    id: 'int33',
    text: 'Saya tertarik dengan public relations dan branding',
    category: 'interest',
    relatedMajors: [
      { majorId: 'ilmu-komunikasi', cf: 0.85 },
      { majorId: 'ekonomi-bisnis', cf: 0.5 },
      { majorId: 'desain', cf: 0.4 },
    ],
  },
  
  // Education
  {
    id: 'int34',
    text: 'Saya ingin menjadi guru atau dosen',
    category: 'interest',
    relatedMajors: [
      { majorId: 'pendidikan', cf: 0.9 },
      { majorId: 'psikologi', cf: 0.4 },
      { majorId: 'sastra', cf: 0.3 },
    ],
  },
  {
    id: 'int35',
    text: 'Saya senang mengajar dan menjelaskan sesuatu kepada orang lain',
    category: 'interest',
    relatedMajors: [
      { majorId: 'pendidikan', cf: 0.85 },
      { majorId: 'psikologi', cf: 0.5 },
      { majorId: 'ilmu-komunikasi', cf: 0.4 },
    ],
  },
  {
    id: 'int36',
    text: 'Saya tertarik dengan perkembangan anak dan remaja',
    category: 'interest',
    relatedMajors: [
      { majorId: 'pendidikan', cf: 0.8 },
      { majorId: 'psikologi', cf: 0.8 },
    ],
  },
  
  // ==================== SKILL QUESTIONS ====================
  
  // Logical & Analytical
  {
    id: 'skl1',
    text: 'Saya mahir dalam pemecahan masalah logis dan matematis',
    category: 'skill',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.8 },
      { majorId: 'teknik-elektro', cf: 0.8 },
      { majorId: 'teknik-sipil', cf: 0.7 },
      { majorId: 'teknik-mesin', cf: 0.7 },
      { majorId: 'akuntansi', cf: 0.6 },
      { majorId: 'ekonomi-bisnis', cf: 0.5 },
    ],
  },
  {
    id: 'skl2',
    text: 'Saya mampu berpikir sistematis dan terstruktur',
    category: 'skill',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.8 },
      { majorId: 'akuntansi', cf: 0.7 },
      { majorId: 'teknik-sipil', cf: 0.7 },
      { majorId: 'hukum', cf: 0.6 },
      { majorId: 'arsitektur', cf: 0.5 },
    ],
  },
  {
    id: 'skl3',
    text: 'Saya pandai menganalisis data dan statistik',
    category: 'skill',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.8 },
      { majorId: 'ekonomi-bisnis', cf: 0.7 },
      { majorId: 'akuntansi', cf: 0.7 },
      { majorId: 'psikologi', cf: 0.5 },
    ],
  },
  
  // Memory & Detail
  {
    id: 'skl4',
    text: 'Saya memiliki kemampuan mengingat informasi detail dengan baik',
    category: 'skill',
    relatedMajors: [
      { majorId: 'kedokteran', cf: 0.8 },
      { majorId: 'farmasi', cf: 0.8 },
      { majorId: 'hukum', cf: 0.7 },
      { majorId: 'akuntansi', cf: 0.5 },
    ],
  },
  {
    id: 'skl5',
    text: 'Saya teliti dan cermat dalam mengerjakan sesuatu',
    category: 'skill',
    relatedMajors: [
      { majorId: 'akuntansi', cf: 0.8 },
      { majorId: 'farmasi', cf: 0.7 },
      { majorId: 'kedokteran', cf: 0.6 },
      { majorId: 'hukum', cf: 0.5 },
      { majorId: 'arsitektur', cf: 0.5 },
    ],
  },
  
  // Communication
  {
    id: 'skl6',
    text: 'Saya pandai berkomunikasi dan bernegosiasi',
    category: 'skill',
    relatedMajors: [
      { majorId: 'ilmu-komunikasi', cf: 0.8 },
      { majorId: 'hubungan-internasional', cf: 0.8 },
      { majorId: 'ekonomi-bisnis', cf: 0.7 },
      { majorId: 'hukum', cf: 0.7 },
      { majorId: 'psikologi', cf: 0.6 },
    ],
  },
  {
    id: 'skl7',
    text: 'Saya mampu berbicara di depan umum dengan percaya diri',
    category: 'skill',
    relatedMajors: [
      { majorId: 'ilmu-komunikasi', cf: 0.8 },
      { majorId: 'pendidikan', cf: 0.7 },
      { majorId: 'hukum', cf: 0.6 },
      { majorId: 'hubungan-internasional', cf: 0.6 },
      { majorId: 'ekonomi-bisnis', cf: 0.5 },
    ],
  },
  {
    id: 'skl8',
    text: 'Saya pandai meyakinkan orang lain dengan argumen saya',
    category: 'skill',
    relatedMajors: [
      { majorId: 'hukum', cf: 0.8 },
      { majorId: 'ilmu-komunikasi', cf: 0.7 },
      { majorId: 'ekonomi-bisnis', cf: 0.6 },
      { majorId: 'hubungan-internasional', cf: 0.6 },
    ],
  },
  
  // Empathy & Social
  {
    id: 'skl9',
    text: 'Saya memiliki empati yang tinggi terhadap orang lain',
    category: 'skill',
    relatedMajors: [
      { majorId: 'psikologi', cf: 0.8 },
      { majorId: 'kedokteran', cf: 0.6 },
      { majorId: 'pendidikan', cf: 0.6 },
      { majorId: 'farmasi', cf: 0.4 },
    ],
  },
  {
    id: 'skl10',
    text: 'Saya sabar menghadapi orang yang sulit',
    category: 'skill',
    relatedMajors: [
      { majorId: 'psikologi', cf: 0.8 },
      { majorId: 'pendidikan', cf: 0.7 },
      { majorId: 'kedokteran', cf: 0.5 },
    ],
  },
  {
    id: 'skl11',
    text: 'Saya mudah bergaul dan bekerja dalam tim',
    category: 'skill',
    relatedMajors: [
      { majorId: 'ekonomi-bisnis', cf: 0.6 },
      { majorId: 'ilmu-komunikasi', cf: 0.6 },
      { majorId: 'hubungan-internasional', cf: 0.6 },
      { majorId: 'pendidikan', cf: 0.5 },
    ],
  },
  
  // Creative & Artistic
  {
    id: 'skl12',
    text: 'Saya memiliki kemampuan artistik dan estetika yang baik',
    category: 'skill',
    relatedMajors: [
      { majorId: 'desain', cf: 0.9 },
      { majorId: 'arsitektur', cf: 0.7 },
      { majorId: 'sastra', cf: 0.4 },
    ],
  },
  {
    id: 'skl13',
    text: 'Saya kreatif dan sering punya ide-ide baru',
    category: 'skill',
    relatedMajors: [
      { majorId: 'desain', cf: 0.8 },
      { majorId: 'ilmu-komunikasi', cf: 0.7 },
      { majorId: 'arsitektur', cf: 0.6 },
      { majorId: 'ekonomi-bisnis', cf: 0.5 },
    ],
  },
  {
    id: 'skl14',
    text: 'Saya mampu memvisualisasikan objek 3D dengan baik',
    category: 'skill',
    relatedMajors: [
      { majorId: 'arsitektur', cf: 0.8 },
      { majorId: 'teknik-sipil', cf: 0.6 },
      { majorId: 'teknik-mesin', cf: 0.6 },
      { majorId: 'desain', cf: 0.5 },
    ],
  },
  
  // Writing & Language
  {
    id: 'skl15',
    text: 'Saya mahir menulis dan menyusun kalimat dengan baik',
    category: 'skill',
    relatedMajors: [
      { majorId: 'sastra', cf: 0.9 },
      { majorId: 'ilmu-komunikasi', cf: 0.7 },
      { majorId: 'hukum', cf: 0.5 },
      { majorId: 'pendidikan', cf: 0.4 },
    ],
  },
  {
    id: 'skl16',
    text: 'Saya fasih berbahasa asing (Inggris atau lainnya)',
    category: 'skill',
    relatedMajors: [
      { majorId: 'sastra', cf: 0.8 },
      { majorId: 'hubungan-internasional', cf: 0.8 },
      { majorId: 'ilmu-komunikasi', cf: 0.5 },
    ],
  },
  
  // Technical & Practical
  {
    id: 'skl17',
    text: 'Saya terampil menggunakan software komputer',
    category: 'skill',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.8 },
      { majorId: 'desain', cf: 0.7 },
      { majorId: 'akuntansi', cf: 0.4 },
    ],
  },
  {
    id: 'skl18',
    text: 'Saya mampu bekerja dengan tangan dan peralatan',
    category: 'skill',
    relatedMajors: [
      { majorId: 'teknik-mesin', cf: 0.8 },
      { majorId: 'teknik-elektro', cf: 0.7 },
      { majorId: 'arsitektur', cf: 0.5 },
      { majorId: 'farmasi', cf: 0.4 },
    ],
  },
  {
    id: 'skl19',
    text: 'Saya tahan bekerja di bawah tekanan dan deadline',
    category: 'skill',
    relatedMajors: [
      { majorId: 'kedokteran', cf: 0.7 },
      { majorId: 'ilmu-komunikasi', cf: 0.7 },
      { majorId: 'ekonomi-bisnis', cf: 0.6 },
      { majorId: 'hukum', cf: 0.6 },
      { majorId: 'teknik-sipil', cf: 0.5 },
    ],
  },
  
  // Leadership & Management
  {
    id: 'skl20',
    text: 'Saya memiliki jiwa kepemimpinan yang kuat',
    category: 'skill',
    relatedMajors: [
      { majorId: 'ekonomi-bisnis', cf: 0.8 },
      { majorId: 'hubungan-internasional', cf: 0.6 },
      { majorId: 'pendidikan', cf: 0.5 },
      { majorId: 'teknik-sipil', cf: 0.5 },
    ],
  },
  {
    id: 'skl21',
    text: 'Saya pandai mengatur waktu dan prioritas',
    category: 'skill',
    relatedMajors: [
      { majorId: 'ekonomi-bisnis', cf: 0.6 },
      { majorId: 'akuntansi', cf: 0.6 },
      { majorId: 'kedokteran', cf: 0.5 },
      { majorId: 'arsitektur', cf: 0.5 },
    ],
  },
  
  // ==================== ACADEMIC QUESTIONS ====================
  
  {
    id: 'aca1',
    text: 'Nilai matematika saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.7 },
      { majorId: 'teknik-elektro', cf: 0.7 },
      { majorId: 'teknik-sipil', cf: 0.7 },
      { majorId: 'teknik-mesin', cf: 0.7 },
      { majorId: 'akuntansi', cf: 0.6 },
      { majorId: 'ekonomi-bisnis', cf: 0.5 },
      { majorId: 'arsitektur', cf: 0.4 },
    ],
  },
  {
    id: 'aca2',
    text: 'Saya menyukai pelajaran matematika',
    category: 'academic',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.75 },
      { majorId: 'teknik-elektro', cf: 0.75 },
      { majorId: 'akuntansi', cf: 0.65 },
      { majorId: 'ekonomi-bisnis', cf: 0.5 },
    ],
  },
  {
    id: 'aca3',
    text: 'Nilai IPA/Biologi saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'kedokteran', cf: 0.8 },
      { majorId: 'farmasi', cf: 0.8 },
      { majorId: 'psikologi', cf: 0.4 },
    ],
  },
  {
    id: 'aca4',
    text: 'Saya menyukai pelajaran biologi',
    category: 'academic',
    relatedMajors: [
      { majorId: 'kedokteran', cf: 0.85 },
      { majorId: 'farmasi', cf: 0.75 },
      { majorId: 'psikologi', cf: 0.4 },
    ],
  },
  {
    id: 'aca5',
    text: 'Nilai Fisika saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'teknik-elektro', cf: 0.8 },
      { majorId: 'teknik-mesin', cf: 0.8 },
      { majorId: 'teknik-sipil', cf: 0.7 },
      { majorId: 'arsitektur', cf: 0.4 },
    ],
  },
  {
    id: 'aca6',
    text: 'Saya menyukai pelajaran fisika',
    category: 'academic',
    relatedMajors: [
      { majorId: 'teknik-elektro', cf: 0.8 },
      { majorId: 'teknik-mesin', cf: 0.8 },
      { majorId: 'teknik-sipil', cf: 0.7 },
      { majorId: 'teknik-informatika', cf: 0.4 },
    ],
  },
  {
    id: 'aca7',
    text: 'Nilai Kimia saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'farmasi', cf: 0.8 },
      { majorId: 'kedokteran', cf: 0.6 },
      { majorId: 'teknik-mesin', cf: 0.3 },
    ],
  },
  {
    id: 'aca8',
    text: 'Saya menyukai pelajaran kimia',
    category: 'academic',
    relatedMajors: [
      { majorId: 'farmasi', cf: 0.85 },
      { majorId: 'kedokteran', cf: 0.6 },
    ],
  },
  {
    id: 'aca9',
    text: 'Nilai Bahasa Indonesia saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'sastra', cf: 0.8 },
      { majorId: 'ilmu-komunikasi', cf: 0.7 },
      { majorId: 'hukum', cf: 0.6 },
      { majorId: 'pendidikan', cf: 0.5 },
    ],
  },
  {
    id: 'aca10',
    text: 'Nilai Bahasa Inggris saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'sastra', cf: 0.8 },
      { majorId: 'hubungan-internasional', cf: 0.8 },
      { majorId: 'ilmu-komunikasi', cf: 0.6 },
      { majorId: 'ekonomi-bisnis', cf: 0.4 },
    ],
  },
  {
    id: 'aca11',
    text: 'Saya menyukai pelajaran bahasa asing',
    category: 'academic',
    relatedMajors: [
      { majorId: 'sastra', cf: 0.85 },
      { majorId: 'hubungan-internasional', cf: 0.75 },
      { majorId: 'ilmu-komunikasi', cf: 0.4 },
    ],
  },
  {
    id: 'aca12',
    text: 'Nilai Seni/Kesenian saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'desain', cf: 0.7 },
      { majorId: 'arsitektur', cf: 0.5 },
    ],
  },
  {
    id: 'aca13',
    text: 'Saya menyukai pelajaran seni dan kesenian',
    category: 'academic',
    relatedMajors: [
      { majorId: 'desain', cf: 0.8 },
      { majorId: 'arsitektur', cf: 0.6 },
      { majorId: 'ilmu-komunikasi', cf: 0.3 },
    ],
  },
  {
    id: 'aca14',
    text: 'Nilai Ekonomi/Akuntansi saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'akuntansi', cf: 0.8 },
      { majorId: 'ekonomi-bisnis', cf: 0.8 },
      { majorId: 'hukum', cf: 0.3 },
    ],
  },
  {
    id: 'aca15',
    text: 'Saya menyukai pelajaran ekonomi',
    category: 'academic',
    relatedMajors: [
      { majorId: 'ekonomi-bisnis', cf: 0.85 },
      { majorId: 'akuntansi', cf: 0.7 },
      { majorId: 'hubungan-internasional', cf: 0.4 },
    ],
  },
  {
    id: 'aca16',
    text: 'Nilai Sosiologi/PPKn saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'hubungan-internasional', cf: 0.7 },
      { majorId: 'hukum', cf: 0.6 },
      { majorId: 'ilmu-komunikasi', cf: 0.5 },
      { majorId: 'pendidikan', cf: 0.4 },
      { majorId: 'psikologi', cf: 0.4 },
    ],
  },
  {
    id: 'aca17',
    text: 'Nilai Sejarah saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'hubungan-internasional', cf: 0.6 },
      { majorId: 'hukum', cf: 0.5 },
      { majorId: 'sastra', cf: 0.5 },
      { majorId: 'pendidikan', cf: 0.4 },
    ],
  },
  {
    id: 'aca18',
    text: 'Nilai TIK/Komputer saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.8 },
      { majorId: 'desain', cf: 0.5 },
      { majorId: 'ilmu-komunikasi', cf: 0.3 },
    ],
  },
  {
    id: 'aca19',
    text: 'Saya menyukai pelajaran TIK/Komputer',
    category: 'academic',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.85 },
      { majorId: 'desain', cf: 0.5 },
      { majorId: 'teknik-elektro', cf: 0.4 },
    ],
  },
  
  // ==================== PREFERENCE QUESTIONS ====================
  
  {
    id: 'prf1',
    text: 'Saya lebih suka bekerja di dalam ruangan (kantor/lab)',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.6 },
      { majorId: 'akuntansi', cf: 0.6 },
      { majorId: 'desain', cf: 0.5 },
      { majorId: 'farmasi', cf: 0.5 },
      { majorId: 'psikologi', cf: 0.4 },
    ],
  },
  {
    id: 'prf2',
    text: 'Saya lebih suka bekerja di lapangan/luar ruangan',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-sipil', cf: 0.7 },
      { majorId: 'arsitektur', cf: 0.5 },
      { majorId: 'hubungan-internasional', cf: 0.4 },
      { majorId: 'ilmu-komunikasi', cf: 0.4 },
    ],
  },
  {
    id: 'prf3',
    text: 'Saya lebih suka bekerja sendiri daripada dalam tim',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.5 },
      { majorId: 'akuntansi', cf: 0.5 },
      { majorId: 'sastra', cf: 0.5 },
      { majorId: 'desain', cf: 0.4 },
    ],
  },
  {
    id: 'prf4',
    text: 'Saya lebih suka kuliah yang banyak praktiknya',
    category: 'interest',
    relatedMajors: [
      { majorId: 'kedokteran', cf: 0.7 },
      { majorId: 'farmasi', cf: 0.7 },
      { majorId: 'teknik-mesin', cf: 0.6 },
      { majorId: 'teknik-elektro', cf: 0.6 },
      { majorId: 'desain', cf: 0.5 },
    ],
  },
  {
    id: 'prf5',
    text: 'Saya siap menempuh pendidikan yang panjang (lebih dari 4 tahun)',
    category: 'interest',
    relatedMajors: [
      { majorId: 'kedokteran', cf: 0.9 },
      { majorId: 'farmasi', cf: 0.5 },
      { majorId: 'arsitektur', cf: 0.4 },
    ],
  },
  {
    id: 'prf6',
    text: 'Saya ingin pekerjaan yang gajinya tinggi',
    category: 'interest',
    relatedMajors: [
      { majorId: 'kedokteran', cf: 0.6 },
      { majorId: 'teknik-informatika', cf: 0.6 },
      { majorId: 'ekonomi-bisnis', cf: 0.6 },
      { majorId: 'hukum', cf: 0.5 },
      { majorId: 'akuntansi', cf: 0.5 },
    ],
  },
  {
    id: 'prf7',
    text: 'Saya ingin pekerjaan yang bermanfaat bagi masyarakat',
    category: 'interest',
    relatedMajors: [
      { majorId: 'kedokteran', cf: 0.7 },
      { majorId: 'pendidikan', cf: 0.7 },
      { majorId: 'psikologi', cf: 0.6 },
      { majorId: 'hukum', cf: 0.5 },
      { majorId: 'hubungan-internasional', cf: 0.5 },
    ],
  },
  {
    id: 'prf8',
    text: 'Saya ingin pekerjaan yang stabil dan aman',
    category: 'interest',
    relatedMajors: [
      { majorId: 'pendidikan', cf: 0.7 },
      { majorId: 'akuntansi', cf: 0.6 },
      { majorId: 'hukum', cf: 0.5 },
      { majorId: 'kedokteran', cf: 0.5 },
    ],
  },
];

export const answerOptions = [
  { value: 0, label: 'Sangat Tidak Setuju' },
  { value: 0.25, label: 'Tidak Setuju' },
  { value: 0.5, label: 'Netral' },
  { value: 0.75, label: 'Setuju' },
  { value: 1, label: 'Sangat Setuju' },
];
