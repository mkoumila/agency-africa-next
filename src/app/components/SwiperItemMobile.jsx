import { CloudinaryContext, Video } from "cloudinary-react";
import Image from "next/image";
import { Animate } from "./Animate";
import Link from "next/link";

const SwiperItemMobile = ({
  cloudinaryName,
  title,
  content,
  image,
  video,
  isAward,
  isStrategiesGrandPrix,
  index,
  playVideo,
  videoRefs,
  isVisible,
  swiperInstance,
  resetOverlayVisibility,
}) => {
  // Control the visibility of the overlay using the isVisible prop
  const overlayStyle = { display: !isVisible ? "flex" : "none" };

  /* const copyToClipboard = () => {
    // Client-side only
    if (typeof window !== "undefined") {
      const url = window.location.href;
      navigator.clipboard.writeText(url);
    }
  }; */

  return (
    <div className="flex flex-col h-full bg-white relative">
      <div className="flex-1 relative">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`https://res.cloudinary.com/${cloudinaryName}/image/upload/f_webp,q_auto/v1/${image}`}
          fill
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-3">
        <Animate
          animationType="fade"
          direction="down"
          cascade
          duration={600}
          triggerOnce={false}
        >
          {title && (
            <h2 className="text-4xl font-extrabold text-center uppercase">
              {title}
            </h2>
          )}
          {content && (
            <p className="text-xl font-bold text-center max-w-[250px] mx-auto leading-[normal]">
              {content}
            </p>
          )}
        </Animate>
        <div
          className="flex h-[67px] w-[67px] cursor-pointer items-center justify-center rounded-full bg-bloody text-white font-extrabold leading-[47px] text-xl absolute right-4 bottom-4 uppercase shadow-lg"
          onClick={() => playVideo(index)}
        >
          PLAY
        </div>
        {isAward && (
          <Animate
            animationType="fade"
            direction="left"
            className="absolute left-0 top-[43%] -translate-y-1/2 shadow-lg"
          >
            <Image
              src="/awards_clapclaptours.png"
              width={362}
              height={125}
              className="w-72 h-auto"
              alt="awards clapclaptours"
            />
          </Animate>
        )}
        {isStrategiesGrandPrix && (
          <Animate
            animationType="fade"
            direction="left"
            className="absolute left-0 top-[43%] -translate-y-1/2 shadow-lg"
          >
            <Image
              src="/strategies_grand_prix.png"
              width={250}
              height={125}
              className="w-64 h-auto"
              alt="strategies grand prix"
            />
          </Animate>
        )}
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center"
        style={overlayStyle}
      >
        <CloudinaryContext cloudName={cloudinaryName} className="relative">
          <Video
            publicId={video}
            className=""
            innerRef={videoRefs.current[index]} // Link the ref to the video element
            poster=""
          />
        </CloudinaryContext>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-x-5">
          <Animate animationType="fade" direction="up" triggerOnce={false}>
            <div className="h-9 w-9 border border-white rounded-full flex items-center justify-center group transition-all bg-black bg-opacity-10 hover:bg-white cursor-pointer">
              <div className="w-full h-full a2a_kit a2a_kit_size_32 a2a_default_style">
                <Link
                  className="w-full h-full flex items-center justify-center a2a_dd"
                  href="https://www.addtoany.com/share"
                >
                  <Image
                    src="/share.svg"
                    width={14}
                    height={14}
                    alt="Slide Up"
                    className="group-hover:brightness-0"
                    /* onClick={() => copyToClipboard()} */
                  />
                </Link>
              </div>
            </div>
            <div
              className="flex h-[67px] w-[67px] cursor-pointer items-center justify-center rounded-full bg-bloody text-white font-extrabold leading-[47px] text-xl uppercase"
              onClick={() =>
                !(
                  swiperInstance?.realIndex ===
                  swiperInstance?.slides.length - 1
                )
                  ? swiperInstance.slideNext()
                  : swiperInstance.slideTo(1)
              }
            >
              NEXT
            </div>
            <div
              className="h-9 w-9 border border-white rounded-full flex items-center justify-center group transition-all bg-black bg-opacity-10 hover:bg-white cursor-pointer"
              onClick={() => resetOverlayVisibility()}
            >
              <Image
                src="/close.svg"
                width={14}
                height={14}
                alt="Slide Up"
                className="group-hover:brightness-0"
              />
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
};

export default SwiperItemMobile;
