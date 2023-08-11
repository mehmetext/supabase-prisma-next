"use client";

import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { Formik } from "formik";
import wait from "@/lib/utils/wait";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required").max(20, "Too long!"),
  password: Yup.string().required("Required"),
});

export default function Form() {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values) => {
        await wait(500);
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
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-orange-600 py-2 px-3 font-medium rounded transition hover:bg-orange-700 text-white disabled:cursor-wait disabled:bg-orange-600/60"
            >
              Login
            </button>
          </form>
        );
      }}
    </Formik>
  );
}
