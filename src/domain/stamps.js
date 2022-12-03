import { Async, ReaderT } from 'crocks'

const { of, ask, lift } = ReaderT(Async)

const STAMP_CONTRACT = 'FMRHYgSijiUNBrFy-XqyNNXenHsCV0ThR4lGAPO4chA'

export const stampsByAddress = (addr) =>
  of(addr)
    .chain(addr => ask(({ query }) =>
      Async.fromPromise(query)(STAMP_CONTRACT,
        ['compose',
          ['filter', ['propEq', 'address', addr]],
          ['values'],
          ['prop', 'stamps']
        ])
    ))
    .chain(lift)