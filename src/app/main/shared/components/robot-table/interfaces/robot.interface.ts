export enum Nature {
    good = 'good',
    bad = 'bad'
}

export interface Robot {
    name: string,
    type: string,
    nature: Nature,
    numberOfParts: number
}