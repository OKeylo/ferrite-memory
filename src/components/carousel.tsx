import { Carousel, Image } from "react-bootstrap";

export default function CarouselComponent() {
  return (
    <Carousel style={{width: "50%", alignSelf: "center", zIndex: 0}}>
      <Carousel.Item>
        <Image src='https://s00.yaplakal.com/pics/pics_preview/9/9/1/7530199.jpg' alt='Куб памяти КП-III-512/19Б' width={600} height={400} style={{borderRadius: "4px"}}/>
        <Carousel.Caption style={{backgroundColor: "#1F2833", borderRadius: "4px", opacity: "80%"}}>
          <h3>Куб памяти КП-III-512/19Б</h3>
          <p>Данный экземпляр куба использовался в блоке ОЗУ авиационной БЦВМ «Орбита-20»</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='https://techrocks.ru/wp-content/uploads/2019/10/573ed3bbe9.jpg' alt='gg' width={600} height={400} style={{borderRadius: "4px"}}/>
        <Carousel.Caption style={{backgroundColor: "#1F2833", borderRadius: "4px", opacity: "80%"}}>
          <h3>Элемент куба памяти</h3>
          <p>Состоит из ферритовых колец</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src='https://i.ebayimg.com/images/g/PnYAAOSwGqpkc7Z-/s-l1600.webp'
          alt='gg'
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