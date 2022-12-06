import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const runDataBase = (): void => {
  const CLUSTER = process.env.CLUSTER as string
  void mongoose.connect(CLUSTER)
}

export default runDataBase
