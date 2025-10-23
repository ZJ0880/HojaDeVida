function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return React.createElement("div", { className: `menu-container ${props.showMenu}` },
    React.createElement("div", { className: "overlay" }),
    React.createElement("div", { className: "menu-items" },
      React.createElement("ul", null,
        React.createElement("li", null,
          React.createElement("a", {
            href: "#welcome-section",
            onClick: props.toggleMenu
          }, "Inicio")
        ),
        React.createElement("li", null,
          React.createElement("a", {
            href: "#about",
            onClick: props.toggleMenu
          }, "Sobre mí")
        ),
        React.createElement("li", null,
          React.createElement("a", {
            href: "#tech-stack",
            onClick: props.toggleMenu
          }, "Tecnologías")
        ),
        React.createElement("li", null,
          React.createElement("a", {
            href: "#projects",
            onClick: props.toggleMenu
          }, "Proyectos")
        ),
        React.createElement("li", null,
          React.createElement("a", {
            href: "#contact",
            onClick: props.toggleMenu
          }, "Contacto")
        )
      ),
      React.createElement(SocialLinks, null)
    )
  );
};

/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return React.createElement(React.Fragment, null,
    React.createElement("nav", { id: "navbar" },
      React.createElement("div", { className: "nav-wrapper" },
        React.createElement("p", { className: "brand" },
          "Miguel",
          React.createElement("strong", null, " Zapata")
        ),
        React.createElement("a", {
          onClick: props.toggleMenu,
          className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button'
        },
          React.createElement("span", null)
        )
      )
    )
  );
};

/***********************
  Header Component
 ***********************/

const Header = props => {
  return React.createElement("header", { id: "welcome-section" },
    React.createElement("div", { className: "forest" }),
    React.createElement("div", { className: "silhouette" }),
    React.createElement("div", { className: "moon" }),
    React.createElement("div", { className: "container" },
      React.createElement("h1", null,
        React.createElement("span", { className: "line" }, "Soy un"),
        React.createElement("span", { className: "line" }, "desarrollador de software"),
        React.createElement("span", { className: "line" },
          React.createElement("span", { className: "color" }, "enamorado de ideas creativas")
        )
      ),
      React.createElement("div", { className: "buttons" },
        React.createElement("a", { href: "#projects" }, "Mis proyectos"),
        React.createElement("a", { href: "#contact", className: "cta" }, "Contáctame")
      )
    )
  );
};

/***********************
  About Component
 ***********************/

const About = props => {
  return React.createElement("section", { id: "about" },
    React.createElement("div", { className: "wrapper" },
      React.createElement("article", null,
        React.createElement("div", { className: "title" },
          React.createElement("h3", null, "Sobre mí"),
          React.createElement("p", { className: "separator" })
        ),
        React.createElement("div", { className: "desc full" },
          React.createElement("h4", { className: "subtitle" }, "Mi nombre es Miguel Zapata Jiménez."),
          React.createElement("p", null, "Apasionado por la tecnología y el desarrollo de software con conocimientos en lenguajes de programación, algoritmos y metodologías ágiles. Enfocado en la resolución de problemas y optimización de procesos digitales, con habilidades de trabajo en equipo y adaptación a nuevas tecnologías.")
        ),
        React.createElement("div", { className: "title" },
          React.createElement("h3", null, "¡Conózcame!"),
          React.createElement("p", { className: "separator" })
        ),
        React.createElement("div", { className: "desc" },
          React.createElement("h4", { className: "subtitle" }, "Amo la programación"),
          React.createElement("p", null, "Desarrollador en formación apasionado por el backend, ubicado en Medellín. He trabajado en proyectos personales desarrollando algoritmos avanzados y superando retos complejos. Mi experiencia abarca diversos lenguajes de programación y frameworks modernos."),
          React.createElement("p", null, "Me motivan los desafíos constantes y estar siempre actualizado en nuevas herramientas y buenas prácticas del desarrollo de software, colaborando con talento para crear soluciones efectivas y escalables.")
        ),
        React.createElement("div", { className: "desc" },
          React.createElement("h4", { className: "subtitle" }, "Abstracción: mi fuerte"),
          React.createElement("p", null, "La abstracción es mi habilidad clave en desarrollo de software. Me enfoco en los aspectos esenciales de cada problema, simplificando sistemas complejos y eliminando detalles innecesarios para resaltar las funciones principales."),
          React.createElement("p", null, "Este enfoque me permite crear soluciones escalables y organizadas donde cada componente tiene una función clara, resultando en proyectos eficientes, fáciles de mantener y adaptables a futuras necesidades.")
        ),
        React.createElement("div", { className: "desc" },
          React.createElement("h4", { className: "subtitle" }, "Metodología y colaboración"),
          React.createElement("p", null, "Creo firmemente en las metodologías ágiles como Scrum y Kanban para maximizar la eficiencia. Mi enfoque combina comunicación constante, documentación clara del código y pruebas unitarias que garantizan la calidad del software."),
          React.createElement("p", null, "Valoro la colaboración interdisciplinaria y el code review como herramientas de crecimiento. Mi objetivo es contribuir a proyectos innovadores aplicando arquitecturas robustas y patrones de diseño del desarrollo backend.")
        )
      )
    )
  );
};

