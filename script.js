'use strict'

const step1 = document.querySelector('.step-1')
const step2 = document.querySelector('.step-2-mo')
const step2yr = document.querySelector('.step-2-yr')
const step3 = document.querySelector('.step-3-mo')
const step3yr = document.querySelector('.step-3-yr')
const step4 = document.querySelector('.step-4-mo')
const step4yr = document.querySelector('.step-4-yr')
const step5 = document.querySelector('.step-5')




const cardYearlyCheckBox = document.querySelector('#yearly-checkbox')
const cardMonthlyCheckBox = document.querySelector('#monthlyCheckBox')
const nextStepBtn = document.querySelector('.nextStepBtn');
const nextStepBtnForMobile = document.querySelector('.nextStepBtn-for-mobile');
const step2monBtn = document.querySelector('#step2MonthBtn')
const step2yearBtn = document.querySelector('#step2YearBtn');
const step3monBtn = document.querySelector('#step3monBtn');
const step3yearBtn = document.querySelector('#step3yearBtn')
const confirmBtnMon = document.querySelector('#confirmBtnMon')
const confirmBtnYear = document.querySelector('#confirmBtnYear')
const numberAtTopColor1 = document.querySelector('.num-one')
const numberAtTopColor2 = document.querySelector('.num-two')
const numberAtTopColor3 = document.querySelector('.num-three')
const numberAtTopColor4 = document.querySelector('.num-four');
const borderColor = document.querySelectorAll('.card')
let colorValue = getComputedStyle(document.documentElement).getPropertyValue('--Marine-blue')


// For form validation
const errorMessage = document.querySelector('#details-error')
const emailField = document.querySelector('#email');
const emailError = document.querySelector('#email-error')
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

emailField.addEventListener('blur', function() {
    const givenEmail = emailField.value
    if (!emailRegex.test(givenEmail)) {
        nextStepBtn.disabled = true;
        emailError.textContent = 'email is invalid'
        errorMessage.textContent = 'please provide your details'
    } else {
        nextStepBtn.disabled = false;
        emailError.textContent = ''
        nextStepBtn.style.backgroundColor = colorValue
    }
})



borderColor.forEach(card => {
    card.addEventListener('click', () => {
        card.style.borderColor = colorValue

    })
})



function btnHandler(event) {
    step1.style.display = 'none'
    step2.style.display = 'block'
    numberAtTopColor1.style.backgroundColor = 'transparent'
    numberAtTopColor2.style.backgroundColor = colorValue



}

function btnHandler2(event) {
    step2.style.display = 'none'
    step2yr.style.display = 'block'

}

function btnHandler3(event) {
    step2.style.display = 'block'
    step2yr.style.display = 'none'

}

function btnHandler4(event) {
    step2.style.display = 'none'
    step3.style.display = 'block'
    numberAtTopColor2.style.backgroundColor = 'transparent'
    numberAtTopColor3.style.backgroundColor = colorValue

}

function btnHandler5(event) {
    step2yr.style.display = 'none'
    step3yr.style.display = 'block'
    numberAtTopColor2.style.backgroundColor = 'transparent'
    numberAtTopColor3.style.backgroundColor = colorValue


}

function btnHandler6(event) {
    step3.style.display = 'none'
    step4.style.display = 'block'
    numberAtTopColor3.style.backgroundColor = 'transparent'
    numberAtTopColor4.style.backgroundColor = colorValue


}

function btnHandler7(event) {
    step3yr.style.display = 'none'
    step4yr.style.display = 'block'
    numberAtTopColor3.style.backgroundColor = 'transparent'
    numberAtTopColor4.style.backgroundColor = colorValue


}

function btnHandler8(event) {
    step4.style.display = 'none'
    step5.style.display = 'block'
    numberAtTopColor3.style.backgroundColor = 'transparent'
    numberAtTopColor4.style.backgroundColor = colorValue



}

function btnHandler9(event) {
    step4yr.style.display = 'none'
    step5.style.display = 'block'
    numberAtTopColor3.style.backgroundColor = 'transparent'
    numberAtTopColor4.style.backgroundColor = colorValue


}
// borderColor.addEventListener('click', whenElementAreClicked)

cardMonthlyCheckBox.addEventListener('click', btnHandler3)

cardYearlyCheckBox.addEventListener('click', btnHandler2)

nextStepBtn.addEventListener('click', btnHandler)
nextStepBtnForMobile.addEventListener('click', btnHandler)

step2monBtn.addEventListener('click', btnHandler4)
step2yearBtn.addEventListener('click', btnHandler5)
step3monBtn.addEventListener('click', btnHandler6)
step3yearBtn.addEventListener('click', btnHandler7)
confirmBtnMon.addEventListener('click', btnHandler8)
confirmBtnYear.addEventListener('click', btnHandler9)