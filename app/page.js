/** @format */

import State from "./_api/State";
import HeroSlider from "./_components/HeroSlider";

import CallToAction from "./_components/CallToAction";
import Departments from "./_api/Departments";
import Navbar from "./_components/Navbar";
import Doctors from "./_components/Doctors";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <CallToAction />
      <State />
      <Departments />
      <Doctors/>
    </div>
  );
}
