export type Role = {
    id: string,
    name: string,
}

export type User = {
    id: string,
    name: string,
    roleId: string,
    connections: string[]
}
