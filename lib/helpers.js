import { useRouter } from "next/router";
import supabase from "./supabase";

export const handleSignOut = async (e) => {
  const router = useRouter();

  e.preventDefault(); // Prevent default action
  const { error } = await supabase.auth.signOut();
  if (error) {
    showMessage(error);
    return;
  }

  router.push("/");
};
