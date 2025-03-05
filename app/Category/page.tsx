import Image from "next/image";
import coffee from "../Images/coffee.jpg"

export default function CategoryPage() {
    return (
        <div>
            <h1>ໜ້າປະເພດສິນຄ້າ</h1>
            <h2>ລາຍລະອຽດຂອງສິນຄ້າ</h2>
            <Image src={coffee} width={500} height={500} alt="name project"/>
        </div>
    );
}