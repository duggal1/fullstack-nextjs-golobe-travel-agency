import { unstable_cache } from "next/cache";
import {
  getUserById,
  getUserDetailsByUserId,
  getFlightById,
  getFlightsByFlightIds,
  getFlightsByDepartAndArriveAirportIataCode,
} from "../getOperationDB";

const getUserByIdCatched = unstable_cache(
  async (id) => getUserById(id),
  ["user"],
  {
    revalidate: +process.env.REVALIDATION_TIME,
    tags: ["user"],
  }
);

const getUserDetailsByUserIdCached = unstable_cache(
  async (useId) => getUserDetailsByUserId(useId),
  ["user_details"],
  {
    revalidate: +process.env.REVALIDATION_TIME,
    tags: ["user_details"],
  }
);

const getFlightByIdCached = unstable_cache(
  (flightId) => getFlightById(flightId),
  ["flight"],
  {
    revalidate: +process.env.REVALIDATION_TIME,
    tags: ["flight"],
  }
);

const getFlightsByFlightIdsCached = unstable_cache(
  async (flightIdArr) => getFlightsByFlightIds(flightIdArr),
  ["favourite_flights"],
  {
    revalidate: +process.env.REVALIDATION_TIME,
    tags: ["favourite_flights"],
  }
);

const getFlightsByDepartAndArriveAirportIataCodeCatched = unstable_cache(
  ({ originAirportCode, destinationAirportCode }) =>
    getFlightsByDepartAndArriveAirportIataCode({
      originAirportCode,
      destinationAirportCode,
    }),
  ["flights"],
  { revalidate: +process.env.REVALIDATION_TIME, tags: ["flights"] }
);

export {
  getUserByIdCatched,
  getUserDetailsByUserIdCached,
  getFlightByIdCached,
  getFlightsByFlightIdsCached,
  getFlightsByDepartAndArriveAirportIataCodeCatched,
};