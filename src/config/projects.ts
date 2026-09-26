export interface Project {
  id: string;
  title: string;
  category: "Enterprise System" | "Generative Media" | "Spatial Web";
  shortDesc: string;
  fullDesc: string;
  features: string[];
  techStack: string[];
  links?: { label: string; url: string }[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-police-records",
    title: "Criminal Intelligence & Geospatial Tracking Portal",
    category: "Enterprise System",
    shortDesc: "Crime record indexing with geo-tagging capabilities.",
    fullDesc:
      "A specialized desktop registry and crime mapping application. Features rapid citizen record retrieval, secure multi-attribute searching (Name, National ID, Mobile), and precise Google Maps geo-coordinate tagging for suspected illicit operations and narcotics hubs.",
    features: [
      "Secure Multi-parameter indexing (NIC, Name, Phone Number)",
      "Interactive Record Modal: View, Edit, Print, and Admin-only Deletion",
      "Crime Scene & Hotspot Geo-tagging with instant Google Maps link extraction",
      "Air-gapped local workstation data storage with automated external drive backup workflows",
    ],
    techStack: ["HTML5/JavaScript", "Clean Layered Architecture", "SOLID Principles", "Gemini Assisted Logic"],
  },
  {
    id: "proj-sofa-erp",
    title: "Sofa Craft & Workshop ERP Suite",
    category: "Enterprise System",
    shortDesc: "End-to-end manufacturing, inventory lifecycle, and petty cash control platform.",
    fullDesc:
      "A comprehensive manufacturing operations and stock control platform built for custom furniture workshops. Tracks the complete production journey from Purchase Order generation, Job Card issuance, and raw material dispensation to dispatch logistics and financial reconciliation.",
    features: [
      "Job Card & Purchase Order automation with material tracking",
      "Dynamic finished goods tracking vs dispatch balance reporting",
      "Real-time re-order threshold alerts for raw stock",
      "Branded professional invoicing, delivery note generation, and petty cash audit trails",
    ],
    techStack: ["HTML5/JavaScript", "Clean Architecture", "Local State Persistence", "SOLID Design"],
    links: [{ label: "Portfolio Showcase", url: "https://sandil-sofa.netlify.app" }],
  },
  {
    id: "proj-cooking-ai",
    title: "Cooking With Mr & Mrs AI",
    category: "Generative Media",
    shortDesc: "High-end commercial culinary visuals and dialogue-free ASMR video productions.",
    fullDesc:
      "A digital culinary brand producing photorealistic, commercial-grade AI food videos and sensory ASMR experiences. Leverages cutting-edge diffusion video generators, precision lighting prompts, and synthesized acoustic soundscapes.",
    features: [
      "High-fidelity food macro-photography simulations (Dark & Moody aesthetics)",
      "Zero-dialogue, action-driven culinary sequencing",
      "Synchronized ambient soundscapes via specialized neural audio synthesis",
    ],
    techStack: ["Google Flow / Veo 3", "Nano Banana Pro", "ElevenLabs", "CapCut Engine"],
    links: [
      { label: "YouTube Shorts", url: "https://www.youtube.com/@cookingwithmrandmrsai/shorts" },
      { label: "Facebook Channel", url: "https://www.facebook.com/profile.php?id=61587260152741" },
    ],
  },
  {
    id: "proj-taprobane-legacy",
    title: "Taprobane Legacy AI Documentaries",
    category: "Generative Media",
    shortDesc: "Cinematic historical, mythological, and heritage explorations powered by AI.",
    fullDesc:
      "A cinematic visual storytelling channel focused on recreating lost epochs, legendary historical accounts, and cultural heritage narratives through photorealistic generative imagery and cinematic voice synthesis.",
    features: [
      "Multi-scene visual consistency pipelines across historical timelines",
      "Dynamic voice narration trained on narrative documentary cadences",
      "Longitudinal visual concept creation and historical atmospheric design",
    ],
    techStack: ["Veo 3 Architecture", "Gemini Creative Prompting", "ElevenLabs Voice Lab"],
    links: [
      { label: "YouTube Channel", url: "https://www.youtube.com/@TaprobaneLegacy" },
      { label: "Facebook Page", url: "https://www.facebook.com/profile.php?id=61590929990878" },
    ],
  },
];