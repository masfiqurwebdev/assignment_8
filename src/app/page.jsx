import Hero from "@/components/Hero";
import PopularCourses from "@/app/course/PopularCourses";
import TopInstractors from "@/components/TopInstractors";
import LearningTips from "@/components/LearningTips";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <PopularCourses/>
      <LearningTips />
      <TopInstractors/>
    </div>
  );
}
