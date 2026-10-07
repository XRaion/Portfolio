import { useState } from 'react';
import { FileText, ExternalLink, Download } from 'lucide-react';

// Put each file in public/resumes/ and set `file` to its path (e.g. "/resumes/research.pdf").
// PDFs and HTML pages both work. Leave `file` empty to show a "coming soon" placeholder.
const resumes = [
  { id: "research", label: "Research", description: "Lab experience and technical methods", file: "" },
  { id: "industry", label: "Industry", description: "Medtech and engineering roles", file: "" },
  { id: "clinical", label: "Clinical", description: "Patient-facing and healthcare roles", file: "" },
];

export default function ResumeSection() {
  const [activeId, setActiveId] = useState(resumes[0].id);
  const active = resumes.find((r) => r.id === activeId) ?? resumes[0];

  return (
    <section id="resume" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <FileText className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold">Resume</h2>
        </div>

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
                className={`text-left rounded-xl p-5 transition-all ${
                  selected
                    ? 'bg-blue-50 ring-2 ring-blue-600'
                    : 'bg-slate-50 hover:shadow-md'
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
            {active.file && (
              <div className="flex gap-4">
                <a
                  href={active.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  Open <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={active.file}
                  download
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  Download <Download className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {active.file ? (
            <iframe
              key={active.id}
              src={active.file}
              title={`${active.label} resume`}
              className="w-full h-[80vh] rounded-lg bg-white shadow-sm"
            />
          ) : (
            <div className="h-64 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-500">
              {active.label} resume coming soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
