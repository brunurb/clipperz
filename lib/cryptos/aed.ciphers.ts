import {crypt, IAedCipher} from "~/lib/cryptos/interfaces"

export enum AedCipherEnum {
  AES256GCM = "AES256GCM",
}

export function NewAedCipher(num: AedCipherEnum): IAedCipher {
  switch (num) {
    case AedCipherEnum.AES256GCM:
      return new AesAedCipher("AES-GCM", 256)
    default:
      throw(`unknown aed cipher num <${num}>`)
  }
}

export function AedCipherSizes(num: AedCipherEnum): [number, number] {
  switch (num) {
    case AedCipherEnum.AES256GCM:
      return [256 >> 3, 12]
    default:
      throw(`unknown aed cipher num <${num}>`)
  }
}

class AesAedCipher implements IAedCipher {
  private readonly bits: number
  private readonly name: string

  constructor(name: string, bits: number) {
    this.name = name
    this.bits = bits
  }

  async generateKey(): Promise<CryptoKey> {
    return await crypt.subtle.generateKey({name: this.name, length: this.bits}, true, ["encrypt", "decrypt"])
  }

  async importKey(key: Uint8Array): Promise<CryptoKey> {
    return await crypt.subtle.importKey("raw", key, {name: this.name}, false, ["encrypt", "decrypt"])
  }

  async exportKey(key: CryptoKey): Promise<Uint8Array> {
    return new Uint8Array(await crypt.subtle.exportKey("raw", key))
  }

  async decrypt(params: AedCryptoParams): Promise<Uint8Array> {
    const buf = await crypt.subtle.decrypt(
      {
        name: this.name,
        iv: params.iv,
        additionalData: params.addon ?? new Uint8Array(),
        tagLength: 128, //The tagLength you used to encrypt (if any)
      }, params.key, params.data)

    return new Uint8Array(buf)
  }

  async encrypt(params: AedCryptoParams): Promise<Uint8Array> {
    const buf = await crypt.subtle.encrypt({
      name: this.name,
      iv: params.iv,
      additionalData: params.addon ?? new Uint8Array(),
      tagLength: 128, //can be 32, 64, 96, 104, 112, 120 or 128 (default)
    }, params.key, params.data)

    return new Uint8Array(buf)
  }
}

export interface AedCryptoParams {
  key: CryptoKey
  data: Uint8Array
  iv: Uint8Array
  addon: Uint8Array | null
}
