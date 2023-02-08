const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    // BUTTON CLICK ACTIVE CLASS
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    // ACTIVE SECTION
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            // Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    //ACTIVE TOGGLE
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
})
}

PageTransitions();

//SEND EMAIL
function sendMail() {

  var params = {
    from_name: document.getElementById('name').value,
    email_id: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  const serviceID = "service_hs522gb";
  const templateID = "template_t71tqmc";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
        console.log(res);
        // alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));
}

function error() {
    const alert = document.getElementById('alert');

    setTimeout(() => {
        alert.style.display = 'block';
    }, 1000);

    setTimeout(() => {
        alert.style.display = 'none';
    }, 3000);
}

function res(){
    // Prevent default behavior of submit 
    event.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var msg = document.getElementById('message');
    const success = document.getElementById('success');

    if(name.value === '' || email.value === '' || subject.value === '' || msg.value === ''){
        error();
    }
    else{
        sendMail();
        setTimeout(() => {
            name.value = '';
            email.value = '';
            subject.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';

        setTimeout(() => {
        success.style.display = 'none';
    }, 3000);
        
    }
}

//VALIDATE EMAIL


//VIDEOS
document.querySelectorAll('.video-container video').forEach(vid => {
            vid.onclick = () => {
                document.querySelector('.popup-video').style.display = 'block';
                document.querySelector('.popup-video video').src = vid.getAttribute('src');
            }
        });

        document.querySelector('.popup-video span').onclick = () => {
            document.querySelector('.popup-video').style.display = 'none';
        }





