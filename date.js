const dateContainer = document.querySelector('.js-date');



function getDate(){
  // yyyy.mm.dd
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth()+1;
    const date =d.getDate();

    const dateString = `${year}.${month}.${date}`;

    dateContainer.innerText = dateString;
}



function init(){
    getDate();

}

init();