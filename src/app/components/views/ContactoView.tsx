import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, Youtube, Twitter, CheckCircle2 } from "lucide-react";
import { useRouter } from "../Router";
import { useTranslation, Trans } from "react-i18next";
import { useData } from "../data";
import { Footer } from "../Footer";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/arque.pe" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/arque.pe" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/arque-inmobiliaria-peru" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@arque.pe" },
  { icon: Twitter, label: "Twitter / X", href: "https://twitter.com/arque_pe" },
];

const offices = [
  { city: "Lima — Sede Principal", address: "Av. Javier Prado Este 234, San Isidro", phone: "+51 (01) 000 0000", hours: "Lun–Vie 9:00–20:00" },
  { city: "Miraflores", address: "Malecón Cisneros 1215, Miraflores", phone: "+51 (01) 000 0001", hours: "Lun–Sáb 9:00–18:00" },
  { city: "Asia", address: "Club Asia, Km. 97.5 Antigua Panamericana Sur", phone: "+51 999 000 050", hours: "Sáb–Dom 10:00–18:00" },
];

export function ContactoView() {
  const { params } = useRouter();
  const prefillId = params.prefillPropertyId;
  const { t } = useTranslation();
  const { properties } = useData();

  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    interes: "",
    propiedad: prefillId || "",
    presupuesto: "",
    mensaje: "",
    privacidad: false,
  });

  // Update propiedad pre-fill if params change
  useEffect(() => {
    if (prefillId) setForm((f) => ({ ...f, propiedad: prefillId }));
  }, [prefillId]);

  const set = (field: string, value: any) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!form.nombre.trim()) errs.nombre = t("common.errors.name");
    if (!form.apellidos.trim()) errs.apellidos = t("common.errors.name");
    if (!form.email.trim()) errs.email = t("common.errors.email");
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = t("common.errors.emailInvalid");
    if (!form.telefono.trim()) errs.telefono = t("common.errors.phone");
    if (!form.mensaje.trim()) errs.mensaje = t("common.errors.name"); // using name required as a fallback or a generic one if missing
    if (!form.privacidad) errs.privacidad = t("common.errors.privacy");
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSent(true);
  };

  const inputClass = (field: string) =>
    `w-full bg-[#252521] px-4 py-3 text-[#ede9e0] placeholder-[#8a8a7a]/50 text-sm outline-none transition-colors ${
      errors[field] ? "border border-red-400/50" : "border border-white/8"
    }`;

  return (
    <div id="main-scroll" className="h-screen overflow-y-auto">
      <div className="pt-20">
        {/* Page header */}
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-10">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-3 block">{t("contact.subtitle")}</span>
          <h1 className="font-serif text-4xl md:text-6xl text-[#ede9e0]">
            <Trans i18nKey="contact.title" components={{ br: <br />, em: <em className="not-italic text-[#c9a96e]" /> }} />
          </h1>
          {prefillId && (() => {
            const p = properties.find((pr) => pr.id === prefillId);
            return p ? (
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2" style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.2)" }}>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e]">{t("contact.ref")}</span>
                <span className="text-sm text-[#ede9e0]">{p.title}</span>
              </div>
            ) : null;
          })()}
        </div>

        {/* Main grid */}
        <div className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Form */}
          <div>
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8a7a] mb-2">{t("contact.form.name")}</label>
                    <input value={form.nombre} onChange={(e) => set("nombre", e.target.value)} placeholder={t("contact.form.namePh")} className={inputClass("nombre")} />
                    {errors.nombre && <p className="text-[10px] text-red-400 mt-1">{errors.nombre}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8a7a] mb-2">{t("contact.form.last")}</label>
                    <input value={form.apellidos} onChange={(e) => set("apellidos", e.target.value)} placeholder={t("contact.form.lastPh")} className={inputClass("apellidos")} />
                    {errors.apellidos && <p className="text-[10px] text-red-400 mt-1">{errors.apellidos}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8a7a] mb-2">{t("contact.form.email")}</label>
                    <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder={t("contact.form.emailPh")} className={inputClass("email")} />
                    {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8a7a] mb-2">{t("contact.form.phone")}</label>
                    <input type="tel" value={form.telefono} onChange={(e) => set("telefono", e.target.value)} placeholder={t("contact.form.phonePh")} className={inputClass("telefono")} />
                    {errors.telefono && <p className="text-[10px] text-red-400 mt-1">{errors.telefono}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8a7a] mb-2">{t("contact.form.type")}</label>
                    <select value={form.interes} onChange={(e) => set("interes", e.target.value)} className="w-full bg-[#252521] border border-white/8 px-4 py-3 text-[#ede9e0]/70 text-sm outline-none cursor-pointer">
                      <option value="">Seleccionar</option>
                      <option>Comprar</option>
                      <option>Vender</option>
                      <option>Alquilar</option>
                      <option>Información general</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8a7a] mb-2">{t("contact.form.budget")}</label>
                    <select value={form.presupuesto} onChange={(e) => set("presupuesto", e.target.value)} className="w-full bg-[#252521] border border-white/8 px-4 py-3 text-[#ede9e0]/70 text-sm outline-none cursor-pointer">
                      <option value="">Seleccionar</option>
                      <option>Hasta S/ 1.000.000</option>
                      <option>S/ 1M — S/ 2M</option>
                      <option>S/ 2M — S/ 4M</option>
                      <option>Más de S/ 4M</option>
                    </select>
                  </div>
                </div>

                {/* Property reference — pre-filled if came from property detail */}
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8a7a] mb-2">
                    {t("contact.form.refProp")}
                    {prefillId && <span className="text-[#c9a96e] ml-2">{t("contact.form.prefilled")}</span>}
                  </label>
                  <select value={form.propiedad} onChange={(e) => set("propiedad", e.target.value)} className="w-full bg-[#252521] border border-white/8 px-4 py-3 text-[#ede9e0]/70 text-sm outline-none cursor-pointer">
                    <option value="">{t("contact.form.noRef")}</option>
                    {properties.map((p) => (
                      <option key={p.id} value={p.id}>{p.title} — {p.price}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8a7a] mb-2">{t("contact.form.msg")}</label>
                  <textarea
                    rows={4}
                    value={form.mensaje}
                    onChange={(e) => set("mensaje", e.target.value)}
                    placeholder={t("contact.form.msgPh")}
                    className={`${inputClass("mensaje")} resize-none`}
                  />
                  {errors.mensaje && <p className="text-[10px] text-red-400 mt-1">{errors.mensaje}</p>}
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div
                      onClick={() => set("privacidad", !form.privacidad)}
                      className="mt-0.5 w-5 h-5 shrink-0 flex items-center justify-center transition-all duration-200"
                      style={{
                        border: `1px solid ${errors.privacidad ? "rgba(248,113,113,0.6)" : form.privacidad ? "#c9a96e" : "rgba(255,255,255,0.15)"}`,
                        background: form.privacidad ? "rgba(201,169,110,0.15)" : "transparent",
                      }}
                    >
                      {form.privacidad && (
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                          <path d="M1.5 5.5L4.5 8.5L9.5 2.5" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs text-[#8a8a7a] leading-relaxed">
                      {t("contact.form.privacy1")}{" "}
                      <button type="button" className="text-[#c9a96e] underline underline-offset-2 hover:text-[#ede9e0] transition-colors">
                        {t("contact.form.privacyLink")}
                      </button>{" "}
                      {t("contact.form.privacy2")}
                    </span>
                  </label>
                  {errors.privacidad && <p className="text-[10px] text-red-400 mt-1">{errors.privacidad}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#c9a96e] text-[#0e0e0c] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#ede9e0] transition-colors duration-300"
                >
                  {t("contact.form.submit")}
                </button>
              </form>
            ) : (
              <div className="py-16 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center" style={{ background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.25)" }}>
                    <CheckCircle2 size={36} className="text-[#c9a96e]" />
                  </div>
                </div>
                <h3 className="font-serif text-3xl text-[#ede9e0] mb-3">{t("contact.success.title")}</h3>
                <p className="text-sm text-[#8a8a7a] leading-relaxed max-w-sm mx-auto">
                  {t("contact.success.desc1")} <span className="text-[#c9a96e]">{form.nombre}</span>{t("contact.success.desc2")}
                </p>
              </div>
            )}
          </div>

          {/* Right: Info panel */}
          <div className="space-y-8">
            {/* Map placeholder */}
            <div
              className="h-48 relative overflow-hidden"
              style={{ background: "#141412", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 39px,rgba(255,255,255,0.03) 40px)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="w-4 h-4 rounded-full bg-[#c9a96e] mb-3"
                  style={{ boxShadow: "0 0 0 6px rgba(201,169,110,0.15), 0 0 0 12px rgba(201,169,110,0.05)" }}
                />
                <a
                  href="https://maps.google.com/?q=Av+Javier+Prado+Este+234+San+Isidro+Lima"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#8a8a7a] hover:text-[#c9a96e] transition-colors tracking-wide flex items-center gap-1.5"
                >
                  <MapPin size={11} />
                  Av. Javier Prado Este 234, San Isidro
                </a>
              </div>
            </div>

            {/* Offices */}
            <div className="space-y-4">
              {offices.map((o) => (
                <div key={o.city} className="p-5" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] mb-2">{o.city}</div>
                  <div className="flex items-start gap-2 text-sm text-[#8a8a7a] mb-1">
                    <MapPin size={12} className="shrink-0 mt-0.5" />
                    {o.address}
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 text-xs text-[#8a8a7a] hover:text-[#c9a96e] transition-colors">
                      <Phone size={11} /> {o.phone}
                    </a>
                    <div className="flex items-center gap-1.5 text-xs text-[#8a8a7a]">
                      <Clock size={11} /> {o.hours}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="space-y-3">
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#8a8a7a]">{t("contact.direct.title")}</div>
              <a href="tel:+5101000000" className="flex items-center gap-3 p-4 transition-all hover:border-[#c9a96e]/30 group" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
                <Phone size={15} className="text-[#c9a96e] shrink-0" />
                <div>
                  <div className="text-sm text-[#ede9e0] group-hover:text-[#c9a96e] transition-colors">+51 (01) 000 0000</div>
                  <div className="text-[10px] text-[#8a8a7a]">{t("contact.direct.main")}</div>
                </div>
              </a>
              <a href="mailto:hola@arque.pe" className="flex items-center gap-3 p-4 transition-all hover:border-[#c9a96e]/30 group" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
                <Mail size={15} className="text-[#c9a96e] shrink-0" />
                <div>
                  <div className="text-sm text-[#ede9e0] group-hover:text-[#c9a96e] transition-colors">hola@arque.pe</div>
                  <div className="text-[10px] text-[#8a8a7a]">{t("contact.direct.response")}</div>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#8a8a7a] mb-4">{t("contact.social")}</div>
              <div className="flex items-center gap-3 flex-wrap">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center border border-white/10 text-[#8a8a7a] hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
