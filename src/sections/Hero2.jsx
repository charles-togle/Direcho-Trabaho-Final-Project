export default function Hero2() {
  return (
    <section className="backdrop-blur-md bg-[linear-gradient(rgba(0,0,0,0.68),rgba(0,0,0,0.64))] border-2 border-[rgba(30,31,34,1)] rounded-4xl mx-auto h-[417px] absolute w-10/12 -bottom-1/4 lg:right-30 2xl:right-40.5 lg:max-w-full z-10">
      <div className="flex justify-around">
        <div className="flex flex-col lg:gap-5 2xl:gap-10 h-[300px] w-[850px] mx-auto lg:p-13 2xl:p-16">
          <h1 className="font-bold lg:text-4xl lg:leading-[50px] 2xl:text-5xl 2xl:leading-[54px] w-full 2xl:w-[550px]">
            Get your brand featured on RCA today!{" "}
          </h1>
          <h2 className="font-semibold lg:text-xl 2xl:text-2xl w-9/12 ">
            Looking for more exposure? Need help selling tickets? We got your
            back
          </h2>
          <button className="border-none w-[180px] h-[48px] p-5 rounded-3xl text-white flex items-center justify-center bg-[linear-gradient(to_right,_rgba(194,32,38,1),_rgba(196,0,203,1))]">
            Learn More
          </button>
        </div>
        <div className="bg-gray-500 border-none rounded-3xl w-9/12 2xl:w-[600px] h-[350px] hero2-bg mt-6 mr-11 mx-auto"></div>
      </div>
    </section>
  );
}
