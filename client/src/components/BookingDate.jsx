function BookingDate({
    date = 10,
    month = "Jul"
}) {
  return (
    <div className="h-15 w-15 flex flex-col justify-center outline-2 hover:bg-[#5171ff] cursor-pointer rounded-md outline-[#5171ff]">
      <span className="text-2xl text-center leading-5">{date}</span>
      <span className="text-md text-center">{month}</span>
    </div>
  );
}

export default BookingDate;
