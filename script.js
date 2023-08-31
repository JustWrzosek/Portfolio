let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        }
    });
};



// Add smooth scrolling behavior to navigation links
  const navLinks = document.querySelectorAll('.nav-bar a');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Calculate the offset to scroll smoothly to the target section
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });