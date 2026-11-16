// Hiermit soll man eine falsche Zählung rückgängig machen.
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Timon += -3
})
// Hiermit soll hochgezählt werden.
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Timon += 2
})
let Timon = 3
basic.forever(function () {
    basic.showNumber(Timon)
})
