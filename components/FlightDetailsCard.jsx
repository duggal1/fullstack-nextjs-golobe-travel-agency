import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { airlines } from "@/data/airlinesLogos";
import plane from "@/public/icons/airplane-filled.svg";
import wifi from "@/public/icons/wifi.svg";
import stopwatch from "@/public/icons/stopwatch.svg";
import fastFood from "@/public/icons/fast-food.svg";
import airLineSeat from "@/public/icons/airline-seat.svg";
import lineLeft from "@/public/icons/line-left.svg";
import lineRight from "@/public/icons/line-right.svg";
import { minToHour, substractTimeInMins } from "@/lib/utils";
import { format } from "date-fns";
export function FlightDetailsCard({ flightDetails, variant = "default" }) {
  const {
    returns,
    timeLeft,
    departureTime,
    originAirport,
    arrivalTime,
    destinationAirport,
    airplaneName,
    airline,
    price,
  } = processFlightDetails(flightDetails);
  return (
    <div className="mb-[20px] shadow-lg rounded-[12px] bg-white px-[24px] py-[32px] shadow-small lg:mb-[30px] xl:mb-[40px]">
      {variant === "book" && (
        <div className="mb-[24px] flex justify-between font-bold">
          <h3 className="font-tradeGothic text-[1.5rem]">{airplaneName}</h3>
          <p className="text-[2rem] text-tertiary">${price}</p>
        </div>
      )}
      <div className="mb-[24px] flex justify-between font-bold">
        <h4 className="font-tradeGothic text-[1.25rem]">Return {returns}</h4>
        <p className="font-medium opacity-75">{timeLeft}</p>
      </div>
      <div className="mb-[40px] grid justify-between gap-[20px] md:flex">
        <div className="flex w-fit items-center gap-[24px] rounded-[8px] border border-primary px-[32px] py-[16px]">
          <Image
            height={40}
            width={60}
            src={airlines[airline.iataCode]}
            alt="emirates_logo"
            className="h-[40px] w-auto"
          />
          <div>
            <h3 className="mb-[8px] text-[1.5rem] font-semibold">
              {airline.name}
            </h3>
            <p className="text-[0.875rem] font-medium opacity-60">
              {airplaneName}
            </p>
          </div>
        </div>
        <div className="flex gap-[20px] px-[24px] py-[16px]">
          <Image src={plane} height={24} width={24} alt="plane_icon" />
          <Separator orientation="vertical" />
          <Image src={wifi} height={24} width={24} alt="wifi_icon" />
          <Separator orientation="vertical" />
          <Image src={stopwatch} height={24} width={24} alt="stopwatch_icon" />
          <Separator orientation="vertical" />
          <Image src={fastFood} height={24} width={24} alt="fast_food_icon" />
          <Separator orientation="vertical" />
          <Image
            src={airLineSeat}
            height={24}
            width={24}
            alt="air-plane-seat_icon"
          />
        </div>
      </div>
      <div className="grid grid-rows-5 items-center gap-[40px] md:flex md:justify-center lg:gap-[80px]">
        <div>
          <span className="text-[1rem] font-semibold lg:text-[1.5rem]">
            {departureTime}
          </span>{" "}
          <span className="max-lg:text-[0.75rem]">{originAirport}</span>
        </div>
        <div className="row-span-3 flex h-max w-max items-center gap-[32px] max-md:rotate-90 md:gap-[24px]">
          <Image
            src={lineLeft}
            width={36}
            height={36}
            className="w-1/3"
            alt="lineleft_icon"
          />
          <Image
            src={plane}
            alt="plane_icon"
            className="h-[48px] w-1/3"
            height={48}
            width={48}
          />
          <Image
            className="w-1/3"
            width={36}
            height={36}
            src={lineRight}
            alt="lineright_icon"
          />
        </div>
        <div>
          <span className="font-semibold lg:text-[1.5rem]">{arrivalTime}</span>{" "}
          <span className="max-lg:text-[0.75rem]">{destinationAirport}</span>
        </div>
      </div>
    </div>
  );
}
function processFlightDetails(data) {
  return {
    returns: format(new Date(data.arrivalDateTime), "eee, MMM d"),
    timeLeft: minToHour(
      substractTimeInMins(data.arrivalDateTime, data.departureDateTime)
    ),
    departureTime: format(new Date(data.departureDateTime), "h:mm aaa"),
    originAirport:
      data.originAirport.name.split(",")[0] +
      "(" +
      data.originAirport.iataCode +
      ")",
    arrivalTime: format(new Date(data.arrivalDateTime), "h:mm aaa"),
    destinationAirport:
      data.destinationAirport.name.split(",")[0] +
      "(" +
      data.destinationAirport.iataCode +
      ")",
    airline: data.airline,
    airplaneName: data.airplane.name,
    price: Object.values(data.price)
      .reduce((prev, curr) => +prev + +curr, 0)
      .toFixed(2),
  };
}
