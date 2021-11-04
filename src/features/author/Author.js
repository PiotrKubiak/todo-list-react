import Section from "../../common/Section/";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { Article } from "./styled";

export const Author = () => {
  return (
    <Container>
      <Header title="O Autorze" />
      <Section
        title="Piotr Kubiak"
        body={
          <>
            <Article>
              <p>
                Nazywam się Piotr Kubiak, mam 34lata i pracuje jako operator CNC
                (dla ludzi niewiedzących co to CNC - programuje i pracuje na
                frezarkach sterowanych numerycznie).
              </p>
              <p>
                Mieszkam w Kaletach, małym miasteczku w woj. śląskim zewsząd
                otoczonym lasem.
              </p>
              <p>
                Lubię słuchać muzyki w każdym wolnym czasie, głównie jest to
                muzyka taneczna: dance, techno, trance i "mocne" jej odmiany:
                hardstyle, hardtrance itp
              </p>
              <p>
                Uwielbiam nowinki motoryzacyjne, głównie niemiecką motoryzacje
                ale o innych też chętnie czytam.
              </p>
              <p>Lubię dobry film kryminalny, SF, akcje czy komedie.</p>
              <p>
                W wolnych chwilach naprawiam komputery, kolumny hifi itp.
                urządzenia. Komputery to moja pasja. Już od dziecka kiedy tata
                przyniósł mi pierwszy komputer z windowsem 3.11 i
                monochromatycznym monitorem, rozpoczęła się moja przygoda z
                kompami. Poskładałem w swoim życiu sporo klocków dla siebie
                chyba z 7, nie licząc już ile dla znajomych.... Zawsze chciałem
                robić coś więcej niż tylko składać i naprawiać komputery,
                dlatego przyszedł czas na naukę frontend`u 😉 Jak to mówią
                lepiej późno niż za późno 😊
              </p>
              <p>💿 W weekendy gram jako Dj na imprezach 🔉</p>
            </Article>
          </>
        }
      />
    </Container>
  );
};
