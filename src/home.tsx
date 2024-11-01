import "./index.css";

function Home() {
  return (
    <div className="mt-20 max-w-4xl font-robotomono font-light">
      <header>
        <h1 className="font-semibold text-3xl">Daniel Akinola</h1>
        <br />
        <p className="font-medium">About</p>
        <br />
        <p>
          I'm a 19 y/o software engineering undergrad with a passion for
          building & scaling software systems, machine learning, databases
          amongst other things. When I'm not coding, i'm either doing some
          reading, or trying out a new fps game with friends. I'm always open to
          exploring new opportunities and learning new things.
        </p>
        <br />
        <span>
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
        </span>
      </header>

      <section className="flex flex-col mt-10">
        <h3 className="font-semibold text-3xl">Work Experience</h3>
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
      </section>

      <section className="flex flex-col mt-10">
        <h3 className="font-semibold text-3xl">Projects</h3>
        <br />
        <a href="" className="font-medium underline">
          MovieRec
        </a>
        <p>
          Getting movie recommendations with collaborative filtering, hybrid
          approaches (LightFM) and self-attentive recomendation
        </p>
        <p>Tools used: Pytorch, scikit-learn, fastapi, Jinja2 </p>
        <br />
        <a href="" className="font-medium underline">
          gpt-textgen
        </a>
        <p>
          Language modeling and text generation with a bigram model and a
          decoder-only Transformer, written in Pytorch.
        </p>
        <p>Tools used: Pytorch</p>
      </section>
    </div>
  );
}

export default Home;
