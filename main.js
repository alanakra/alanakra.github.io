import './style.css'
import { gsap } from 'gsap'
import barba from '@barba/core'
const banoverl = document.querySelector('.banoverl')
const tl = gsap.timeline()

function delay (n) {
  return new Promise((done) => {
    setTimeout(()=>{
      done()
    }, n)
  })
}

barba.init({
  sync: true,

  transitions: [
    {
      async leave () {
        const done = this.async()
        tl.to(banoverl, {
            left: '100%',
            ease: "power4.out",
            duration: 2
          })
          await delay(800)
          done()
        }
    }
  ]
})