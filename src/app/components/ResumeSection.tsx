import { ExternalLink, Download } from 'lucide-react';
import resumePreview from '@/assets/resume-preview.webp';

// To update: replace this PDF in public/resumes/ (keep the file name, or change it here), then
// regenerate the preview image, e.g. `pdftoppm -r 200 -png -singlefile <pdf> out` and save as
// src/assets/resume-preview.webp. The image is shown because phones often can't display PDFs inline.
const RESUME_PDF = '/resumes/Anne_K_Arabelo_Resume.pdf';

export default function ResumeSection() {
  return (
    <section id="resume" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold">Resume</h2>
          <div className="flex gap-3">
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors"
            >
              Open <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={RESUME_PDF}
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download PDF <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 sm:p-8">
          <a href={RESUME_PDF} target="_blank" rel="noopener noreferrer" className="block max-w-3xl mx-auto">
            <img
              src={resumePreview}
              alt="Resume of Anne Kaitlyn Arabelo, B.S. Bioengineering at UC San Diego. Open the PDF for the full text."
              loading="lazy"
              className="w-full rounded-lg bg-white shadow-md ring-1 ring-slate-200 hover:shadow-lg transition-shadow"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
