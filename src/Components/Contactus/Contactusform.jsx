import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import whatsappicon from "../../assets/whatsapp.png";

function Contactusform() {
  return (
    <>
      {/* contactus form head */}
      <div className="px-10  my-11 2xl:w-[1440px] w-auto mx-auto">
        <h1 className="font-bold text-2xl text-center py-1">
          WE ARE MORE THAN WILLING TO PROVIDE OUR ASSISTANCE.
        </h1>
        <p className="text-[#652D91] text-center py-1">Have inquiries?</p>
        <p className="text-[#652D91] text-center">
          Interested in learning more about the services we offer, Feel free to
          text us at any time.
        </p>
      </div>
      <div className="flex justify-center gap-8 px-10 2xl:w-[1440px] w-auto mx-auto">
        {/* Contact form section */}
        <div className="flex flex-col justify-center gap-4">
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              phonenumber: "",
              email: "",
              comments: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.firstname) {
                errors.firstname = "first name is required*";
              }
              if (!values.lastname) {
                errors.lastname = "last name is required*";
              }
              if (!values.email) {
                errors.email = "email is required*";
              }
              if (!values.address) {
                errors.address = "address is required*";
              }
              if (!values.phonenumber) {
                errors.phonenumber = "phone number is required*";
              }
              if (!values.comments) {
                errors.comments = "comments is required*";
              }
              // Add more validation rules for other fields if needed
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4 ">
                {/* Firstname and Lastname fields */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:px-8">
                    <Field
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      className="p-2 border-b border-gray-400 w-full placeholder:text-black placeholder:text-sm focus:outline-none focus:border-[#652D91]"
                    />
                    <ErrorMessage
                      name="firstname"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="md:px-8">
                    <Field
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      className="p-2 border-b border-gray-400 w-full placeholder:text-black placeholder:text-sm focus:outline-none focus:border-[#652D91]"
                    />
                    <ErrorMessage
                      name="lastname"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>

                {/* Phonenumber and Email fields */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:px-8">
                    <Field
                      type="text"
                      name="phonenumber"
                      placeholder="+91 Phone Number"
                      className="p-2 border-b border-gray-400 w-full  placeholder:text-black placeholder:text-sm focus:outline-none focus:border-[#652D91]"
                    />
                    <ErrorMessage
                      name="phonenumber"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="md:px-8">
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className="p-2 border-b border-gray-400 w-full  placeholder:text-black placeholder:text-sm focus:outline-none focus:border-[#652D91]"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>

                {/* Comments field */}
                <div className="md:px-8">
                  <Field
                    type="text"
                    name="comments"
                    placeholder="Comments"
                    className="p-2 border-b border-gray-400  w-full  placeholder:text-black placeholder:text-sm focus:outline-none focus:border-[#652D91]"
                  />
                  <ErrorMessage
                    name="comments"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
                {/* Submit button */}
                <div className="px-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white bg-[#652D91] w-full text-center p-2 hover:bg-[#652D91] "
                  >
                    {isSubmitting ? "Submitting..." : "SUBMIT"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* WhatsApp icon section */}
        <div className="flex justify-start items-end w-14">
          <a href="https://www.whatsapp.com">
            <img src={whatsappicon} alt="whatsapp" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contactusform;
