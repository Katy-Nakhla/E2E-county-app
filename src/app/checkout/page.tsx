"use client";
import React, { useState, useContext } from "react";
import { Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Success from "@/components/Success";
import { ShoppingCartContext } from "@/context/ShoppingCart";

const Checkout = () => {
  const [isCheckoutDone, setIsCheckoutDone] = useState<boolean>(false);
  const shoppingCartContextValues = useContext(ShoppingCartContext);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstName: "",
      secondName: "",
      email: "",
      country: "",
      address: "",
      postalCode: "",
    },

    validate: {
      firstName: (value) =>
        value.length < 2 ? "First name must have at least 2 letters" : null,
      secondName: (value) =>
        value.length < 2 ? "Second name must have at least 2 letters" : null,
      country: (value) => (value.length === 0 ? "Country is required" : null),
      address: (value) => (value.length === 0 ? "Address is required" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const submitValues = () => {
    setIsCheckoutDone(true);
    shoppingCartContextValues?.clearCart();
  };

  return (
    <div className="md:w-[30%] sm:w-[80%] m-auto ">
      {isCheckoutDone ? (
        <Success />
      ) : (
        <form onSubmit={form.onSubmit(submitValues)}>
          <h3 className="text-semibold">Customer Details</h3>
          <TextInput
            withAsterisk
            label="First Name"
            type="text"
            key={form.key("firstName")}
            {...form.getInputProps("firstName")}
          />

          <TextInput
            withAsterisk
            label="Second Name"
            type="text"
            key={form.key("secondName")}
            {...form.getInputProps("secondName")}
          />

          <TextInput
            withAsterisk
            label="Email"
            type="email"
            placeholder="your@email.com"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <h3 className="mt-4 text-semibold">Delivery Details</h3>

          <TextInput
            withAsterisk
            label="Country"
            type="text"
            key={form.key("country")}
            {...form.getInputProps("country")}
          />
          <TextInput
            withAsterisk
            label="Address"
            type="text"
            key={form.key("address")}
            {...form.getInputProps("address")}
          />
          <TextInput
            label="Postal Code"
            type="text"
            key={form.key("postalCode")}
            {...form.getInputProps("postalCode")}
          />
          <Group justify="flex-end" mt="md">
            <button
              type="submit"
              className=" rounded-lg px-5 py-3 text-white bg-mainColor"
            >
              Submit
            </button>
          </Group>
        </form>
      )}
    </div>
  );
};

export default Checkout;
