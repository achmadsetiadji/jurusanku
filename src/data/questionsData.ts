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
    id: 'kedokteran',
    name: 'Kedokteran',
    description: 'Mempelajari ilmu kesehatan manusia, diagnosis penyakit, dan pengobatan medis.',
    careers: ['Dokter Umum', 'Dokter Spesialis', 'Peneliti Medis', 'Konsultan Kesehatan'],
    icon: '🩺',
  },
  {
    id: 'ekonomi-bisnis',
    name: 'Ekonomi & Bisnis',
    description: 'Mempelajari manajemen, keuangan, pemasaran, dan strategi bisnis.',
    careers: ['Financial Analyst', 'Marketing Manager', 'Entrepreneur', 'Konsultan Bisnis'],
    icon: '📊',
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
];

export const questions: Question[] = [
  // Interest questions
  {
    id: 'q1',
    text: 'Saya tertarik dengan teknologi dan komputer',
    category: 'interest',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.9 },
      { majorId: 'desain', cf: 0.4 },
    ],
  },
  {
    id: 'q2',
    text: 'Saya senang membantu orang yang sedang sakit',
    category: 'interest',
    relatedMajors: [
      { majorId: 'kedokteran', cf: 0.9 },
      { majorId: 'psikologi', cf: 0.5 },
    ],
  },
  {
    id: 'q3',
    text: 'Saya tertarik dengan dunia bisnis dan keuangan',
    category: 'interest',
    relatedMajors: [
      { majorId: 'ekonomi-bisnis', cf: 0.9 },
      { majorId: 'hukum', cf: 0.3 },
    ],
  },
  {
    id: 'q4',
    text: 'Saya suka membaca dan menganalisis peraturan/undang-undang',
    category: 'interest',
    relatedMajors: [
      { majorId: 'hukum', cf: 0.9 },
      { majorId: 'ekonomi-bisnis', cf: 0.2 },
    ],
  },
  {
    id: 'q5',
    text: 'Saya tertarik memahami perilaku dan pikiran manusia',
    category: 'interest',
    relatedMajors: [
      { majorId: 'psikologi', cf: 0.9 },
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
    ],
  },
  // Skill questions
  {
    id: 'q9',
    text: 'Saya mahir dalam pemecahan masalah logis dan matematis',
    category: 'skill',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.8 },
      { majorId: 'teknik-sipil', cf: 0.7 },
      { majorId: 'ekonomi-bisnis', cf: 0.5 },
    ],
  },
  {
    id: 'q10',
    text: 'Saya memiliki kemampuan mengingat informasi detail dengan baik',
    category: 'skill',
    relatedMajors: [
      { majorId: 'kedokteran', cf: 0.8 },
      { majorId: 'hukum', cf: 0.7 },
    ],
  },
  {
    id: 'q11',
    text: 'Saya pandai berkomunikasi dan bernegosiasi',
    category: 'skill',
    relatedMajors: [
      { majorId: 'ekonomi-bisnis', cf: 0.7 },
      { majorId: 'hukum', cf: 0.8 },
      { majorId: 'psikologi', cf: 0.6 },
    ],
  },
  {
    id: 'q12',
    text: 'Saya memiliki empati yang tinggi terhadap orang lain',
    category: 'skill',
    relatedMajors: [
      { majorId: 'psikologi', cf: 0.8 },
      { majorId: 'kedokteran', cf: 0.6 },
    ],
  },
  {
    id: 'q13',
    text: 'Saya memiliki kemampuan artistik dan estetika yang baik',
    category: 'skill',
    relatedMajors: [
      { majorId: 'desain', cf: 0.9 },
      { majorId: 'arsitektur', cf: 0.7 },
    ],
  },
  {
    id: 'q14',
    text: 'Saya mampu memvisualisasikan objek 3D dengan baik',
    category: 'skill',
    relatedMajors: [
      { majorId: 'arsitektur', cf: 0.8 },
      { majorId: 'teknik-sipil', cf: 0.6 },
      { majorId: 'desain', cf: 0.5 },
    ],
  },
  // Academic questions
  {
    id: 'q15',
    text: 'Nilai matematika saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'teknik-informatika', cf: 0.7 },
      { majorId: 'teknik-sipil', cf: 0.7 },
      { majorId: 'ekonomi-bisnis', cf: 0.5 },
      { majorId: 'arsitektur', cf: 0.4 },
    ],
  },
  {
    id: 'q16',
    text: 'Nilai IPA/Biologi saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'kedokteran', cf: 0.8 },
      { majorId: 'psikologi', cf: 0.4 },
    ],
  },
  {
    id: 'q17',
    text: 'Nilai Bahasa Indonesia/Inggris saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'hukum', cf: 0.6 },
      { majorId: 'psikologi', cf: 0.5 },
      { majorId: 'ekonomi-bisnis', cf: 0.4 },
    ],
  },
  {
    id: 'q18',
    text: 'Nilai Seni/Kesenian saya termasuk baik',
    category: 'academic',
    relatedMajors: [
      { majorId: 'desain', cf: 0.7 },
      { majorId: 'arsitektur', cf: 0.5 },
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
