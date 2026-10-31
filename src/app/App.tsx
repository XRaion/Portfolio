import { useState, type ReactNode } from 'react';
import { Mail, MapPin, Linkedin, FileText, ExternalLink, Paintbrush, Dumbbell, Dna, Bot, ChevronDown } from 'lucide-react';
import profilePhoto from '@/assets/profile.jpg';
import robotPhoto from '@/assets/projects/robot.webp';
import biodefensePhoto from '@/assets/projects/biodefense-team.webp';
import arduinoPhoto from '@/assets/projects/arduino.webp';
import conveyorPhoto from '@/assets/projects/conveyor.webp';
import profilePhotoHover from '@/assets/profile-hover.jpg';
import ResumeSection from './components/ResumeSection';

export default function App() {
  // Touch screens have no hover, so tapping the photo toggles it instead.
  const [showAltPhoto, setShowAltPhoto] = useState(false);

  const projects: Project[] = [
    {
      title: "Firefighting Robot Prototype",
      context: "Hardware prototype",
      summary:
        "A quadruped robot built to support firefighters: it detects gas leaks and flames, then sends its live location so responders can track it to the fire. I wired the sensors into the robot's electronics.",
      tech: ["Gas sensing", "Flame detection", "Live location tracking", "Sensor wiring", "Embedded hardware"],
      image: robotPhoto,
      imagePosition: "center 25%",
      imageAlt: "Quadruped robot prototype with a mounted sensor, wired gas sensor, and power regulator boards",
    },
    {
      title: "Tactical Bio-Core",
      context: "3rd Place · Biodefense San Diego Hackathon · 24 hours",
      summary:
        "With a team, designed a portable, solar-powered bioreactor that produces a three-part probiotic in the field for warfighters recovering from gastrointestinal illness. I designed the VHH nanobody at its core using BindCraft2.",
      details:
        "The nanobody targets CfaE, the fimbrial adhesin enterotoxigenic E. coli uses to grip the gut wall but commensal E. coli lacks, so capping it clears the pathogen while leaving the rest of the microbiome intact. It expresses from L. lactis, a food-grade probiotic, so the reactor grows the producer instead of purifying a protein: no cold chain and a self-renewing supply that complements antibiotics rather than replacing them. Packaged with two proven probiotic organisms as single-dose sachets. As an in silico design, binding confirmation and toxicity screening come next.",
      tech: ["BindCraft2", "VHH nanobody design", "L. lactis expression", "Bioreactor design", "Synthetic biology"],
      image: biodefensePhoto,
      imageAlt: "Kaitlyn and her four teammates at Biodefense San Diego holding their bioreactor prototype",
    },
    {
      title: "Conveyor Belt Prototype",
      context: "MAE 3 Robot Competition · UC San Diego",
      summary:
        "A 3D-printed conveyor belt mechanism prototyped for UC San Diego's MAE 3 robot competition.",
      tech: ["3D printing", "CAD", "Mechanism design", "Prototyping"],
      image: conveyorPhoto,
      imageAlt: "3D-printed orange and yellow conveyor belt mechanism clamped to a test rig",
    },
    {
      title: "Protein Design for Adaptyv",
      context: "Team project · In progress",
      summary:
        "Working with a team on computational protein design for Adaptyv.",
      tech: ["Protein design", "Computational design"],
      icon: <Dna className="w-12 h-12" />,
    },
  ];

  const research: ResearchLab[] = [
    {
      lab: "Mittal Lab",
      role: "Research Assistant",
      dates: "Jul 2025 – Present",
      items: [
        {
          title: "Biomechanical HRIM: Quantifying Esophageal Mechanical Work",
          context: "Senior Design · Sep 2025 – Jun 2026",
          description:
            "With a 5-person team, built a MATLAB pipeline that converts high-resolution impedance manometry data into biomechanical swallow metrics. In pre/post-dupilumab studies of 10 EoE patients, it showed significantly reduced mechanical work in 5 of 6 bolus conditions.",
          tech: ["MATLAB", "HRIM", "Ultrasound validation", "DFMEA"],
          link: "https://beng187-d-group30.vercel.app/",
        },
        {
          title: "EoE Motility Visualization Tool",
          description:
            "Developed a Python tool that processes patient esophageal motility data and automatically generates visualizations of disease progression. Produced figures for a co-authored abstract at Digestive Disease Week 2026.",
          tech: ["Python", "matplotlib", "ManoView", "IRB / HIPAA"],
        },
      ],
    },
    {
      lab: "Aran Lab",
      role: "Research Assistant",
      dates: "Sep 2024 – Jun 2025",
      items: [
        {
          title: "Microfluidic Blood-Brain Barrier Chip",
          description:
            "Designed BBB chips in SolidWorks and laser-cut prototypes for iPSC neural cultures, integrating electrodes to measure barrier integrity via TEER.",
          tech: ["SolidWorks", "Glowforge", "TEER", "iPSC culture"],
        },
      ],
    },
  ];

  const activities: Activity[] = [
    {
      title: "Triton Droids",
      context: "Engineering student club · UC San Diego",
      description: "Where I've learned to work on a team, ship projects on tight deadlines, and pick up new tools quickly.",
      icon: <Bot className="w-12 h-12" />,
    },
    {
      title: "Hackathons",
      context: "3rd Place · Biodefense San Diego",
      description: "24-hour builds with interdisciplinary teams. See Tactical Bio-Core under Projects.",
      icon: <Dna className="w-12 h-12" />,
    },
    {
      title: "Arduino Side Projects",
      context: "Personal",
      description: "Breadboarding circuits on Arduino to practice electronics and embedded programming.",
      image: arduinoPhoto,
      imageAlt: "Arduino Uno wired to a breadboard with push buttons and an LED",
    },
  ];

  const skills = {
    "Laboratory": ["Microfluidic fabrication", "Electrode integration", "TEER", "Size-exclusion chromatography", "Centrifugation", "Hematocrit"],
    "Computational": ["Python", "MATLAB", "SolidWorks", "Git / GitHub", "Statistical analysis"],
    "Clinical & Design": ["Medtronic ManoView", "Ultrasound data", "DFMEA", "Design traceability", "CITI · HIPAA"],
  };

  const presentations = [
    { title: "Co-author, EoE research abstract — Digestive Disease Week (DDW) 2026", place: "Chicago, IL", date: "May 2026" },
    { title: "Team poster on biomechanical HRIM analysis in EoE — UC San Diego Bioengineering Day", place: "La Jolla, CA", date: "2026" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-6">
          <a href="#about" className="font-bold text-lg whitespace-nowrap">Kaitlyn Arabelo</a>
          <div className="flex gap-6 text-sm">
            <a href="#projects" className="hidden sm:inline hover:text-blue-600 transition-colors">Projects</a>
            <a href="#research" className="hidden sm:inline hover:text-blue-600 transition-colors">Research</a>
            <a href="#activities" className="hidden md:inline hover:text-blue-600 transition-colors">Activities</a>
            <a href="#skills" className="hidden md:inline hover:text-blue-600 transition-colors">Skills</a>
            <a href="#presentations" className="hidden lg:inline hover:text-blue-600 transition-colors">Presentations</a>
            <a href="#resume" className="font-medium text-blue-600 hover:text-blue-700 transition-colors">Resume</a>
          </div>
        </nav>
      </header>

      {/* Hero / About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div
            className="group relative w-48 h-48 rounded-full overflow-hidden shadow-lg ring-4 ring-white flex-shrink-0 cursor-pointer"
            onClick={() => setShowAltPhoto((v) => !v)}
          >
            <img
              src={profilePhoto}
              alt="Kaitlyn Arabelo"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              src={profilePhotoHover}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-100 ${showAltPhoto ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-3">Kaitlyn Arabelo</h1>
            <p className="text-xl text-slate-600 mb-6">
              B.S. Bioengineering, UC San Diego · Expected Fall 2027
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              I'm Kaitlyn, a bioengineering student at UC San Diego (graduating December 2027) who loves building things
              that help people. My focus is medical devices and robotics, especially the hardware and embedded systems that
              make them work.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              I've spent two years working in research labs, contributing to projects in computational design and
              biofabrication. Outside the lab, I compete in hackathons, where my team took 3rd place at Biodefense San
              Diego. I'm currently working with a team on a protein design project for Adaptyv.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              I come from a low-income background, where opportunities in science were hard to find and even harder to
              access. Conversations with scientists and PhD students showed me how wide that gap is, and they're a big part
              of why I want to build technology that reaches more people.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Through the engineering club Triton Droids, I've learned how to work on a team, ship projects on tight deadlines, and
              pick up new tools quickly. Now I want to learn how medical devices and robotic systems are built in industry,
              from prototyping to production.
            </p>
            <p className="text-slate-700 mb-6 leading-relaxed font-medium">
              I'm open to internships and full-time roles. Let's talk.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a href="#resume" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <FileText className="w-4 h-4" /> Resume
              </a>
              <a href="mailto:akairabelo@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors">
                <Mail className="w-4 h-4" /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/kaitlyn-arabelo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>San Diego, CA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Research</h2>
          <div className="space-y-8">
            {research.map((lab) => (
              <div key={lab.lab} className="bg-white rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-56 flex-shrink-0 md:border-r md:border-slate-200 md:pr-8">
                  <h3 className="text-xl font-bold">{lab.lab}</h3>
                  <p className="text-blue-600 font-medium">{lab.role}</p>
                  <p className="text-sm text-slate-500 mt-1">{lab.dates}</p>
                  {lab.image && (
                    <img src={lab.image} alt={lab.imageAlt ?? ''} loading="lazy" className="mt-4 w-full aspect-[4/3] object-cover rounded-lg" />
                  )}
                </div>
                <div className="flex-1 space-y-8">
                  {lab.items.map((item) => (
                    <div key={item.title}>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      {item.context && <p className="text-sm text-slate-500 mb-2">{item.context}</p>}
                      <p className="text-slate-600 mb-3 leading-relaxed">{item.description}</p>
                      <TechTags tech={item.tech} />
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
                          Project site <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Activities &amp; Interests</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <div key={activity.title} className="bg-slate-50 rounded-xl overflow-hidden flex flex-col">
                <CardMedia image={activity.image} imageAlt={activity.imageAlt} icon={activity.icon} />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{activity.title}</h3>
                  <p className="text-sm text-slate-500 mb-3">{activity.context}</p>
                  <p className="text-slate-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-slate-600">
            <span className="font-medium text-slate-700">When I'm not building:</span>
            <span className="inline-flex items-center gap-2"><Paintbrush className="w-5 h-5 text-blue-600" /> Abstract painting</span>
            <span className="inline-flex items-center gap-2"><Dumbbell className="w-5 h-5 text-blue-600" /> Weightlifting and running</span>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold mb-4 text-lg text-blue-600">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section id="presentations" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Presentations</h2>
          <div className="space-y-4">
            {presentations.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 flex flex-col sm:flex-row sm:justify-between gap-2">
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.place}</p>
                </div>
                <p className="text-slate-500 text-sm whitespace-nowrap">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResumeSection />

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg font-bold mb-2">Let's work together</p>
          <p className="text-slate-600 mb-6">
            Reach me at{' '}
            <a href="mailto:akairabelo@gmail.com" className="text-blue-600 hover:text-blue-700">akairabelo@gmail.com</a>
            {' '}or on{' '}
            <a href="https://www.linkedin.com/in/kaitlyn-arabelo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">LinkedIn</a>.
          </p>
          <p className="text-slate-400 text-sm">© 2026 Kaitlyn Arabelo</p>
        </div>
      </footer>
    </div>
  );
}

type Project = {
  title: string;
  context: string;
  summary: string;
  details?: string;
  tech: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  icon?: ReactNode;
  link?: string;
};

type ResearchLab = {
  lab: string;
  role: string;
  dates: string;
  image?: string;
  imageAlt?: string;
  items: { title: string; context?: string; description: string; tech: string[]; link?: string }[];
};

type Activity = {
  title: string;
  context: string;
  description: string;
  image?: string;
  imageAlt?: string;
  icon?: ReactNode;
};

function TechTags({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
          {t}
        </span>
      ))}
    </div>
  );
}

// Photo when there is one, otherwise a tinted panel with an icon, both at the same aspect ratio
// so every card in a grid lines up.
function CardMedia({ image, imageAlt, imagePosition, icon }: { image?: string; imageAlt?: string; imagePosition?: string; icon?: ReactNode }) {
  if (image) {
    return <img src={image} alt={imageAlt ?? ''} loading="lazy" style={{ objectPosition: imagePosition }} className="w-full aspect-[4/3] object-cover" />;
  }
  return (
    <div className="w-full aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-400">
      {icon}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-slate-50 rounded-xl overflow-hidden flex flex-col">
      <CardMedia image={project.image} imageAlt={project.imageAlt} imagePosition={project.imagePosition} icon={project.icon} />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-sm text-slate-500 mb-3">{project.context}</p>
        <p className="text-slate-600 mb-3 leading-relaxed">{project.summary}</p>
        {project.details && (
          <>
            {expanded && <p className="text-slate-600 mb-3 leading-relaxed">{project.details}</p>}
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="self-start mb-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
              aria-expanded={expanded}
            >
              {expanded ? 'Show less' : 'Read more'}
              <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>
          </>
        )}
        <div className="mt-auto">
          <TechTags tech={project.tech} />
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
              Project site <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
