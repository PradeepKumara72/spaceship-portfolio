export interface Certification {
  title: string;
  issuer: string;
  status: "Completed" | "In Progress";
  fileUrl?: string;
}

export interface ClientReview {
  client: string;
  role: string;
  organization: string;
  feedback: string;
  rating: number;
  date: string;
}

export interface ProfileData {
  name: string;
  title: string;
  subTitle: string;
  bio: string;
  whatsapp: string;
  avatarUrl?: string;
  education: {
    degree: string;
    institution: string;
    fileUrl?: string;
  };
  certifications: Certification[];
  aiArsenal: string[];
  clientReviews: ClientReview[];
}

export const PROFILE_DATA: ProfileData = {
  name: "Pradeep Kumara",
  title: "AI Solutions Architect & Generative Media Technologist",
  subTitle: "Bridging Enterprise Systems, Clean Architecture & Advanced Generative AI",
  bio: "Experienced in Computer System Administration and enterprise software architecture, now pioneering AI-driven workflow automations, video generation engines, and domain-specific business systems using Clean Layered Architecture and SOLID Principles.",
  whatsapp: "+94714846444",
  avatarUrl: "/assets/profile.jpg",
  education: {
    degree: "Master of Information Technology (MIT)",
    institution: "UCSC, University of Colombo",
    fileUrl: "/assets/certificates/mit-ucsc-certificate.jpg",
  },
  certifications: [
    {
      title: "Prompt Engineering Specialization",
      issuer: "Vanderbilt University",
      status: "Completed",
      fileUrl: "/assets/certificates/prompt-engineering-vanderbilt.pdf",
    },
    {
      title: "Google AI Essentials Specialization",
      issuer: "Google",
      status: "Completed",
      fileUrl: "/assets/certificates/google-ai-essentials.pdf",
    },
    {
      title: "Python for Everybody",
      issuer: "University of Michigan",
      status: "In Progress",
    },
  ],
  aiArsenal: [
    "Google Gemini Pro (Architecture & Coding Engine)",
    "Google Flow / Veo 3 (Cinematic AI Video)",
    "Nano Banana Pro (Concept & Spatial Imagery)",
    "ElevenLabs (Voice Synthesis & Audio Design)",
  ],
  clientReviews: [
    {
      client: "Administration & Crime Division",
      role: "Operations Command",
      organization: "Piliyandala Police Station",
      feedback: "The Crime Record Indexing and Geo-location tracking platform dramatically streamlined case spatial mapping and field verification workflow. Outstanding architectural discipline.",
      rating: 5,
      date: "Verified Deployment",
    },
    {
      client: "Management & Factory Operations",
      role: "Managing Director",
      organization: "Sandil Sofa Craft & Workshop",
      feedback: "Complete visibility into raw material stages, bespoke build lifecycle, and daily petty cash reconciliation. The custom ERP transformed our daily manufacturing productivity.",
      rating: 5,
      date: "Verified Client",
    },
    {
      client: "Digital Media Collaborator",
      role: "Executive Producer",
      organization: "Generative Content Studio",
      feedback: "High-consistency AI character directing and ASMR audio synchronizations created captivating culinary storytelling. A true blend of technical prompting and cinematic art.",
      rating: 5,
      date: "Verified Project",
    },
  ],
};