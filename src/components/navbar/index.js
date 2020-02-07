import { h } from "preact";

const Navbar = () => {
  return (
    <header>
      <nav class="nav">
        <div class="nav__logo">Webpack preact boilerplate</div>
        <button class="nav__togle" aria-label="nav-togle">
          <span class="hamburger"></span>
        </button>
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#" class="nav__link">
              Link 1
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              Link 2
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              Link 3
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
