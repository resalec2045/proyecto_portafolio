import { Card } from "../Card";
import portafolio from "../../../assets/project-portafolio.png";
import ecommerce from "../../../assets/EcoClothes.png";
import calendar from "../../../assets/Calendar.png";
import unilocal from "../../../assets/unilocal.png";

export const FrontendProjects = () => {
  return (
    <>
      <Card
        img={portafolio}
        name="Portafolio"
        description="Html, Css, React y Javascript"
        codeLink="https://github.com/resalec2045/proyecto_portafolio"
        demoLink="https://astounding-starship-bdac09.netlify.app"
      />
      <Card
        img={unilocal}
        name="Unilocal"
        description="Html, Css, Angular, Bootstrap y Typescript"
        codeLink="https://github.com/resalec2045/FrontEnd-Unilocal"
        demoLink="https://app-frontend-proyecto-uq-cec5e.web.app/inicio"
      />
      <Card
        img={ecommerce}
        name="EcoClothes"
        description="Html, Css, React, Typescript"
        codeLink="https://github.com/EcommerceClothes/Ecommerce-frontend"
        demoLink=""
      />
      <Card
        img={calendar}
        name="Calendar"
        description="Html, Css, React, Javascript"
        codeLink="https://github.com/resalec2045/calendar-FrontEnd"
        demoLink=""
      />
    </>
  );
};
