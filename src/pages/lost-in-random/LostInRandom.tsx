import "../../index.css";
import Newsletter from "../../components/shared/Newsletter";
import NavigationBar from "../../components/shared/NavigationBar";
import config from "../../components/config/LostConfig";
import FirstSectionFooter from "./components/FirstSectionFooter";
import "./index.css";
import EaPlay from "./components/EaPlay";
import FirstSectionHP from "./components/FirstSectionHP";
import SecondSectionHomepage from "./components/SecondSectionHP";
import TrailerHP from "./components/TrailerHP";
import UltimeNotizie from "./components/UltimeNotizieHP";
import CardGame from "./components/CardGame";
import ButtonsMenu from "./components/ButtonsMenu";

function LiRHomepage() {
  return (
    <div style={{fontFamily: "baskerville"}}>
      <NavigationBar
        mainPage={config.mainPage}
        navColor={config.navColor}
        textColor={config.textColor}
        burgerColor={config.burgerColor}
        font={config.font}
        logo={config.logo}
        hoverColor={config.hoverColor}
        mobileActiveColor={config.mobileActiveColor}
        mobileBorderColor={config.mobileBorderColor}
        buyButtonConfig={config.buyButtonConfig}
        buyButtonColor={config.buyButtonColor}
        navLinks={config.navLinks}
        mobileSidebarHeaderColor={config.mobileSidebarHeaderColor}
        free={config.free}
      />

      <div className="bg-cover bg-fixed bg-[url(https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/lir-homepage-pg-bkg-xl.jpg.adapt.1920w.jpg)] ">
        <EaPlay />
        <FirstSectionHP />
        <SecondSectionHomepage />
        <TrailerHP />
        <UltimeNotizie />
        <CardGame />
        <ButtonsMenu />
      </div>

      <div className=" bg-cover bg-[url(https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/lir-email-sub-xl.jpg.adapt.1920w.jpg)]">
        <div className="max-w-7xl m-auto">
          <Newsletter
            game="Lost in Random™"
            buttonColor="bg-[#4D4A8A]"
            bgCheck="bg-white"
            borderColor="border-white"
            bgColor="bg-gray-800"
            textColor="text-white"
          />
        </div>
      </div>
      <FirstSectionFooter />
    </div>
  );
}

export default LiRHomepage;
