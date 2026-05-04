"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Text,
  TextField,
} from "@heroui/react";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("submited");

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log("user data :", userData);

    const { data, error } = await authClient.signUp.email({
      name: userData.name, // required
      image: userData.image, // required
      email: userData.email, // required
      password: userData.password, // required
      callbackURL: "/login",
    });
    if (error) {
      alert("error singing up : ", error.message);
    }
    if (data) {
      alert('sign up successful')
    }
  };

  return (
    <div className="flex flex-col items-center h-[100vh] container mx-auto my-auto">
      <h1 className="text-3xl font-bold mt-4">Sign Up</h1>

      <Form
        className="w-[70vw] h-[50%] px-6 py-4 mt-5 bg-gray-300 rounded-lg flex w-96 flex-col gap-4"
        onSubmit={onSubmit}
      >
        {/* name */}
        <TextField
          isRequired
          // validate={(value) => {
          //   if (value.length < 3) {
          //     return "Name must be at least 3 characters";
          //   }
          //   return null;
          // }}
        >
          <Label>Name</Label>
          <Input name="name" placeholder="John Doe" />
          <FieldError />
        </TextField>

        {/* image */}
        <TextField isRequired>
          <Label>Image</Label>
          <Input name="image" placeholder="Enter Your Image URL(must be from images.unsplash.com)" />
          <FieldError />
        </TextField>

        {/* email */}
        <TextField
          isRequired
          type="email"
          // validate={(value) => {
          //   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          //     return "Please enter a valid email address";
          //   }
          //   return null;
          // }}
        >
          <Label>Email</Label>
          <Input name="email" placeholder="john@example.com" />
          <FieldError />
        </TextField>

        {/* password */}
        <TextField
          isRequired
          minLength={8}
          type="password"
          // validate={(value) => {
          //   if (value.length < 8) {
          //     return "Password must be at least 8 characters";
          //   }
          //   if (!/[A-Z]/.test(value)) {
          //     return "Password must contain at least one uppercase letter";
          //   }
          //   if (!/[0-9]/.test(value)) {
          //     return "Password must contain at least one number";
          //   }
          //   return null;
          // }}
        >
          <Label>Password</Label>
          <Input name="password" placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="text-center">
          <Button type="submit">
            <Check />
            Sign Up
          </Button>

        </div>
      </Form>
    </div>
  );
};

export default SignUpPage;
