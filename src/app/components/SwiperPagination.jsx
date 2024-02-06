import Image from "next/image";

const SwiperPagination = ({ swiperInstance, paginationText }) => {
  return (
    <div className="custom-pagination-container !hidden lg:!flex">
      <Image
        src="/arrow-up.svg"
        width={20}
        height={20}
        alt="Slide Up"
        className={
          !(swiperInstance?.realIndex === 0)
            ? "cursor-pointer"
            : "invisible opacity-0"
        }
      />
      <div
        className="custom-pagination"
        dangerouslySetInnerHTML={{ __html: paginationText }}
      ></div>
      <Image
        src="/arrow-down.svg"
        width={20}
        height={20}
        alt="Slide Down"
        className={
          !(swiperInstance?.realIndex === swiperInstance?.slides.length - 1)
            ? "cursor-pointer"
            : "invisible opacity-0"
        }
        onClick={() => swiperInstance.slideNext()}
      />
    </div>
  );
};

export default SwiperPagination;
