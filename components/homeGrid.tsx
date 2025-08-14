import { fontEnjoy, fontCarto } from "@/config/fonts";
import Music from "./music";

const HomeGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-6 md:grid-row-4 w-[80%] min-h-screen gap-4 md:gap-8 ">
      <div className="relative group">
        <div
          className={`absolute left-0 top-0 text-xs text-gray-500 ${fontCarto.className} p-1 -z-10 group-hover:-translate-y-full transition-transform duration-500`}
        >
          🧸 Hello I'm
        </div>
        <div
          className={`w-full bg-white flex justify-center items-center col-span-1  row-span-1 aspect-square rounded-3xl ${fontEnjoy.className} text-4xl sm:text-5xl lg:text-6xl shadow-md md:order-4 md:row-start-1 cursor-pointer hover:scale-105 transition-all duration-500 z-10`}
        >
          Molly
        </div>
      </div>

      <div className="w-full flex justify-center items-center col-span-1 row-span-1 aspect-square rounded-3xl shadow-md overflow-hidden md:order-1 md:col-start-3 md:row-start-2 cursor-pointer hover:scale-105 transition-all duration-500">
        <img src="/pics/avatar.jpeg" alt="avatar" />
      </div>

      <div className="w-full flex flex-col justify-center items-center col-span-2 row-span-1 rounded-3xl shadow-md p-4 sm:p-8 md:order-2 cursor-pointer hover:scale-105 transition-all duration-500">
        <p className="text-gray-500 text-left w-full h-[20%] font-medium text-sm pt-2">
          Dev
        </p>
        <div className="h-[80%] w-full flex justify-between items-center">
          <div className="flex justify-center items-center">
            <img
              src="/pics/vue.svg"
              alt="vue"
              className="w-12 sm:w-16 lg:w-20 mt-1"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/pics/react.svg"
              alt="react"
              className="w-12 sm:w-16 lg:w-20"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/pics/next.svg"
              alt="next"
              className="w-12 sm:w-16 lg:w-20"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/pics/solidity.svg"
              alt="solidity"
              className="w-12 sm:w-16 lg:w-20"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center col-span-2 row-span-1 rounded-3xl shadow-md p-4 sm:p-8 md:order-3 md:col-start-1 md:row-start-2 cursor-pointer hover:scale-105 transition-all duration-500">
        <div className="w-full h-[20%] pt-2">
          <img src="/pics/book.svg" alt="book" className="w-6" />
        </div>
        <div className="h-[80%] w-full flex justify-between items-center">
          <a
            className="flex justify-center items-center"
            href="https://weread.qq.com/web/bookDetail/8c43210071a615e78c472dc"
          >
            <img
              src="/pics/book1.jpg"
              alt="vue"
              className="w-12 sm:w-18 lg:w-20 mt-1 sm:h-24 lg:h-28 h-18"
            />
          </a>
          <a
            className="flex justify-center items-center"
            href="https://weread.qq.com/web/bookDetail/bec32e207213d429bec5ec4"
          >
            <img
              src="/pics/book2.jpg"
              alt="react"
              className="w-12 sm:w-18 lg:w-20 h-18 sm:h-24 lg:h-28"
            />
          </a>
          <a
            className="flex justify-center items-center"
            href="https://weread.qq.com/web/bookDetail/c5c32170813ab7177g0181ae"
          >
            <img
              src="/pics/book3.jpg"
              alt="next"
              className="w-12 sm:w-18 lg:w-20 h-18 sm:h-24 lg:h-28"
            />
          </a>
          <a
            className="flex justify-center items-center"
            href="https://weread.qq.com/web/bookDetail/8c632230715c01a18c683d8"
          >
            <img
              src="/pics/book4.jpg"
              alt="solidity"
              className="w-12 sm:w-18 lg:w-20 h-18 sm:h-24 lg:h-28"
            />
          </a>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center col-span-2 row-span-2 rounded-3xl shadow-md bg-[#f7fffa] p-4 sm:p-8 md:order-5 cursor-pointer hover:scale-105 transition-all duration-500">
        <Music></Music>
      </div>

      <div className={`order-last w-full shadow-md rounded-3xl col-span-2 flex flex-col justify-center items-center md:justify-end md:items-end ${fontEnjoy.className} text-2xl text-gray-600 md:col-start-3 md:col-span-1 md:row-span-2 p-4`}>
        <p className="md:hidden">To be continued :)</p> 
        <div className="hidden md:block flex flex-col items-end text-right">
          <p>To</p>
          <p>be</p>
          <p>continued:)</p>
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
