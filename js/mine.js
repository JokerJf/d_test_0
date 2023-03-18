
let body = document.querySelector('body')
let body_html = document.querySelector('.body_html')
let box_forms = document.querySelector('.box_forms')

// кастомный видос
let vid_glob = document.querySelector('.box_2')
let vid = document.querySelector('.box_2 video')
let vid_click = document.querySelector('.box_2 .player_play')
vid_glob.addEventListener('click', vidos)
vid.addEventListener('click', vidos)
vid_click.addEventListener('click', vidos)

function vidos() { // кастомный видио плеер
    if (vid.paused) {
        vid.play();
        vid_click.style.opacity = "0";
    } else {
        vid.pause();
        vid_click.style.opacity = "0.5";
    }
}

// кастомная форма
let box_2_form = document.querySelector('.box_2 .box_2_cont button')
let form_box = document.querySelector('.box_forms .box_2_form')
box_2_form.addEventListener('click', () => { // зависит от ширины 
    if (window.innerWidth > 650) {
        if (form_box.style.display == 'flex') {
            form_box.style.display = 'none'
            body.style.overflow = 'auto'
            body_html.style.opacity = '1'
            box_forms.style.display = 'none'
            box_forms.style.zIndex = ''

        } else {
            form_box.style.display = 'flex'
            body.style.overflow = 'hidden'
            body_html.style.opacity = '0.2'
            box_forms.style.display = 'block'
            box_forms.style.zIndex = '1'

        }
    }
    if (window.innerWidth <= 650) {
        if (form_box.style.display == 'grid') {
            form_box.style.display = 'none'
            body.style.overflow = 'auto'
            body_html.style.opacity = '1'
            box_forms.style.zIndex = ''
            box_forms.style.display = 'none'
        } else {
            form_box.style.display = 'grid'
            body.style.overflow = 'hidden'
            body_html.style.opacity = '0.2'
            box_forms.style.zIndex = '1'
            box_forms.style.display = 'block'
        }
    }


})
let box_2_crest = document.querySelector('.box_2_form .crest_form')
box_2_crest.addEventListener('click', () => {
    form_box.style.display = 'none'
    body.style.overflow = 'auto'
    body_html.style.opacity = '1'
    box_forms.style.zIndex = ''
    box_forms.style.display = 'none'
})

let form = document.querySelector('.box_form form')

let hello = (event) => { // кнопка записи формы  - - - - -
    event.preventDefault()
    let inps = document.querySelectorAll('.box_form input')
    let values = {}
    inps.forEach(item => {
        let { name, value } = item;
        values[name] = value
    })
    console.log(values);
    for (let item of inps) {
        item.value = ''
    }
    // let json = JSON.stringify(values)
    // console.log(json);
    // console.log(JSON.parse(json));

}

form.addEventListener('submit', hello) // кнопка записи формы  - - - - -





// let form_btn = document.querySelector('form .btn')
// form_btn.addEventListener('submit',(eve)=>{
//     eve.preventDefault()
// })


// кастомная форма - 2
let box_2_form_form = document.querySelector('.box_forms .box_2_form form .btn')
let box_2_ten = document.querySelector('.box_forms .box_2_ten')
let crest_ten = document.querySelector('.box_forms .box_2_ten .crest_ten')

// проверка на наличие текста
let box_2_form_name = document.querySelector('.box_forms .box_2_form form .name')
let box_2_form_email = document.querySelector('.box_forms .box_2_form form .email')
let box_2_form_tel = document.querySelector('.box_forms .box_2_form form .tel')

function off_ten() { // форма 2
    box_2_ten.style.display = 'none'
    body.style.overflow = 'auto'
    body_html.style.opacity = '1'
    box_forms.style.zIndex = ''
    box_forms.style.display = 'none'
}

box_2_form_form.addEventListener('click', () => { // проверка на наличие текста
    if (box_2_form_name.value.trim().length > 0) {
        if (box_2_form_email.value.trim().length > 0) {
            if (box_2_form_tel.value.trim().length > 0) {
                body.style.overflow = 'hidden'
                box_2_ten.style.display = 'block'
                form_box.style.display = 'none'
                body_html.style.opacity = '0.2'
                box_forms.style.zIndex = '1'
                box_forms.style.display = 'block'
                setTimeout(off_ten, 10000);
            }
        }
    }


})
crest_ten.addEventListener('click', () => { // закрытие 2 окна формы
    box_2_ten.style.display = 'none'
    body.style.overflow = 'auto'
    body_html.style.opacity = '1'
    box_forms.style.zIndex = ''
    box_forms.style.display = 'none'
})

// block - 9 * * * * * * * * * * * * *

