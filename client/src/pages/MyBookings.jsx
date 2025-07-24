import React, { useEffect, useState } from "react";
import { dummyBookingData } from "../assets/assets";
import { Loading } from "../components";
import { minutesToTime } from "../lib/minutesToTime";
import { dateTimeFormat } from "../lib/dateTimeFormat";
function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const getBookings = () => {
    setBookings(dummyBookingData);
  };

  useEffect(() => {
    getBookings();
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="bg-[linear-gradient(135deg,_#0b1234,_#000000)] 
        p-10 h-dvh"
        >
          <h1 className="text-3xl mt-5 p-5 pl-0 font-bold">My Bookings</h1>
          {bookings.map((item, index) => (
            <div className="flex flex-col mb-6" key={index}>
              <div className="bg-[#222343] w-[800px] p-5 rounded-md flex items-center justify-between shadow-lg">
                {/* Left: Poster and details */}
                <div className="flex items-center">
                  <img
                    src={item.show.movie.poster_path}
                    alt="Movie Poster"
                    className="h-[100px] w-[170px] object-cover rounded-md"
                  />
                  <div className="flex flex-col ml-6">
                    <p className="text-2xl font-semibold text-white mb-1">
                      {item.show.movie.title}
                    </p>
                    <p className="text-md text-gray-300">
                      {minutesToTime(item.show.movie.runtime)}
                    </p>
                    <p className="text-md text-gray-400">
                      {dateTimeFormat(item.show.showDateTime)}
                    </p>
                  </div>
                </div>
                {/* Right: Price, button, and info as a grouped column (updated for alignment and style) */}
                <div className="flex flex-col items-start justify-center min-w-[170px] h-full">
                  <div className="flex items-center mb-2 w-full">
                    <span className="text-3xl font-extrabold text-white mr-2 text-left">
                      ${item.amount}
                    </span>
                    {!item.isPaid ? (
                      <button className="px-5 py-1 bg-blue-500 text-white rounded-full font-semibold text-base shadow hover:bg-blue-600 transition cursor-pointer">
                        Pay Now
                      </button>
                    ) : (
                      <div className="px-5 py-1 rounded-full invisible">
                        Pay Now
                      </div>
                    )}
                  </div>
                  <span className="text-gray-300 text-sm mb-1 w-full text-left">
                    Total Tickets:{" "}
                    <span className="font-bold text-white">
                      {item.bookedSeats.length}
                    </span>
                  </span>
                  <span className="text-gray-300 text-sm w-full text-left">
                    Seat Number:{" "}
                    {item.bookedSeats.map((seat, i) => (
                      <span key={seat} className="font-bold text-white mr-1">
                        {seat}
                        {i < item.bookedSeats.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MyBookings;
