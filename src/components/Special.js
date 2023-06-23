import houseSpecial from "../assets/dish1.png";
import noodles from "../assets/dish2.png";
import dumpling from "../assets/dish3.png";
import SpecialCard from "../components/SpecialCard";

export default function Specials() {
  return (
    <section className="specials">
      <article className="specials-topbar">
        <h1>This weeks specials</h1>
        <button className="">Online Menu</button>
      </article>

      <section className="specials-cards">
        <SpecialCard
          image={houseSpecial}
          name="Grilled duck donbur"
          price="£9.99"
          description="shredded duck in a sweet + spicy teriyaki sauce on a bed of sticky white rice.
           topped with a fried egg. served with a side of kimchee (1,178 kcal)"
        />
        <SpecialCard
          image={noodles}
          name="Chilli steak ramen"
          price="£7.99"
          description="steak + ramen noodles submerged in a spicy chicken broth. topped with 
          red + spring onions, beansprouts, coriander, chilli + a fresh lime wedge (681 kcal)"
        />
        <SpecialCard
          image={dumpling}
          name="Chicken onion koyo bowl"
          price="£6.49"
          description="a bright bowl combining chicken + miso sauce. served on a bed of mixed leaves, beetroot, carrot,
           cucumber, mooli, red radish + edamame beans(479 kcal)"
        />
      </section>
    </section>
  );
}
