let vochtigheid = 0
basic.forever(function () {
    vochtigheid = pins.analogReadPin(AnalogPin.P0)
    if (vochtigheid < 500) {
        basic.showIcon(IconNames.Sad)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showString("Water ok")
        basic.pause(5000)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
