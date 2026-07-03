import { useState } from "react";
import { X, Check, MapPin, Home, Ruler, User, ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";
import { useUI } from "./UIContext";
import { useTranslation } from "react-i18next";

/* ─── Types ─────────────────────────────────────────────────────────── */
interface FormData {
  // Step 1
  direccion: string;
  tipo: string;
  distrito: string;
  // Step 2
  habitaciones: number;
  banos: number;
  metros: string;
  antiguedad: string;
  condicion: string;
  // Step 3
  nombre: string;
  email: string;
  telefono: string;
  motivo: string;
  privacidad: boolean;
}

const TIPOS_INMUEBLE_KEYS = [
  { value: "house", labelKey: "tasacion.options.types.house" },
  { value: "apartment", labelKey: "tasacion.options.types.apartment" },
  { value: "land", labelKey: "tasacion.options.types.land" },
  { value: "office", labelKey: "tasacion.options.types.office" },
  { value: "commercial", labelKey: "tasacion.options.types.commercial" },
];

const DISTRITOS_KEYS = [
  { value: "Miraflores", labelKey: "Miraflores" },
  { value: "San Isidro", labelKey: "San Isidro" },
  { value: "La Molina", labelKey: "La Molina" },
  { value: "Barranco", labelKey: "Barranco" },
  { value: "Surco", labelKey: "Surco" },
  { value: "San Borja", labelKey: "San Borja" },
  { value: "Jesús María", labelKey: "Jesús María" },
  { value: "Lince", labelKey: "Lince" },
  { value: "La Victoria", labelKey: "La Victoria" },
  { value: "Surquillo", labelKey: "Surquillo" },
  { value: "Chorrillos", labelKey: "Chorrillos" },
  { value: "Asia", labelKey: "Asia" },
  { value: "Otro", labelKey: "tasacion.options.other" },
];

const ANTIGUEDADES_KEYS = [
  { value: "brandNew", labelKey: "tasacion.options.ages.brandNew" },
  { value: "under5", labelKey: "tasacion.options.ages.under5" },
  { value: "fiveTo15", labelKey: "tasacion.options.ages.fiveTo15" },
  { value: "fifteenTo30", labelKey: "tasacion.options.ages.fifteenTo30" },
  { value: "over30", labelKey: "tasacion.options.ages.over30" },
];

const CONDICIONES_KEYS = [
  { value: "excellent", labelKey: "tasacion.options.conditions.excellent" },
  { value: "good", labelKey: "tasacion.options.conditions.good" },
  { value: "fair", labelKey: "tasacion.options.conditions.fair" },
  { value: "needsWork", labelKey: "tasacion.options.conditions.needsWork" },
];

const MOTIVOS_KEYS = [
  { value: "sell", labelKey: "tasacion.options.reasons.sell" },
  { value: "rent", labelKey: "tasacion.options.reasons.rent" },
  { value: "bank", labelKey: "tasacion.options.reasons.bank" },
  { value: "info", labelKey: "tasacion.options.reasons.info" },
];

/* ─── Helpers ────────────────────────────────────────────────────────── */
function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-[11px] text-red-400 mt-1.5 leading-none">{msg}</p>;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8a7a] mb-2">
      {children}
    </label>
  );
}

