enum RadioMessage {
    message1 = 49434,
    Hallo = 324,
    Tschüss = 7978,
    Ja = 47166,
    Nein = 13013
}
/**
 * Homescreen
 */
input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    music.playTone(659, music.beat(BeatFraction.Whole))
})
radio.onReceivedString(function (receivedString) {
    let recivedstring = 0
    basic.showString("" + (recivedstring))
})
let Programm_Nachrichten_msg_2 = 0
let Programm_Musik_Song = 0
let Programm_Nachrichten_msg_1 = 0
let Programm_Nachrichten_Kanal_1 = 0
let Programm_Zufallszahl_MaximaleZahl = 0
let Programm_MusikPlay_Pause = 0
let Programm_Nachrichten_Kanal_2 = 0
let Standby = 0
let Programm_Galerie_2 = 0
let Programm_Galerie_1 = 0
let Programm_Zufallszahlengenartor_1 = 0
let Programm_Musik = 0
let Programm_Taschenrechner = 0
let Messenger_Variable_1 = 0
basic.setLedColor(0xff0000)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . . .
    . # # . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . . . # .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . # # .
    . . . # .
    . # # # .
    . . . . .
    `)
let Homescreen_1 = 1
basic.turnRgbLedOff()
basic.forever(function () {
    if (Homescreen_1 == 1) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            Homescreen_1 = 0
            Messenger_Variable_1 = 1
        }
        if (input.buttonIsPressed(Button.B)) {
            Homescreen_1 += 1
        }
    }
})
basic.forever(function () {
    if (Homescreen_1 == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            Homescreen_1 = 0
            Programm_Taschenrechner = 1
        }
        if (input.buttonIsPressed(Button.A)) {
            Homescreen_1 += -1
        }
        if (input.buttonIsPressed(Button.B)) {
            Homescreen_1 += 1
        }
    }
})
basic.forever(function () {
    if (Homescreen_1 == 3) {
        basic.showIcon(IconNames.EigthNote)
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            Homescreen_1 = 0
            Programm_Musik = 1
        }
        if (input.buttonIsPressed(Button.A)) {
            Homescreen_1 += -1
        }
        if (input.buttonIsPressed(Button.B)) {
            Homescreen_1 += 1
        }
    }
})
basic.forever(function () {
    if (Homescreen_1 == 4) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            Homescreen_1 = 0
            Programm_Zufallszahlengenartor_1 = 1
        }
        if (input.buttonIsPressed(Button.A)) {
            Homescreen_1 += -1
        }
        if (input.buttonIsPressed(Button.B)) {
            Homescreen_1 += 1
        }
    }
})
basic.forever(function () {
    if (Homescreen_1 == 5) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            Homescreen_1 = 0
            Programm_Galerie_1 = 1
            Programm_Galerie_2 = 1
        }
        if (input.buttonIsPressed(Button.A)) {
            Homescreen_1 += -1
        }
        if (input.buttonIsPressed(Button.B)) {
            Homescreen_1 += 1
        }
    }
})
/**
 * Programm:e
 */
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB) && Homescreen_1 == 0) {
        music.playTone(147, music.beat(BeatFraction.Whole))
        Messenger_Variable_1 = 0
        Programm_Musik = 0
        Programm_Taschenrechner = 0
        Programm_Galerie_1 = 0
        Homescreen_1 = 1
    }
    if (Homescreen_1 > 0) {
        Messenger_Variable_1 = 0
        Programm_Musik = 0
        Programm_Taschenrechner = 0
        basic.turnRgbLedOff()
        if (input.buttonIsPressed(Button.AB)) {
            basic.setLedColor(0xff0000)
            Homescreen_1 = 0
            Standby = 1
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
    if (Standby == 1 && input.buttonIsPressed(Button.AB)) {
        Homescreen_1 = 1
    }
})
basic.forever(function () {
    if (Messenger_Variable_1 == 1) {
        radio.setGroup(Programm_Nachrichten_Kanal_2)
    }
})
basic.forever(function () {
    if (Programm_Musik == 1) {
        if (Programm_MusikPlay_Pause == 0) {
            basic.showLeds(`
                . # . . .
                . # # . .
                . # # # .
                . # # . .
                . # . . .
                `)
            if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                Programm_MusikPlay_Pause = 1
            }
        } else if (Programm_MusikPlay_Pause == 1) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                `)
            if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                Programm_MusikPlay_Pause = 0
                music.stopAllSounds()
            }
        }
    }
})
basic.forever(function () {
    if (Programm_Zufallszahlengenartor_1 == 1) {
        basic.showNumber(randint(0, Programm_Zufallszahl_MaximaleZahl))
        Programm_Zufallszahl_MaximaleZahl = pins.analogReadPin(AnalogPin.P2)
    }
})
basic.forever(function () {
    if (Programm_Taschenrechner == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (Programm_Galerie_1 == 1) {
        if (input.buttonIsPressed(Button.A)) {
            Programm_Galerie_2 += -1
        }
        if (input.buttonIsPressed(Button.B)) {
            Programm_Galerie_2 += 1
        }
    }
})
basic.forever(function () {
    if (Messenger_Variable_1 == 1 && !(input.buttonIsPressed(Button.A))) {
        Programm_Nachrichten_Kanal_1 = Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 0, 4)
        Programm_Nachrichten_Kanal_2 = Math.round(Programm_Nachrichten_Kanal_1)
        basic.showNumber(Programm_Nachrichten_Kanal_2)
    }
    if (!(input.buttonIsPressed(Button.A))) {
        Programm_Nachrichten_msg_1 = 0
        radio.setGroup(Programm_Nachrichten_Kanal_2)
        basic.pause(300)
    }
})
basic.forever(function () {
    if (Programm_Galerie_2 == 1) {
        basic.showIcon(IconNames.Heart)
    }
    if (Programm_Galerie_2 == 2) {
        basic.showIcon(IconNames.Happy)
    }
    if (Programm_Galerie_2 == 3) {
        basic.showIcon(IconNames.Sad)
    }
    if (Programm_Galerie_1 == 1 && Programm_Galerie_2 == 4) {
        basic.showIcon(IconNames.Confused)
    }
    if (Programm_Galerie_1 == 1 && Programm_Galerie_2 == 5) {
        basic.showIcon(IconNames.Angry)
    }
    if (Programm_Galerie_1 == 1 && Programm_Galerie_2 == 6) {
        basic.showIcon(IconNames.Asleep)
    }
    if (Programm_Galerie_1 == 1 && Programm_Galerie_2 == 7) {
        basic.showIcon(IconNames.Surprised)
    }
    if (Programm_Galerie_1 == 1 && Programm_Galerie_2 == 8) {
        basic.showIcon(IconNames.Silly)
    }
    if (Programm_Galerie_1 == 1 && Programm_Galerie_2 == 8) {
        basic.showIcon(IconNames.Fabulous)
    }
    if (Programm_Galerie_1 == 1 && Programm_Galerie_2 == 9) {
        basic.showIcon(IconNames.TShirt)
    }
    if (Programm_Galerie_1 == 1 && Programm_Galerie_2 == 10) {
        basic.showIcon(IconNames.Rollerskate)
    }
    if (Programm_Galerie_1 == 1 && Programm_Galerie_2 == 11) {
        basic.showIcon(IconNames.Rollerskate)
    }
})
basic.forever(function () {
    if (Messenger_Variable_1 == 1) {
        if (Programm_Nachrichten_msg_1 == 1) {
            basic.showString("Hallo")
            if (input.isGesture(Gesture.Shake)) {
                radio.sendMessage(RadioMessage.Hallo)
            }
        }
        if (Programm_Nachrichten_msg_1 == 2) {
            basic.showString("tschüss")
            if (input.isGesture(Gesture.Shake)) {
                radio.sendMessage(RadioMessage.Tschüss)
            }
        }
        if (Programm_Nachrichten_msg_1 == 3) {
            basic.showString("Ja")
            if (input.isGesture(Gesture.Shake)) {
                radio.sendMessage(RadioMessage.Ja)
            }
        }
        if (Programm_Nachrichten_msg_1 == 4) {
            basic.showString("Nein")
            if (input.isGesture(Gesture.Shake)) {
                radio.sendMessage(RadioMessage.Nein)
            }
        }
    }
})
basic.forever(function () {
    if (Programm_MusikPlay_Pause == 1) {
        Programm_Musik_Song = Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 1, 4)
        if (Programm_Musik_Song == 1) {
            basic.showNumber(1)
            music.playMelody("C5 B A G F E D C ", 270)
            music.playMelody("C D E F G A B C5 ", 248)
            music.playMelody("E B C5 A B G A F ", 248)
            music.playMelody("A F E F D G E F ", 326)
            music.playMelody("C5 A B G A F G E ", 259)
            music.playMelody("G B A G C5 B A B ", 244)
            music.playMelody("B A G A G F A C5 ", 255)
            music.playMelody("G F G A - F E D ", 307)
            music.playMelody("E D G F B A C5 B ", 248)
            music.playMelody("C5 G B A F A C5 B ", 263)
        }
        if (Programm_Musik_Song == 2) {
            music.playMelody("E G D A B G C5 D ", 118)
            music.playMelody("F G A B E C5 D C ", 118)
            music.playMelody("E B C5 A G D F E ", 118)
            music.playMelody("C G F B D A C C5 ", 120)
        }
    }
})
basic.forever(function () {
    basic.pause(250)
    if (input.buttonIsPressed(Button.A)) {
        Programm_Nachrichten_msg_2 = Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 0, 4)
        Programm_Nachrichten_msg_1 = Math.round(Programm_Nachrichten_msg_2)
    }
})
