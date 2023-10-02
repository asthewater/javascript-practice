const pagesMap = {
    login: '.page-login',
    main: '.page-main',
    profile: '.page-profile',
  };
  
  let currentPage = nul;

  export default {
    openPage(name) {

        const selector = pagesMap[name];
        const elem = document.querySelector('selector');

        currentPage?.classlist.add('hidden');
        currentPage = elem;
        currentPage.classlist.remove('hidden');   
    },
  };
  