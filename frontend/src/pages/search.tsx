import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import React from "react";
import "../app/globals.css";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { format } from "date-fns";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import HotelCard from "@/components/cards/HotelCard";
import { BypassAgent } from "@/components/main/Main";

const Search = ({ data }: { data: SearchResultData[] }) => {
  const router = useRouter();
  const { location, bookingStartDate, bookingEndDate, noOfGuest } =
    router.query;

  let ranges: string = "";

  if (
    typeof bookingStartDate === "string" &&
    typeof bookingEndDate === "string"
  ) {
    const formattedStartDate = bookingStartDate
      ? format(new Date(bookingStartDate), "dd MMMM yy")
      : "";
    const formattedEndDate = bookingEndDate
      ? format(new Date(bookingEndDate), "dd MMMM yy")
      : "";
    ranges = `${formattedStartDate} - ${formattedEndDate}`;
  }

  return (
    <div>
      <Head>
        <title>Search Results - Airbnb Clone</title>
      </Head>
      <NavBar placeHolder={`${location} | ${ranges} | ${noOfGuest} guests`} />
      <div>
        <main className="flex">
          <section className="flex-grow pt-14 px-5">
            <p className="text-xs">
              300+ Stays- {ranges} for {noOfGuest} guests
            </p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">
              Stays in {location}
            </h1>
            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
              <p className="button">Cancellation Flexibility</p>
              <p className="button">Type of Place</p>
              <p className="button">Price</p>
              <p className="button">Rooms And Beds</p>
              <p className="button">More Filters</p>
            </div>

            <div className="flex flex-col">
              {data.map((hotel) => (
                <HotelCard
                  img={hotel.img}
                  location={hotel.location}
                  title={hotel.title}
                  description={hotel.description}
                  star={hotel.star}
                  price={hotel.price}
                  total={hotel.total}
                  long={hotel.long}
                  lat={hotel.lat}
                  key={hotel.title}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Search;

interface SearchResultData {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

export const getServerSideProps: GetServerSideProps<{
  data: SearchResultData[];
}> = async () => {
  const res = await axios.get("https://links.papareact.com/isz", {
    httpsAgent: BypassAgent,
  });
  const data = (await res.data) as SearchResultData[];
  return { props: { data } };
};
