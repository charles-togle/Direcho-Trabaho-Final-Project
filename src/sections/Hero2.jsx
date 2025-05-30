export default function Hero2() {
  return (
    <section className="backdrop-blur-md bg-[linear-gradient(rgba(0,0,0,0.68),rgba(0,0,0,0.64))] border-2 border-[rgba(30,31,34,1)] rounded-4xl w-[1550px] mx-auto h-[417px] absolute -bottom-60 right-46 z-10">
      <div className="flex justify-around">
        <div className="flex flex-col gap-10 h-[300px] w-[850px] mx-auto p-16">
          <h1 className="font-bold text-5xl leading-[54px] w-[550px]">
            Get your brand featured on RCA today!{" "}
          </h1>
          <h2 className="font-semibold text-2xl w-9/12 ">
            Looking for more exposure? Need help selling tickets? We got your
            back
          </h2>
          <button className="border-none w-[180px] h-[48px] p-5 rounded-3xl text-white flex items-center justify-center bg-[linear-gradient(to_right,_rgba(194,32,38,1),_rgba(196,0,203,1))]">
            Learn More
          </button>
        </div>
        <div className="bg-gray-500 border-none rounded-3xl w-[600px] h-[350px] hero2-bg mt-5 mx-auto"></div>
      </div>
    </section>
  );
}
