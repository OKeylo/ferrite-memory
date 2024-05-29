import { Carousel, Image } from "react-bootstrap";
import CubeMemoryCM3Photo from "../assets/cube-memory-CM-III.jpg";
import CubeMemoryElement from "../assets/cube-memory-element.jpg";
import CubeMemory from "../assets/cube-memory.webp";

export default function CarouselComponent() {
  return (
    <Carousel style={{width: "50%", alignSelf: "center", zIndex: 0}}>
      <Carousel.Item>
        <Image
          src={CubeMemoryCM3Photo}
          alt='Куб памяти КП-III-512/19Б'
          width={600}
          height={400}
          style={{borderRadius: "4px"}}
        />
        <Carousel.Caption style={{backgroundColor: "#1F2833", borderRadius: "4px", opacity: "80%"}}>
          <h3>Куб памяти КП-III-512/19Б</h3>
          <p>Данный экземпляр куба использовался в блоке ОЗУ авиационной БЦВМ «Орбита-20»</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={CubeMemoryElement}
          alt='Элемент куба памяти'
          width={600}
          height={400}
          style={{borderRadius: "4px"}}
        />
        <Carousel.Caption style={{backgroundColor: "#1F2833", borderRadius: "4px", opacity: "80%"}}>
          <h3>Элемент куба памяти</h3>
          <p>Состоит из ферритовых колец</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          src={CubeMemory}
          alt='Куб памяти'
          width={600}
          height={400}
          style={{borderRadius: "4px"}}
        />
        <Carousel.Caption style={{backgroundColor: "#1F2833", borderRadius: "4px", opacity: "80%"}} >
          <h3>Куб памяти</h3>
          <p>Состоит из большого количества элементов памяти, связанных друг с другом</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}