import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Get in touch</h3>
              <p className="mt-2 text-sm text-slate-600">We’d love to learn about your goals and recommend the right session for you.</p>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <p className="flex items-center gap-2"><Mail size={18} className="text-blue-600" /> hello@neptuneaquatics.co.uk</p>
                <p className="flex items-center gap-2"><Phone size={18} className="text-blue-600" /> 01234 567 890</p>
                <p className="flex items-center gap-2"><MapPin size={18} className="text-blue-600" /> Multiple UK locations</p>
              </div>
            </div>

            <form className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Full name" />
              <input className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email" />
              <select className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>I'm interested in...</option>
                <option>Swimming Lessons</option>
                <option>Hydrotherapy</option>
                <option>Family Swimming</option>
              </select>
              <input className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Phone (optional)" />
              <textarea className="sm:col-span-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" rows="4" placeholder="Tell us a little about what you need"></textarea>
              <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-5 py-3 text-sm font-semibold hover:bg-blue-700 transition-colors">Send Enquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
