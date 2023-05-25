enum RadioMessage {
    Hallo = 324,
    Tschuess = 44147,
    Nein = 13013,
    Ja = 47166,
    message1 = 49434
}
radio.onReceivedString(function (receivedString) {
    if (Messenger_Variable_1 == 1) {
        basic.showString(receivedString)
        music.playMelody("D - A E - - - - ", 120)
    }
})
let Timer_Zeit = 0
let Programm_Zufallszahl_MaximaleZahl = 0
let Programm_Tascheenrechner_Auswahl_Zahl_2 = 0
let Programm_Taschenrechner_Lampe = 0
let Programm_Taschenrechner_Auswahl_Zahl_1 = 0
let Programm_Musik_Song = 0
let Programm_Musik_1 = 0
let Programm_MusikPlay_Pause = 0
let Standby = 0
let Programm_Timer_1 = 0
let Programm_Ventilator = 0
let Programm_Zufallszahlengenartor_1 = 0
let Programm_Musik = 0
let Programm_Galerie_2 = 0
let Programm_Galerie_1 = 0
let Programm_Taschenrechner = 0
let Taschenrechner_Zahl_1 = 0
let Messenger_Variable_1 = 0
radio.setGroup(1)
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
    if (Homescreen_1 > 7) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        if (input.buttonIsPressed(Button.A)) {
            Homescreen_1 += -1
        }
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            basic.showString("Seriennummer:")
            basic.showNumber(control.deviceSerialNumber())
        }
    }
})
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
            radio.setGroup(1)
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
            Taschenrechner_Zahl_1 = 1
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
    if (Homescreen_1 == 6) {
        basic.showLeds(`
            . # . . .
            . . # . #
            . # # # .
            # . # . .
            . . . # .
            `)
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            Homescreen_1 = 0
            Programm_Ventilator = 1
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
    if (Homescreen_1 == 7) {
        basic.showLeds(`
            # # # # #
            . # # # .
            . . # . .
            . # # # .
            # # # # #
            `)
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            Homescreen_1 = 0
            Programm_Timer_1 = 1
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
    if (input.buttonIsPressed(Button.AB) && Homescreen_1 == 0) {
        music.playTone(147, music.beat(BeatFraction.Whole))
        Messenger_Variable_1 = 0
        Programm_Musik = 0
        Programm_Taschenrechner = 0
        Programm_Zufallszahlengenartor_1 = 0
        Programm_Galerie_1 = 0
        Homescreen_1 = 1
        Programm_Galerie_2 = 0
    }
    if (Homescreen_1 > 0) {
        Messenger_Variable_1 = 0
        Programm_Musik = 0
        Programm_Taschenrechner = 0
        Programm_Zufallszahlengenartor_1 = 0
        Programm_Galerie_2 = 0
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
        radio.setGroup(1)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . .
            . . # . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            # . . . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            # . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (Programm_MusikPlay_Pause == 1) {
        Programm_Musik_1 = Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 1, 2)
        Programm_Musik_Song = Math.round(Programm_Musik_1)
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
    if (Programm_Taschenrechner == 1) {
        if (Taschenrechner_Zahl_1 == 1) {
            Programm_Taschenrechner_Auswahl_Zahl_1 = pins.analogReadPin(AnalogPin.P2)
            basic.showNumber(Programm_Taschenrechner_Auswahl_Zahl_1)
            if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                Programm_Taschenrechner_Lampe = 1
                Taschenrechner_Zahl_1 = 2
            }
        }
        if (Taschenrechner_Zahl_1 == 2) {
            Programm_Tascheenrechner_Auswahl_Zahl_2 = pins.analogReadPin(AnalogPin.P2)
            basic.showNumber(Programm_Tascheenrechner_Auswahl_Zahl_2)
            if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                Programm_Taschenrechner_Lampe = 1
                Taschenrechner_Zahl_1 = 3
            }
        }
        if (Taschenrechner_Zahl_1 == 3) {
            basic.showNumber(Programm_Taschenrechner_Auswahl_Zahl_1 + Programm_Tascheenrechner_Auswahl_Zahl_2)
            Taschenrechner_Zahl_1 = 1
        }
        if (input.buttonIsPressed(Button.AB)) {
            Taschenrechner_Zahl_1 = 0
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
    if (Programm_Ventilator == 1) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.setLedColor(0x00ff00)
            basic.showLeds(`
                . . . # .
                # . # . .
                . # # # .
                . . # . #
                . # . . .
                `)
            basic.showLeds(`
                . # . . .
                . . # . #
                . # # # .
                # . # . .
                . . . # .
                `)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.showLeds(`
                . . # . .
                # . # . #
                # . # . #
                # . . . #
                . # # # .
                `)
            basic.setLedColor(0xff0000)
        }
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
    if (Programm_Timer_1 == 1 && Timer_Zeit == 0) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P2))
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            basic.setLedColor(0x00ff00)
            Timer_Zeit = pins.analogReadPin(AnalogPin.P2) * 100
        }
        if (Timer_Zeit != 0) {
            basic.pause(Timer_Zeit)
            basic.setLedColor(0xff0000)
            music.playTone(175, music.beat(BeatFraction.Whole))
            music.playTone(220, music.beat(BeatFraction.Whole))
            music.playTone(175, music.beat(BeatFraction.Whole))
            music.playTone(220, music.beat(BeatFraction.Whole))
        }
    }
})
basic.forever(function () {
    if (Programm_Galerie_2 == 12) {
        basic.showIcon(IconNames.Fabulous)
    }
})
basic.forever(function () {
    if (Programm_Galerie_2 == 6) {
        basic.showIcon(IconNames.Asleep)
    }
})
basic.forever(function () {
    if (Programm_Galerie_2 == 5) {
        basic.showIcon(IconNames.Angry)
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
    if (Messenger_Variable_1 == 1) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            radio.sendString("Hi")
        }
    }
})
basic.forever(function () {
    if (Programm_Taschenrechner_Lampe == 1) {
        basic.setLedColor(0x00ff00)
        basic.pause(100)
        basic.turnRgbLedOff()
        Programm_Taschenrechner_Lampe = 0
    }
})
basic.forever(function () {
    if (Programm_Galerie_2 == 7) {
        basic.showIcon(IconNames.Surprised)
    }
})
basic.forever(function () {
    if (Programm_Galerie_2 == 8) {
        basic.showIcon(IconNames.Silly)
    }
})
basic.forever(function () {
    if (Programm_Galerie_2 == 3) {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    if (Programm_Galerie_2 == 9) {
        basic.showIcon(IconNames.TShirt)
    }
})
basic.forever(function () {
    if (Programm_Galerie_2 == 10) {
        basic.showIcon(IconNames.Rollerskate)
    }
})
basic.forever(function () {
    if (Programm_Galerie_2 == 4) {
        basic.showIcon(IconNames.Confused)
    }
})
basic.forever(function () {
    if (Programm_Galerie_2 == 11) {
        basic.showIcon(IconNames.Rollerskate)
    }
})
basic.forever(function () {
    if (Programm_Galerie_2 == 2) {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    if (Programm_Galerie_2 == 1) {
        basic.showIcon(IconNames.Heart)
    }
})
