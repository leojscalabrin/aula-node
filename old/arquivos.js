import fs from 'fs'

export function write(name, content) {
    fs.writeFileSync(name, content)
}

export function read(name) {
    return fs.readFileSync(name, 'utf-8')
}