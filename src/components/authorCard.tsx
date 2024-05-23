import { Button, Image } from 'react-bootstrap';
import JohnPhoto from "../assets/john.jpg";

function AuthorCard() {
  return (
    <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 8 }}>
      <Image src={JohnPhoto} height={400} style={{borderRadius: "4px"}} />
      <div style={{width: "50%"}}>
        <h3>Джон Адам Преспер Эккерт-младший</h3>
        <p>
          Американский учёный в области компьютерной инженерии, инженер-электронщик. Вместе с Джоном Мокли является создателем первого электронного компьютера ENIAC. Является одним из авторов Лекций школы Мура — первого в истории курса лекций на тему компьютеров.
        </p>
        <p>
          Основатель одной из первых коммерческих компьютерных компаний — Eckert-Mauchly Computer Corporation (EMCC) и создатель первого коммерческого компьютера UNIVAC I. Изобретатель памяти на линиях задержки, использовавшейся до конца 1960-х. Один из авторов архитектуры фон Неймана.
        </p>
        <Button href="https://ru.wikipedia.org/wiki/%D0%AD%D0%BA%D0%BA%D0%B5%D1%80%D1%82,_%D0%94%D0%B6%D0%BE%D0%BD_%D0%9F%D1%80%D0%B5%D1%81%D0%BF%D0%B5%D1%80" type="button" target="_blank" style={{marginTop: "auto"}}>Читать на wikipedia</Button>
      </div>
    </div>
  );
}

export default AuthorCard;