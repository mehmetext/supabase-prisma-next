"use client";

import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Required").max(40, "Too long!"),
  username: Yup.string().required("Required").max(20, "Too long!"),
  email: Yup.string().email("Invalid E-Mail").required("Required"),
  password: Yup.string().required("Required"),
  password2: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must be matched")
    .required("Required"),
});

export default function RegisterForm() {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        name: "",
        username: "",
        email: "",
        password: "",
        password2: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={async (values) => {
        const res = await fetch("/api/auth/create-user", {
          method: "POST",
          body: JSON.stringify({
            ...values,
          }),
        });

        const data = await res.json();

        if (data.status === "error") {
          alert(data.message);
          return;
        }

        const loginRes = await signIn("credentials", {
          username: data.user.username,
          password: data.user.hashedPassword,
          redirect: false,
        });

        if (loginRes?.error) {
          alert(loginRes.error);
          return;
        }

        router.refresh();
        router.push("/");
      }}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
        errors,
      }) => {
        return (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label className="flex flex-col gap-1">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="outline-none border rounded-md p-2 transition focus:border-orange-500"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.name && errors.name && (
                <span className="mx-2 text-red-500 text-xs">{errors.name}</span>
              )}
            </label>
            <label className="flex flex-col gap-1">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="outline-none border rounded-md p-2 transition focus:border-orange-500"
                value={values.username}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.username && errors.username && (
                <span className="mx-2 text-red-500 text-xs">
                  {errors.username}
                </span>
              )}
            </label>

            <label className="flex flex-col gap-1">
              <input
                type="email"
                name="email"
                placeholder="E-Mail"
                className="outline-none border rounded-md p-2 transition focus:border-orange-500"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.email && errors.email && (
                <span className="mx-2 text-red-500 text-xs">
                  {errors.email}
                </span>
              )}
            </label>
            <label className="flex flex-col gap-1">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="outline-none border rounded-md p-2 transition focus:border-orange-500"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.password && errors.password && (
                <span className="mx-2 text-red-500 text-xs">
                  {errors.password}
                </span>
              )}
            </label>
            <label className="flex flex-col gap-1">
              <input
                type="password"
                name="password2"
                placeholder="Password Again"
                className="outline-none border rounded-md p-2 transition focus:border-orange-500"
                value={values.password2}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.password2 && errors.password2 && (
                <span className="mx-2 text-red-500 text-xs">
                  {errors.password2}
                </span>
              )}
            </label>
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-green-600 text-white py-2 px-3 font-medium rounded transition hover:bg-green-700 disabled:cursor-wait disabled:bg-green-600/60"
            >
              Register
            </button>
          </form>
        );
      }}
    </Formik>
  );
}
