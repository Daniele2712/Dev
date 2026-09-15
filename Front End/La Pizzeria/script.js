// Light Mode ---------------------------------------------------------------------

    // selectors
    const themeToggleBtn = document.querySelector('.theme-toggle');

    let contactsAnchor1 = document.querySelector('.where__position .where__contacts-text');
    let contactsAnchor2 = document.querySelector('.where__phone .where__contacts-text');
    let contactsAnchor3 = document.querySelector('.where__mail .where__contacts-text');
    
    let contactsAnchorArray = [contactsAnchor1,contactsAnchor2,contactsAnchor3];

    let iconClock = document.getElementById('icon__clock');
    let iconPosition = document.getElementById('icon__position');
    let iconPhone = document.getElementById('icon__phone');
    let iconMail = document.getElementById('icon__mail');
    // state
    const theme = localStorage.getItem('theme');
        // To make the changes stored in LocalStorage permanent i need
        // to check if the values is stored and if is stored i have to
        // apply those changes at the start of every page reload

    // on mount
    theme && document.body.classList.add(theme);
    theme && contactsAnchorArray[0].classList.add('dark-mode__contacts');
    theme && contactsAnchorArray[1].classList.add('dark-mode__contacts');
    theme && contactsAnchorArray[2].classList.add('dark-mode__contacts');
    if(theme) {
        iconClock.src = "icon/clock-dark.png";
        iconPosition.src = "icon/location-marker-dark.png";
        iconPhone.src = "icon/phone-dark.png";
        iconMail.src = "icon/mail-dark.png";
    };
        // short-circuting is a shortcut for a one line if statement
        // the && operator says that the code on the right will run  
        // only if the statement on the left is true

    // handlers
    handleThemeToggle = () => {
        document.body.classList.toggle('dark-mode');
        contactsAnchorArray[0].classList.toggle('dark-mode__contacts');
        contactsAnchorArray[1].classList.toggle('dark-mode__contacts');
        contactsAnchorArray[2].classList.toggle('dark-mode__contacts');

            // toggle add or remove the class 
        if(document.body.classList.contains('dark-mode')){
            localStorage.setItem('theme','dark-mode');
            iconClock.src = "icon/clock-dark.png";
            iconPosition.src = "icon/location-marker-dark.png";
            iconPhone.src = "icon/phone-dark.png";
            iconMail.src = "icon/mail-dark.png";
            // localStorage is a container of the browser that store two
            // values a key and a value, i can use that to store on the
            // browser change that i want to save 
        } else{
            localStorage.removeItem('theme')
            iconClock.src = "icon/clock.png";
            iconPosition.src = "icon/location-marker.png";
            iconPhone.src = "icon/phone.png";
            iconMail.src = "icon/mail.png";
        }
    }

    // events
    themeToggleBtn.addEventListener('click', handleThemeToggle);

// --------------------------------------------------------------------------------

// Images Slideshow

// Mobile NavBar

// Pop-Up Windows





