const NavbarForHomepage = () => {
    return `<nav id="navbar">
    <div class="logo">
      <a href="index.html">
        Home
      </a>
    </div>
  
    <div class="routes">
      <a href="register.html"><div>Registration</div></a>
      <a href="dashboard.html"><div>Dashboard</div></a>
      <a href="vaccinated.html"><div>Vaccinated</div></a>
    </div>
  </nav>`;
  };
  const NavbarForOtherpages = () => {
    return `<nav id="navbar">
    <div class="logo">
      <a href="index.html">
        Home
      </a>
    </div>
  
    <div class="routes">
      <a href="register.html"><div>Registration</div></a>
      <a href="dashboard.html"><div>Dashboard</div></a>
      <a href="vaccinated.html"><div>Vaccinated</div></a>
    </div>
  </nav>`;
  };
  
  export { NavbarForHomepage, NavbarForOtherpages };