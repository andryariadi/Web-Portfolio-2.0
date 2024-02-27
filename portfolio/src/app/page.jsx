import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full flex flex-col lg:flex-row gap-5 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-5">
      <div className="bg-rose-500 h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/images/andryariadi.png" alt="Andry Ariadi" fill className="img-hero object-contain brightness-75 contrast-90 hue-rotate-15 bg-gradient-to-r from-purple-700 to-sky-600" />
      </div>
      <div className="bg-amber-500 h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center gap-5 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences, Disigning Tomorrow.</h1>
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic officia quam, distinctio deleniti quos, dicta possimus vero exercitationem dolorum nihil consequatur eius. Quo ipsam sint recusandae necessitatibus fuga optio.
          Iusto et a soluta, ullam ratione distinctio dicta suscipit illum repellendus veniam eum tempora voluptatibus doloremque! Adipisci eaque labore dignissimos iste aut voluptatibus? Cumque officia nobis odit nihil deserunt libero!
        </p>
        <div className="w-full flex gap-5">
          <button className="p-4 rounded-lg ring ring-black bg-black text-white">View My Work</button>
          <button className="p-4 rounded-lg ring ring-black">Contact Me</button>
        </div>
      </div>
    </main>
  );
}
