import { HeroSection } from "./heroSection";
import { Form } from "@components/form";
import { Footer } from "@components/footer";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <div className="">
          <HeroSection />
          <Form />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
