
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

//import { ConfirmProvider } from "material-ui-confirm";


const metadata = {
  title: "Guest",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <>

        <Navbar />
        {children}
        <Footer />

    </>
  );
}

