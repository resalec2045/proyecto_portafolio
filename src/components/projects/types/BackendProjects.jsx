import { Card } from "../Card";
import EcoClothes from "../../../assets/EcoClothesBack.png";
import Calendar from "../../../assets/CalendarBack.png";
import Unilocal from "../../../assets/UnilocalBack.png";

export const BackendProjects = () => {
  return (
    <>
      <Card
        img={EcoClothes}
        name="EcoClothes - Backend"
        description="Typescript, Nodejs y Expressjs"
        codeLink="https://github.com/EcommerceClothes/Ecommerce-backend"
        demoLink=""
      />
      <Card
        img={Unilocal}
        name="Unilocal - Backend"
        description="Java y Spring Boot"
        codeLink="https://github.com/MarianaValenciaEcheverri11/Unilocal"
        demoLink=""
      />
      <Card
        img={Calendar}
        name="Calendar - Backend"
        description="Javascript, Nodejs y Expressjs"
        codeLink="https://github.com/resalec2045/calendar-backend"
        demoLink=""
      />
    </>
  );
};
