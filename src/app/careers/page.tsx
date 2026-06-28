import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";
import { Briefcase, Building, Mail, CheckCircle2, Users, HardHat, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at Deepika Builtech | Join Our Engineering Team",
  description: "Build your career with Chennai's leading Pre-Engineered Building (PEB) company. Join Deepika Builtech for opportunities in Structural Engineering, Fabrication, and Project Management.",
  alternates: {
    canonical: "/careers",
  },
};

const openDepartments = [
  {
    title: "Engineering & Design",
    description: "Design the structures that shape South India's industrial landscape. We look for expertise in AutoCAD, STAAD.Pro, and advanced steel connection details.",
    roles: ["Structural Engineers (PEB & Steel)", "Detailers & AutoCAD Drafters", "Quantity Estimators"],
  },
  {
    title: "Project Management & Construction",
    description: "Lead on-site erection, safety protocols, and client coordination. Ensure that each clear-span warehouse or industrial shed meets our quality standards.",
    roles: ["Project Managers", "Site Supervisors", "Safety Engineers (HSE)"],
  },
  {
    title: "Fabrication & Production",
    description: "Operate state-of-the-art CNC machinery, SAW welding systems, and quality inspection tools at our Ambattur and Vaiyavur manufacturing facilities.",
    roles: ["Fabrication Technicians", "Quality Control Inspectors", "Shop Floor Supervisors"],
  },
  {
    title: "Sales & Business Development",
    description: "Connect with industrial developers, logistics managers, and architects. Prepare custom project bids and coordinate pre-sales engineering consulting.",
    roles: ["Sales Managers", "Technical Estimators", "Client Relations Executives"],
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="bg-surface-subtle py-16 border-b border-surface-mid">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-ink mb-4">
            Join <span className="text-amber">Our Team</span>
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto font-sans">
            Build your future with a leader in Pre-Engineered Steel Buildings and heavy industrial infrastructure.
          </p>
        </div>
      </div>

      <Breadcrumbs items={[{ label: "Careers" }]} />

      <main id="content">
        {/* Culture & Growth Intro */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Graphics/Stats */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-8 bg-surface-subtle border border-surface-mid rounded-[2.5rem] relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber opacity-5 blur-[60px]" />
                  <h3 className="text-2xl font-heading font-black text-ink mb-4">Why Deepika Builtech?</h3>
                  <div className="space-y-6 font-sans text-sm text-ink-muted leading-relaxed">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-surface-mid flex items-center justify-center text-amber shrink-0">
                        <HardHat className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-ink text-base">Hands-on Experience</h4>
                        <p className="mt-1">Work directly on massive warehouse, cold storage, and clear-span fabrication projects.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-surface-mid flex items-center justify-center text-amber shrink-0">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-ink text-base">Professional Growth</h4>
                        <p className="mt-1">We sponsor certifications, structural software training, and advanced safety programs.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-surface-mid flex items-center justify-center text-amber shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-ink text-base">Collaborative Culture</h4>
                        <p className="mt-1">Join a tightly-knit team of 50+ engineers, detailers, and site operations specialists.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-amber text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Company Culture</span>
                  <h2 className="text-4xl md:text-5xl font-heading font-black text-ink tracking-tighter leading-none mb-6">
                    Where Precision <br />
                    <span className="gradient-text">Meets Opportunity.</span>
                  </h2>
                </div>

                <div className="prose prose-lg text-ink-muted leading-relaxed font-sans space-y-6">
                  <p>
                    At Deepika Builtech, we believe that our buildings are only as strong as the people who design, fabricate, and erect them. Since 2015, we have committed ourselves to fostering an environment where engineering excellence, hard work, and continuous improvement are recognized and rewarded.
                  </p>
                  <p>
                    Whether you are an experienced structural designer looking to tackle complex clear-span calculations, a meticulous site supervisor ensuring millimeter-level alignment, or a fresh graduate seeking hands-on mentorship, we offer a pathway to build a significant career in the fast-growing PEB industry.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Departments / Key Roles Section */}
        <section className="py-24 bg-surface border-t border-surface-mid">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-amber text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Departments</span>
              <h2 className="text-4xl font-heading font-black text-ink tracking-tighter">
                Typically <span className="gradient-text">Active Openings.</span>
              </h2>
              <p className="text-ink-muted text-sm font-sans mt-4">
                We are always seeking talented professionals across our main business operations to join us in Chennai and South India projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {openDepartments.map((dept, index) => (
                <div key={index} className="p-8 bg-white border border-surface-mid rounded-[2rem] shadow-sm relative group hover:border-amber/40 transition-colors">
                  <h3 className="text-xl font-heading font-bold text-ink mb-3 tracking-tight">
                    {dept.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-sans mb-6">
                    {dept.description}
                  </p>
                  <div className="border-t border-surface-mid pt-4">
                    <span className="text-[10px] font-black uppercase tracking-wider text-ink-muted block mb-3">Common Roles we hire:</span>
                    <ul className="space-y-2">
                      {dept.roles.map((role, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-bold text-ink">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber shrink-0" />
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="py-24 bg-surface-subtle border-t border-surface-mid">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
            <span className="text-amber text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Apply Now</span>
            <h2 className="text-4xl font-heading font-black text-ink mb-6 tracking-tighter">
              Ready to Shape <span className="gradient-text">the Industry?</span>
            </h2>
            <p className="text-ink-muted text-base font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
              If you do not see a specific opening that fits your profile but believe you would be an asset to our engineering or execution teams, please send us your details. We review all received resumes for future expansions.
            </p>

            <div className="bg-white border border-surface-mid p-10 lg:p-16 rounded-[2.5rem] shadow-xl">
              <h3 className="text-2xl font-heading font-black text-ink mb-4 tracking-tight">How to Apply</h3>
              <p className="text-ink-muted font-sans mb-8">
                Please email your latest resume/CV along with a brief cover note stating your desired role and experience level.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <a 
                  href="mailto:infoadmin@deepikabuiltech.com?subject=Job Application — Careers Page — deepikabuiltech.com"
                  className="bg-carbon hover:bg-carbon-mid text-white font-black py-5 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-widest text-sm shadow-lg group"
                >
                  <Mail className="w-5 h-5 text-amber group-hover:scale-110 transition-transform" />
                  Email Resume to infoadmin@deepikabuiltech.com
                </a>
                <p className="text-xs text-ink-muted font-sans max-w-md">
                  Note: Please attach your resume in PDF format. Our Human Resources team will contact you if your qualifications align with our current or upcoming operational requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
