import './App.css'
import { Image } from 'react-bootstrap';
import CarouselComponent from './components/carousel';
import AuthorCard from './components/authorCard';
import Navigation from './components/nav';

function App() {
  
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div
        style={{
          backgroundColor: "#1F2833",
          width: "100%",
          height: "50px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 2
        }}
      >
      </div>
      <div style={{display: "flex", gap: 16, maxWidth: 1280, alignSelf: "center", padding: "50px 0 50px 0"}}>
        <Navigation />
        <main style={{display: "flex", flexDirection: "column", gap: 16, flex: 1}}>
          <h1>Память на ферритовых сердечниках</h1>
          <section id="start">
            <h2>Введение</h2>
            <p>Память на магнитных сердечниках — это разновидность компьютерной памяти с произвольным доступом.</p>
            <p>В сердечнике памяти используются тороиды (кольца) из магнитотвердого материала (обычно полутвердый феррит, сплавы с добавлением феррита). Каждое ядро (кольцо с сердечником) ​​хранит один бит информации. Через каждую жилу проходят два или более провода, образуя массив жил XY. Когда к проводам прикладывается электрический ток выше определенного порога, сердечник намагничивается. Ядро, которому будет присвоено значение (или записано ), выбирается путем подачи питания на один провод X и один провод Y на половину требуемой мощности, так что записывается только одно ядро ​​на пересечении. В зависимости от направления токов сердечник будет воспринимать магнитное поле по или против часовой стрелки, сохраняя 1 или 0.</p>
            <p>Этот процесс записи также вызывает индуцирование электричества в близлежащих проводах. Если новый импульс, приложенный к проводам XY, такой же, как последний, приложенный к этому сердечнику, существующее поле не будет действовать, и индукции не произойдет. Если новый импульс направлен в противоположном направлении, импульс будет сгенерирован. Обычно это улавливается по отдельному «чувствительному» проводу, что позволяет системе узнать, содержит ли это ядро ​​1 или 0. Поскольку для этого процесса считывания требуется запись ядра, этот процесс известен как деструктивное считывание и требует дополнительных схем. для сброса ядра к исходному значению, если процесс перевернул его.</p>
            <p>Когда ядра не читаются и не записываются, они сохраняют последнее значение, которое они имели, даже если питание отключено. Следовательно, они представляют собой тип энергонезависимой памяти. В зависимости от того, как она была подключена, основная память могла быть исключительно надежной.</p>
          </section>

          <CarouselComponent />
          
          <section id="development" style={{display: "flex", flexDirection: "column", gap: 8}}>
            <h2>Разработка</h2>
            <p>Идея запоминающего устройства в виде матрицы ферритовых сердечников впервые возникла в 1945 году у Джона Преспера Экерта, одного из создателей ЭНИАКа.</p>
            <AuthorCard />
            <p>В основу ферритовой памяти легло физическое явление, называемое магнитным гистерезисом.<br/>Магнитный гистерезис возникает, когда к ферромагнетику, например железу, прикладывается внешнее магнитное поле, и атомные диполи выравниваются по нему. Даже если поле убрать, часть выравнивания сохранится: материал намагничен. После намагничивания магнит останется намагниченным на неопределенный срок. Для его размагничивания требуется тепло или магнитное поле противоположного направления. (Магнитный гистерезис)</p>
            <p>Магнитный гистерезис возникает, когда к ферромагнетику, например железу, прикладывается внешнее магнитное поле , и атомные диполи выравниваются по нему. Даже если поле убрать, часть выравнивания сохранится: материал намагничен . После намагничивания магнит остается намагниченным на неопределенный срок. Для его размагничивания требуется тепло или магнитное поле противоположного направления.</p>
            <Image src="https://cdn.fxyz.ru/img/magnetic/gisterezis.png" alt="Магнитный гистерезис" width={500} style={{alignSelf: "center", borderRadius: "4px"}}/>
          </section>

          <section id="principle-of-operation">
            <h2>Принцип работы</h2>
            <p>Для систем хранения данных цифровых машин используются ферриты с нелинейными магнитными характеристиками - ферриты с прямоугольной петлей гистерезиса (ППГ).</p>
            <p>Эти ферриты особенны тем, что сердечники, изготовленные из них, могут находиться в двух устойчивых состояниях намагниченности - +B, которое соответствует коду «1», и —В, соответствующее коду «0» в двоичной системе счисления. Для того чтобы перемагнитить, например ферритовый стержень или кольцо, необходимо создать магнитное поле определенной напряженности. Если же магнитное поле имеет напряженность меньше, чем пороговое значение H, то феррит не перемагнитится даже при многократном и длительном приложении этого магнитного поля.</p>
            <Image
              src="https://s00.yaplakal.com/pics/pics_preview/7/5/1/7530157.jpg"
              alt="ферритовые кольца"
              style={{float: "right", borderRadius: "4px"}}
            />
            <p>Классическая схема использования ферритов с ППГ для запоминающих устройств основана на совпадении полутоков, т.е. на том принципе, что под действием магнитного поля H/2 тороид не меняет своего магнитного состояния, а под действием поля H полностью перемагничивается.</p>
            <p>В этом случае оперативное запоминающее устройство представляет собой матрицу из тороидов, через которые в двух направлениях проходят проводники — токонесущие шины для возбуждения магнитных полей и обмотка считывания для снятия кодов информации. С целью упрощения технологии изготовления матрицы все обмотки тороидов выполняются одновитковыми.<br/>Для того чтобы записать в каком-либо тороиде код «1», необходимо возбудить поле H/2 в шинах, на пересечении которых он находится. В выбранном тороиде ампервитки обоих направлений сложатся и на него будет действовать поле, равное H.<br/>При записи кода «0» возбуждающие поля, создаваемые шинами х и y, подаются с временным сдвигом или же все тороиды снабжаются дополнительной обмоткой, называемой обмоткой запрета единицы и предназначенной для того, чтобы в нужное время создать поле обратной по отношению к записывающему полю полярности, равное –H/2. Результирующее поле и в том и в другом случае будет равно H/2 и перемагничивания тороида из состояния не произойдет.<br/>При чтении записанной информации с тороида надо возбудить с помощью пересекающихся в нем шин поле –H/2. Тогда тороид, на котором был записан код «1», перемагнитится из состояния +В в состояние -В и на считывающем проводе наведется э.д.с. сигнала кода «1». Тороид, на котором был записан код «0», не перемагнитится (останется в состоянии -В) и на считывающем проводе э.д.с. сигнала не наведется.<br/>Следует заметить, что информация после ее считывания разрушается. Для повторного использования информации в машине требуется ее восстановление (регенерация).   Через все сердечники проплетается один провод считывания и один провод запрета. Таким образом, матрица позволяет считывать или записывать биты только последовательно.</p>
            
          </section>

          <section id="flaws">
            <h2>Недостатки ферритовых запоминающих устройств</h2>
            <p>При всех достоинствах запоминающих устройств, выполненных на ферритовых сердечниках, они обладали рядом существенных недостатков. К этим недостаткам следует отнести:</p>
            <ul>
              <li>большую трудоёмкость изготовления числового блока: прошивка сердечников являлась операцией, требующей значительных затрат ручного труда</li>
              <li>невозможность замены сердечника в случае его поломки; при необходимости замены одного кольца приходилось перешивать значительное количество сердечников</li>
              <li>сильное влияние окружающей температуры на свойства сердечников, в частности — на ширину петли гистерезиса</li>
              <li>необходимость возврата сердечников в исходное состояние</li>
              <li>саморазогрев сердечников, вызванный потерями на гистерезис, что ограничивало предельную частоту работы ЗУ</li>
              <li>большое число сердечников</li>
            </ul>
            <p>Эти недостатки пытались преодолеть, как в рамках традиционных схем - усложняя схемы прошивки или применяя многообмоточные сердечники - так и используя новые, передовые для того времени разработки. Так появились запоминающие устройства на многоотверстных пластинах, биаксы, слоистые ферриты и системы на тонких магнитных плёнках. Что характерно, технологические приёмы изготовления таких систем (фотолитография, вакуумное и химическое осаждение, и пр.) предвосхитили полупроводниковое производство.</p>
            <p>Но фактически, после "взрывного" развития интегральных схем памяти, с середины 70-х годов системы ферритовой памяти применялись лишь в тех областях, где были критичны такие их плюсы, как устойчивость к радиации и электромагнитным помехам - космические системы, промышленное оборудование и т.п.</p>
          </section>

          <section id="museum">
            <h2>Музей вычислительной техники ПГНИУ</h2>
            <p>Расположение: корп. 8, ауд. 401</p>
            <div className='wrapper'>
              <div style={{width: 500, height: 300, overflow: "hidden"}}>
                <Image
                  src="https://media.discordapp.net/attachments/1206160508424687686/1242806878254141441/IMG_20240518_110222_HDR.jpg?ex=664f2d9a&is=664ddc1a&hm=770e6814f4d63c657aa54e4fdb56f4ba8938505068e4dfaad38e3e0f402f987f&=&format=webp&width=1214&height=683"
                  alt='1'
                  width={500}
                  rounded
                  style={{objectFit: "cover", width: "100%", height: "100%", objectPosition: "50% 50%"}}
                />
              </div>
              <div style={{width: 500, height: 300, overflow: "hidden"}}>
                <Image
                  src="https://media.discordapp.net/attachments/1206160508424687686/1242806879390797886/IMG_20240518_110350_HDR.jpg?ex=664f2d9a&is=664ddc1a&hm=df08003579f2e5961abe865e35a3084ab2d6e3e433449ef57a580745be1f1275&=&format=webp&width=1214&height=683"
                  alt='3'
                  width={500}
                  rounded
                  style={{objectFit: "cover", width: "100%", height: "100%", objectPosition: "50% 50%"}}
                />
              </div>
              <div style={{width: 500, height: 300, overflow: "hidden"}}>
                <Image
                    src="https://cdn.discordapp.com/attachments/1206160508424687686/1242806878845665310/IMG_20240518_110308.jpg?ex=664f2d9a&is=664ddc1a&hm=a955eec05fb6f19a19cfafdc7a58bf1e5981802fc49fe06ced9152d377aba5b9&"
                    alt='2'
                    rounded
                    style={{objectFit: "cover", width: "100%", height: "100%", objectPosition: "50% 50%"}}
                  />
              </div>
              <div style={{width: 500, height: 300, overflow: "hidden"}}>
                <Image
                  src="https://cdn.discordapp.com/attachments/1206160508424687686/1242806879881658441/IMG_20240519_121824.jpg?ex=664f2d9a&is=664ddc1a&hm=8b0e6e31280ce8099a5dde2590dbc432318897dd3cc675405bfb7c1079329873&"
                  alt='3'
                  width={500}
                  rounded
                  style={{objectFit: "cover", width: "100%", height: "100%", objectPosition: "50% 50%"}}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      <div
        style={{
          backgroundColor: "#1F2833",
          width: "100%",
          height: "100px",
        }}
      ></div>
    </div>
  )
}

export default App
