const openButtons = document.getElementsByClassName('open-info-btn');
const infoBoxes = document.getElementsByClassName('open-info-box');
const mainInfoBoxes = document.getElementsByClassName('main-info-box');
const progressBars = document.getElementsByClassName('mn-progress-bar');

Array.from(openButtons).forEach((openButton, index) => {
    openButton.addEventListener('click', () => showOrHide(openButton, infoBoxes[index], mainInfoBoxes[index]));
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:5000/data')
        .then(response => response.json())
        .then(data => {

            const progressSections = document.querySelectorAll('.progress-section');

            if (progressSections[0] && data.languages) {
                data.languages.forEach(lang => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `${lang.name}
                        <div class="sd-progress-bar">
                            <div class="progress" data-width="${lang.progress}" style="width: 0;"></div>
                        </div>`;
                    progressSections[0].appendChild(listItem);
                });
            }

            if (progressSections[1] && data.skills) {
                data.skills.forEach(skill => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `${skill.name}
                        <div class="mn-progress-bar">
                            <div class="progress" data-width="${skill.progress}" style="width: 0;"></div>
                        </div>`;
                    progressSections[1].appendChild(listItem);
                });
            }

            if (progressSections[2] && data.hobbies) {
                data.hobbies.forEach(hobby => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `${hobby.name}
                        <div class="mn-progress-bar">
                            <div class="progress" data-width="${hobby.progress}" style="width: 0;"></div>
                        </div>`;
                    progressSections[2].appendChild(listItem);
                });
            }

            setTimeout(() => {
                const progressBars = document.querySelectorAll('.progress');
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    if (width) {
                        bar.style.width = width;
                    }
                });
            }, 100);

            const contactDivs = document.querySelectorAll('.contacts');
            if (contactDivs.length > 0 && data.contacts) {
                contactDivs.forEach((contactDiv, indexOfContact) => {
                    if (data.contacts[indexOfContact]) {
                        const contact = data.contacts[indexOfContact];
                        const contactItem = document.createElement('div'); // Створюємо новий div для контакту
                        contactDiv.innerHTML = `
                            <h3>${contact.name}</h3>
                            <h5 class="address">${contact.address}</h5>
                            <h5>Tel: ${contact.phone}</h5>
                            <h5>Email: ${contact.email}</h5>
                        `;
                    }
                });

            }

        })
        .catch(error => console.error('Error! Can`t reach data!', error));
});



function showOrHide(openButton, infoBox, mainInfoBox){
    if (infoBox.classList.contains('hidden-box')){
        setTimeout(() => {
            openButton.classList.remove('years-horizontal');
            openButton.classList.add('years-vertical');
        },10);
        mainInfoBox.classList.remove('non-open-info');
        infoBox.classList.remove('hidden-box')
        infoBox.classList.add('opened-box')
        infoBox.classList.remove('closed-box')
        mainInfoBox.classList.remove('non-open-info');
    }
    else{
        setTimeout(() => {
            infoBox.classList.add('hidden-box');
            mainInfoBox.classList.add('non-open-info');
            openButton.classList.remove('years-vertical');
            openButton.classList.add('years-horizontal');
        },500);
        infoBox.classList.add('closed-box');
        infoBox.classList.remove('opened-box');
    }
}