// src/app/projects/projectsData.ts

export interface Project {
  slug: string;
  title: string;
  summary: string;
  technologies: string[];
  challenge: string;
  contributions: { title: string; points: string[] };
  outcome: string;
  githubUrl?: string;
  paperUrl?: string;
}

export const projectsData: Project[] = [
  {
    slug: "vispa",
    title: "VISPA - An AI-Powered Sign Language Learning Platform",
    summary: "A full-stack web application designed to make learning sign language accessible and engaging. As a UI/UX designer on the team, I designed the application's prototypes in Figma and gained valuable insight into the implementation of a modern Next.js application.",
    technologies: ["Figma (UI/UX Design)", "Next.js", "React", "Flask", "Python", "Supabase", "Vercel"],
    challenge: "Existing digital tools for learning sign language are often passive... Our team's goal was to create a web platform that directly addresses these gaps by building a more interactive and enjoyable learning experience from the ground up.",
    contributions: {
      title: "My Contributions",
      points: [
        "My primary role on the VISPA team was in UI/UX design, creating the application's visual and interactive prototypes in Figma.",
        "I designed the user flows and layouts for key pages, including the home, learn, and interactive play sections, based on initial user research.",
        "While my main focus was design, I also worked closely with the development team. This provided me with a valuable opportunity to learn how a professional Figma design is translated into a functional Next.js application, observing the component-building process and the integration with the Supabase backend."
      ]
    },
    outcome: "We successfully developed and deployed a fully functional web application that offers a structured, gamified curriculum... The final product closely follows the user-centric design principles established in my Figma prototypes, resulting in an intuitive and engaging platform.",
    githubUrl: "https://github.com/Exilitys/vispa"
  },
  {
    slug: "cnn-research",
    title: "Evaluating Deep vs. Lightweight CNNs for Real-Time Traffic Sign Recognition",
    summary: "A research project that quantitatively compared a deep CNN (ResNet50) and a lightweight CNN (MobileNetV3). The findings revealed a critical trade-off: ResNet50 achieved a higher test accuracy of 94.16%, while MobileNetV3 demonstrated significantly faster GPU inference speed.",
    technologies: ["Python", "TensorFlow", "Pandas", "GTSRB Dataset", "ResNet50", "MobileNetV3"],
    challenge: "For Advanced Driver-Assistance Systems (ADAS), Traffic Sign Recognition (TSR) models must be both highly accurate and computationally efficient... This research aimed to quantify the performance trade-offs between a deep, complex model (ResNet50) and an efficient, lightweight model (MobileNetV3).",
    contributions: {
      title: "My Actions & Contributions",
      points: [
        "As part of a two-person team, I took ownership of the ResNet50 model from implementation to evaluation.",
        "I implemented a two-phase transfer learning technique, which involved fine-tuning the model on the GTSRB dataset after first training a new classification head with the base layers frozen.",
        "I prepared and augmented the GTSRB dataset, applying transformations like resizing, rotation, and brightness adjustments.",
        "I evaluated the final model on multiple metrics: accuracy, F1-score, inference time (CPU & GPU), and model complexity."
      ]
    },
    outcome: "Our research successfully highlighted the critical balance between accuracy and efficiency. My ResNet50 model achieved a superior test accuracy of 94.16%, while MobileNetV3 proved nearly 5x faster on GPU, making it a more viable candidate for on-device deployment.",
    paperUrl: "#" // Replace with actual link to the paper
  },
  {
    slug: "house-price-prediction",
    title: "House Price Prediction for the Jabodetabek Region",
    summary: "An end-to-end machine learning project to predict house prices. I contributed to the crucial data preprocessing stage by cleaning the raw dataset and assisted the team throughout the full project lifecycle.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Next.js", "Flask", "Git/GitHub"],
    challenge: "The real estate market in a dense metropolitan area like Jabodetabek has highly variable pricing... Our team's objective was to engineer a data-driven solution that could provide fast and objective price predictions.",
    contributions: {
      title: "My Contributions",
      points: [
        "My main contribution to this project was in the critical data preprocessing stage, where I focused on cleaning the raw, noisy dataset.",
        "I performed intensive data cleaning, which included handling missing values, removing duplicates, and addressing outliers. This effort reduced the dataset from over 3,500 rows to a final, high-quality set of 2,397 rows.",
        "I assisted and observed the full end-to-end machine learning workflow, from model tuning and evaluation to the final deployment of the model in a Flask API."
      ]
    },
    outcome: "Our team successfully built a robust prediction pipeline. The final RandomForestRegressor model achieved a strong R² score of 0.852 and was deployed as a complete, interactive web application.",
    githubUrl: "https://github.com/Exilitys/House-Prediction-Jabodetabek-WebAPP"
  }
];