import React, { Key } from "react";
import https from "https";
import fetch from "node-fetch";
import { Response } from "node-fetch";
import SmallCard from "../cards/SmallCard";
import BigCard from "../cards/BigCard";

interface ExploreItem {
  img: string;
  location: string;
  distance: string;
}

interface CardItem {
  title: string;
  img: string;
}

const Main = async () => {
  const exploreData: ExploreItem[] = await getExploreData();
  const cardData: CardItem[] = await getCardData();

  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-16">
      <div className="pt-6">
        <h2 className="text-3xl font-semibold pb-5">Explore Nearby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-10">
          {exploreData?.map((item: ExploreItem, index: Key) => (
            <SmallCard
              key={index}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-semibold pb-5">Live Anywhere</h2>
        <div className=" justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card: CardItem, index: Key) => (
            <BigCard key={index} title={card.title} img={card.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;

export const getExploreData = async (): Promise<ExploreItem[]> => {
  try {
    const res: Response = await fetch(`https://links.papareact.com/pyp`, {
      agent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
    const exploreData: ExploreItem[] = (await res.json()) as ExploreItem[]; // Fix: Explicitly type the response as ExploreItem[]
    return exploreData;
  } catch (error) {
    console.log("Error fetching data:", error);
    return []; // Return an empty array as a fallback
  }
};

export const getCardData = async (): Promise<CardItem[]> => {
  try {
    const res: Response = await fetch(`https://links.papareact.com/zp1`, {
      agent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
    const cardData: CardItem[] = (await res.json()) as CardItem[]; // Fix: Explicitly type the response as ExploreItem[]
    return cardData;
  } catch (error) {
    console.log("Error fetching data:", error);
    return []; // Return an empty array as a fallback
  }
};
