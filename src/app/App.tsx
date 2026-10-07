import { useState } from 'react';
import { Mail, MapPin, Linkedin, FileText, ExternalLink, Paintbrush, Cpu, Dumbbell } from 'lucide-react';
import profilePhoto from '@/assets/profile.jpg';
import profilePhotoHover from '@/assets/profile-hover.jpg';
import ResumeSection from './components/ResumeSection';

export default function App() {
  // Touch screens have no hover, so tapping the photo toggles it instead.
  const [showAltPhoto, setShowAltPhoto] = useState(false);

  const projects = [
    {
      title: "Biomechanical HRIM: Quantifying Esophageal Mechanical Work",
      context: "Senior Design · Mittal Lab · Sep 2025 – Jun 2026",
      description:
        "With a 5-person team, built a MATLAB pipeline that converts high-resolution impedance manometry data into biomechanical swallow metrics. In pre/post-dupilumab studies of 10 EoE patients, it showed significantly reduced mechanical work in 5 of 6 bolus conditions.",
      tech: ["MATLAB", "HRIM", "Ultrasound validation", "DFMEA"],
      link: "https://beng187-d-group30.vercel.app/",
    },
    {
      title: "EoE Motility Visualization Tool",
      context: "Research Assistant · Mittal Lab · Jul 2025 – Present",
      description:
        "Developed a Python tool that processes patient esophageal motility data and automatically generates visualizations of disease progression. Produced figures for a co-authored abstract at Digestive Disease Week 2026.",
      tech: ["Python", "matplotlib", "ManoView", "IRB / HIPAA"],
    },
    {
      title: "Microfluidic Blood-Brain Barrier Chip",
      context: "Research Assistant · Aran Lab · Sep 2024 – Jun 2025",
      description:
        "Designed BBB chips in SolidWorks and laser-cut prototypes for iPSC neural cultures, integrating electrodes to measure barrier integrity via TEER.",
      tech: ["SolidWorks", "Glowforge", "TEER", "iPSC culture"],
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

  const hobbies = [
    { icon: <Paintbrush className="w-6 h-6" />, name: "Painting", description: "Abstract art" },
    { icon: <Cpu className="w-6 h-6" />, name: "Arduino", description: "Electronics side projects" },
    { icon: <Dumbbell className="w-6 h-6" />, name: "Fitness", description: "Weightlifting and running" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-6">
          <a href="#about" className="font-bold text-lg whitespace-nowrap">Kaitlyn Arabelo</a>
          <div className="flex gap-6 text-sm">
            <a href="#projects" className="hidden sm:inline hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hidden sm:inline hover:text-blue-600 transition-colors">Skills</a>
            <a href="#presentations" className="hidden md:inline hover:text-blue-600 transition-colors">Presentations</a>
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
              I work where medical devices meet clinical data. In the Mittal Lab, I build tools that turn esophageal
              motility data into measurable insight for eosinophilic esophagitis (EoE) research, including work presented at
              Digestive Disease Week 2026. Before that, I designed microfluidic blood-brain barrier chips in the Aran Lab.
            </p>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Open to internships and research roles in medical devices, biotech, and clinical research.
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
          <h2 className="text-3xl font-bold mb-12">Research & Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-slate-500 mb-3">{project.context}</p>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    Project site <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
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

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Outside the Lab</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {hobby.icon}
                </div>
                <h3 className="font-bold mb-2">{hobby.name}</h3>
                <p className="text-slate-600 text-sm">{hobby.description}</p>
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
