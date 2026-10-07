import { useState } from 'react';
import { ExternalLink, Download } from 'lucide-react';

// Files live in public/resumes/. `html` is shown in the viewer; `pdf` is the download.
// After editing an .html resume, re-export its PDF (Chrome: Print → Save as PDF, Margins "Default").
const resumes = [
  {
    id: "research",
    label: "Research",
    description: "Academic labs and research programs",
    html: "/resumes/research-resume.html",
    pdf: "/resumes/research-resume.pdf",
  },
  {
    id: "biotech",
    label: "Biotech",
    description: "Lab techniques, data integrity, and QA",
    html: "/resumes/biotech-resume.html",
    pdf: "/resumes/biotech-resume.pdf",
  },
  {
    id: "medical-industry",
    label: "Medical Device",
    description: "CAD, fabrication, and design controls",
    html: "/resumes/medical-industry-resume.html",
    pdf: "/resumes/medical-industry-resume.pdf",
  },
];

export default function ResumeSection() {
  const [activeId, setActiveId] = useState(resumes[0].id);
  const active = resumes.find((r) => r.id === activeId) ?? resumes[0];

  return (
    <section id="resume" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <p className="text-slate-600 mb-10">Three versions, each tailored to a different kind of role.</p>

        <div role="tablist" aria-label="Resume versions" className="grid sm:grid-cols-3 gap-4 mb-8">
          {resumes.map((resume) => {
            const selected = resume.id === activeId;
            return (
              <button
                key={resume.id}
                role="tab"
                aria-selected={selected}
                aria-controls="resume-viewer"
                onClick={() => setActiveId(resume.id)}
                className={`text-left rounded-xl p-5 transition-colors ${
                  selected
                    ? 'bg-blue-50 ring-2 ring-blue-600'
                    : 'bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <h3 className={`font-bold mb-1 ${selected ? 'text-blue-600' : ''}`}>{resume.label}</h3>
                <p className="text-slate-600 text-sm">{resume.description}</p>
              </button>
            );
          })}
        </div>

        <div id="resume-viewer" role="tabpanel" className="bg-slate-50 rounded-xl p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <p className="font-bold">{active.label} Resume</p>
            <div className="flex gap-4">
              <a
                href={active.html}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                Open <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={active.pdf}
                download
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                Download PDF <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          <iframe
            key={active.id}
            src={active.html}
            title={`${active.label} resume`}
            className="w-full h-[80vh] rounded-lg bg-white shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
