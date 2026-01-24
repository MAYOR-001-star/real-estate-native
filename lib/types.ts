import { Models } from "appwrite";

export type Property = Models.Document & {
  name: string;
  address: string;
  price: number;
  type: "House" | "Apartment" | "Villa" | "Duplex";
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  rating: number;
  agent: Agent;
  description: string;
  facilities: string[];
  reviews: Review[];
  galleries: Gallery[];
};

export type Agent = Models.Document & {
  name: string;
  image: string;
  phone: string;
  properties: number;
};

export type Review = Models.Document & {
  name: string;
  image: string;
  rating: number;
  comment: string;
  date: string;
};

export type Gallery = Models.Document & {
  image: string;
};
