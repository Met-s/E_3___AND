const entities = [
  {
    text: 'Первый кот',
    img: 'https://a-static.besthdwallpaper.com/scared-kitten-wallpaper-2560x2048-85267_33.jpg'
  },
  {
    text: 'Второй кот',
    img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3463-3139-4630-b563-646166616434__20180225_gaf_uw8_101.jpg'
  },
  {
    text: 'Третий кот',
    img: 'https://on-desktop.com/wps/2017Animals___Cats_Sad_red_cat_standing_on_green_grass_116984_.jpg'
  }
]

const text = document.querySelector('.text')
const img = document.querySelector('.image')

const setEntity = (index) => {
  text.innerText = entities[index].text
  img.style.backgroundImage = `url(${entities[index].img})`
}

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let currentIndex = 0

prev.addEventListener('click', () => {
  setEntity(currentIndex - 1);
  currentIndex -= 1;
})
next.addEventListener('click', () => {
  setEntity(currentIndex + 1);
  currentIndex += 1;
})