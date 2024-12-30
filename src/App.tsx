import './App.scss'

function App() {

  const scrollPage = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
        <header id="header">
          <div className="container menu">
            <a className="botao-home" onClick={() => scrollPage('banner')}>
              <img
                className="menu-logo"
                src="assets/logo.png"
                alt="Logo Cafeteria"
                title="Manhattan - Coffee House"
              />
            </a>
            <nav>
              <ul className="menu-links">
                <li>
                  <a className="menu-link" onClick={() => scrollPage('informacoes')}>
                    Informações</a>
                </li>
                <li>
                  <a className="menu-link" onClick={() => scrollPage('contato')}>Contatos</a>
                </li>
                <li>
                  <a className="menu-link" onClick={() => scrollPage('horario')}>Horários</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <div id="banner" className="container-parallax">
            <h1 className="subtitulo">MANHATTAN - COFFEE HOUSE</h1>
          </div>

          <section id="informacoes" className="container-texto">
            <h2>EXPERIMENTE O MELHOR CAFÉ DA CIDADE!</h2>
            <p>
              O café não é uma simples bebida que foi preparada por alguém. O café é
              momento e nós mostraremos isso. Frases como “Que tal tomarmos um
              café?” ou até então “Vamos fazer um café?” são demonstrações de que um
              dos momentos que mais reforçam os laços para com o próximo está
              finalmente por acontecer. Fraco ou forte? Com ou sem açúcar? Você
              deseja açúcar ou adoçante? Estas são frases que ouvimos em vários
              lugares. Em quase todos os locais onde há pessoas há também café.
              Parecemos intrínsecos ao café. Aqui na Manhattan serviremos para você
              com muito carinho o nosso querido e amado Amaro’s Coffe diretamente do
              nosso cafezal em Minas Gerais. Para todos nós, café é coisa séria e
              merece todo o cuidado.
            </p>
          </section>

          <div className="container-parallax">
            <h3 className="subtitulo">Um bom café é motivo de alegria!</h3>
          </div>

          <section className="container-texto">
            <h2>O QUE É O CAFÉ MANHATTAN?</h2>

            <p>
              Segundo a Metodologia de Avaliação Sensorial da SCA (Specialty Coffee
              Association), usada no mundo todo, um café especial é todo aquele que
              atinge, no mínimo, 80 pontos na escala de pontuação da metodologia
              (que vai até 100). O Café Manhattan destaca-se nos atributos
              fragrância, corpo, harmonia, doçura e sabor, nesse caso, possuindo
              sabores e aromas que podem ser frutados, herbais, doces como caramelo
              e chocolate. Podemos fazer uma analogia com o vinho, pois o café
              Manhattan também pode ser apreciado por suas características
              sensoriais e não apenas pela cafeína. Através do excelente padrão de
              cultivo, cuidado pós-colheita e da torra, você poderá experimentar
              diferentes e deliciosos tipos de café.
            </p>
          </section>

          <div className="container-parallax">
            <h3 className="subtitulo">A vida só começa depois do café!</h3>
          </div>

          <section className="container-texto">
            <h2>CONHEÇA O CAFÉ GOURMET MANHATTAN</h2>
            <p>
              As características desse tipo do café gourmet da Manhattan são muito
              marcantes. O seu corpo vai depender da variedade do blend: quanto mais
              “pesado” ele for na boca, maior o corpo. Quanto menor a sua pesagem,
              menor o corpo. O nosso café gourmet é o mais bem avaliado no processo
              de produção, para que ele não venha com nenhum tipo de defeito. O
              aroma é bem perceptível e o consumidor consegue sentir nitidamente,
              sendo que ele pode variar entre 4 aromas: florado, cítrico,
              achocolatado, frutado. Essas variações são consequências dos grãos do
              tipo Arábica. Tudo isso vai depender da torra, quanto mais clara ela
              for, maior será a acidez.
            </p>
          </section>

          <div id="contato" className="container-contato container-parallax">
            <h2 className="subtitulo">Contatos & Endereço</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.11681455319!2d-43.36346792564862!3d-22.98273154058775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2ed54ec2e1%3A0x4431d262cad1d163!2sAv.%20Ayrton%20Senna%2C%203000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-904!5e0!3m2!1sen!2sbr!4v1686438092548!5m2!1sen!2sbr"
              width="800"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div>
              <p>Telefone & Whatsapp: (21) 99999-5555</p>
              <p>E-mail: contato@manhattan.com.br</p>
              <p>
                Endereço: Av Ayrton Senna, 3000 - Barra da Tijuca - Rio de Janeiro
              </p>
            </div>
          </div>

          <div id="horario" className="container-parallax horario">
            <h2>HORÁRIOS DE FUNCIONAMENTO</h2>
            <ul className="horario-lista">
              <li>
                <h3>SEGUNDA</h3>
                <div></div>
                <span>FECHADO</span>
              </li>
              <li>
                <h3>TERÇA</h3>
                <div></div>
                <p>09:00 - 22:00</p>
              </li>
              <li>
                <h3>QUARTA</h3>
                <div></div>
                <p>09:00 - 22:00</p>
              </li>
              <li>
                <h3>QUINTA</h3>
                <div></div>
                <p>09:00 - 22:00</p>
              </li>
              <li>
                <h3>SEXTA</h3>
                <div></div>
                <p>09:00 - 22:00</p>
              </li>
              <li>
                <h3>SÁBADO</h3>
                <div></div>
                <p>09:00 - 22:00</p>
              </li>
              <li>
                <h3>DOMINGO</h3>
                <div></div>
                <p>12:00 - 22:00</p>
              </li>
            </ul>
          </div>
        </main>

        <footer className="container-rodape">
          <a className="botao-rodape" href="#banner"></a>
          <p>&copy; Manhattan - Coffee House - Todos os direitos reservados</p>
          <p>Desenvolvido por <span>Matheus Louzada</span></p>
        </footer>
        <script src="./scroll.js"></script>
    </>
  )
}

export default App
