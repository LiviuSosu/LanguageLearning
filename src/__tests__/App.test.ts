//https://www.digitalocean.com/community/tutorials/vuejs-vue-testing
//https://vitest.dev/guide/
//https://youtu.be/FJRuG85tXV0?t=744
//https://youtu.be/FJRuG85tXV0

import { assert, test } from 'vitest'
import *  as vi from '../__mocks__/axios';
import {render, screen} from "@testing-library/vue"
import {describe, it, expect} from "vitest";
//import App from "../a"

//vi.mock('axios')

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2)
  expect(Math.sqrt(144)).toBe(12)
  expect(Math.sqrt(2)).toBe(Math.SQRT2)
})

