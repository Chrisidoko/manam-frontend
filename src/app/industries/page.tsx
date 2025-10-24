// import Services2 from "@/components/ui/services2";
import { redirect } from "next/navigation";
import { industries } from "./industries";

// import { cx } from "@/lib/utils";

export default function Servicespage() {
  // Redirect to the first service

  redirect(`/industries/${industries[0].slug}`);
}
