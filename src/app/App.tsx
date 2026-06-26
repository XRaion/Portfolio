import { Mail, MapPin, Github, Linkedin, Code2, BookOpen, Coffee, Camera, Music, Dumbbell, ExternalLink } from 'lucide-react';

export default function App() {
  const projects = [
    {
      title: "Research Assistant - Mittal Lab",
      description:"Worked on developing a pipeline, Evaluated Swallowing disorders on ManoView",
      tech: ["Python", "Matlab", "Manoview", "DPlots"],
      link: "https://beng187-d-group30.vercel.app/team.html"
    },
    {
      title: "Research Assistant - Aran Lab",
      description: "Built Microfluidics Brain on Chips",
      tech: ["Glowforge", "AutoCad", "Chromatography Sequencing"],
      link: "#"
    },
  
  ];

  const skills = {
    "Software": ["Manoview", "Matlab", "Python", "AutoCad","Github"],
    "Website": ["Canva","Figma"],
    "Wet-Lab": ["Size Exclusion Chromatography", "Hemotocrit","Centrifuge"],

  };


  const hobbies = [
    { icon: <Painting className="-6 h-6" />, name: "Painting", description: "Abstract Art" },
    { icon: <BookOpen className="w-6 h-6" />, name: "Reading", description: "Personal Development" },
    { icon: <Dumbbell className="w-6 h-6" />, name: "Fitness", description: "Weightlifting and running" }
    { icon: <Building_website className="w-6 h-6" />, name: "Designing Websites", description: " I design websites for fun" }

    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">Portfolio</h1>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#publications" className="hover:text-blue-600 transition-colors">Publications</a>
            <a href="#hobbies" className="hover:text-blue-600 transition-colors">Hobbies</a>
          </div>
        </nav>
      </header>

      {/* Hero / About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl flex-shrink-0">
            JD
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">Hi, my name is Kaitlyn</h2>
            <p className="text-xl text-slate-600 mb-6">
              Graduating Senior Undergraduate Bioengineering Student 
            </p>
            <p className="text-slate-700 mb-6 leading-relaxed">
              I'm a passionate Bioengineer with over 3 years of experience building diagnostic systems. I specialize in data analysis, with a
              focus patient care. Currently working on building a Thalassemia diagnostic biosensor monitoring system.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4" />
                <span>Kaitlynarabelo@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </div>
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

      {/* Publications Section */}
      <section id="publications" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold">Publications</h2>
          </div>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">{pub.title}</h3>
                <p className="text-slate-600 mb-3">
                  {pub.journal} • {pub.year}
                </p>
                <a href={pub.link} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
                  Read Publication <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Coffee className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold">Hobbies & Interests</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
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

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-4">Let's work together!</p>
          <p className="text-slate-400">© 2026 Jane Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
