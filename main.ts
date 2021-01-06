basic.showString("peried")
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . #
    . . . . .
    . . . . .
    `)
basic.showString("question mark")
basic.showLeds(`
    . # # . .
    # . . # .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.showString("exclamation")
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.showString("plus")
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.showString("" + (images.createBigImage(`
    . . . . . . . . . .
    . # # # # # # # # .
    . . . . . . . . . .
    . # # # # # # # # .
    . . . . . . . . . .
    `)))
basic.pause(100)
basic.forever(function () {
	
})
