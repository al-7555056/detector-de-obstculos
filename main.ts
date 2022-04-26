let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 8) {
        maqueen.motorStop(maqueen.Motors.All)
        if (randint(0, 1) == 1) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 500)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
            basic.pause(1000)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        }
        if (randint(0, 1) == 0) {
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.motorStop(maqueen.Motors.M2)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        } else {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        }
        basic.pause(500)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
})
