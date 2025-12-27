console.log(gsap);

const imgs = document.querySelectorAll('.imgg')
const text = document.querySelector('#text')
const _train = document.querySelectorAll('#train>ul>li')
const img = document.querySelectorAll('.trainy>figure>img')
const cap = document.querySelectorAll('.trainy>figure>figcaption')
const Qs = document.querySelector('#question')
const anss = document.querySelectorAll('#answers>ul>li')
let turn = 0
const btn = document.querySelector('#btn')
const scores = {
    A: 0,
    B: 0,
    C: 0
}
const title = document.querySelector('#title')
const desc = document.querySelector('#desc')
const btnR = document.querySelector('#resett')
const resultt = document.querySelector('#resultt')


// gsapp// 

gsap.from(imgs, {
    opacity: 0,
    scale: 0.5,
    stagger: 0.5,
    delay: 0.5,
    ease: "power2.out",
})
gsap.from(text, {
    opacity: 0,
    scale: 0.5,
    delay: 2.9,
    ease: "power2.out",

})
gsap.registerPlugin(ScrollTrigger);




ScrollTrigger.create({
  trigger: 'main',
  start: 'top top',
  end: '+=1500', 
  pin: true,
  scrub: true,
});


// gsapp// 

// questions// 
const exam = [
    {
        id: 1,
        question: 'وقتی با یک مشکل جدید روبه‌رو می‌شوید، ابتدا چه کاری انجام می‌دهید؟',
        answers: {
            ans1: 'A) تحلیل منطقی موقعیت',
            ans2: 'B) جستجوی راه‌حل‌های خلاقانه',
            ans3: 'C) مشورت با دیگران و دریافت نظر آن‌ها'
        }
    },
    {
        id: 2,
        question: 'در کار گروهی معمولاً ترجیح می‌دهید چه نقشی داشته باشید؟',
        answers: {
            ans1: 'A) برنامه‌ریزی و سازمان‌دهی کاره',
            ans2: 'B) ارائه و به اشتراک گذاشتن ایده‌های نو',
            ans3: 'C) حمایت و همراهی اعضای تیم'
        }
    },
    {
        id: 3,
        question: 'معمولاً تصمیمات خود را چگونه اتخاذ می‌کنید؟',
        answers: {
            ans1: 'A) بر اساس واقعیت‌ها و منطق',
            ans2: 'B) بر اساس حس درونی و شهود',
            ans3: 'C) بر اساس احساسات و نیازهای دیگران'
        }
    },
    {
        id: 4,
        question: 'زمانی که برنامه‌ها به‌طور ناگهانی تغییر می‌کنند، چه واکنشی دارید؟',
        answers: {
            ans1: 'A) دوباره برنامه‌ریزی و سازمان‌دهی می‌کنم',
            ans2: 'B) سریع خود را تطبیق می‌دهم و خلاقانه عمل می‌کنم',
            ans3: 'C) استرس می‌گیرم اما به دیگران توجه می‌کنم'
        }
    },
    {
        id: 5,
        question: 'بیشترین انگیزه شما زمانی ایجاد می‌شود که:',
        answers: {
            ans1: 'A) اهداف و مسیرها مشخص و روشن باشند',
            ans2: 'B) آزادی عمل و انعطاف داشته باشید',
            ans3: 'C) تلاش‌ها و اقدامات شما مورد قدردانی قرار گیرد'
        }
    },
    {
        id: 6,
        question: 'در اوقات فراغت ترجیح می‌دهید چه کاری انجام دهید؟',
        answers: {
            ans1: 'A) برنامه‌ریزی یا یادگیری',
            ans2: 'B) فعالیت‌های خلاقانه و ایده‌پردازی',
            ans3: 'C) معاشرت و ارتباط با دیگران'
        }
    },
    {
        id: 7,
        question: 'چطور با استرس کنار می‌آیید؟',
        answers: {
            ans1: 'A) با نظم، برنامه‌ریزی و تمرکز',
            ans2: 'B) با انجام کارهای خلاقانه',
            ans3: 'C) با صحبت و مشورت با دیگران'
        }
    },
    {
        id: 8,
        question: 'هنگام آغاز یک کار جدید، چگونه پیش می‌روید؟',
        answers: {
            ans1: 'A) نیاز به برنامه‌ریزی واضح دارم',
            ans2: 'B) شروع می‌کنم و در طول مسیر خود را تطبیق می‌دهم',
            ans3: 'C) از دیگران راهنمایی می‌گیرم'
        }
    },
    {
        id: 9,
        question: 'دیگران معمولاً شما را چگونه توصیف می‌کنند؟',
        answers: {
            ans1: 'A) منطقی',
            ans2: 'B) خلاق',
            ans3: 'C) دلسوز و همدل'
        }
    },
    {
        id: 10,
        question: 'در بحث‌ها معمولاً چه رفتاری دارید؟',
        answers: {
            ans1: 'A) تمرکز بر واقعیت‌ها و داده‌ها',
            ans2: 'B) به اشتراک گذاشتن ایده‌ها',
            ans3: 'C) گوش دادن و همدلی با دیگران'
        }
    },
    {
        id: 11,
        question: 'سبک کاری شما بیشتر چگونه است؟',
        answers: {
            ans1: 'A) ساختارمند و برنامه‌محور',
            ans2: 'B) منعطف و تطبیق‌پذیر',
            ans3: 'C) مشارکتی و همکارانه'
        }
    },
    {
        id: 12,
        question: 'هنگام مواجهه با ضرب‌الاجل‌ها چگونه عمل می‌کنید؟',
        answers: {
            ans1: 'A) از قبل برنامه‌ریزی می‌کنم',
            ans2: 'B) تحت فشار بهتر کار می‌کنم',
            ans3: 'C) با دیگران هماهنگ می‌شوم'
        }
    },
    {
        id: 13,
        question: 'بیشترین رضایت شما در چه زمانی است؟',
        answers: {
            ans1: 'A) وقتی همه‌چیز تحت کنترل باشد',
            ans2: 'B) وقتی چیزی جدید خلق می‌کنید',
            ans3: 'C) وقتی دیگران در کنار شما احساس راحتی دارند'
        }
    },
    {
        id: 14,
        question: 'بزرگ‌ترین نقطه قوت شما چیست؟',
        answers: {
            ans1: 'A) حل مسئله',
            ans2: 'B) خلاقیت و نوآوری',
            ans3: 'C) همدلی و درک دیگران'
        }
    },
    {
        id: 15,
        question: 'اگر می‌توانستید تنها یک ارزش را انتخاب کنید، آن کدام است؟',
        answers: {
            ans1: 'A) ثبات و پایداری',
            ans2: 'B) نوآوری و خلاقیت',
            ans3: 'C) ارتباط انسانی و تعامل'
        }
    },

]
// questions// 
// types// 
const resultData = {
    A: {
        title: 'تحلیل‌گر منطقی',
        desc: 'منطقی، ساختارمند و داده‌محور هستی. ترجیح می‌دهی با برنامه‌ریزی دقیق و بر اساس واقعیت‌ها تصمیم بگیری و احساسات را کمتر وارد تصمیم‌هایت کنی.'
    },
    B: {
        title: 'کاوشگر خلاق',
        desc: 'خلاق، شهودی و علاقه‌مند به تجربه‌های تازه هستی. از ایده‌پردازی، انعطاف‌پذیری و کشف مسیرهای جدید لذت می‌بری.'
    },
    C: {
        title: 'هماهنگ‌کننده اجتماعی',
        desc: 'همدل، مشارکتی و انسان‌محور هستی. ارتباط عاطفی، کار تیمی و ایجاد روابط سالم برایت اهمیت زیادی دارد.'
    },
    D: {
        title: 'اجراکننده عمل‌گرا',
        desc: 'اقدام‌محور، متعادل و نتیجه‌گرا هستی. تمرکزت روی اجرا، بهره‌وری و به سرانجام رساندن کارهاست.'
    }
}
// types// 


