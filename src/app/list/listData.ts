import { StaticImageData } from "next/image";
import imgTomato from "@/images/tomato.webp";
import imgPasta from "@/images/pasta.webp";
import imgCoconut from "@/images/coconut.webp";

type Product = {
  item: string;
  price: number;
  content: string;
  stock: boolean;
  image: StaticImageData;
};

const productsList: Product[] = [
  {
    item: "Tomatoes",
    price: 40,
    content: "토마토입니다.",
    stock: true,
    image: imgTomato,
  },
  {
    item: "Pasta",
    price: 17,
    content: "이건 파스타이고요.",
    stock: false,
    image: imgPasta,
  },
  {
    item: "Coconut",
    price: 20,
    content: "코코넛이 맛있습니다.",
    stock: true,
    image: imgCoconut,
  },
];

export default productsList;
