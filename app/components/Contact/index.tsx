import React, { memo, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useScroll, motion } from "framer-motion";
import Input from "../Input";
import Label from "../Label";
import Textarea from "../Textarea";
import Button from "../Button";
import Model from "../Model";
import Image from "next/image";

const schema = yup.object({
  to_name: yup.string().required("Please enter your name"),
  from_name: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  message: yup.string().required("Please enter your message"),
});

export const Contact = () => {
  const ref = useRef<HTMLHeadingElement | HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1 "],
  });
  const form = useRef<HTMLFormElement>(null);
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const sendEmail = (data: any) => {
    if (!isValid) return;
    if (!form.current) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          emailjs
            .sendForm(
              `${process.env.NEXT_PUBLIC_EMAIL_SERVICE}`,
              `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE}`,
              form.current as HTMLFormElement,
              `${process.env.NEXT_PUBLIC_EMAIL_KEY}`,
            )
            .then(
              (result) => {
                toast.success("Send Email Successfully!");
              },
              (error) => {
                toast.error(error.message);
              },
            ),
        );
        reset({
          to_name: "",
          from_name: "",
          message: "",
        });
      }, 2000);
    });
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 100,
      });
    }
  }, [errors]);

  return (
    <section className="py-20" id="contact">
      <div className="w-full max-w-7xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <h2 className="text-white text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
            Contact
          </h2>
        </motion.div>

        <div className="mt-6 flex flex-wrap justify-between items-stretch mx-auto gap-8">
          {/* CONTACT LEFT */}
          <motion.div
            ref={ref}
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
            }}
            className="w-full lg:w-[35%] bg-linear-to-br from-brand-yellow to-brand-orangeDark rounded-xl shadow-[0_0_20px_4px_rgba(130,130,130,0.5)] p-4"
          >
            <div className="text-white text-xl font-bold text-center mb-4">
              Social Network
            </div>

            <div className="bg-white rounded-xl text-brand-orangeDark p-4">
              {/* Email */}
              <div className="mb-6 pb-6 border-b flex gap-4 items-center border-gradient-to-r">
                <div className="w-10 h-10 overflow-hidden relative">
                  <Image
                    src="/images/email.png"
                    alt="Email"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email:</h4>
                  <a
                    href="mailto:ngotrieuhao@gmail.com"
                    className="underline hover:text-brand-blue hover:no-underline"
                  >
                    ngotrieuhao@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-6 pb-6 border-b flex gap-4 items-center">
                <div>
                  <div className="w-10 h-10 overflow-hidden relative">
                    <Image
                      src="/images/phone.png"
                      alt="Phone"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone:</h4>
                  <a
                    href="tel:0944334052"
                    className="hover:text-brand-blue underline hover:no-underline"
                  >
                    +(084) 944334052
                  </a>
                </div>
              </div>

              {/* Github */}
              <div className="mb-6 pb-6 border-b flex gap-4 items-center">
                <div className="w-10 h-10 overflow-hidden relative">
                  <Image
                    src="/images/github.png"
                    alt="Github"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Github:</h4>
                  <a
                    href="https://github.com/ngotrieuhao"
                    target="_blank"
                    className="hover:text-brand-blue underline hover:no-underline"
                  >
                    ngotrieuhao
                  </a>
                </div>
              </div>

              {/* Linkedin */}
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 overflow-hidden relative">
                  <Image
                    src="/images/linkedin.png"
                    alt="Linkedin"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Linkedin:</h4>
                  <a
                    href="https://www.linkedin.com/in/haro-ngo/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-blue underline hover:no-underline"
                  >
                    Hao Ngo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          {/* CONTACT RIGHT */}
          <motion.div
            ref={ref}
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
            }}
            className="w-full lg:w-[55%] bg-linear-to-br from-brand-yellow to-brand-orangeDark rounded-xl shadow-[0_0_20px_4px_rgba(130,130,130,0.5)] p-4"
          >
            <div className="text-white text-xl font-bold text-center mb-4">
              Let's talk
            </div>

            <form
              className="contact__form bg-white rounded-xl p-6 pt-8"
              ref={form}
              autoComplete="off"
              onSubmit={handleSubmit(sendEmail)}
            >
              {/* Name */}
              <div className="form-group relative mb-6">
                <Input
                  name="to_name"
                  placeholder=" "
                  control={control}
                  className="input_contact"
                />
                <Label htmlFor="name">Name</Label>
              </div>

              {/* Email */}
              <div className="form-group relative mb-6">
                <Input
                  name="from_name"
                  type="email"
                  placeholder=" "
                  control={control}
                  className="input_contact"
                />
                <Label htmlFor="email">Email</Label>
              </div>

              {/* Message */}
              <div className="form-group relative mb-6">
                <Textarea
                  name="message"
                  rows={3}
                  placeholder=" "
                  control={control}
                  className="input_message"
                />
                <Label
                  htmlFor="message"
                  className="form__label--message select-none"
                >
                  Message
                </Label>
              </div>

              {/* Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  className="w-1/2 h-12 select-none cursor-pointer text-white bg-brand-orangeDark rounded-lg uppercase text-lg hover:bg-gray-800 transition"
                >
                  Send
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
