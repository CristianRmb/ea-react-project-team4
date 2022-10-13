import Button from "../../../components/shared/Button";
import Section from "../../../components/shared/Section";

function FirstSectionHP() {
  return (
    <div>
      <div className="relative flex justify-center items-end">
        <img
          className="absolute md:z-[2] xl:z-0 -top-10"
          src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-homepage-accolades-it-it.png.adapt.crop3x2.1455w.png"
          alt=""
        />
        <img
          className="absolute xl:z-[2]"
          src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-homepage-accolades-it-it.png.adapt.crop16x9.1920w.png"
          alt=""
        />
        <div className="absolute w-[55%] mb-[5%] z-[2]">
          <h2 className="hidden md:block text-xl text-center text-white lg:text-2xl">
            Ora disponibile su tutte le piattaforme, inclusi PC e Nintendo Switch.
          </h2>

          <div className="hidden md:flex justify-center gap-x-5 mt-5 ">
            <Button url="#" className="bg-[#4D4A8A] border-[#4D4A8a]">
              <div className="text-white lg:text-lg">Guarda il trailer</div>
              <svg
                viewBox="0 0 16 16"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                className="text-white w-5 ml-2">
                <g>
                  <path
                    d="M3 13.6L13 8 3 2.4v11.2z"
                    clipRule="evenodd"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"></path>
                </g>
              </svg>
            </Button>

            <Button url="#" className="bg-white">
              <div className="text-[#4D4A8A] lg:text-lg ">Acquista Ora </div>
            </Button>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          poster="assets/pages/lost-in-random/lost-in-random-poster.png"
          className="relative w-full">
          <source
            src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/videos/2021/06/with-tm/lir-keyart-cinemagraph-tm-xl.mp4"
            type="video/mp4"
          />
          Your Browser does not support this video tag
        </video>
      </div>
      <Section className="bg-[#161616]">
        <div className="md:hidden pt-7 pb-7 ">
          <h2 className="text-white text-center mb-5 text-xl ">
            Ora disponibile su tutte le piattaforme, inclusi PC e Nintendo Switch.
          </h2>
          <Button url="#" className="bg-[#4D4A8A] border-[#4D4A8a] mb-5 m-auto">
            <div className="text-white">Guarda il trailer</div>
            <svg
              viewBox="0 0 16 16"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="text-white w-5 ml-2">
              <g>
                <path
                  d="M3 13.6L13 8 3 2.4v11.2z"
                  clipRule="evenodd"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"></path>
              </g>
            </svg>
          </Button>
          <Button url="#" className="bg-white m-auto">
            <div className="text-[#4D4A8A]">Acquista Ora </div>
          </Button>
        </div>
      </Section>
    </div>
  );
}

export default FirstSectionHP;
