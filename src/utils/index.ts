import mongoose from 'mongoose'

export const connectMongo = (): void => {

}

export const closeMongo = (): void => {
  mongoose.connection.close()
    .then(r => console.log(r))
    .catch(e => {
      throw new Error(e)
    })
}
