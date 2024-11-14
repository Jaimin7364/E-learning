import { useGetCourseDetailsQuery } from "@/redux/features/courses/courseApi";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";
import Header from "../Header";
import Footer from "../Footer";
import CourseDetails from "./CourseDetail";
import {
  useCreatePaymentIntentMutation,
  useGetStripePublishablekeyQuery,
} from "@/redux/features/orders/ordersApi";
// import { loadStripe } from "@stripe/stripe-js";

type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const { data, isLoading, error } = useGetCourseDetailsQuery(id);
  const { data: config, error: configError } = useGetStripePublishablekeyQuery({});
  const [createPaymentIntent, { data: paymentIntentData, error: paymentIntentError }] =
    useCreatePaymentIntentMutation();
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (config) {
      const publishablekey = config?.publishableKey;
      // setStripePromise(loadStripe(publishablekey));
    }
    return () => {
      setStripePromise(null);
    };
  }, [config]);

  useEffect(() => {
    if (data) {
      const amount = Math.round(data.course.price * 100);
      createPaymentIntent(amount);
    }
  }, [data, createPaymentIntent]);

  useEffect(() => {
    if (paymentIntentData) {
      setClientSecret(paymentIntentData?.client_secret);
    }
  }, [paymentIntentData]);

  if (isLoading) return <Loader />;
  if (error || configError || paymentIntentError) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div>
      <Heading
        title={data.course.name + " - S3CloudHub"}
        description={"Learn from the best instructors and get certified in the latest technologies"}
        keyword={data?.course?.tags}
      />
      <Header
        route={route}
        setRoute={setRoute}
        open={open}
        setOpen={setOpen}
        activeItem={1}
      />
      {stripePromise && (
        <CourseDetails
          data={data.course}
          stripePromise={stripePromise}
          clientSecret={clientSecret}
          setRoute={setRoute}
          setOpen={setOpen}
        />
      )}
      <Footer />
    </div>
  );
};

export default CourseDetailsPage;