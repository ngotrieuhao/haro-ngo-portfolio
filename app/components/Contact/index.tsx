import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useForm, FieldErrors } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import Input from "../Input";
import Label from "../Label";
import Textarea from "../Textarea";
import Button from "../Button";
import Image from "next/image";
import { Title } from "../Title";

const schema = yup.object({
  to_name: yup.string().required("Please enter your name"),
  from_name: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  message: yup.string().required("Please enter your message"),
});

interface IFormInput {
  to_name: string;
  from_name: string;
  message: string;
}

export const Contact = () => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<IFormInput>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onError = (errors: FieldErrors<IFormInput>) => {
    const firstError = Object.values(errors)[0];
    if (firstError?.message) {
      toast.error(firstError.message);
    }
  };

  const sendEmail = (data: IFormInput, event?: React.BaseSyntheticEvent) => {
    if (!isValid) return;
    const formElement = event?.target as HTMLFormElement;
    if (!formElement) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          emailjs
            .sendForm(
              `${process.env.NEXT_PUBLIC_EMAIL_SERVICE}`,
              `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE}`,
              formElement,
              `${process.env.NEXT_PUBLIC_EMAIL_KEY}`,
            )
            .then(
              () => {
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

  return (
    <section className="pt-10 lg:py-20" id="contact">
      <div className="w-full px-6 mx-auto mb-10 lg:max-w-7xl lg:px-12">
        <Title description="Get In Touch" title="Contact" />
        <div className="flex flex-wrap items-stretch justify-between gap-8 mx-auto mt-10">
          {/* CONTACT LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-[35%] rounded-[32px] shadow-[0_18px_60px_rgba(0,0,0,0.08)] bg-linear-to-br from-brand-yellow to-brand-orangeDark p-1"
          >
            <div className="h-full rounded-[30px] bg-white p-6 shadow-sm">
              <div className="mb-8">
                <span className="inline-flex items-center rounded-full bg-brand-yellowLight/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-orangeDark">
                  Social Network
                </span>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 transition border rounded-3xl border-slate-200 bg-slate-50 hover:border-brand-orangeDark">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-yellow/10 text-brand-orangeDark">
                    <div className="relative w-6 h-6">
                      <Image
                        src="/images/email.png"
                        alt="Email"
                        fill
                        sizes="(max-width: 1024px) 24px, 24px"
                        className="object-contain select-none"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Email</p>
                    <a
                      href="mailto:ngotrieuhao@gmail.com"
                      className="block mt-1 text-sm text-slate-600 hover:text-brand-orangeDark"
                    >
                      ngotrieuhao@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 transition border rounded-3xl border-slate-200 bg-slate-50 hover:border-brand-orangeDark">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-yellow/10 text-brand-orangeDark">
                    <div className="relative w-6 h-6">
                      <Image
                        src="/images/phone.png"
                        alt="Phone"
                        fill
                        sizes="(max-width: 1024px) 24px, 24px"
                        className="object-contain select-none"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Phone</p>
                    <a
                      href="tel:0944334052"
                      className="block mt-1 text-sm text-slate-600 hover:text-brand-orangeDark"
                    >
                      +(084) 944334052
                    </a>
                  </div>
                </div>

                {/* Github */}
                <div className="flex items-start gap-4 p-4 transition border rounded-3xl border-slate-200 bg-slate-50 hover:border-brand-orangeDark">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-yellow/10 text-brand-orangeDark">
                    <div className="relative w-6 h-6">
                      <Image
                        src="/images/github.png"
                        alt="Github"
                        fill
                        sizes="(max-width: 1024px) 24px, 24px"
                        className="object-contain select-none"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Github</p>
                    <a
                      href="https://github.com/ngotrieuhao"
                      target="_blank"
                      className="block mt-1 text-sm text-slate-600 hover:text-brand-orangeDark"
                    >
                      ngotrieuhao
                    </a>
                  </div>
                </div>

                {/* Linkedin */}
                <div className="flex items-start gap-4 p-4 transition border rounded-3xl border-slate-200 bg-slate-50 hover:border-brand-orangeDark">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-yellow/10 text-brand-orangeDark">
                    <div className="relative w-6 h-6">
                      <Image
                        src="/images/linkedin.png"
                        alt="Linkedin"
                        fill
                        sizes="(max-width: 1024px) 24px, 24px"
                        className="object-contain select-none"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Linkedin
                    </p>
                    <a
                      href="https://www.linkedin.com/in/haro-ngo/"
                      target="_blank"
                      rel="noreferrer"
                      className="block mt-1 text-sm text-slate-600 hover:text-brand-orangeDark"
                    >
                      Hao Ngo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* CONTACT RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-[55%] rounded-[32px] shadow-[0_18px_60px_rgba(0,0,0,0.08)] bg-linear-to-br from-brand-yellow to-brand-orangeDark p-1"
          >
            <div className="h-full rounded-[30px] bg-white p-6 shadow-sm">
              <div className="mb-8">
                <span className="inline-flex items-center rounded-full bg-brand-yellowLight/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-orangeDark">
                  Let&apos;s talk
                </span>
              </div>

              <form
                className="space-y-6"
                autoComplete="off"
                onSubmit={handleSubmit(sendEmail, onError)}
              >
                {/* Name */}
                <div className="relative form-group">
                  <Input
                    name="to_name"
                    placeholder=" "
                    control={control}
                    className="input_contact"
                  />
                  <Label htmlFor="name">Name</Label>
                </div>

                {/* Email */}
                <div className="relative form-group">
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
                <div className="relative form-group">
                  <Textarea
                    name="message"
                    rows={4}
                    placeholder=" "
                    control={control}
                    className="input_message"
                  />
                  <Label
                    htmlFor="message"
                    className="select-none form__label--message"
                  >
                    Message
                  </Label>
                </div>

                {/* Button */}
                <div>
                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                    className="flex items-center justify-center w-full h-12 text-lg text-white uppercase transition cursor-pointer rounded-3xl bg-brand-orangeDark hover:bg-brand-orange"
                  >
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
