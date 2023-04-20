import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full pt-20  sm mx-auto xs:pb-5 lg:pb-30`}>
      <div
        className={` inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} lg:flex flex-row items-start gap-5`}
      >
        <h1 className={`${styles.heroHeadText} text-white`}>
          <span className="text-[#00ff00] text-center">#Open To Work!</span>
        </h1>
        <div className="flex  gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi👋, I'm
              <div className="text-[#915EFF]"> Er. Deepak Patel</div>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am Sr. Software Engineer and <br className="sm:block hidden" />
              Develop Attractive, User Interfaces and web applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
