import "./index.css";

function Home() {
  return (
    <div className="mt-20 my-10 max-w-3xl font-sans sm: mx-14">
      <h5 className="font-extralight">Hi I'm</h5>
      <h1 className="font-catamaran font-semibold text-5xl my-2">
        Daniel Akinola
      </h1>
      <p className="my-4">
      I'm a software engineering newgrad with a passion for building & scaling performant software systems, machine learning and databases. When I'm not coding, i'm either doing some reading, or trying out some obscure game from the 2000s, or putting my thoughts to paper (or on the internet!). 
      I'm always open to exploring new opportunities and learning new things.
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
      <a href="https://lagetronix.com/" className="font-medium underline">
        Lagetronix
      </a>
      <p>
        Built and maintained multiple enterprise websites with Wordpress &
        Elementor, React, Django and MySQL.
      </p>
      <br />
      <a href="https://huggingface.co/spaces/adaniel105/yolo-asl" className="font-medium underline">
        Research Assistant
      </a>
      <p>
        Designed and implemented an American Sign Language fingerspelling
        classifier as part of a larger research project.
      </p>

      <h3 className=" font-catamaran font-semibold text-3xl mt-16">Projects</h3>
      <br />
      <a href="https://github.com/adaniel105/MovieRec" className="font-medium underline">
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
      <a href="https://github.com/adaniel105/express-poll" className="font-medium underline">
        express-poll
      </a>
      <br />
      <p>
        Real-time polling application built with Websockets, Typescript and React.
      </p>
      <p className="my-2">Tools used: Websockets, Typescript, React, Flowbite</p>
      <br />
      <a href="https://github.com/adaniel105/gpt-textgen" className="font-medium underline">
        gpt-textgen
      </a>
      <br />
      <p>
        Language modeling and text generation with a bigram model and a
        decoder-only Transformer, written in Pytorch.
      </p>
      <p className="my-2">Tools used: Pytorch</p>

      <p></p>
      <br />
      <a href="" className="font-medium underline">
        relay.dev
      </a>
      <br />
      <p>
        A Natural Language Query API for Social Media Analytics using LLMs and Retrieval-Augumented Generation (RAG)
      </p>
      <p className="my-2">Tools used: Langchain, FastAPI, React. </p>

      <footer className=" mt-10 opacity-50 underline">Blogs coming soon1</footer>
    </div>
  );
}

export default Home;
