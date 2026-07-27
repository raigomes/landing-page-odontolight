"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type BookingFormData } from "@/lib/schemas";
import { FormCard } from "./FormCard";

function simulateWhatsAppSend(data: BookingFormData): Promise<void> {
  const message = encodeURIComponent(
    `Olá, meu nome é ${data.name}.${data.email ? `\nE-mail: ${data.email}` : ""}\nTelefone: ${data.phone}\nTratamento: ${data.treatment}`,
  );
  const waUrl = `https://wa.me/5551999998888?text=${message}`;
  return new Promise((resolve) => {
    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
      resolve();
    }, 1200);
  });
}

export function BookingForm() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    setError,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      treatment: undefined,
      consent: undefined,
    },
  });

  const selectedTreatment = watch("treatment");

  async function onSubmit(data: BookingFormData) {
    if (!data.consent) {
      setError("consent", {
        message: "Você precisa autorizar o contato via WhatsApp",
      });
      return;
    }
    setSubmitting(true);
    try {
      await simulateWhatsAppSend(data);
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="booking"
      className="w-full bg-slate-100 py-12 px-4 lg:py-16 lg:px-[120px] scroll-mt-16"
    >
      {sent ? (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-8 text-center flex flex-col items-center gap-4">
          <span className="text-4xl">✅</span>
          <h3 className="text-xl font-bold text-brand-dark">Pedido enviado!</h3>
          <p className="text-sm text-slate-600">
            Sua solicitação foi enviada pelo WhatsApp. Em breve entraremos em
            contato.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="text-sm text-brand-blue hover:underline"
          >
            Fazer nova solicitação
          </button>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto flex flex-col gap-5 lg:gap-6">
          <h2 className="text-[22px] font-bold text-brand-dark leading-tight">
            Solicite seu agendamento
          </h2>
          <p className="text-base text-slate-600">
            Preencha os dados e entraremos em contato em até 15 minutos
          </p>

          <div className="lg:flex lg:flex-row lg:shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
            <div
              className="hidden lg:block lg:flex-1 rounded-l-2xl bg-cover bg-center shrink-0"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1777793389944-f7165259a05c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODQ1MjAyNjl8&ixlib=rb-4.1.0&q=80&w=1080)",
              }}
              role="img"
              aria-label="Consultório odontológico"
            />
            <FormCard
              register={register}
              errors={errors}
              selectedTreatment={selectedTreatment}
              setValue={setValue}
              trigger={trigger}
              submitting={submitting}
              onSubmit={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
