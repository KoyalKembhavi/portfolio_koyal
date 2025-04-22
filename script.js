function contact(type) {
    switch (type) {
        case 'email':
            // Opens Gmail compose window with your email in the "To" field
            window.open('https://mail.google.com/mail/?view=cm&fs=1&to=koyalkem13@gmail.com&su=&body=', '_blank');
            break;

        case 'linkedin':
            // Replace with your actual LinkedIn profile URL
            window.open('https://www.linkedin.com/in/koyal-kembhavi-8872a0330/', '_blank');
            break;

        case 'github':
            // Replace with your actual GitHub profile URL
            window.open('https://github.com/KoyalKembhavi', '_blank');
            break;

        default:
            alert('Contact method not available.');
    }
}
