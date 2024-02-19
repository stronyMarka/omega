import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ALFA</title>
        <link rel="icon" href="/truck.svg" />
      </Head>

      <main>
        <h1 className={styles.title}>
          ALFA
        </h1>

        <p className={styles.description}>
          Witamy w ALFA - Twoim Partnerze w Transporcie, Przeprowadzkach i Remontach!
        </p>
        <p className={styles.description}>
          Jesteśmy doświadczoną firmą świadczącą kompleksowe usługi transportowe do 3,5 tony, profesjonalne przeprowadzki oraz prace remontowo-budowlane. Wspieramy Cię w każdym etapie - od transportu, przez przeprowadzkę, aż po przemianę Twojego domu.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Usługi Transportowe: &rarr;</h3>
            <p>Dostarczamy Twój towar bezpiecznie i terminowo. Niezależnie od tego, czy to mała paczka, czy większy ładunek - mamy flotę pojazdów gotową do działania.</p>
          </div>

          <div className={styles.card}>
            <h3>Przeprowadzki: &rarr;</h3>
            <p>Zmieniasz mieszkanie? My zapewnimy Ci sprawną i bezstresową przeprowadzkę. Twoje rzeczy są dla nas najważniejsze!</p>
          </div>

          <div className={styles.card}>
            <h3>Prace Remontowo-Budowlane: &rarr;</h3>
            <p>Od drobnych napraw po kompleksowe remonty - nasza ekipa zrealizuje Twoje marzenia o nowoczesnym i funkcjonalnym wnętrzu.</p>
          </div>

          <div className={styles.card}>
            <h3>Usługi Minikoparką: &rarr;</h3>
            <p>
              Potrzebujesz wykonać prace ziemne? Nasza minikoparka jest do Twojej dyspozycji. Skutecznie i precyzyjnie wykonamy wszelkie prace koparką.
            </p>
          </div>
        </div>
        <div className={styles.description}>
          <h2>Dlaczego My?</h2>

          <div className={styles.card}>
            <h3>✅ Doświadczenie: </h3>
            <p>Mamy wieloletnie doświadczenie w branży, co sprawia, że możesz nam zaufać w realizacji różnorodnych zadań.</p>
          </div>
          <div className={styles.card}>
            <h3>✅ Profesjonalizm: </h3>
            <p>Nasz zespół składa się z wykwalifikowanych specjalistów, gotowych sprostać Twoim oczekiwaniom.</p>
          </div>
          <div className={styles.card}>
            <h3>✅ Sprzęt Najwyższej Jakości: </h3>
            <p>Dysponujemy nowoczesnym sprzętem, który gwarantuje efektywność i bezpieczeństwo w każdej realizowanej usłudze.</p>
          </div>
          <div className={styles.card}>
            <h3>✅ Konkurencyjne Ceny: </h3>
            <p>Oferujemy uczciwe i konkurencyjne ceny. Naszym celem jest satysfakcja klienta, nie tylko finansowa, ale także z jakości świadczonych usług.</p>
          </div>
        </div>

        <p className={styles.description}> Skontaktuj się z nami już dziś i przekonaj się, jak możemy ułatwić Ci życie! <a className={styles.link} href="tel:+48724041984">724 041 984</a></p>







      </main>

      <footer>

      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
