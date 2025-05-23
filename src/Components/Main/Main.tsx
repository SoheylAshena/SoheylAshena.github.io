import Icons from "../Icons";
import ImageSection from "./ImageSection";
import ContentSection from "./ContentSection";

interface MainPageInterface {
  width: number;
}

const Main = ({ width }: MainPageInterface) => {
  return (
    <div
      className="container flex min-h-screen max-w-screen flex-col items-center justify-between overflow-hidden md:flex-row md:overflow-visible"
      id="soheyl"
    >
      <ImageSection />
      <div className="flex gap-7">
        {width > 768 && <Icons />}
        <ContentSection />
      </div>
    </div>
  );
};

export default Main;
