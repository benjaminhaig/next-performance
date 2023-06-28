import Image from "next/image";

export default function Home() {
  return (
    <main>
      <img src="/puppy.jpg" alt="puppy" />
      <Image src='/puppy.jpg' alt="puppy with Image component" width={640} height={681} />
      <Image src='/puppy-compressed.jpg' alt="puppy with Image component and compression" width={640} height={681} />
    </main>
  )
}
