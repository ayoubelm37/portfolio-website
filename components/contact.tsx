"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,44rem)] text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ayoubelmwin37@gmail.com">
          ayoubelmwin37@gmail.com
        </a>{" "}
        or by phone at <span className="font-medium">+212 762 929 032</span>.
      </p>

      <form
        className="mt-10 flex flex-col rounded-2xl border border-black/10 bg-white/80 p-5 text-left shadow-md shadow-black/[0.05] dark:border-white/10 dark:bg-white/5 dark:text-black sm:p-7"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 rounded-lg border border-black/10 px-4 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400/60 dark:border-white/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="my-3 h-52 rounded-lg border border-black/10 p-4 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400/60 dark:border-white/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
