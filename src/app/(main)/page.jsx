import Hero from "@/components/Hero";
import PopularCourses from "@/app/(main)/course/PopularCourses";
import TopInstractors from "@/components/TopInstractors";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <PopularCourses/>
      <TopInstractors/>
    </div>
  );
}
