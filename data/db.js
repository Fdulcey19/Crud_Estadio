import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Root19.',
    database: 'bd_estadios'
})

console.log('database is conected')