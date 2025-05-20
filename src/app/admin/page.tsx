// app/(admin)/page.tsx
// import { redirect } from "next/navigation";

// export default function AdminPage() {
//   // Redirect logic (for example, check if the user is authenticated)
//   redirect("/admin/overview");

//   return null; // Or any placeholder content
// }
import React from "react";
import Loginform from "@/components/ui/login";

export default function Login() {
  return (
    <main className="bg-white">
      <Loginform />
    </main>
  );
}
