export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string[];
  status: "Research" | "Prototype" | "MVP" | "Production Candidate";
  complexity: "High" | "Medium" | "Low";
  year: number;
  shortDescription: string;
  x: number;
  y: number;
  size: "lg" | "md" | "sm";
  content?: {
    overview: {
      problem: string;
      solution: string;
    };
    capabilities: string[];
    sections: {
      title: string;
      body: string | string[];
    }[];
    images?: {
      architecture?: string;
      training?: string;
      output?: string;
      results?: string;
    };
  };
};

export const projects: Project[] = [
  {
    id: "skilltree",
    title: "SkillTree",
    slug: "skilltree",
    category: ["AI Education Platform", "Local AI", "Agentic Systems"],
    status: "Production Candidate",
    complexity: "High",
    year: 2026,
    shortDescription: "AI-Powered Adaptive Learning Platform.",
    x: 50,
    y: 30,
    size: "lg",
  },
  {
    id: "jarvisgemma",
    title: "JarvisGemma",
    slug: "jarvisgemma",
    category: ["Spatial Computing", "Computer Vision", "Mobile AI"],
    status: "Prototype",
    complexity: "High",
    year: 2026,
    shortDescription: "On-Device Spatial AI Assistant.",
    x: 30,
    y: 60,
    size: "lg",
  },
  {
    id: "weather-platform",
    title: "Weather Analytics",
    slug: "weather-platform",
    category: ["Cloud Engineering", "Data Engineering", "Machine Learning"],
    status: "MVP",
    complexity: "Medium",
    year: 2025,
    shortDescription: "Cloud-Based Weather Forecasting & Analytics Platform.",
    x: 70,
    y: 55,
    size: "lg",
  },
  {
    id: "local-macos-ai-agents",
    title: "macOS AI Agents",
    slug: "local-macos-ai-agents",
    category: ["Local AI", "Apple Ecosystem"],
    status: "Prototype",
    complexity: "High",
    year: 2026,
    shortDescription: "Local macOS AI Agents.",
    x: 40,
    y: 40,
    size: "md",
  },
  {
    id: "whisperkit-integration",
    title: "WhisperKit",
    slug: "whisperkit-integration",
    category: ["Local AI", "Apple Ecosystem"],
    status: "Research",
    complexity: "Medium",
    year: 2026,
    shortDescription: "WhisperKit Speech Intelligence Integration.",
    x: 35,
    y: 50,
    size: "md",
  },
  {
    id: "document-intelligence",
    title: "Doc Intel",
    slug: "document-intelligence",
    category: ["AI", "Data Engineering"],
    status: "MVP",
    complexity: "High",
    year: 2025,
    shortDescription: "AI-Powered Document Processing System.",
    x: 60,
    y: 40,
    size: "md",
  },
  {
    id: "github-automation",
    title: "GitHub Auto",
    slug: "github-automation",
    category: ["Cloud Engineering", "Infrastructure"],
    status: "Production Candidate",
    complexity: "Medium",
    year: 2025,
    shortDescription: "GitHub Workflow Automation.",
    x: 80,
    y: 40,
    size: "sm",
  },
  {
    id: "privacy-first-remote-access",
    title: "Private Remote",
    slug: "privacy-first-remote-access",
    category: ["Infrastructure", "Networking"],
    status: "MVP",
    complexity: "Medium",
    year: 2025,
    shortDescription: "Privacy-First Remote Access Infrastructure.",
    x: 85,
    y: 65,
    size: "sm",
  },
  {
    id: "nas-deployment",
    title: "NAS System",
    slug: "nas-deployment",
    category: ["Infrastructure", "Hardware"],
    status: "Production Candidate",
    complexity: "Low",
    year: 2026,
    shortDescription: "Standalone NAS Deployment.",
    x: 75,
    y: 75,
    size: "sm",
  },
  {
    id: "iot-data-pipeline",
    title: "IoT Pipeline",
    slug: "iot-data-pipeline",
    category: ["IoT", "Edge Computing", "Data Engineering"],
    status: "Prototype",
    complexity: "High",
    year: 2024,
    shortDescription: "Real-Time IoT Data Processing Pipeline.",
    x: 50,
    y: 75,
    size: "md",
  },
  {
    id: "road-safety-monitoring",
    title: "Azure Helmet Detection",
    slug: "road-safety-monitoring",
    category: ["Computer Vision", "Cloud Engineering", "Azure"],
    status: "Production Candidate",
    complexity: "High",
    year: 2024,
    shortDescription: "Automated real-time helmet compliance monitoring using Azure Cloud.",
    x: 40,
    y: 85,
    size: "md",
    content: {
      overview: {
        problem: "Low compliance with helmet laws significantly increases the risks of injury and fatalities in traffic accidents. Current enforcement methods are labor-intensive, often ineffective, and require substantial resources.",
        solution: "An automated helmet detection system leveraging Microsoft Azure cloud technology. The system utilizes advanced computer vision, real-time video processing, and machine learning algorithms to accurately identify and record helmet usage 24/7."
      },
      capabilities: [
        "Real-Time Video Processing: Utilizing Azure Video Analyzer for live monitoring of traffic cameras.",
        "Advanced Detection Models: Leveraging Azure Machine Learning to optimize helmet detection algorithms.",
        "Accurate Helmet Detection: Azure Cognitive Services ensures reliable helmet identification under diverse conditions.",
        "Data Security and Privacy: Implementing robust security measures and adhering to data protection regulations.",
        "User-Friendly Dashboards: Includes intuitive data visualization and reporting tools for authorities."
      ],
      sections: [
        {
          title: "Objectives & Scope",
          body: [
            "Development of an Automated Helmet Violation Detection System capable of real-time monitoring and post-event batch processing.",
            "Foundation for Future Extensions to detect other violations (speeding, signal jumping) in low-light environments and partial occlusions.",
            "Rigorous Testing in both simulated and real-world environments to validate effectiveness and high-traffic scalability."
          ]
        },
        {
          title: "Architecture & Integration",
          body: "The cloud-native architecture spans Data Input, Preprocessing, Feature Selection, Azure Custom Vision, Machine Learning modules, API integrations, and a Visualization dashboard. This enables seamless data processing across large traffic areas with massive scalability."
        },
        {
          title: "Hardware & Software Stack",
          body: [
            "Microsoft Azure (Machine Learning, Cognitive Services, Video Analyzer)",
            "Python & OpenCV for image processing via JupyterLabs",
            "Custom Vision deployment for model training and prediction"
          ]
        },
        {
          title: "Validation & Results",
          body: "The Custom Vision model was rigorously trained and achieved an 86.6% mean Average Precision (mAP), with a Precision of 66.7% and Recall of 80.0%. Bounding boxes accurately classify 'wearing helmet' and 'not wearing helmet' on live data feeds."
        },
        {
          title: "Future Work",
          body: [
            "Enhancing multi-object detection to identify seatbelt use and speeding.",
            "Leveraging IoT sensors and edge computing for real-time alerts with minimal latency.",
            "Integrating predictive analytics to help authorities pinpoint high-risk areas."
          ]
        }
      ],
      images: {
        architecture: "/images/helmet-architecture.png",
        training: "/images/helmet-training.png",
        output: "/images/helmet-output.png",
        results: "/images/helmet-results.png"
      }
    }
  },
  {
    id: "5g-edge-computing",
    title: "5G Edge",
    slug: "5g-edge-computing",
    category: ["Edge Computing", "Infrastructure"],
    status: "Research",
    complexity: "Medium",
    year: 2024,
    shortDescription: "5G Edge Computing Infrastructure Study.",
    x: 60,
    y: 85,
    size: "sm",
  },
];

// Define relationships for the galaxy lines
export const connections = [
  // SkillTree cluster
  { from: "skilltree", to: "local-macos-ai-agents" },
  { from: "skilltree", to: "document-intelligence" },
  { from: "local-macos-ai-agents", to: "whisperkit-integration" },
  
  // Spatial/Apple cluster
  { from: "jarvisgemma", to: "whisperkit-integration" },
  { from: "jarvisgemma", to: "local-macos-ai-agents" },
  
  // Cloud/Infra cluster
  { from: "weather-platform", to: "document-intelligence" },
  { from: "weather-platform", to: "github-automation" },
  { from: "weather-platform", to: "privacy-first-remote-access" },
  { from: "privacy-first-remote-access", to: "nas-deployment" },
  
  // Edge/IoT cluster
  { from: "iot-data-pipeline", to: "weather-platform" },
  { from: "iot-data-pipeline", to: "road-safety-monitoring" },
  { from: "iot-data-pipeline", to: "5g-edge-computing" },
];
