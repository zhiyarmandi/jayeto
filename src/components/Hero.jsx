import Image from "../assets/img/images/BannerForHero.png";
import Search from "./Search";

function Hero() {
  return (
    // <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
    //   <img
    //     src={BgImg}
    //     alt="Jayeto"
    //     className="absolute inset-0 w-full h-full object-cover"
    //   />

    //   <div className="absolute top-10 right-5 md:top-16 md:right-10 lg:top-20 lg:right-20">
    //     <h1 className="text-3xl md:text-5xl lg:text-[58px] font-semibold text-white">
    //       <span className="text-red-600">ویلای</span> ایده‌آلت همین جاست
    //     </h1>
    //     <p className="max-w-120 my-8 mx-4 text-right text-white text-2xl">
    //       <span>اجاره ویلا و سوئیت در شمال و سراسر کشور</span>
    //       <br />
    //       سفر پاییزی از تو ، جات باما با جای تو
    //     </p>
    //   </div>
    //   <div className="hidden flex-1 lg:flex justify-end items-end"></div>
    //   <div className="absolute bottom-8 left-0 right-0">
    //   </div>
    //     <Search />
    // </section>

    <section
      className="h-[90vh] bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-33.75 flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className=" text-3xl lg:text-[58px] font-semibold leading-none my-8  text-gray-100 ">
            <span className="text-red-500"> ویلای </span>
            ایده آلت همین جاست
          </h1>
          <p className="max-w-120 my-8 mx-4 text-right text-white text-2xl">
            <span className="text-sm">
              اجاره ویلا، سوئیت و اقامتگاه در شمال و سراسر ایران{" "}
            </span>
            <br />
            سفر پاییزی از تو، جاباما
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end"></div>
      </div>
      <Search />
    </section>
  );
}

export default Hero;