function Input({
  type = "text",
  value,
  onChange,
  placeholder,
  hasError,
  ...rest
}: {
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  hasError?: boolean;
  [k: string]: any;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-[#252521] px-4 py-3 text-[#ede9e0] placeholder-[#8a8a7a]/50 text-sm outline-none transition-colors"
      style={{
        border: `1px solid ${hasError ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.08)"}`,
      }}
      onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a96e66")}
      onBlur={(e) =>
        (e.currentTarget.style.borderColor = hasError ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.08)")
      }
      {...rest}
    />
  );
}

function SelectField({
  value,
  onChange,
  options,
  placeholder,
  hasError,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
  hasError?: boolean;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[#252521] px-4 py-3 text-sm outline-none cursor-pointer transition-colors appearance-none"
      style={{
        color: value ? "#ede9e0" : "rgba(138,138,122,0.5)",
        border: `1px solid ${hasError ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.08)"}`,
      }}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}

function NumberStepper({
  value,
  onChange,
  min = 0,
  max = 12,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="w-10 h-10 flex items-center justify-center text-[#ede9e0] text-lg transition-colors disabled:opacity-25 hover:text-[#c9a96e]"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        −
      </button>
      <div
        className="w-12 h-10 flex items-center justify-center text-[#ede9e0] text-base font-medium"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        {value}
      </div>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="w-10 h-10 flex items-center justify-center text-[#ede9e0] text-lg transition-colors disabled:opacity-25 hover:text-[#c9a96e]"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        +
      </button>
    </div>
  );
}

/* ─── Step indicator ─────────────────────────────────────────────────── */
const STEPS_KEYS = [
  { icon: MapPin, labelKey: "tasacion.steps.property" },
  { icon: Ruler, labelKey: "tasacion.steps.features" },
  { icon: User, labelKey: "tasacion.steps.contact" },
];

function StepIndicator({ current }: { current: number }) {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center gap-0 px-6 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      {STEPS_KEYS.map((s, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={s.labelKey} className="flex items-center">
            {/* Circle */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: done ? "#c9a96e" : active ? "rgba(201,169,110,0.15)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${done || active ? "#c9a96e" : "rgba(255,255,255,0.1)"}`,
                }}
              >
                {done ? (
                  <Check size={13} className="text-[#0e0e0c]" />
                ) : (
                  <span className="text-xs font-mono" style={{ color: active ? "#c9a96e" : "rgba(255,255,255,0.3)" }}>
                    {i + 1}
                  </span>
                )}
              </div>
              <span className="text-[9px] tracking-[0.15em] uppercase whitespace-nowrap" style={{ color: active ? "#c9a96e" : done ? "#c9a96e80" : "rgba(255,255,255,0.25)" }}>
                {t(s.labelKey)}
              </span>
            </div>
            {/* Connector */}
            {i < STEPS_KEYS.length - 1 && (
              <div className="w-14 h-px mx-2 mb-5 transition-all duration-300" style={{ background: i < current ? "rgba(201,169,110,0.5)" : "rgba(255,255,255,0.08)" }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── Main Modal ─────────────────────────────────────────────────────── */
export function TasacionModal() {
  const { closeTasacion } = useUI();
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const [form, setForm] = useState<FormData>({
    direccion: "",
    tipo: "",
    distrito: "",
    habitaciones: 3,
    banos: 2,
    metros: "",
    antiguedad: "",
    condicion: "",
    nombre: "",
    email: "",
    telefono: "",
    motivo: "",
    privacidad: false,
  });

  const set = (field: keyof FormData, value: any) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (step === 0) {
      if (!form.direccion.trim()) errs.direccion = t("tasacion.errors.address");
      if (!form.tipo) errs.tipo = t("tasacion.errors.type");
      if (!form.distrito) errs.distrito = t("tasacion.errors.district");
    }
    if (step === 1) {
      if (!form.metros || Number(form.metros) <= 0) errs.metros = t("tasacion.errors.area");
    }
    if (step === 2) {
      if (!form.nombre.trim()) errs.nombre = t("tasacion.errors.name");
      if (!form.email.trim()) errs.email = t("tasacion.errors.email");
      else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = t("tasacion.errors.emailInvalid");
      if (!form.telefono.trim()) errs.telefono = t("tasacion.errors.phone");
      if (!form.privacidad) errs.privacidad = t("tasacion.errors.privacy");
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => { if (validate()) setStep((s) => s + 1); };
  const handleBack = () => { setStep((s) => Math.max(0, s - 1)); setErrors({}); };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8"
      style={{ background: "rgba(14,14,12,0.9)", backdropFilter: "blur(10px)" }}
      onClick={closeTasacion}
    >
      <div
        className="w-full max-w-lg bg-[#191917] overflow-hidden flex flex-col max-h-[90vh]"
        style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.07)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-0 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <Home size={12} className="text-[#c9a96e]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e]">{t("tasacion.subtitle")}</span>
            </div>
            <h3 className="font-serif text-xl text-[#ede9e0]">{t("tasacion.title")}</h3>
          </div>
          <button
            onClick={closeTasacion}
            className="p-2 text-[#8a8a7a] hover:text-[#ede9e0] transition-colors shrink-0"
            aria-label={t("tasacion.buttons.close")}
          >
            <X size={18} />
          </button>
        </div>

        {!sent ? (
          <>
            <StepIndicator current={step} />

            <form onSubmit={handleSubmit} className="overflow-y-auto flex-1">
              <div className="px-6 py-6 space-y-5">

                {/* ── Step 0: Inmueble ── */}
                {step === 0 && (
                  <>
                    <div>
                      <Label>{t("tasacion.form.addressLabel")}</Label>
                      <Input
                        value={form.direccion}
                        onChange={(v) => set("direccion", v)}
                        placeholder={t("tasacion.form.addressPlaceholder")}
                        hasError={!!errors.direccion}
                      />
                      <FieldError msg={errors.direccion} />
                    </div>

                    <div>
                      <Label>{t("tasacion.form.typeLabel")}</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {TIPOS_INMUEBLE_KEYS.map((typeOption) => (
                          <button
                            key={typeOption.value}
                            type="button"
                            onClick={() => set("tipo", typeOption.value)}
                            className="py-2.5 px-1 text-[10px] tracking-[0.1em] uppercase transition-all duration-200"
                            style={{
                              border: `1px solid ${form.tipo === typeOption.value ? "#c9a96e" : errors.tipo ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)"}`,
                              background: form.tipo === typeOption.value ? "rgba(201,169,110,0.12)" : "transparent",
                              color: form.tipo === typeOption.value ? "#c9a96e" : "rgba(237,233,224,0.5)",
                            }}
                          >
                            {t(typeOption.labelKey)}
                          </button>
                        ))}
                      </div>
                      <FieldError msg={errors.tipo} />
                    </div>

                    <div>
                      <Label>{t("tasacion.form.districtLabel")}</Label>
                      <SelectField
                        value={form.distrito}
                        onChange={(v) => set("distrito", v)}
                        options={DISTRITOS_KEYS.map(d => ({ value: d.value, label: d.labelKey.includes(".") ? t(d.labelKey) : d.labelKey }))}
                        placeholder={t("tasacion.form.districtPlaceholder")}
                        hasError={!!errors.distrito}
                      />
                      <FieldError msg={errors.distrito} />
                    </div>
                  </>
                )}

                {/* ── Step 1: Características ── */}
                {step === 1 && (
                  <>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Label>{t("tasacion.form.roomsLabel")}</Label>
                        <NumberStepper value={form.habitaciones} onChange={(v) => set("habitaciones", v)} min={1} max={12} />
                      </div>
                      <div>
                        <Label>{t("tasacion.form.bathsLabel")}</Label>
                        <NumberStepper value={form.banos} onChange={(v) => set("banos", v)} min={1} max={8} />
                      </div>
                    </div>

                    <div>
                      <Label>{t("tasacion.form.areaLabel")}</Label>
                      <Input
                        type="number"
                        value={form.metros}
                        onChange={(v) => set("metros", v)}
                        placeholder={t("tasacion.form.areaPlaceholder")}
                        hasError={!!errors.metros}
                        min="1"
                      />
                      <FieldError msg={errors.metros} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>{t("tasacion.form.ageLabel")}</Label>
                        <SelectField
                          value={form.antiguedad}
                          onChange={(v) => set("antiguedad", v)}
                          options={ANTIGUEDADES_KEYS.map(a => ({ value: a.value, label: t(a.labelKey) }))}
                          placeholder={t("tasacion.form.agePlaceholder")}
                        />
                      </div>
                      <div>
                        <Label>{t("tasacion.form.conditionLabel")}</Label>
                        <SelectField
                          value={form.condicion}
                          onChange={(v) => set("condicion", v)}
                          options={CONDICIONES_KEYS.map(c => ({ value: c.value, label: t(c.labelKey) }))}
                          placeholder={t("tasacion.form.conditionPlaceholder")}
                        />
                      </div>
                    </div>

                    {/* Summary preview */}
                    <div className="rounded-none p-4" style={{ background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)" }}>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] mb-2">{t("tasacion.form.summary")}</div>
                      <p className="text-sm text-[#8a8a7a]">
                        {form.tipo ? t(TIPOS_INMUEBLE_KEYS.find(k => k.value === form.tipo)?.labelKey || "") : ""} {t("tasacion.success.p1_3").trim()} <span className="text-[#ede9e0]">{form.distrito ? (DISTRITOS_KEYS.find(d => d.value === form.distrito)?.labelKey.includes(".") ? t(DISTRITOS_KEYS.find(d => d.value === form.distrito)!.labelKey) : form.distrito) : ""}</span> ·{" "}
                        {form.habitaciones} {t("tasacion.form.rooms")} · {form.banos} {t("tasacion.form.baths")} · {form.metros || "—"} m²
                      </p>
                    </div>
                  </>
                )}

                {/* ── Step 2: Contacto ── */}
                {step === 2 && (
                  <>
                    <div>
                      <Label>{t("tasacion.form.nameLabel")}</Label>
                      <Input
                        value={form.nombre}
                        onChange={(v) => set("nombre", v)}
                        placeholder={t("tasacion.form.namePlaceholder")}
                        hasError={!!errors.nombre}
                      />
                      <FieldError msg={errors.nombre} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>{t("tasacion.form.emailLabel")}</Label>
                        <Input
                          type="email"
                          value={form.email}
                          onChange={(v) => set("email", v)}
                          placeholder={t("tasacion.form.emailPlaceholder")}
                          hasError={!!errors.email}
                        />
                        <FieldError msg={errors.email} />
                      </div>
                      <div>
                        <Label>{t("tasacion.form.phoneLabel")}</Label>
                        <Input
                          type="tel"
                          value={form.telefono}
                          onChange={(v) => set("telefono", v)}
                          placeholder={t("tasacion.form.phonePlaceholder")}
                          hasError={!!errors.telefono}
                        />
                        <FieldError msg={errors.telefono} />
                      </div>
                    </div>

                    <div>
                      <Label>{t("tasacion.form.reasonLabel")}</Label>
                      <SelectField
                        value={form.motivo}
                        onChange={(v) => set("motivo", v)}
                        options={MOTIVOS_KEYS.map(m => ({ value: m.value, label: t(m.labelKey) }))}
                        placeholder={t("tasacion.form.reasonPlaceholder")}
                      />
                    </div>

                    <div>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div
                          onClick={() => set("privacidad", !form.privacidad)}
                          className="mt-0.5 w-5 h-5 shrink-0 flex items-center justify-center transition-all duration-200 cursor-pointer"
                          style={{
                            border: `1px solid ${errors.privacidad ? "rgba(248,113,113,0.6)" : form.privacidad ? "#c9a96e" : "rgba(255,255,255,0.15)"}`,
                            background: form.privacidad ? "rgba(201,169,110,0.15)" : "transparent",
                          }}
                        >
                          {form.privacidad && <Check size={11} className="text-[#c9a96e]" />}
                        </div>
                        <span className="text-xs text-[#8a8a7a] leading-relaxed group-hover:text-[#ede9e0]/70 transition-colors">
                          {t("tasacion.form.privacyText1")}
                          <button type="button" className="text-[#c9a96e] underline underline-offset-2 hover:text-[#ede9e0] transition-colors">
                            {t("tasacion.form.privacyLink")}
                          </button>
                          {t("tasacion.form.privacyText2")}
                        </span>
                      </label>
                      <FieldError msg={errors.privacidad} />
                    </div>
                  </>
                )}
              </div>

              {/* Navigation buttons */}
              <div
                className="flex items-center gap-3 px-6 py-4 shrink-0"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                {step > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 px-5 py-3.5 border border-white/10 text-[#ede9e0]/50 text-xs tracking-[0.15em] uppercase hover:border-white/20 hover:text-[#ede9e0]/80 transition-all"
                  >
                    <ChevronLeft size={13} /> {t("tasacion.buttons.prev")}
                  </button>
                )}

                {step < 2 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#c9a96e] text-[#0e0e0c] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#ede9e0] transition-colors duration-300"
                  >
                    {t("tasacion.buttons.next")} <ChevronRight size={13} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 py-3.5 bg-[#c9a96e] text-[#0e0e0c] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#ede9e0] transition-colors duration-300"
                  >
                    {t("tasacion.buttons.submit")}
                  </button>
                )}
              </div>
            </form>
          </>
        ) : (
          /* ── Success state ── */
          <div className="p-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(201,169,110,0.12)", border: "1px solid rgba(201,169,110,0.3)" }}>
                <CheckCircle2 size={36} className="text-[#c9a96e]" />
              </div>
            </div>
            <h4 className="font-serif text-2xl text-[#ede9e0] mb-3">{t("tasacion.success.title")}</h4>
            <p className="text-sm text-[#8a8a7a] leading-relaxed mb-3 max-w-sm mx-auto">
              {t("tasacion.success.p1_1")}
              <span className="text-[#c9a96e]">{form.tipo ? t(TIPOS_INMUEBLE_KEYS.find(k => k.value === form.tipo)?.labelKey || "") : t("tasacion.success.p1_2")}</span>
              {t("tasacion.success.p1_3")}
              <span className="text-[#c9a96e]">{form.distrito ? (DISTRITOS_KEYS.find(d => d.value === form.distrito)?.labelKey.includes(".") ? t(DISTRITOS_KEYS.find(d => d.value === form.distrito)!.labelKey) : form.distrito) : ""}</span>.
            </p>
            <p className="text-sm text-[#8a8a7a] leading-relaxed mb-8 max-w-sm mx-auto">
              {t("tasacion.success.p2")}
              <span className="text-[#ede9e0]">{form.email}</span>
              {t("tasacion.success.p3")}
            </p>
            <div className="p-4 mb-6" style={{ background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)" }}>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] mb-1">{t("tasacion.success.codeLabel")}</div>
              <div className="font-mono text-sm text-[#ede9e0]">TAS-{Date.now().toString().slice(-6)}</div>
            </div>
            <button
              onClick={closeTasacion}
              className="px-8 py-3 border border-white/10 text-[#ede9e0]/60 text-xs tracking-[0.2em] uppercase hover:border-[#c9a96e]/30 hover:text-[#c9a96e] transition-all duration-300"
            >
              {t("tasacion.buttons.close")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
