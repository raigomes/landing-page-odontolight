import React from "react";
import { useForm } from "react-hook-form";
import { treatments, type BookingFormData } from "@/lib/schemas";

interface FormCardProps {
  register: ReturnType<typeof useForm<BookingFormData>>["register"];
  errors: ReturnType<typeof useForm<BookingFormData>>["formState"]["errors"];
  selectedTreatment: string | undefined;
  setValue: ReturnType<typeof useForm<BookingFormData>>["setValue"];
  trigger: ReturnType<typeof useForm<BookingFormData>>["trigger"];
  submitting: boolean;
  onSubmit: () => void;
}

export function FormCard({
  register,
  errors,
  selectedTreatment,
  setValue,
  trigger,
  submitting,
  onSubmit,
}: FormCardProps) {
  const inputBase =
    "w-full h-12 px-4 bg-slate-50 border-2 border-slate-300 rounded-lg text-sm text-brand-dark placeholder:text-slate-400 outline-none transition-colors focus:border-brand-blue";

  const inputError =
    "w-full h-12 px-4 bg-slate-50 border-2 border-red-400 rounded-lg text-sm text-brand-dark placeholder:text-slate-400 outline-none transition-colors focus:border-red-500";

  return (
    <div className="bg-white p-6 flex flex-col gap-4 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] lg:rounded-r-2xl lg:rounded-none lg:shadow-none">
      <form onSubmit={onSubmit} className="flex flex-col gap-4 h-full">
        <div>
          <input
            {...register("name")}
            placeholder="Nome completo"
            className={errors.name ? inputError : inputBase}
          />
          {errors.name && (
            <span className="text-xs text-red-500 mt-1 block">
              {errors.name.message}
            </span>
          )}
        </div>

        <div>
          <input
            {...register("phone")}
            placeholder="Telefone / WhatsApp"
            className={errors.phone ? inputError : inputBase}
          />
          {errors.phone && (
            <span className="text-xs text-red-500 mt-1 block">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            placeholder="E-mail"
            className={errors.email ? inputError : inputBase}
          />
          {errors.email && (
            <span className="text-xs text-red-500 mt-1 block">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-brand-dark">
            Qual tratamento você procura?
          </span>
          <div className="flex flex-wrap gap-2">
            {treatments.map((t) => {
              const active = selectedTreatment === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setValue("treatment", t);
                    trigger("treatment");
                  }}
                  className={`text-sm font-medium rounded-full px-[18px] py-3 border transition-colors ${
                    active
                      ? "bg-brand-blue text-white border-brand-blue"
                      : "bg-transparent text-brand-blue border-brand-blue"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
          {errors.treatment && (
            <span className="text-xs text-red-500">
              {errors.treatment.message}
            </span>
          )}
        </div>

        <div className="flex-1" />

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-emerald-700 hover:bg-emerald-600 disabled:bg-emerald-400 text-white text-base font-semibold rounded-lg px-6 py-3.5 transition-colors flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Enviando...
            </>
          ) : (
            "Solicitar Agendamento via WhatsApp"
          )}
        </button>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            {...register("consent")}
            className="w-[18px] h-[18px] accent-brand-blue rounded border-2 border-slate-300 bg-slate-50 shrink-0"
          />
          <span className="text-xs text-slate-600">
            Aceito receber contato via WhatsApp
          </span>
        </label>
        {errors.consent && (
          <span className="text-xs text-red-500">{errors.consent.message}</span>
        )}

        <p className="text-xs text-slate-600">
          🔒 Seus dados estão seguros conosco
        </p>
      </form>
    </div>
  );
}
