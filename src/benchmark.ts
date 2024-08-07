import { format1, format2 } from './format'

function benchmark(func: Function, inputString: string, iterations: number) {
  const startTime = performance.now()

  for (let i = 0; i < iterations; i++) {
    func(inputString)
  }

  const endTime = performance.now()
  const duration = endTime - startTime

  console.log(`${func.name} took ${duration} milliseconds for ${iterations} iterations.`)
}

const ITERATIONS = 1000000

console.log('Running benchmark...')

benchmark(format1, '20220420201001', ITERATIONS)
benchmark(format2, '20220420201001', ITERATIONS)
