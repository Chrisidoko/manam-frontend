// import Services2 from "@/components/ui/services2";
import { redirect } from "next/navigation";
import { products } from "./products";

// import { cx } from "@/lib/utils";

export default function Servicespage() {
  // Redirect to the first service

  redirect(`/products/${products[0].slug}`);
}
