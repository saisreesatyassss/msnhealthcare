import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSN Health Care",
  description: "health care information",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
