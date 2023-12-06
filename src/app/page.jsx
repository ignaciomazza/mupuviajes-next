import Header from "@/components/Header.jsx";
import Categories from "@/components/Categories.jsx";
import Blog from "@/components/Blog.jsx";
import Media from "@/components/Media.jsx";
import Team from "@/components/Team.jsx";

export default function Home() {
  return (
    <div className="select-none">
      <Header />
      <Categories />
      <div className='w-full bg-center bg-cover bg-[url("https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] text-white'>
        <div className="h-[50vh] w-full flex justify-center items-center bg-gradient-to-b from-[#000000] via-[#00000000] to-[#00000000]">
          <Media />
        </div>
        <div className="w-full flex justify-center items-center">
          <Team />
        </div>
      </div>
    </div>
  )
}
