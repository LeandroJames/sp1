import {add} from "../app/maths_101.js"
import {substract} from "../app/maths_101.js"
import {multiply} from "../app/maths_101.js"
import {divide} from "../app/maths_101.js"

test("Given input 2 and 2, expect 4", ()=> {
    expect(add(2, 2)).toBe(4)
})

test("Given input 3 and 4, expect 7", ()=> {
    expect(add(3, 4)).toBe(7)
})

test("Given input A and B, expect error", ()=> {
    try {
        add("A", "B")
    } catch (error) {
        expect(error.message).toBe("Input must be a number")
    }
})

test("Given only one input, expect error", ()=> {
    try {
        add(5)
    } catch (error) {
        expect(error.message).toBe("Two inputs are needed for this function")
    }
})

test("Given input 8 and 2, expect 6", ()=> {
    expect(substract(8, 2)).toBe(6)
})

test("Given input 3 and 4, expect -1", ()=> {
    expect(substract(3, 4)).toBe(-1)
})

test("Given input A and B, expect error", ()=> {
    try {
        substract("A", "B")
    } catch (error) {
        expect(error.message).toBe("Input must be a number")
    }
})

test("Given only one input, expect error", ()=> {
    try {
        substract(5)
    } catch (error) {
        expect(error.message).toBe("Two inputs are needed for this function")
    }
    expect(add(10, 20)).toBe(30)
})

test("Given input 8 and 2, expect 16", ()=> {
    expect(multiply(8, 2)).toBe(16)
})

test("Given input 11 and 11, expect 121", ()=> {
    expect(multiply(11, 11)).toBe(121)
})

test("Given input A and B, expect error", ()=> {
    try {
        multiply("A", "B")
    } catch (error) {
        expect(error.message).toBe("Input must be a number")
    }
})

test("Given only one input, expect error", ()=> {
    try {
        multiply(5)
    } catch (error) {
        expect(error.message).toBe("Two inputs are needed for this function")
    }
})

test("Given input 8 and 2, expect 4", ()=> {
    expect(divide(8, 2)).toBe(4)
})

test("Given input 0 and 4, expect 0", ()=> {
    expect(divide(0, 4)).toBe(0)
})

test("Given input 4 and 0, expect error", ()=> {
    try {
        divide(4, 0)
    } catch (error) {
        expect(error.message).toBe("Divisor must be other than 0")
    }
})