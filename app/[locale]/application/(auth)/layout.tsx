import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/NavBar";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
