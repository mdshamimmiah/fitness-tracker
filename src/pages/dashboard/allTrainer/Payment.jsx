import SectionTitle from "../../../hooks/SectionTitle";

import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "../paymemt/CheckOut";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please payment to my account"></SectionTitle>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;