// set questions// 

setQues()

function setQues() {
    anss.forEach((val) => {
        val.classList.remove('active')
    })
    // reset li style// 
    Qs.innerText = exam[turn].id + '.' + exam[turn].question
    anss[0].innerText = exam[turn].answers.ans1
    anss[1].innerText = exam[turn].answers.ans2
    anss[2].innerText = exam[turn].answers.ans3


}
// set questions// 
// train// 
function updateTrain() {
  img.forEach((image, i) => {
    if (i < turn) {
      image.style.opacity = '1'
      cap[i].style.backgroundColor = '#000'
    }
  })
}

// train// 

// go next questions 
anss.forEach((item, index) => {
    item.addEventListener('click', () => {
        anss.forEach(val => val.classList.remove('active'))
        item.classList.add('active')

        if (index === 0) scores.A++
        if (index === 1) scores.B++
        if (index === 2) scores.C++


        setTimeout(() => {
            turn++
              updateTrain(turn)
            if (turn < exam.length) {

                setQues()
            } else {
                showResult()
            }
        }, 200);


    })


})
// go next questions 

// result// 
function showResult() {

  let type = 'D'
  const { A, B, C } = scores

  if (A >= B + 2 && A >= C + 2) type = 'A'
  else if (B >= A + 2 && B >= C + 2) type = 'B'
  else if (C >= A + 2 && C >= B + 2) type = 'C'

  
  title.innerText = resultData[type].title
  desc.innerText = resultData[type].desc
  

  
  btnR.onclick = () => {
      location.reload()
  }
resultt.scrollIntoView({ behavior: 'smooth' })
}
