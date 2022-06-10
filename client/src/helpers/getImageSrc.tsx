import { toJS } from 'mobx'

export const getImageSrc = ( data: ArrayBuffer, type: string ) => {
    const base64 = btoa(
        new Uint8Array(toJS(data))
            .reduce((data, byte) => data + String.fromCharCode(byte), ''),
    )

    return `data:${type};base64, ${base64}`
}

