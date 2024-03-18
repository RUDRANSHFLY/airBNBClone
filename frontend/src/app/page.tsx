import Banner from "@/components/banner/Banner";
import Main from "@/components/main/Main";
import NavBar from "@/components/navBar/NavBar";
import Type from "@/components/type/Type";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Main />
      <Type />
    </div>
  );
}
