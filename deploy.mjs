import { readFileSync } from 'fs'
import Bundlr from '@bundlr-network/client'

async function main() {
  const key = JSON.parse(readFileSync('wallet.json').toString())
  const bundlr = new Bundlr.default('https://node2.bundlr.network', 'arweave', key)
  const data = readFileSync("./example/widget.js", "utf-8")
  const tx = bundlr.createTransaction(data, {
    tags: [{ name: 'Content-Type', value: 'text/javascript' }]
  })
  await tx.sign()
  const result = await tx.upload()
  console.log(result)
}

main()