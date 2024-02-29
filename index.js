const styleH1 = {
    'margin':'2rem 0'
}

const h1 = React.createElement('h1',{style:styleH1},'Learn web development');


//first para
const para1Styles = {
'font-size':"16px",
'font-weight':'400',
'line-height':'28px',
'margin': '1rem 0 2rem'
}

const firstP = React.createElement('p',{style:para1Styles},'Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.');


//Second para
const secondP = React.createElement('p', {style:para1Styles},
    'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from ',
    React.createElement('a', { href: '#' }, 'the rest of MDN'),
    ', and other intermediate to advanced resources that assume a lot of previous knowledge.'
);

const thirdP = React.createElement('p',{style:para1Styles},'If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.');

//main Div styles
const styles = {
    'width':'520px',
    'margin':'50px auto'
}


const mainDiv = React.createElement('div',{style:styles},[h1,firstP,secondP,thirdP]); 

ReactDOM.render(mainDiv,document.getElementById("root"));