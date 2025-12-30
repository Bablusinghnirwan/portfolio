import {
    Brain, MessageSquare, Activity, Calendar, HeartPulse, Newspaper,
    FileText, ShieldAlert, Eye, Smile, Layout, MonitorPlay, Mic,
    HardDrive, Smartphone
} from "lucide-react"

export const projects = [
    {
        id: "01",
        title: "Domain-Specific SLM with RAG",
        role: "AI / ML Engineer",
        shortDescription: "CPU-based Small Language Model from scratch with RAG.",
        overview: "Designed and trained a CPU-based Small Language Model from scratch and enhanced it using Retrieval-Augmented Generation (RAG) to deliver accurate, domain-specific responses with controlled hallucination.",
        problemStatement: {
            title: "Problem Statement",
            description: "General-purpose LLMs are expensive, overkill for narrow domains, and unreliable for factual queries. The goal was to build a lightweight, domain-focused model that runs on limited hardware (CPU, low RAM), understands domain context deeply, and uses external knowledge safely via RAG."
        },
        implementation: [
            {
                phase: "Phase 1: SLM from Scratch",
                details: [
                    "Trained a Small Language Model (~150M parameters) without using any hosted LLM APIs.",
                    "Rebuilt tokenizer to fit English + Hinglish corpus.",
                    "Cleaned and deduplicated dataset manually to remove noise and repetition.",
                    "Fine-tuned model behavior using QA-style training."
                ]
            },
            {
                phase: "Phase 2: Domain Specialization",
                details: [
                    "Created a custom dataset focused on the 2023 Cricket World Cup.",
                    "Generated 1000+ unique, non-repetitive Q&A samples.",
                    "Enforced strict semantic diversity rules.",
                    "Evaluated factual accuracy using automated QA tests."
                ]
            },
            {
                phase: "Phase 3: RAG Integration",
                details: [
                    "Implemented Retrieval-Augmented Generation to fetch external context dynamically.",
                    "Reduced hallucination and extended knowledge beyond training data.",
                    "Compared outputs: SLM-only responses vs SLM + RAG responses."
                ]
            },
            {
                phase: "Phase 4: Evaluation & Auditing",
                details: [
                    "Built QA test scripts for factual validation.",
                    "Logged incorrect reasoning patterns.",
                    "Iteratively retrained model with cleaned data."
                ]
            }
        ],
        architecture: "User Query -> Tokenizer (Custom) -> SLM (150M params) -> [If knowledge missing] -> Retriever (Vector Search) -> Context Injection -> Answer Generation",
        techStackDetails: [
            { category: "AI / ML", items: ["Python", "PyTorch", "Custom Tokenizer", "Transformer Architecture", "RAG", "Vector Embeddings"] },
            { category: "Data & Evaluation", items: ["Custom Dataset Generation Scripts", "Regex-based Deduplication", "QA Evaluation Pipelines"] },
            { category: "Infrastructure", items: ["CPU-based Training", "Local File System Checkpoints", "Lightweight inference setup"] }
        ],
        challenges: [
            "Training stability on CPU-only hardware",
            "Tokenization issues with Hinglish text",
            "Hallucination control without massive models",
            "Maintaining semantic diversity in datasets",
            "Balancing model size vs accuracy"
        ],
        outcomes: [
            "Achieved domain-accurate conversational responses",
            "Reduced hallucination using RAG instead of overtraining",
            "Built a reusable architecture for other domains",
            "Demonstrated end-to-end understanding of LLM internals"
        ],
        keyInsights: [
            "You understand how LLMs work internally",
            "You can build AI without APIs",
            "You think in systems, not shortcuts",
            "You can explain trade-offs clearly"
        ],
        tags: ["PyTorch", "Transformers", "RAG"],
        icon: Brain,
        color: "text-blue-400",
        borderColor: "border-blue-400",
        bgGradient: "from-blue-500/20 to-transparent"
    },
    {
        id: "02",
        title: "AI Personal Companion",
        role: "AI Engineer",
        shortDescription: "Voice-enabled, RAG-backed personal AI companion.",
        overview: "Built a personal AI companion designed to behave like a real conversational partner. The system combines language understanding, voice interaction, retrieval-based knowledge access, and personality control to deliver contextual, human-like conversations in English, Hindi, and Hinglish.",
        problemStatement: {
            title: "Problem Statement",
            description: "Most conversational AIs fail due to inconsistent personality, hallucinated answers, and unnatural voice interactions. The goal was to design an AI that maintains a stable personality, admits uncertainty, uses external knowledge safely, and communicates naturally via voice."
        },
        implementation: [
            {
                phase: "Phase 1: Core Conversational Engine",
                details: [
                    "Designed a structured conversational flow.",
                    "Controlled responses using system-level prompting.",
                    "Ensured consistent tone and behavior across interactions."
                ]
            },
            {
                phase: "Phase 2: Accuracy & Knowledge Handling",
                details: [
                    "Integrated a Retrieval-Augmented Generation (RAG) layer.",
                    "Used retrieval when the model lacked internal knowledge.",
                    "Built logic to switch between direct response, retrieved response, or clarification request."
                ]
            },
            {
                phase: "Phase 3: Voice Interaction Layer",
                details: [
                    "Implemented Text-to-Speech (TTS) for real-time narration.",
                    "Focused on Hindi / Hinglish voice delivery.",
                    "Design system to read on-screen explanations aloud.",
                    "Avoided audio file storage for lightweight interaction."
                ]
            },
            {
                phase: "Phase 4: Evaluation & Auditing",
                details: [
                    "Created structured accuracy evaluation reports.",
                    "Identified failure patterns in reasoning.",
                    "Refined prompt and retrieval logic iteratively."
                ]
            }
        ],
        architecture: "User Input (Text/Voice) -> Conversation Controller -> Language Model -> [If low confidence] -> RAG -> Response Generator -> TTS Output",
        techStackDetails: [
            { category: "AI / NLP", items: ["Python", "Transformer-based Model", "Prompt Engineering", "RAG", "Vector-based Retrieval"] },
            { category: "Voice & Interaction", items: ["Text-to-Speech (TTS)", "Real-time narration", "Multi-language support"] },
            { category: "Evaluation", items: ["Accuracy auditing scripts", "Structured testing"] }
        ],
        challenges: [
            "Maintaining personality consistency over long conversations",
            "Preventing hallucinations without killing conversational flow",
            "Designing natural Hinglish responses",
            "Synchronizing voice output with on-screen responses"
        ],
        outcomes: [
            "Built a controllable, voice-enabled AI companion",
            "Demonstrated safe knowledge handling using RAG",
            "Learned how conversational UX differs from standard chatbots",
            "Developed evaluation discipline for conversational AI"
        ],
        keyInsights: [
            "Applied conversational AI engineering",
            "Voice + language system integration",
            "UX thinking inside AI systems",
            "Responsible AI behavior (uncertainty handling)"
        ],
        tags: ["Voice AI", "RAG", "Conversational AI"],
        icon: MessageSquare,
        color: "text-purple-400",
        borderColor: "border-purple-400",
        bgGradient: "from-purple-500/20 to-transparent"
    },
    {
        id: "03",
        title: "Saarni - Traffic Simulation",
        role: "Simulation Engineer",
        shortDescription: "AI Train Traffic Management System.",
        overview: "Built a train traffic simulation system that models real-world railway operations such as train movement, delays, and platform-level scheduling. The project focuses on decision-making under constraints, not just animation or visualization.",
        problemStatement: {
            title: "Problem Statement",
            description: "Railway traffic management faces challenges like cascading delays, platform conflicts, and poor real-time rescheduling. The objective was to simulate how delays propagate, how platform allocation affects flow, and how AI logic could optimize decisions."
        },
        implementation: [
            {
                phase: "Phase 1: Core Simulation Engine",
                details: [
                    "Built a map-based train movement simulator.",
                    "Modeled trains as independent entities with route, speed, schedule, and delay state.",
                    "Ensured movement logic stayed consistent with time progression."
                ]
            },
            {
                phase: "Phase 2: Delay Handling Logic",
                details: [
                    "Introduced artificial and real delay scenarios.",
                    "Designed logic to update downstream schedules and prevent impossible overlaps.",
                    "Simulated realistic knock-on effects instead of isolated delays."
                ]
            },
            {
                phase: "Phase 3: Station & Platform-Level Scheduling",
                details: [
                    "Modeled stations with multiple platforms.",
                    "Assigned trains dynamically to platforms.",
                    "Prevented conflicts like two trains on one platform."
                ]
            },
            {
                phase: "Phase 4: AI-Ready Decision Layer",
                details: [
                    "Structured the system so AI optimization could be plugged in later.",
                    "Clear separation between simulation state, decision logic, and visualization."
                ]
            }
        ],
        architecture: "Train Schedule Input -> Simulation Engine -> Delay Propagation Logic -> Platform Allocation Module -> Updated Train State",
        techStackDetails: [
            { category: "Core Logic", items: ["Python", "Time-based simulation", "Rule-based scheduling"] },
            { category: "Simulation & Viz", items: ["Grid/Map-based movement", "Time-step driven loop"] },
            { category: "AI Readiness", items: ["Modular decision layer", "Compatibility with RL/heuristic models"] }
        ],
        challenges: [
            "Modeling real-world constraints realistically",
            "Avoiding naive 'one-delay-one-fix' logic",
            "Handling simultaneous arrivals and departures",
            "Designing a scalable simulation structure",
            "Keeping logic deterministic and debuggable"
        ],
        outcomes: [
            "Built a working infrastructure simulation, not a toy model",
            "Learned how real systems fail under delays",
            "Understood why naive scheduling breaks at scale",
            "Developed system-thinking applicable to traffic and ops AI"
        ],
        keyInsights: [
            "Systems thinking beyond CRUD apps",
            "Understanding of real-world constraints",
            "Readiness for AI-driven optimization",
            "Ability to model complex environments before applying ML"
        ],
        tags: ["Python", "Simulation", "Optimization"],
        icon: Activity,
        color: "text-pink-400",
        borderColor: "border-pink-400",
        bgGradient: "from-pink-500/20 to-transparent"
    },
    {
        id: "04",
        title: "AI Routine Planner",
        role: "Flutter Developer",
        shortDescription: "Mobile-first daily scheduling app.",
        overview: "Built a mobile-first routine planning application that helps users structure their day realistically instead of creating ideal but unsustainable schedules. The app uses AI-assisted logic to recommend routines based on time availability, priorities, and user constraints.",
        problemStatement: {
            title: "Problem Statement",
            description: "Most routine apps assume unlimited motivation and ignore time constraints. The goal was to build a system that respects real-world time limits, adapts routines dynamically, and assists planning instead of enforcing it."
        },
        implementation: [
            {
                phase: "Phase 1: Core Routine Planning Logic",
                details: ["Designed a routine model based on available time blocks and energy levels.", "Prevented over-scheduling by enforcing realistic limits."]
            },
            {
                phase: "Phase 2: AI-Assisted Recommendations",
                details: ["Integrated AI logic to suggest task ordering.", "Balanced work, rest, and personal activities.", "Provided soft suggestions rather than hard enforcement."]
            },
            {
                phase: "Phase 3: Mobile-First UX (Flutter)",
                details: ["Built cross-platform support with Flutter.", "Focused on minimal input friction.", "Designed screens for fast daily check-ins."]
            }
        ],
        architecture: "User Inputs (Tasks, Time) -> Routine Logic Engine -> AI Recommendation Layer -> Daily Schedule Output",
        techStackDetails: [
            { category: "Mobile", items: ["Flutter", "Dart", "Local Storage"] },
            { category: "AI Assistance", items: ["Lightweight logic for ordering", "Constraint-based rules"] },
            { category: "Architecture", items: ["Modular widgets", "State management"] }
        ],
        challenges: [
            "Preventing unrealistic schedules",
            "Balancing automation with user control",
            "Designing UX for daily repeat usage",
            "Making AI suggestions feel optional, not forced"
        ],
        outcomes: [
            "Built a usable productivity app, not just a UI demo",
            "Learned how small AI suggestions improve adoption",
            "Understood why simplicity beats feature overload",
            "Gained experience in mobile-first product thinking"
        ],
        keyInsights: [
            "Productivity tools need realism, not just lists",
            "Mobile-first constraint handling",
            "AI as a subtle guide"
        ],
        tags: ["Flutter", "Mobile", "Productivity"],
        icon: Calendar,
        color: "text-emerald-400",
        borderColor: "border-emerald-400",
        bgGradient: "from-emerald-500/20 to-transparent"
    },
    {
        id: "05",
        title: "AayushCare",
        role: "Full Stack Developer",
        shortDescription: "Doctor-Patient Healthcare Management System.",
        overview: "Built a fully functional healthcare management software that connects doctors and patients on a single platform and securely maintains patient medical history over time. The system focuses on data integrity, role-based access, and long-term record management.",
        problemStatement: {
            title: "Problem Statement",
            description: "Traditional records are fragmented and unsafe. The goal was to create a system that digitally stores history, allows efficient management by doctors, and gives patients access to their own data."
        },
        implementation: [
            { phase: "Phase 1: System Design & Roles", details: ["Defined Doctor/Patient roles.", "Designed role-based workflows."] },
            { phase: "Phase 2: Patient Medical History", details: ["Implemented storage for visits, diagnoses, prescriptions.", "Ensured records remain immutable."] },
            { phase: "Phase 3: Backend & Database", details: ["Built logic for registration, auth, and data validation.", "Ensured proper data relationships."] },
            { phase: "Phase 4: Flow & Usability", details: ["Designed clean workflows for consults.", "Focused on clarity over visual complexity."] }
        ],
        architecture: "User -> Auth Layer -> Role-Based Access -> Healthcare Logic -> Medical Records DB",
        techStackDetails: [
            { category: "Frontend", items: ["Web-based UI", "Role-specific dashboards"] },
            { category: "Backend", items: ["Server-side logic", "Auth & Authorization", "API-based data handling"] },
            { category: "Database", items: ["Structured medical records", "Patient-Doctor mapping"] }
        ],
        challenges: [
            "Designing secure role-based access",
            "Maintaining long-term data integrity",
            "Preventing unauthorized modification",
            "Structuring medical data for scalability"
        ],
        outcomes: [
            "Delivered working healthcare software",
            "Gained experience in domain-critical design",
            "Learned about data sensitivity",
            "Understood importance of clean data models"
        ],
        keyInsights: [
            "Healthcare software requires trust and precision",
            "Role-based access is critical",
            "Data integrity > Features"
        ],
        tags: ["Full Stack", "Healthcare", "Database"],
        icon: HeartPulse,
        color: "text-cyan-400",
        borderColor: "border-cyan-400",
        bgGradient: "from-cyan-500/20 to-transparent"
    },
    {
        id: "06",
        title: "Fake News Detection System",
        role: "AI / NLP Engineer",
        shortDescription: "Web Search + RAG for evidence-backed verification.",
        overview: "Built a fake news detection system that verifies claims by combining live web search with Retrieval-Augmented Generation (RAG). It focuses on evidence-backed verification and explains why a piece of news is likely fake or real.",
        problemStatement: {
            title: "Problem Statement",
            description: "Traditional detectors rely on text patterns and fail on new news. This system actively searches for supporting/contradicting info and grounds responses in real sources."
        },
        implementation: [
            { phase: "Phase 1: Claim Extraction", details: ["Designed logic to extract core claims.", "Removed irrelevant emotional language."] },
            { phase: "Phase 2: Web Search", details: ["Integrated live search to fetch articles and official statements.", "Ensured system reacts to current events."] },
            { phase: "Phase 3: RAG Integration", details: ["Stored fetched info as context.", "Injected verified content into response generation."] },
            { phase: "Phase 4: Verification", details: ["Compared claim against evidence.", "Generated clear reasoning."] }
        ],
        architecture: "User Input -> Claim Extraction -> Web Search -> Evidence Retrieval (RAG) -> Verdict + Explanation",
        techStackDetails: [
            { category: "AI / NLP", items: ["Python", "Transformers", "RAG", "Semantic Similarity"] },
            { category: "Data & Search", items: ["Web Search Integration", "Source Filtering", "Context Ranking"] }
        ],
        challenges: [
            "Handling rapidly changing news",
            "Preventing hallucinated justifications",
            "Extracting verifiable claims from noisy text",
            "Explaining uncertainty transparently"
        ],
        outcomes: [
            "Built a misinformation system grounded in evidence",
            "Learned why classification alone is insufficient",
            "Understood importance of explainability in AI",
            "Practical RAG experience"
        ],
        keyInsights: [
            "Evidence > Prediction",
            "Explainability builds trust",
            "AI needs real-time data access"
        ],
        tags: ["NLP", "RAG", "Web Search"],
        icon: Newspaper,
        color: "text-orange-400",
        borderColor: "border-orange-400",
        bgGradient: "from-orange-500/20 to-transparent"
    },
    {
        id: "07",
        title: "AI Resume & JD Analyzer",
        role: "AI / NLP Engineer",
        shortDescription: "ATS-Aware System for Career Intelligence.",
        overview: "Built an AI-powered resume analysis system that compares a candidate’s resume against a job description (JD) and provides actionable improvement suggestions, with a strong focus on ATS compatibility.",
        problemStatement: {
            title: "Problem Statement",
            description: "Job seekers face rejection due to semantic misalignment and ATS parsing errors. This tool provides actionable, ATS-friendly advice."
        },
        implementation: [
            { phase: "Phase 1: Parsing", details: ["Built logic to parse resumes and JDs into structured sections."] },
            { phase: "Phase 2: Semantic Analysis", details: ["Compared content using NLP semantic similarity.", "Identified missing skills/weak areas."] },
            { phase: "Phase 3: AI Suggestions", details: ["Generated contextual ways to emphasize skills.", "Ensured truthful suggestions."] },
            { phase: "Phase 4: ATS Awareness", details: ["Designed output to be simple, clear, and keyword-optimized but honest."] }
        ],
        architecture: "Resume + JD -> Parsing -> Semantic Comparison -> Gap Detection -> Suggestions",
        techStackDetails: [
            { category: "AI / NLP", items: ["Python", "NLP Semantic Similarity", "Transformer Models", "Preprocessing"] },
            { category: "System Logic", items: ["Structure Extraction", "Hybrid Suggestion Logic"] }
        ],
        challenges: [
            "Handling diverse resume formats",
            "Preventing misleading suggestions",
            "Balancing ATS optimization with honesty",
            "Explaining gaps clearly"
        ],
        outcomes: [
            "Built a practical career-support AI tool",
            "Learned how ATS systems influence design",
            "Understood limitations of pure keyword matching",
            "Gained experience in explainable NLP"
        ],
        keyInsights: [
            "ATS is about semantics, not just keywords",
            "AI can democratize career advice",
            "Transparency in analysis"
        ],
        tags: ["NLP", "ATS", "Career Tech"],
        icon: FileText,
        color: "text-indigo-400",
        borderColor: "border-indigo-400",
        bgGradient: "from-indigo-500/20 to-transparent"
    },
    {
        id: "08",
        title: "Malicious Content Verifier",
        role: "Cybersecurity Engineer",
        shortDescription: "Browser Extension for Pre-Click Safety.",
        overview: "Built a security-focused browser extension that helps users verify whether links, emails, messages, or images contain malicious content before interacting with them. Acts as a pre-click safety layer specifically for phishing prevention.",
        problemStatement: {
            title: "Problem Statement",
            description: "Users often trust content blindly. This tool actively verifies suspicious content types to give clear risk signals instead of technical jargon."
        },
        implementation: [
            { phase: "Phase 1: Content Extraction", details: ["Extracts potential threats from URLs, emails, messages.", "Normalizes data for analysis."] },
            { phase: "Phase 2: Verification Logic", details: ["Checks suspicious domains, redirects, and patterns."] },
            { phase: "Phase 3: AI Risk Assessment", details: ["Analyzes context and language patterns using AI.", "Avoids binary judgments, indicates risk level."] },
            { phase: "Phase 4: Integration", details: ["Implemented as a browser extension.", "Ensured minimal performance impact."] }
        ],
        architecture: "User Content -> Extraction -> Rule-Based Checks -> AI Risk Analysis -> Verdict & Warning",
        techStackDetails: [
            { category: "Extension", items: ["JavaScript", "Browser APIs", "DOM Inspection"] },
            { category: "Security & AI", items: ["URL Analysis", "Pattern Detection", "Contextual Analysis"] }
        ],
        challenges: [
            "Extracting links reliably",
            "Reducing false positives",
            "Making warnings understandable",
            "Balancing security with performance"
        ],
        outcomes: [
            "Built a real-world cybersecurity utility",
            "Gained experience in phishing detection logic",
            "Learned attacker strategies",
            "Understood browser security limitations"
        ],
        keyInsights: [
            "Security needs to be proactive",
            "User trust is the main vulnerability",
            "Browser extensions are powerful security tools"
        ],
        tags: ["Cybersecurity", "Browser Extension", "JavaScript"],
        icon: ShieldAlert,
        color: "text-red-400",
        borderColor: "border-red-400",
        bgGradient: "from-red-500/20 to-transparent"
    },
    {
        id: "09",
        title: "Compliance Scanner",
        role: "Web Automation Engineer",
        shortDescription: "Browser Extension for Website Policy Detection.",
        overview: "Built a browser-based compliance scanner that automatically detects whether a website provides essential legal and transparency documents. Designed for real-world browsing to give instant feedback on privacy and terms exposure.",
        problemStatement: {
            title: "Problem Statement",
            description: "Many sites hide policies. Manual verification is slow. The goal was to build a tool that automatically checks compliance signals and works across varied structures."
        },
        implementation: [
            { phase: "Phase 1: Page Content Detection", details: ["DOM scanning for Privacy, Terms, and Cookies.", "Handled naming variations."] },
            { phase: "Phase 2: Navigation & Dynamic Handling", details: ["Detects policies loaded dynamically.", "Follows internal links."] },
            { phase: "Phase 3: Verification Logic", details: ["Differentiates actual pages from placeholders.", "Ensures detection based on content presence."] },
            { phase: "Phase 4: Extension Integration", details: ["Provided real-time feedback.", "Focused on low overhead."] }
        ],
        architecture: "Active Webpage -> DOM Scanner -> Policy ID Logic -> Compliance Output",
        techStackDetails: [
            { category: "Extension", items: ["JavaScript", "Browser APIs", "Mutation Observers"] },
            { category: "Automation", items: ["Pattern-based detection", "Link heuristics", "Dynamic content handling"] }
        ],
        challenges: [
            "Handling inconsistent website structures",
            "Detecting hidden policies",
            "Avoiding false positives",
            "Keeping extension lightweight"
        ],
        outcomes: [
            "Built a practical transparency tool",
            "Learned compliance variability",
            "Strong DOM analysis experience",
            "Limits of automated checks"
        ],
        keyInsights: [
            "Transparency should be automated",
            "DOM analysis helps uncover site patterns",
            "Browser automation is versatile"
        ],
        tags: ["Automation", "Compliance", "Browser Extension"],
        icon: Eye,
        color: "text-amber-400",
        borderColor: "border-amber-400",
        bgGradient: "from-amber-500/20 to-transparent"
    },
    {
        id: "10",
        title: "Sentiment Analysis System",
        role: "AI Engineer",
        shortDescription: "System for Large-Scale User Comments.",
        overview: "Built a sentiment analysis system to analyze and classify user opinions from real-world textual data. Focused on robustness, consistency, and practical evaluation on 700+ real comments.",
        problemStatement: {
            title: "Problem Statement",
            description: "User content is noisy and informal. Simple models fail. The goal was to build a system that handles unclean text and produces stable, meaningful outputs."
        },
        implementation: [
            { phase: "Phase 1: Data Prep", details: ["Collected 700+ comments.", "Cleaned noise, duplicates, and casing."] },
            { phase: "Phase 2: Classification Logic", details: ["Designed Positive/Negative/Neutral categories.", "Applied NLP techniques for polarity.", "Avoided overfitting."] },
            { phase: "Phase 3: Evaluation", details: ["Tested across diverse styles.", "Checked consistency.", "Analyzed misclassifications."] },
            { phase: "Phase 4: Interpretation", details: ["Converted raw predictions to insights.", "Focused on trend-level data."] }
        ],
        architecture: "Raw Comments -> Cleaning -> Model -> Labels & Trends",
        techStackDetails: [
            { category: "AI / NLP", items: ["Python", "Preprocessing pipelines", "Sentiment Model", "Normalization"] },
            { category: "Data", items: ["Structured datasets", "Evaluation scripts"] }
        ],
        challenges: [
            "Handling noisy, informal text",
            "Preventing over-confidence on ambiguity",
            "Evaluating meaningfully",
            "Managing class imbalance"
        ],
        outcomes: [
            "Built a stable analysis pipeline",
            "Learned importance of data quality",
            "Gained NLP evaluation experience",
            "Understood limits of real-world classification"
        ],
        keyInsights: [
            "Data cleaning is 80% of the work",
            "Context matters in sentiment",
            "Trends > Individual labels"
        ],
        tags: ["NLP", "Data Science", "Text Analytics"],
        icon: Smile,
        color: "text-yellow-400",
        borderColor: "border-yellow-400",
        bgGradient: "from-yellow-500/20 to-transparent"
    },
    {
        id: "11",
        title: "Admin-Controlled CMS",
        role: "Full Stack Developer",
        shortDescription: "Content Publishing System.",
        overview: "Built a custom Content Management System (CMS) that allows an admin to fully control website content through a dedicated dashboard. Replicates real-world publishing workflows with a focus on data control and reliability.",
        problemStatement: {
            title: "Problem Statement",
            description: "Hardcoded sites don't scale. Non-technical users need control. The goal was to enable admin management without code touches and ensure instant, reliable updates."
        },
        implementation: [
            { phase: "Phase 1: Admin Dashboard", details: ["Designed admin panel.", "Implemented editor-based creation."] },
            { phase: "Phase 2: Backend & DB", details: ["Connected actions to DB.", "Ensured validation and separation of draft/published."] },
            { phase: "Phase 3: Frontend Rendering", details: ["Built pages to fetch content dynamically.", "Removed dummy data."] },
            { phase: "Phase 4: Testing", details: ["Tested with real content.", "Verified end-to-end flow."] }
        ],
        architecture: "Admin Dashboard -> API -> DB -> User Website",
        techStackDetails: [
            { category: "Frontend", items: ["Web UI", "Editor Input", "Dynamic Rendering"] },
            { category: "Backend", items: ["Server-side APIs", "Validation", "Auth"] },
            { category: "Database", items: ["Structured content", "Relationships"] }
        ],
        challenges: [
            "Eliminating hardcoded content",
            "Maintaining consistency",
            "Preventing invalid states",
            "Designing flexible schemas"
        ],
        outcomes: [
            "Built a production-style CMS",
            "Learned admin workflow design",
            "Understood content lifecycle",
            "Full-stack ownership experience"
        ],
        keyInsights: [
            "Content needs to be dynamic",
            "Admins need powerful tools",
            "Data flow dictates architecture"
        ],
        tags: ["CMS", "Full Stack", "Web Dev"],
        icon: Layout,
        color: "text-lime-400",
        borderColor: "border-lime-400",
        bgGradient: "from-lime-500/20 to-transparent"
    },
    {
        id: "12",
        title: "Dynamic Visual Simulation",
        role: "Python Developer",
        shortDescription: "Pygame Visualization Engine.",
        overview: "Built a dynamic visual simulation system using Pygame that can render multiple diagrams, animations, and text without layout breakage. Core focus on automatic layout adaptation and logic-heavy visualization.",
        problemStatement: {
            title: "Problem Statement",
            description: "Static layouts break with dynamic content. The goal was to build a system that automatically adjusts layout, handles multiple diagrams, and keeps visuals structured."
        },
        implementation: [
            { phase: "Phase 1: Layout Engine", details: ["Designed logic to detect screen space.", "Made layout responsive."] },
            { phase: "Phase 2: Diagram Management", details: ["Implemented automatic placement.", "Distributed diagrams evenly."] },
            { phase: "Phase 3: Synchronization", details: ["Synchronized text with visuals.", "Prevented overlap."] },
            { phase: "Phase 4: Adaptive Loop", details: ["Built loop to recalculate layout on change.", "Ensured smooth rendering."] }
        ],
        architecture: "Simulation Content -> Layout Engine -> Position Allocation -> Render Loop",
        techStackDetails: [
            { category: "Core", items: ["Python", "Pygame"] },
            { category: "Logic", items: ["Dynamic Coordinate Calculation", "Collision Prevention"] }
        ],
        challenges: [
            "Eliminating hardcoded positions",
            "Managing multiple elements",
            "Preventing overlap",
            "Maintaining determinism"
        ],
        outcomes: [
            "Built a reusable framework",
            "Learned layout logic difficulty",
            "Gained real-time rendering experience",
            "Improved debugging skills"
        ],
        keyInsights: [
            "Visuals need system logic",
            "Responsiveness isn't just for web",
            "Tools building is valuable"
        ],
        tags: ["Python", "Pygame", "Visualization"],
        icon: MonitorPlay,
        color: "text-violet-400",
        borderColor: "border-violet-400",
        bgGradient: "from-violet-500/20 to-transparent"
    },
    {
        id: "13",
        title: "Real-Time TTS System",
        role: "Voice AI Engineer",
        shortDescription: "Live Voice Narration.",
        overview: "Built a real-time Text-to-Speech (TTS) system that converts on-screen explanations into live voice narration. Designed without audio file storage for immediate, lightweight, privacy-aware playback.",
        problemStatement: {
            title: "Problem Statement",
            description: "Standard TTS is robotic and latent. The goal was a system that speaks immediately, feels conversational, and works with dynamic text."
        },
        implementation: [
            { phase: "Phase 1: Pipeline", details: ["Capture text -> Send to Engine -> Play Audio.", "No file storage."] },
            { phase: "Phase 2: Language Handling", details: ["Focused on Hindi/Hinglish.", "Tuned pacing and pronunciation."] },
            { phase: "Phase 3: Integration", details: ["Plugged into AI tools and demos.", "Allowed dynamic response."] },
            { phase: "Phase 4: Optimization", details: ["Reduced latency.", "Ensured smooth playback."] }
        ],
        architecture: "Text -> Handler -> Live Voice Gen -> Output",
        techStackDetails: [
            { category: "Voice", items: ["TTS Engine", "Real-time Playback"] },
            { category: "System", items: ["Event-driven capture", "Low-latency pipeline"] }
        ],
        challenges: [
            "Eliminating file dependency",
            "Synchronizing with UI",
            "Handling rapid changes",
            "Natural Hinglish speech"
        ],
        outcomes: [
            "Built production-style live TTS",
            "Gained real-time pipeline experience",
            "Understood latency impact",
            "Accessibility focus"
        ],
        keyInsights: [
            "Audio adds immersion",
            "Latency kills conversation",
            "Privacy requires no-storage designs"
        ],
        tags: ["Voice AI", "TTS", "Accessibility"],
        icon: Mic,
        color: "text-rose-400",
        borderColor: "border-rose-400",
        bgGradient: "from-rose-500/20 to-transparent"
    },
    {
        id: "14",
        title: "MeaDocs Desktop",
        role: "Desktop Engineer",
        shortDescription: "Offline AI Search Engine.",
        overview: "Engineered MeaDocs Desktop, a fully offline multimedia search engine. Wraps a Python AI backend in an Electron shell for a native Windows experience without internet dependencies.",
        problemStatement: {
            title: "Problem Statement",
            description: "Cloud search requires internet and compromises privacy. The goal was a 100% offline, privacy-first, multimedia search tool."
        },
        implementation: [
            { phase: "Phase 1: Offline Search", details: ["Built natural language search for files.", "Indexed local device directly."] },
            { phase: "Phase 2: Architecture", details: ["Converted Python backend to desktop app via Electron.", "Implemented IPC bridge."] },
            { phase: "Phase 3: Performance", details: ["Lazy-loading models.", "Parallelized initialization."] },
            { phase: "Phase 4: Windows Integration", details: ["System tray, Taskbar, Encrypted Storage.", "Process lifecycle management."] },
            { phase: "Phase 5: Deployment", details: ["Automated build pipeline.", "Single-click installer."] }
        ],
        architecture: "Electron UI <-> IPC <-> Python Backend <-> Offline AI <-> Encrypted Storage",
        techStackDetails: [
            { category: "Desktop", items: ["Electron.js", "Node.js"] },
            { category: "Backend & AI", items: ["Python", "Flask", "Offline Inference"] },
            { category: "Build", items: ["Electron-Builder", "PowerShell"] }
        ],
        challenges: [
            "Bridging Electron-Python",
            "Packaging Python in installer",
            "Fast startup with AI models",
            "Offline architecture"
        ],
        outcomes: [
            "Delivered production-ready desktop app",
            "Mastered IPC communication",
            "Zero-dependency deployment experience"
        ],
        keyInsights: [
            "Offline capability is a feature",
            "Desktop apps need distinct architecture",
            "Privacy is a selling point"
        ],
        tags: ["Electron", "Desktop", "Offline AI"],
        icon: HardDrive,
        color: "text-sky-400",
        borderColor: "border-sky-400",
        bgGradient: "from-sky-500/20 to-transparent"
    },
    {
        id: "15",
        title: "MeaDocs Mobile",
        role: "Flutter Developer",
        shortDescription: "Offline AI Photo Search App.",
        overview: "Built a lightweight mobile application focused on AI-powered photo search from a user's local device. Operates entirely offline with no cloud dependency.",
        problemStatement: {
            title: "Problem Statement",
            description: "Mobile galleries are hard to search. The goal was a semantic search tool that works offline and preserves privacy."
        },
        implementation: [
            { phase: "Phase 1: Indexing", details: ["Built logic to scan/index local images.", "Stored metadata locally."] },
            { phase: "Phase 2: Natural Language", details: ["Enabled semantic search.", "Matched intent to photos."] },
            { phase: "Phase 3: Mobile UX", details: ["Flutter for cross-platform.", "Optimized for speed."] },
            { phase: "Phase 4: Performance", details: ["On-device processing.", "No background network calls."] }
        ],
        architecture: "User Query -> Interpreter -> Offline Index -> Matching -> Results",
        techStackDetails: [
            { category: "Mobile", items: ["Flutter", "Dart"] },
            { category: "AI Logic", items: ["On-device indexing", "Semantic matching"] }
        ],
        challenges: [
            "Running semantic search on mobile",
            "Managing local storage",
            "Responsiveness during indexing",
            "Battery/Memory management"
        ],
        outcomes: [
            "Built production-style mobile app",
            "Learned on-device AI constraints",
            "Privacy-first design experience"
        ],
        keyInsights: [
            "Design narrow products",
            "Mobile AI has strict constraints",
            "Privacy builds value"
        ],
        tags: ["Flutter", "Mobile", "Offline AI"],
        icon: Smartphone,
        color: "text-teal-400",
        borderColor: "border-teal-400",
        bgGradient: "from-teal-500/20 to-transparent"
    }
]
