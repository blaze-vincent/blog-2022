import AboutSection from "../components/about";
import ProfileSection from "../components/profile";
import TestSection from "../components/testSection";

export default function Home() {
  return <div className="flex flex-col gap-8 max-w-screen-md text-lg">
    {/* <ProfileSection />
    <AboutSection /> */}
    {[...Array(5).keys()].map(key => <TestSection key={key} />)}
  </div>
}
