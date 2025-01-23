import { Connection , clusterApiUrl, PublicKey } from '@solana/web3.js'

const network = clusterApiUrl('devnet');
const connection = new Connection(network,'confirmed');

export { connection ,  PublicKey } ;