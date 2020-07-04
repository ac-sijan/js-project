const reviews = [
    {
        id:1,
        name:"susan smith",
        job:"web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument",
        
    },

    {
        id:2,
        name:"John Cena",
        job:"wrestler",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "A computer is a machine that can be instructed to carry out sequences of arithmetic or logical operations automatically via computer programming. Modern computers have the ability to follow generalized sets of operations, called programs. These programs enable computers to perform an extremely wide range of tasks",
        
    },

    {
        id:3,
        name:"amma jackson",
        job:"web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            'A "complete" computer including the hardware, the operating system (main software), and peripheral equipment required and used for "full" operation can be referred to as a computer system. This term may as well be used for a group of computers that are connected and work together, in particular a computer network or computer cluster.',
        
    },

    {
        id:4,
        name:"amma watson",
        job:"dancer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            'A "complete" computer including the hardware, the operating system (main software), and peripheral equipment required and used for "full" operation can be referred to as a computer system. This term may as well be used for a group of computers that are connected and work together, in particular a computer network or computer cluster.',
        
    }
]

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


//set starting item
let currentItem = 0;

//load intial item
window.addEventListener('DOMContentLoaded' , () => {
    showPerson();
});


//show person based on item
function showPerson(person){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}
 
//show next person
nextBtn.addEventListener('click', () =>{
    currentItem++;
    if(currentItem > (reviews.length-1) ){
        currentItem = 0;
    }
    showPerson();
})

prevBtn.addEventListener('click' ,() => {
    currentItem--;
    if(currentItem < 0 ){
        currentItem = reviews.length-1;
    }
    showPerson();
})

//random review
randomBtn.addEventListener('click',() => {
    currentItem = (Math.floor(Math.random()*(reviews.length )));
    showPerson();
})























