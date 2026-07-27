"use client";

import React from "react";
import dynamic from "next/dynamic";

const BookingForm = dynamic(
  () => import("@/components/BookingForm").then((m) => ({ default: m.BookingForm })),
  { ssr: false },
);

export function LazyBookingForm() {
  return <BookingForm />;
}
