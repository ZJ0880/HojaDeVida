function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "Inicio")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "Sobre mi")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "Proyectos")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "Contacto"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Miguel", /*#__PURE__*/

    React.createElement("strong", null, "   Zapata")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Soy un"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "desarrollador de software"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "enamorado de ideas creativas"), "")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "Mis proyectos"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "contáctame")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Sobre mí"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Mi nombre es Miguel Zapata Jiménez."), /*#__PURE__*/
    React.createElement("p", null, ""), /*#__PURE__*/



    React.createElement("p", null, "Apasionado por la tecnología y el desarrollo de software con conocimientos en lenguajes de programación, algoritmos y metodologías ágiles. Enfocado en la resolución de problemas y optimización de procesos digitales, con habilidades de trabajo en equipo y adaptación a nuevas tecnologías")), /*#__PURE__*/






    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "¡Conózcame!"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Amo la programación"), /*#__PURE__*/
    React.createElement("p", null, "Desarrollador en formación y apasionado por el backend, ubicado en Medellín. He trabajado en proyectos personales, desarrollando algoritmos avanzados y superando retos complejos, colaborando con talento para crear soluciones efectivas. "), /*#__PURE__*/




    React.createElement("p", null, "Apasionado por los desafíos constantes, con experiencia en diversos lenguajes de programación y frameworks. Me motiva estar siempre actualizado en nuevas herramientas y buenas prácticas del desarrollo de software. ")), /*#__PURE__*/




    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Además, la abstracción es mi fuerte"), /*#__PURE__*/
    React.createElement("p", null, "La abstracción es una de mis habilidades clave en desarrollo de software. Al enfocarme en los aspectos esenciales de cada problema, logro simplificar sistemas complejos, eliminando detalles innecesarios y resaltando funciones clave. Este enfoque me permite crear soluciones escalables y organizadas, donde cada componente tiene una función clara. Así, mis proyectos son eficientes, fáciles de mantener y adaptables a futuras necesidades."), /*#__PURE__*/





    React.createElement("p", null, ""))))));








};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node',
    html: 'fab fa-html5'};


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "Ver código ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Ver en vivo ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "Mis proyectos"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "         ", /*#__PURE__*/
    React.createElement("u", null, ""), "Aquí puedes ver algunos de mis proyectos destacados, donde aplico mis habilidades técnicas y creativas para resolver problemas y crear soluciones eficientes y fáciles de usar. Cada proyecto refleja mi compromiso con la calidad y la mejora continua en desarrollo.",
    ' ', /*#__PURE__*/
    React.createElement("a", { href: "https://www.freecodecamp.org/", target: "_blank", rel: "" }, ""), "")), /*#__PURE__*/






    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "Juego del Ahorcadito",
      img: 'https://www.shutterstock.com/image-vector/gallows-nolan-icon-simple-thin-600nw-1565010625.jpg',
      tech: "js css html",
      link: "https://ahorcadito-minigame.vercel.app",
      repo: "https://github.com/ZJ0880/ahorcadito-minigame" }, /*#__PURE__*/

    React.createElement("small", null, "Hecho en JavaScript, CSS y HTML"), /*#__PURE__*/


    React.createElement("p", null, " Un sencillo y divertido minijuego de Ahorcado en JavaScript, con palabras relacionadas al desarrollo de software  y contadores de victorias, derrotas y saltos de nivel.")), /*#__PURE__*/
))));







};



/***********************
  Contact Component
 ***********************/

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: '¡Enviado!',
          text: 'Tu mensaje se ha enviado correctamente.',
          timer: 3000,
          showConfirmButton: false,
        });
        form.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No pudimos enviar tu mensaje. Inténtalo de nuevo.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema con la red o el servidor.',
      });
    }
  };

  return React.createElement('section', { id: 'contact' },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'heading-wrapper' },
        React.createElement('div', { className: 'heading' },
          React.createElement('p', { className: 'title' }, 'Desea ', React.createElement('br'), 'contactarme?'),
          React.createElement('p', { className: 'separator' }),
          React.createElement('p', { className: 'subtitle' },
            'Utilice el siguiente formulario o envíe un correo electrónico a ',
            React.createElement('span', { className: 'mail' },
              'miguelzj0909',
              React.createElement('i', { className: 'fas fa-at at' }),
              'gmail',
              React.createElement('i', { className: 'fas fa-circle dot' }),
              'com'
            ),
            ':'
          )
        ),
        React.createElement(SocialLinks, null)
      ),
      React.createElement('form', { id: 'contact-form', onSubmit: handleSubmit },
        React.createElement('input', { placeholder: 'Nombre', name: 'name', type: 'text', required: true }),
        React.createElement('input', { placeholder: 'Correo', name: 'email', type: 'email', required: true }),
        React.createElement('textarea', { placeholder: 'Mensaje', name: 'message' }),
        React.createElement('input', { className: 'button', id: 'submit', value: 'Enviar', type: 'submit' })
      )
    )
  );
};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Yago Est\xE9vez."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://www.instagram.com/miguelzj_/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Instagram profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-instagram" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/ZJ0880",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://www.linkedin.com/in/miguel-zapata-83a425267/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Linkedin Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-linkedin" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));