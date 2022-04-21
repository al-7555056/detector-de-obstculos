let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 4) {
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 500)
        if (randint(0, 1) == 0) {
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.motorStop(maqueen.Motors.M2)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        } else {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        }
        basic.pause(1000)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
