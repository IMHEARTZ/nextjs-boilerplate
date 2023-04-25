import Nav from "../components/nav";
import Head from "next/head";
import Card from "@/components/Card";

function Home() {
  return (
    <div>
      <Head>
        <title>Tech Dsgn Exp</title>
      </Head>
      <Nav />
      <div class="card-row">
        <a href="/Card/One">
          <Card />
        </a>
        <Card />
        <Card />
      </div>
      <div class="card-row">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
