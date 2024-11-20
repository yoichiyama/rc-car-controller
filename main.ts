radio.setGroup(123)
basic.showIcon(IconNames.Square)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < 30 && input.rotation(Rotation.Pitch) > -10) {
        radio.sendString("進む")
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . # # # .
            `)
    } else if (input.rotation(Rotation.Roll) > 30) {
        radio.sendString("右")
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            # # # # .
            # # # # #
            # # # # .
            . . # . .
            `)
    } else if (input.rotation(Rotation.Roll) < -30) {
        radio.sendString("左")
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # #
            # # # # #
            . # # # #
            . . # . .
            `)
    } else if (input.rotation(Rotation.Pitch) < -30) {
        radio.sendString("戻る")
        basic.pause(200)
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
