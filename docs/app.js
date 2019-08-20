const hero = $('.hero');
const slider = $('.slider');
const logo = $('#logo');
const burger = $('.burger');
const headline = $('.headline');

const tl = new TimelineMax();

tl.fromTo(hero,1.5,{height:'0%'},{height:'80%', ease: Power3.easeInOut})
.fromTo(hero,1.2,{width:'100%'},{width:'80%', ease: Power3.easeInOut})
.fromTo(slider,1.2,{x:'-100%'},{x:'0%', ease: Power3.easeInOut}, '-=1')
