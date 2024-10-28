document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const phoneForm = document.getElementById('phoneForm');
    const addressForm = document.getElementById('addressForm');

    nameForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input:nth-child(1)').value;
        const location = this.querySelector('input:nth-child(2)').value;
        console.log('Searching for name:', name, 'in location:', location);
        // Add your name search logic here
        alert(`Searching for name: ${name} in location: ${location}`);
    });

    phoneForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const phone = this.querySelector('input').value;
        console.log('Searching for phone:', phone);
        // Add your phone search logic here
        alert(`Searching for phone: ${phone}`);
    });

    addressForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const street = this.querySelector('input:nth-child(1)').value;
        const cityStateZip = this.querySelector('input:nth-child(2)').value;
        console.log('Searching for address:', street, cityStateZip);
        // Add your address search logic here
        alert(`Searching for address: ${street}, ${cityStateZip}`);
    });
});
function handleFeatureClick(feature) {
    switch(feature) {
        case 'address':
            alert('You clicked Address Lookup. Redirecting to address search...');
            // Add code here to redirect to address search or open a modal
            break;
        case 'phone':
            alert('You clicked Reverse Phone Search. Redirecting to phone search...');
            // Add code here to redirect to phone search or open a modal
            break;
        case 'people':
            alert('You clicked People Search. Redirecting to people search...');
            // Add code here to redirect to people search or open a modal
            break;
    }
}

