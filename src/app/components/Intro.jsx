import Image from "next/image";
import Link from "next/link";

const Intro = ({ setShowSwiper }) => {
  return (
    <div className="lg:bg-silver lg:p-5 lg:h-screen">
      <div className="bg-white rounded-[32px] h-full p-8 pb-28 md:px-11 md:py-7 relative">
        <div className="flex items-baseline justify-between md:justify-end md:gap-x-16 mb-16">
          <div className="font-bold text-lg uppercase flex flex-wrap gap-x-3">
            <span>
              casablanca
              <Link className="font-light ml-1" href="tel:+212667042085">
                +212 667 042 085
              </Link>
            </span>
            <span className="hidden md:block">-</span>
            <span>
              paris
              <Link className="font-light ml-1" href="tel:+33610333750">
                +33 610 333 750
              </Link>
            </span>
          </div>
          <Link href="mailto:paris@void.fr" className="shrink-0">
            <Image src="/mail.svg" width={23} height={15} alt="Mail us" />
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-8 lg:justify-between lg:items-baseline">
          <div className="mb-8">
            <Image
              src="/logo.svg"
              width={100}
              height={100}
              alt="Agency Africa Logo"
              className="w-full mb-4"
            />
            <div className="font-light uppercase text-[26px] leading-[normal] lg:text-[40px] lg:leading-[47px]">
              <h2>Films institutionnels</h2>
              <h2>campagnes publicitaires</h2>
              <h2>Rapports d'activité d'entreprises</h2>
              <h2>Dispositifs événementiels</h2>
              <h2>reportages et interviews </h2>
              <h2>Capsules motion design</h2>
              <h2>Prises de vues drone</h2>
              <h2>Animations 3D</h2>
            </div>
          </div>

          <div className="font-sofia font-normal leading-6 lg:max-w-[424px]">
            <p className="mb-4">
              Bienvenue sur Agency.Africa, l'offre
              <span className="font-[1000]"> publicitaire</span> et
              <span className="font-[1000]"> contenu de marque</span> de
              l'agence digitale&nbsp;
              <Link
                href="https://www.void.fr"
                target="_blank"
                className="underline"
              >
                Void
              </Link>
              .
            </p>
            <p className="mb-4">
              Nous concevons et réalisons des films, campagnes et dispositifs de
              communication pour des entreprises panafricaines et européennes
              dans tous les secteurs d'activité.
            </p>
            <p className="mb-4">
              Natif du digital, nous avons l'agilité d'un studio de création,
              augmenté par un réseau pluridisciplinaire de production
              audiovisuelle.
            </p>
            <p className="mb-4">
              Avec nos clients, nous construisons des récits de marque avec une
              approche centrée sur l'émotion, l'engagement et la performance
              pour des audiences corporate comme grand public.
            </p>
            <p>Découvrez nos réalisations.</p>
          </div>
        </div>

        <Link
          href="#slider"
          className="cursor-pointer absolute bottom-2 lg:bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-y-2"
          onClick={() => setShowSwiper(true)}
        >
          <span className="flex h-[67px] w-[67px] cursor-pointer items-center justify-center rounded-full bg-bloody text-white font-extrabold leading-[47px] text-xl uppercase">
            Watch
          </span>

          <Image
            src="/arrow-down.svg"
            width={20}
            height={20}
            alt="Go to sliders"
            className="invert animate-bounce"
          />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
