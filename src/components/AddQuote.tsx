"use client";

import { User } from "@prisma/client";
import { Formik } from "formik";
import * as Yup from "yup";

const AddQuoteSchema = Yup.object().shape({
  quote: Yup.string().required(),
});

export default function AddQuote({ user }: { user: User }) {
  return (
    <Formik
      initialValues={{ quote: "" }}
      validationSchema={AddQuoteSchema}
      validateOnMount
      onSubmit={async (values, { resetForm }) => {
        const res = await fetch("/api/quotes", {
          method: "POST",
          body: JSON.stringify({
            quote: values.quote,
            userId: user.id,
          }),
        });
        const data = await res.json();

        console.log(data);

        if (data.status) {
          resetForm();
        }
      }}
    >
      {({
        handleSubmit,
        handleBlur,
        handleChange,
        values,
        isValid,
        isSubmitting,
      }) => {
        return (
          <form onSubmit={handleSubmit} className="flex gap-4 items-start">
            <textarea
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.quote}
              name="quote"
              id="quote"
              placeholder="Quote..."
              rows={1}
              className="flex-1 outline-none border rounded-md p-2 transition focus:border-orange-500"
            />
            <button
              disabled={!(isValid && !isSubmitting)}
              type="submit"
              className="bg-orange-600 text-white py-2 px-3 font-medium rounded transition hover:bg-orange-700 disabled:bg-orange-400 disabled:cursor-not-allowed"
            >
              Publish
            </button>
          </form>
        );
      }}
    </Formik>
  );
}