/***********************
  Tech Stack Component
 ***********************/

const TechStack = () => {
  const technologies = [
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'C#', icon: 'devicon-csharp-plain colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'Ruby', icon: 'devicon-ruby-plain colored' },
    { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
    { name: 'ASP.NET', icon: 'devicon-dot-net-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' }
  ];

  return React.createElement('section', { id: 'tech-stack' },
    React.createElement('div', { className: 'tech-container' },
      React.createElement('div', { className: 'tech-heading' },
        React.createElement('h3', { className: 'title' }, 'Stack Tecnológico'),
        React.createElement('p', { className: 'separator' }),
        React.createElement('p', { className: 'subtitle' },
          'Tecnologías y herramientas que domino para crear soluciones robustas y escalables'
        )
      ),
      React.createElement('div', { className: 'tech-grid' },
        technologies.map((tech, index) =>
          React.createElement('div', {
            className: 'tech-item',
            key: index
          },
            React.createElement('i', { className: tech.icon }),
            React.createElement('span', { className: 'tech-name' }, tech.name)
          )
        )
      )
    )
  );
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
    html: 'fab fa-html5'
  };

  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return React.createElement("div", { className: "project" },
    React.createElement("a", {
      className: "project-link",
      href: link,
      target: "_blank",
      rel: "noopener noreferrer"
    },
      React.createElement("img", {
        className: "project-image",
        src: props.img,
        alt: 'Screenshot of ' + props.title
      })
    ),
    React.createElement("div", { className: "project-details" },
      React.createElement("div", { className: "project-tile" },
        React.createElement("p", { className: "icons" },
          props.tech.split(' ').map((t) =>
            React.createElement("i", { className: tech[t], key: t })
          )
        ),
        props.title
      ),
      props.children,
      React.createElement("div", { className: "buttons" },
        React.createElement("a", {
          href: repo,
          target: "_blank",
          rel: "noopener noreferrer"
        },
          "Ver código ",
          React.createElement("i", { className: "fas fa-external-link-alt" })
        ),
        React.createElement("a", {
          href: link,
          target: "_blank",
          rel: "noopener noreferrer"
        },
          "Ver en vivo ",
          React.createElement("i", { className: "fas fa-external-link-alt" })
        )
      )
    )
  );
};

/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return React.createElement("section", { id: "projects" },
    React.createElement("div", { className: "projects-container" },
      React.createElement("div", { className: "heading" },
        React.createElement("h3", { className: "title" }, "Mis proyectos"),
        React.createElement("p", { className: "separator" }),
        React.createElement("p", { className: "subtitle" },
          "Aquí puedes ver algunos de mis proyectos destacados, donde aplico mis habilidades técnicas y creativas para resolver problemas y crear soluciones eficientes y fáciles de usar. Cada proyecto refleja mi compromiso con la calidad y la mejora continua en desarrollo."
        )
      ),
      React.createElement("div", { className: "projects-wrapper" },
        React.createElement(Project, {
          title: "Juego del Ahorcadito",
          img: 'https://www.shutterstock.com/image-vector/gallows-nolan-icon-simple-thin-600nw-1565010625.jpg',
          tech: "js css html",
          link: "https://ahorcadito-minigame.vercel.app",
          repo: "https://github.com/ZJ0880/ahorcadito-minigame"
        },
          React.createElement("small", null, "Hecho en JavaScript, CSS y HTML"),
          React.createElement("p", null, "Un sencillo y divertido minijuego de Ahorcado en JavaScript, con palabras relacionadas al desarrollo de software y contadores de victorias, derrotas y saltos de nivel.")
        )
      )
    )
  );
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
      const res = await fetch('/api/send', {
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
          React.createElement('p', { className: 'title' },
            '¿Desea ',
            React.createElement('br'),
            'contactarme?'
          ),
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
        React.createElement('input', {
          placeholder: 'Nombre',
          name: 'name',
          type: 'text',
          required: true
        }),
        React.createElement('input', {
          placeholder: 'Correo',
          name: 'email',
          type: 'email',
          required: true
        }),
        React.createElement('textarea', {
          placeholder: 'Mensaje',
          name: 'message',
          required: true
        }),
        React.createElement('input', {
          className: 'button',
          id: 'submit',
          value: 'Enviar',
          type: 'submit'
        })
      )
    )
  );
};

