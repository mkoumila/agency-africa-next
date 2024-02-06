import {
  CloudinaryContext,
  Video,
  Image as CloudinaryImage,
} from "cloudinary-react";
import { cloudinaryName } from "../data";
import Image from "next/image";
import { Animate } from "./Animate";

const SwiperItemDesktop = ({
  title,
  content,
  image,
  video,
  index,
  playVideo,
  videoRefs,
  isVisible,
  swiperInstance,
  resetOverlayVisibility,
}) => {
  // Control the visibility of the overlay using the isVisible prop
  const overlayStyle = { display: isVisible ? "block" : "none" };

  const copyToClipboard = () => {
    // Client-side only
    if (typeof window !== "undefined") {
      const url = window.location.href;
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <>
      {/* Overlay component */}
      <div
        className="absolute left-5 top-5 z-10 h-[calc(100%-40px)] w-[calc(100%-40px)] text-white rounded-[32px] overflow-hidden"
        style={overlayStyle}
      >
        <CloudinaryImage
          cloudName={cloudinaryName}
          publicId={image}
          className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div
            onClick={() => playVideo(index)}
            className="group cursor-pointer"
          >
            <Animate
              animationType="fade"
              direction="left"
              cascade
              triggerOnce={false}
            >
              {title && (
                <h2 className="text-[100px] font-extrabold group-hover:underline text-center uppercase">
                  {title}
                </h2>
              )}
              {content && (
                <p className="text-[30px] font-bold leading-[30px] text-center mb-8">
                  {content}
                </p>
              )}
            </Animate>
          </div>
          <div
            className="flex h-[67px] w-[67px] cursor-pointer items-center justify-center rounded-full bg-bloody text-white font-extrabold leading-[47px] text-xl absolute left-1/2 -translate-x-1/2 bottom-[88px] uppercase"
            onClick={() => playVideo(index)}
          >
            PLAY
          </div>
        </div>
      </div>

      {/* Video component */}
      <CloudinaryContext
        cloudName={cloudinaryName}
        className="h-full overflow-hidden rounded-[32px] relative"
      >
        <Video
          publicId={video}
          className="h-full w-full object-cover"
          innerRef={videoRefs.current[index]} // Link the ref to the video element
          poster=""
        />
        <div className="absolute bottom-[88px] left-1/2 -translate-x-1/2 flex items-center gap-x-5">
          <div className="h-9 w-9 border border-white rounded-full flex items-center justify-center group transition-all bg-black bg-opacity-10 hover:bg-white cursor-pointer">
            <Image
              src="/share.svg"
              width={14}
              height={14}
              alt="Slide Up"
              className="group-hover:brightness-0"
              onClick={() => copyToClipboard()}
            />
          </div>
          <div
            className="flex h-[67px] w-[67px] cursor-pointer items-center justify-center rounded-full bg-bloody text-white font-extrabold leading-[47px] text-xl uppercase"
            onClick={() =>
              !(swiperInstance?.realIndex === swiperInstance?.slides.length - 1)
                ? swiperInstance.slideNext()
                : swiperInstance.slideTo(0)
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
        </div>
      </CloudinaryContext>
    </>
  );
};

export default SwiperItemDesktop;
