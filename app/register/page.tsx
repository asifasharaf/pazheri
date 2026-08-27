import type { Metadata } from "next";
import { RegisterForm } from "@/components/pages/register-form";

export const metadata: Metadata = {
  title: "Family registration",
  description:
    "Add your household to the Pazheri family register kept by the society.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
