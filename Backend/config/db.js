import mongoose from 'mongoose';

export default function db(url) {
    mongoose.connect(url).
    then(() => console.log('Db connected')).
    catch((err) => console.log(`error: ${err}`))
}