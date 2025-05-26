// import Services2 from "@/components/ui/services2";
import { redirect } from "next/navigation";
import { services } from "./services";

// import { cx } from "@/lib/utils";

export default function Servicespage() {
  // Redirect to the first service

  redirect(`/services/${services[0].slug}`);
}
