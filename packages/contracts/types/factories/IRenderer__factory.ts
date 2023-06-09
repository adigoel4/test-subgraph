/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRenderer, IRendererInterface } from "../IRenderer";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IRenderer__factory {
  static readonly abi = _abi;
  static createInterface(): IRendererInterface {
    return new utils.Interface(_abi) as IRendererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRenderer {
    return new Contract(address, _abi, signerOrProvider) as IRenderer;
  }
}
