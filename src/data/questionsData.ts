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
  // Interest questions
  {
    id: 'q1',
    text: 'Saya tertarik dengan teknologi dan komputer',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.9 },
      { majorId: 'teknik-elektro', cf: 0.6 },
      { majorId: 'desain', cf: 0.4 },
    ],
  },
  {
    id: 'q2',
    text: 'Saya senang membantu orang yang sedang sakit',
    category: 'interest',
    relatedMajors: [
      { majorId: 'kedokteran', cf: 0.9 },
      { majorId: 'farmasi', cf: 0.7 },
      { majorId: 'psikologi', cf: 0.5 },
    ],
  },
  {
    id: 'q3',
    text: 'Saya tertarik dengan dunia bisnis dan keuangan',
    category: 'interest',
    relatedMajors: [
      { majorId: 'ekonomi-bisnis', cf: 0.9 },
      { majorId: 'akuntansi', cf: 0.8 },
      { majorId: 'hukum', cf: 0.3 },
    ],
  },
  {
    id: 'q4',
    text: 'Saya suka membaca dan menganalisis peraturan/undang-undang',
    category: 'interest',
    relatedMajors: [
      { majorId: 'hukum', cf: 0.9 },
      { majorId: 'hubungan-internasional', cf: 0.4 },
      { majorId: 'ekonomi-bisnis', cf: 0.2 },
    ],
  },
  {
    id: 'q5',
    text: 'Saya tertarik memahami perilaku dan pikiran manusia',
    category: 'interest',
    relatedMajors: [
      { majorId: 'psikologi', cf: 0.9 },
      { majorId: 'pendidikan', cf: 0.5 },
      { majorId: 'kedokteran', cf: 0.3 },
    ],
  },
  {
    id: 'q6',
    text: 'Saya suka menggambar dan berkreasi secara visual',
    category: 'interest',
    relatedMajors: [
      { majorId: 'desain', cf: 0.9 },
      { majorId: 'arsitektur', cf: 0.6 },
    ],
  },
  {
    id: 'q7',
    text: 'Saya tertarik dengan desain bangunan dan tata ruang',
    category: 'interest',
    relatedMajors: [
      { majorId: 'arsitektur', cf: 0.9 },
      { majorId: 'teknik-sipil', cf: 0.6 },
    ],
  },
  {
    id: 'q8',
    text: 'Saya tertarik dengan konstruksi dan infrastruktur',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-sipil', cf: 0.9 },
      { majorId: 'arsitektur', cf: 0.4 },
      { majorId: 'teknik-mesin', cf: 0.3 },
    ],
  },
  {
    id: 'q9',
    text: 'Saya tertarik dengan kelistrikan dan elektronika',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-elektro', cf: 0.9 },
      { majorId: 'teknik-informatika', cf: 0.4 },
      { majorId: 'teknik-mesin', cf: 0.3 },
    ],
  },
  {
    id: 'q10',
    text: 'Saya tertarik dengan obat-obatan dan dunia farmasi',
    category: 'interest',
    relatedMajors: [
      { majorId: 'farmasi', cf: 0.9 },
      { majorId: 'kedokteran', cf: 0.5 },
    ],
  },
  {
    id: 'q11',
    text: 'Saya suka membaca buku sastra dan menulis',
    category: 'interest',
    relatedMajors: [
      { majorId: 'sastra', cf: 0.9 },
      { majorId: 'ilmu-komunikasi', cf: 0.5 },
      { majorId: 'pendidikan', cf: 0.4 },
    ],
  },
  {
    id: 'q12',
    text: 'Saya tertarik dengan media dan jurnalisme',
    category: 'interest',
    relatedMajors: [
      { majorId: 'ilmu-komunikasi', cf: 0.9 },
      { majorId: 'sastra', cf: 0.4 },
      { majorId: 'hubungan-internasional', cf: 0.3 },
    ],
  },
  {
    id: 'q13',
    text: 'Saya tertarik dengan mesin dan otomotif',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-mesin', cf: 0.9 },
      { majorId: 'teknik-elektro', cf: 0.5 },
      { majorId: 'teknik-sipil', cf: 0.3 },
    ],
  },
  {
    id: 'q14',
    text: 'Saya ingin menjadi guru atau dosen',
    category: 'interest',
    relatedMajors: [
      { majorId: 'pendidikan', cf: 0.9 },
      { majorId: 'psikologi', cf: 0.4 },
      { majorId: 'sastra', cf: 0.3 },
    ],
  },
  {
    id: 'q15',
    text: 'Saya tertarik dengan politik dan hubungan antar negara',
    category: 'interest',
    relatedMajors: [
      { majorId: 'hubungan-internasional', cf: 0.9 },
      { majorId: 'hukum', cf: 0.5 },
      { majorId: 'ilmu-komunikasi', cf: 0.3 },
    ],
  },
  // Skill questions
  {
    id: 'q16',
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
    id: 'q17',
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
    id: 'q18',
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
    id: 'q19',
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
    id: 'q20',
    text: 'Saya memiliki kemampuan artistik dan estetika yang baik',
    category: 'skill',
    relatedMajors: [
      { majorId: 'desain', cf: 0.9 },
      { majorId: 'arsitektur', cf: 0.7 },
      { majorId: 'sastra', cf: 0.4 },
    ],
  },
  {
    id: 'q21',
    text: 'Saya mampu memvisualisasikan objek 3D dengan baik',
    category: 'skill',
    relatedMajors: [
      { majorId: 'arsitektur', cf: 0.8 },
      { majorId: 'teknik-sipil', cf: 0.6 },
      { majorId: 'teknik-mesin', cf: 0.6 },
      { majorId: 'desain', cf: 0.5 },
    ],
  },
  {
    id: 'q22',
    text: 'Saya teliti dan cermat dalam mengerjakan sesuatu',
    category: 'skill',
    relatedMajors: [
      { majorId: 'akuntansi', cf: 0.8 },
      { majorId: 'farmasi', cf: 0.7 },
      { majorId: 'kedokteran', cf: 0.6 },
      { majorId: 'hukum', cf: 0.5 },
    ],
  },
  {
    id: 'q23',
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
    id: 'q24',
    text: 'Saya mampu berbicara di depan umum dengan percaya diri',
    category: 'skill',
    relatedMajors: [
      { majorId: 'ilmu-komunikasi', cf: 0.8 },
      { majorId: 'pendidikan', cf: 0.7 },
      { majorId: 'hukum', cf: 0.6 },
      { majorId: 'hubungan-internasional', cf: 0.6 },
    ],
  },
  // Academic questions
  {
    id: 'q25',
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
    id: 'q26',
    text: 'Nilai IPA/Biologi saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'kedokteran', cf: 0.8 },
      { majorId: 'farmasi', cf: 0.8 },
      { majorId: 'psikologi', cf: 0.4 },
    ],
  },
  {
    id: 'q27',
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
    id: 'q28',
    text: 'Nilai Kimia saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'farmasi', cf: 0.8 },
      { majorId: 'kedokteran', cf: 0.6 },
      { majorId: 'teknik-mesin', cf: 0.3 },
    ],
  },
  {
    id: 'q29',
    text: 'Nilai Bahasa Indonesia/Inggris saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'sastra', cf: 0.8 },
      { majorId: 'ilmu-komunikasi', cf: 0.7 },
      { majorId: 'hubungan-internasional', cf: 0.7 },
      { majorId: 'hukum', cf: 0.6 },
      { majorId: 'psikologi', cf: 0.5 },
      { majorId: 'pendidikan', cf: 0.5 },
    ],
  },
  {
    id: 'q30',
    text: 'Nilai Seni/Kesenian saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'desain', cf: 0.7 },
      { majorId: 'arsitektur', cf: 0.5 },
    ],
  },
  {
    id: 'q31',
    text: 'Nilai Ekonomi/Akuntansi saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'akuntansi', cf: 0.8 },
      { majorId: 'ekonomi-bisnis', cf: 0.8 },
      { majorId: 'hukum', cf: 0.3 },
    ],
  },
  {
    id: 'q32',
    text: 'Nilai Sosiologi/PPKn saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'hubungan-internasional', cf: 0.7 },
      { majorId: 'hukum', cf: 0.6 },
      { majorId: 'ilmu-komunikasi', cf: 0.5 },
      { majorId: 'pendidikan', cf: 0.4 },
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
