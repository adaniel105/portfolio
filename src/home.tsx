import "./index.css";

function Home() {
  return (
    <div className="mt-20 max-w-3xl font-sans text-lg">
      <h5 className="font-extralight">Hi I'm</h5>
      <h1 className="font-catamaran font-semibold text-5xl my-2">
        Daniel Akinola
      </h1>
      <p className="my-4">
        I'm a 19 y/o software engineering undergrad with a passion for building
        & scaling software systems, machine learning, databases amongst other
        things. When I'm not coding, i'm either doing some reading, or trying
        out a new fps game with friends. I'm always open to exploring new
        opportunities and learning new things.
      </p>
      <span className="my-4">
        <a href="mailto:dakinola18@gmail.com" className="underline">
          email
        </a>{" "}
        ·{" "}
        <a href="https://github.com/adaniel105" className="underline">
          github
        </a>{" "}
        ·{" "}
        <a
          href="https://www.linkedin.com/in/daniel-akinola-565870265/"
          className="underline"
        >
          linkedin
        </a>
        {" "}
        ·{" "}
        <a href="" className="underline">resume</a>
      </span>

      <h3 className="font-catamaran font-semibold text-3xl mt-16">
        Work Experience
      </h3>
      <br />
      <a href="" className="font-medium underline">
        Lagetronix
      </a>
      <p>
        Built and maintained multiple enterprise websites with Wordpress &
        Elementor, React, Django and MySQL.
      </p>
      <br />
      <a href="" className="font-medium underline">
        yolo-asl
      </a>
      <p>
        Designed and implemented an American Sign Language fingerspelling
        classifier as part of a larger project, under supervision of a
        university professor.
      </p>

      <h3 className=" font-catamaran font-semibold text-3xl mt-16">Projects</h3>
      <br />
      <a href="" className="font-medium underline">
        MovieRec
      </a>
      <p>
        Getting movie recommendations with collaborative filtering, hybrid
        approaches (LightFM) and self-attentive recommendation
      </p>
      <p className="my-2">
        Tools used: Pytorch, scikit-learn, fastapi, Jinja2{" "}
      </p>
      <br />
      <a href="" className="font-medium underline">
        gpt-textgen
      </a>
      <br />
      <p>
        Language modeling and text generation with a bigram model and a
        decoder-only Transformer, written in Pytorch.
      </p>
      <p className="my-2">Tools used: Pytorch</p>
    </div>
  );
}

export default Home;
