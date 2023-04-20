import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_r0jcplm",
        "template_1t76uxq",
        {
          form_name: form.name,
          to_name: "Liron",
          from_email: form.email,
          to_email: "contact@mail.com",
          message: form.message,
        },
        "Jqq9AvwIuSjoMiA5c"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>About me</h3>
        <hr />
        <div className="pt-8">
          <h3 className="text-white font-bold text-[38px] mb-4">
            Hi, I'm Er. Deepak Patel
          </h3>
          <h4 className="mt-2 text-secondary  font-bold text-[24px] ">
            I'm a Sr. Software Engineer.
          </h4>
          <p className="mt-2 flex py-1  text-secondary text-[14px]">
            <div className="sm:w-[80px] ">Location:&nbsp; </div>based in Haryana, India
          </p>
          <p className="mt-2 flex  py-1 text-secondary text-[14px]">
            <div className="sm:w-[80px]"> Phone no:&nbsp;</div> 7357360718, 8708720443
          </p>
          <p className="mt-2 flex   py-1 text-secondary text-[14px]">
            <div className="sm:w-[80px]"> Email:&nbsp;</div> deepak1995p@gmail.com
          </p>
          <p className="mt-2  orange-text-gradient  py-1 text-secondary text-[18px]">
            <div className="w-full font-bold py-3"> My Vision</div>{" "}
            <div className="">
              To create a world where technology is used to solve the most
              pressing challenges facing humanity, while respecting individual
              privacy and promoting equitable access to information and
              opportunities.
            </div>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
