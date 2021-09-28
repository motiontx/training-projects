import { FormData } from "../types/form-types";

const Data: FormData = {
  steps: [
    {
      slug: "about-me",
      title: "About Me",
      description: "Let's start with your basic information.",
      position: 1,
      fields: [
        {
          label: "Name",
          name: "name",
          type: "text",
          placeholder: "John",
          required: true,
        },
        {
          label: "Surname",
          name: "surname",
          type: "text",
          placeholder: "Doe",
          required: true,
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "example@example.com",
          required: true,
        },
      ],
    },
    {
      slug: "create-password",
      title: "Create your password",
      description: "",
      position: 2,
      fields: [
        {
          label: "Password",
          name: "password",
          type: "password",
          placeholder: "********",
          required: true,
        },
        {
          label: "Confirm Password",
          name: "confirm-password",
          type: "password",
          placeholder: "********",
          required: true,
        },
      ],
    },
    {
      slug: "address",
      title: "Address",
      description: "Just basic information about where you are...",
      position: 3,
      fields: [
        {
          label: "City",
          name: "city",
          type: "text",
          placeholder: "San Francisco",
          required: true,
        },
        {
          label: "Country",
          name: "country",
          type: "text",
          placeholder: "United State",
          required: true,
        },
      ],
    },
    {
      slug: "phone-number",
      title: "We are almost done!",
      description:
        "For security reasons, we require your phone number in case you forget your password.",
      position: 4,
      fields: [
        {
          label: "Phone",
          name: "phone",
          type: "tel",
          placeholder: "Phone",
          required: true,
        },
      ],
    },
  ],
};

export default Data;
