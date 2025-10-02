import { app } from './app'

console.log('iniciando servidor...')

app.listen(3333, () => console.log('Server is running on port 3333!'))
