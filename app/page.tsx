import Image from "next/image";
import Link from "next/link";
import coffee from "./Images/coffee.jpg"

export default function Home() {
  return (
    <>
    <Link href="/">Home</Link><br/>
    <Link href="/product">Product</Link><br/>
    <Link href="/Category">Category</Link><br/>
    <Link href="/Category">User</Link><br/>
   <hr />
    
    <h1>Cahrlie</h1>
    <h1>Class</h1>
    <Image src={coffee} width={500} height={500} alt="name project"/>
    </>
  );
}