/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return React.createElement("footer", null,
    React.createElement("div", { className: "wrapper" },
      React.createElement("h3", null, "GRACIAS POR VISITAR"),
      React.createElement("p", null, "© ", new Date().getFullYear(), " Miguel Zapata."),
      React.createElement(SocialLinks, null)
    )
  );
};

/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return React.createElement("div", { className: "social" },
    React.createElement("a", {
      href: "https://www.instagram.com/miguelzj_/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Instagram de Miguel"
    },
      React.createElement("i", { className: "fab fa-instagram" })
    ),
    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/ZJ0880",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "GitHub de Miguel"
    },
      React.createElement("i", { className: "fab fa-github" })
    ),
    React.createElement("a", {
      href: "https://www.linkedin.com/in/miguel-zapata-83a425267/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "LinkedIn de Miguel"
    },
      React.createElement("i", { className: "fab fa-linkedin" })
    )
  );
};

/***********************
  Main Component
 ***********************/

class App extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      menuState: false
    });
    
    _defineProperty(this, "toggleMenu", () => {
      this.setState(state => ({
        menuState: !state.menuState ?
          'active' :
          state.menuState === 'deactive' ?
            'active' :
            'deactive'
      }));
    });
  }

  render() {
    return React.createElement(React.Fragment, null,
      React.createElement(Menu, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState
      }),
      React.createElement(Nav, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState
      }),
      React.createElement(Header, null),
      React.createElement(About, null),
      React.createElement(TechStack, null),
      React.createElement(Projects, null),
      React.createElement(Contact, null),
      React.createElement(Footer, null)
    );
  }

componentDidMount() {
  const navbar = document.querySelector('#navbar');
  const header = document.querySelector('#welcome-section');
  const forest = document.querySelector('.forest');
  const silhouette = document.querySelector('.silhouette');
  const moon = document.querySelector('.moon');
  let forestInitPos = -300;

  // Esperar a que la animación inicial termine antes de aplicar el control de scroll
  setTimeout(() => {
    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      // Efecto parallax para forest y silhouette
      if (scrollPos <= window.innerHeight) {
        if (silhouette) {
          silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        }
        if (forest) {
          forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
        }
      }

      // Ocultar/mostrar header, silueta, bosque Y LUNA
      if (scrollPos - 100 <= window.innerHeight) {
        if (header) {
          header.style.visibility = 'visible';
        }
        if (moon) {
          moon.classList.remove('hide-moon');
        }
      } else {
        if (header) {
          header.style.visibility = 'hidden';
        }
        if (moon) {
          moon.classList.add('hide-moon');
        }
      }

      // Activar fondo del navbar
      if (scrollPos + 100 >= window.innerHeight) {
        navbar.classList.add('bg-active');
      } else {
        navbar.classList.remove('bg-active');
      }
    };
  }, 2500); // Esperar a que termine la animación de la luna (1s delay + 1.2s animación = 2.2s + margen)

  // Smooth scrolling
  (function navSmoothScrolling() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    for (let i in internalLinks) {
      if (internalLinks.hasOwnProperty(i)) {
        internalLinks[i].addEventListener('click', e => {
          e.preventDefault();
          const targetId = internalLinks[i].hash;
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          }
        });
      }
    }
  })();
}



}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('app')
);