let btn_tsa = document.querySelector('.btn_tsa')
btn_tsa.addEventListener('click', () => {
    let tbt = document.querySelector('.text_block_info .box_text_1 .text_span_and')
    let toc = document.querySelector('.text_block_info .box_text_1 .toc')
    let btn_tsa_p = document.querySelector('.text_block_info .btn_tsa p')
    let btn_tsa_img = document.querySelector('.text_block_info .btn_tsa img')
    let text_block_info = document.querySelector('.text_block_info')
    if (tbt.style.display == 'block') { // скрыть
        toc.style.display = ''
        tbt.style.display = 'none'
        btn_tsa_p.innerHTML = 'Подробнее'
        btn_tsa_img.style.transform = 'rotate(0deg)'
        window.scrollTo({
            top: text_block_info.offsetTop,
            behavior: "smooth"
        })
    } else { // показать 
        toc.style.display = 'none'
        tbt.style.display = 'block'
        btn_tsa_p.innerHTML = 'Скрыть'
        btn_tsa_img.style.transform = 'rotate(180deg)'
    }
})
// transform: rotate(180deg);

// block - 12 * * * * * * * * * * * * *

let form_2 = document.querySelector('.box_forms_2 form')

let hello_2 = (event) => { // кнопка записи формы  - - - - -
    event.preventDefault()
    let inps = document.querySelectorAll('.box_forms_2 input')
    let values = {}
    inps.forEach(item => {
        let { name, value } = item;
        values[name] = value
    })
    console.log(values);
    for (let item of inps) {
        item.value = ''
    }
}

form_2.addEventListener('submit', hello_2) // кнопка записи формы  - - - - -

// block - 2 * * * * * * * * * * * * *

let slide_width = 33.7
let slide_zero = 0
let onli_boll = 0
let slide_X = document.querySelector('.slide_1_mine .slide .del')
let slide_left = document.querySelector('.slide_1_mine .slide .left') // на лево
let slide_right = document.querySelector('.slide_1_mine .slide .right') // на право
let slide_box_all = document.querySelectorAll('.slide_1_mine .slide .slide_box').length // сколько картин
let slide_box_max = (slide_box_all - 3) * -slide_width
slide_X.style.left = 0

function rem_boll() { // Удаляет все классы покраса шаров
    let slide_boll_del = document.querySelectorAll('.slide_boll')
    for (let index = 0; index < (slide_box_all - 2); index++) {
        slide_boll_del[index].classList.remove('onli_poll')
    }
}


slide_left.addEventListener('click', () => { // прокрутка слайдав на право
    let slide_boll_mine = document.querySelectorAll('.slide_boll')
    rem_boll()
    onli_boll = onli_boll - 1
    slide_zero = slide_zero + slide_width
    if (slide_zero > 0) {
        slide_zero = slide_box_max
        onli_boll = slide_box_all - 3
    }
    slide_X.style.left = slide_zero + "%"
    slide_boll_mine[onli_boll].classList.add('onli_poll') // для добавления покраса точки
})

function slide_left_zed(Fox) { // одельная функция для прокрутки слайда после нажания на шар/точка
    slide_zero = 0
    slide_zero = slide_zero - (slide_width * Number(Fox))
    slide_X.style.left = slide_zero + "%"
}

slide_right.addEventListener('click', () => { // прокрутка слайдав на лево
    let slide_boll_mine = document.querySelectorAll('.slide_boll')
    rem_boll()
    onli_boll = onli_boll + 1
    slide_zero = slide_zero - slide_width
    if (slide_zero < slide_box_max) {
        slide_zero = 0
        onli_boll = 0
    }
    slide_X.style.left = slide_zero + "%"
    slide_boll_mine[onli_boll].classList.add('onli_poll') // для добавления покраса точки
})


// функция добавление точек 
function boll_start() { // добавил покрас в первый элем
    let slide_1 = document.querySelectorAll('.slide_boll')
    slide_1[0].classList.add('onli_poll')
}

let slide_div = document.querySelector('.slide_div')
let spawn_boll_nom = 0 // дал шару номер для удобства урпавление слайда
function spawn_boll(Fox) {
    let slide_boll = document.createElement('div')
    slide_boll.classList.add('slide_boll')
    slide_boll.classList.add(spawn_boll_nom)

    slide_boll.addEventListener('click', () => { // создаёт класс номером для корекной работы других функций
        rem_boll()
        slide_boll.classList.add('onli_poll') // для удаление старой покраса точки
        // console.log(slide_boll.classList[1]); 
        slide_left_zed(slide_boll.classList[1])
        onli_boll = Number(slide_boll.classList[1])
    })

    spawn_boll_nom = spawn_boll_nom + 1

    Fox.append(slide_boll)
    boll_start()

}

// spawn_boll(slide_div) создаёт шары ниже слайда
for (let index = 0; index < (slide_box_all - 2); index++) {
    spawn_boll(slide_div)
}

// block - 4 * * * * * * * * * * * * *

// кастомный видос
let vid_z = document.querySelector('.video_z video')
let vid_click_z = document.querySelector('.video_z .video_mine_z .player_play_2')
vid_z.addEventListener('click', vidos_block_4)
vid_click_z.addEventListener('click', vidos_block_4)

function vidos_block_4() { // кастомный видио плеер
    if (vid_z.paused) {
        vid_z.play();
        vid_click_z.style.opacity = "0";
    } else {
        vid_z.pause();
        vid_click_z.style.opacity = "0.5";
    }
}

// block - 3 * * * * * * * * * * * * *