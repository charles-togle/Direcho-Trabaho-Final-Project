//Go backstage and behind the curtains!
import { Card } from "../subcomponents/Card";

export default function GoBackstage({ image }) {
  return (
    <section>
      <Card
        className="play-overlay"
        title="Go Backstage and Behind the Curtains!"
        description="Experience VIP backstage access to digital events around the world. Watch our latest"
        buttonText="Watch"
        image={image}
      />
    </section>
  );
}
