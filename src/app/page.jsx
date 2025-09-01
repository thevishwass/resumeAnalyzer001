// src/app/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumeUpload from "@/components/ResumeUpload";
import Content from "@/components/Content";
import AnalysisResult from "@/components/AnalysisResult";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="container">
        <ResumeUpload />
        {/* <AnalysisResult /> */}
        <Content />
      </main>
      <Footer />
    </>
  );
}
