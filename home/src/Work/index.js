import React from 'react';
import {
  Container,
  BackgroundWrapper,
  Content,
  Article,
  NavWrapper,
  LeftWrapper,
  RightWrapper,
  SplitTitle
} from './Work.module.css';
// import '/fonts/Roboto';

function Work() {
  return (
    <div className={Container}>
      <div className={BackgroundWrapper}></div>

      <div className={NavWrapper}>
        <h2><b>Sections</b></h2>
        <h3><a href="#work">👨‍💻 Mon Expérience Professionelle 👨‍💻</a></h3>
        <h3><a href="#project">🛠️ Mes Projets Entrepreneuriaux 🛠️</a></h3>
        <h3><a href="#study">📚 Mon Parcour Académique 📚</a></h3>
        <h3><a href="#study" target="_blank">📄 Mon CV 📄</a></h3>
        <h3><a href="#social">📱 Social et contact 📱</a></h3>
      </div>

      <div className={Content}>

        <h2 className={SplitTitle} id="work">- Mon Expérience Professionelle -</h2>

        <div className={Article}>
          <div className={LeftWrapper}>
            <img src='/image/logo/polyconseil.png' />
          </div>
          <div className={RightWrapper}>
            <h3>💡 Product Owner 💡</h3>
            <h4>2020 - Maintenant | Polyconseil</h4>
            <p>
              This is a description of what I've done in the company<br />
              As much as possible it should be easy to read<br />
              but also provide a lot of <b>value</b> and <b>keywords</b>.
            </p>
          </div>
        </div>

        <div className={Article}>
          <div className={LeftWrapper}>
            <img src='/image/logo/sublime.png' />
          </div>
          <div className={RightWrapper}>
            <h3>💻 Développeur BigData 💻</h3>
            <h4>2019 | Sublime</h4>
            <p>
              Développement d’un <b>data pipeline</b> avec <b>Node.Js et AWS</b> pour organiser et analyser les données de mesures
              d’impressions de publicités afin d’en <b>tirer des KPIs business</b>.
            </p>
          </div>
        </div>

        <div className={Article}>
          <div className={LeftWrapper}>
            <img src='/image/logo/ayomi.png' />
          </div>
          <div className={RightWrapper}>
            <h3>📈 Data Scientist 📈</h3>
            <h4>2017 | Ayomi</h4>
            <p>
              Développement d’un <b>système d’analyse comportemental</b> des visiteurs d’une plateforme d’investissement
              afin d’<b>adresser une communication automatique et ciblée</b>.
            </p>
          </div>
        </div>

        <h2 className={SplitTitle} id="project">- Mes Projets Entrepreneuriaux -</h2>

        <div className={Article}>
          <div className={LeftWrapper}>
            <img src='/image/logo/sheltin.png' />
          </div>
          <div className={RightWrapper}>
            <h3>🧯 Shelt.In 🧯</h3>
            <h4>2018 - Maintenant | 6 personnes</h4>
            <h4>Website : <a href="https://shelt.in" target="_blank">shelt.in</a></h4>
            <p>
              Shelt.In propose un <b>équipement connecté (IoT)</b> portable,
              connecté à un <b>dashboard</b>, qui vise à <b>réduire le risque d’accident des pompiers</b> en encadrant leurs interventions.
              <br /><br />
              Travailler sur ce projet me permet de développer des compétences en <b>communication</b>, en <b>leadership</b>
              ansi que les relations avec nos différents <b>partenariats</b>.
            </p>
          </div>
        </div>

        <div className={Article}>
          <div className={LeftWrapper}>
            <img src='/image/logo/velit.png' />
          </div>
          <div className={RightWrapper}>
            <h3>👨‍💻 Velit Conseil 👨‍💻</h3>
            <h4>2019 - Maintenant | 2 personnes</h4>
            <h4>Website : <a href="https://velit.co" target="_blank">velit.co</a></h4>
            <p>
              Velit accompagne <b>les start-ups et les entrepreneurs</b> sur la partie technique (technologique et informatique)
              de leurs projets afin de la mettre au <b>service du business</b>.
              <br /><br />
              Travailler sur ce projet me permet de développer des compétences en <b>négociation</b> et <b>marketing</b>,
              mais aussi en <b>développement technique</b> et <b>relation client</b>.
            </p>
          </div>
        </div>

        <div className={Article}>
          <div className={LeftWrapper}>
            <img src='/image/logo/ma-plage-privee.png' />
          </div>
          <div className={RightWrapper}>
            <h3>🏖️ Ma Plage Privée 🏖️</h3>
            <h4>2018 - 2019 | 2 personnes</h4>
            <h4>Website : <a href="https://ma-plage-privee.fr" target="_blank">ma-plage-privee.fr</a></h4>
            <p>
              MaPlagePrivée.fr vous permet de <b>réserver des transats, tables,
              et autres services</b> dans les <b>plages privées de Marseille</b> et ses alentours.
              <br /><br />
              Avoir travaillé sur ce projet m'a permit de développer mes compétences en <b>développement technique</b>, en <b>marketing</b>,
              ainsi qu'en <b>gestion de partenariats</b>.
            </p>
          </div>
        </div>

        <h2 className={SplitTitle} id="study">- Mon Parcour Académique -</h2>

        <div className={Article}>
          <div className={LeftWrapper}>
            <img src='/image/logo/epitech.jpg' />
          </div>
          <div className={RightWrapper}>
            <h3>Master Expert en Informatique<br />@ EPITECH</h3>
            <h4>2016 - 2021 | Epitech Paris</h4>
            <h4>GPA : 3.26 / 4.00</h4>
          </div>
        </div>

        <div className={Article}>
          <div className={LeftWrapper}>
            <img src='/image/logo/berkeley.png' />
          </div>
          <div className={RightWrapper}>
            <h3>Summer Session Study<br />@ UC BERKELEY</h3>
            <h4>2020 | University of California Berkeley</h4>
            <h4>Sélection : 8 places pour 847 étudiants (Top 1%)</h4>
          </div>
        </div>

        <div className={Article}>
          <div className={LeftWrapper}>
            <img src='/image/logo/longbeach.png' />
          </div>
          <div className={RightWrapper}>
            <h3>Study Abroad Program<br />@ CSU LONG BEACH</h3>
            <h4>2019 - 2020 | California State University Long Beach</h4>
            <h4>GPA : 3.73 / 4.00</h4>
          </div>
        </div>

        <div className={Article}>
          <div className={LeftWrapper}>
            <img src='/image/logo/hec.png' />
          </div>
          <div className={RightWrapper}>
            <h3>Digital Tranformation Certificate<br />@ HEC PARIS</h3>
            <h4>2019 | HEC Paris</h4>
            <h4>Sélection : 14 places pour 940 étudiants (Top 2%)</h4>
          </div>
        </div>

        <div className={Article}>
          <div className={LeftWrapper}>
            <img src='/image/logo/ionisstm.png' />
          </div>
          <div className={RightWrapper}>
            <h3>Formation Teaching and Coaching<br />@ IONIS STM</h3>
            <h4>2018 | IONIS School of Technology and Management</h4>
            <h4>Moyenne : 19 / 20</h4>
          </div>
        </div>

        <h2 className={SplitTitle} id="social">- Sociaux et Contact -</h2>

        <div className={Article}>
          <div className={LeftWrapper}>
            <img src='/image/logo/socialandcontact.png' />
          </div>
          <div className={RightWrapper}>
            <h3>Twitter - <a href="https://twitter.com/theindiemaker" target="_blank">@theindiemaker</a></h3>
            <h3>Linkedin - <a href="https://www.linkedin.com/in/nicolas-laurent-874129136/" target="_blank">Nicolas Laurent</a></h3>
            <h3>Github - <a href="https://github.com/Nicolrnt" target="_blank">Nicolrnt</a></h3>
            <h4>Email : nicolas-laurent@outlook.fr</h4>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Work;