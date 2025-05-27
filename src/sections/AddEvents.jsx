//Add your events and get featured!
import { Card } from "../subcomponents/Card";
export default function AddEvents ({image}) {
  return <section>
       <Card
     title="Add you events and get featured!"
     description="Join Red Curtain Addict as an organization and get exclusive access to promotions & features."
     buttonText="Join Today"
     image={image}
     />
  </section>
}
