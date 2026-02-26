try {
  var savedTheme = localStorage.getItem('newweb_theme');
  if (savedTheme === '"light"' || savedTheme === '"dark"') {
    document.documentElement.setAttribute('data-theme', savedTheme.replace(/"/g, ''));
  } else if (savedTheme === '"system"' || !savedTheme) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
} catch (e) { }
