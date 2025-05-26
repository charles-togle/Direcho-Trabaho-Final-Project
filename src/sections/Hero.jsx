//Your source for the arts.

export default function Hero() {
  return (
    <section className="hero-bg h-screen flex flex-col justify-center text-white lg:items-start">
      <div className="mx-auto w-10/12 md:max-w-xl lg:max-w-[1550px] ">
        <h1 className="text-6xl leading-[72px] lg:w-1/4 font-bold">
          Your source for the arts.
        </h1>
        <p className="text-xl py-5 font-semibold leading-[100%]">
          Search events, concerts, artists and much more.
        </p>
      </div>
    </section>
  );
}
