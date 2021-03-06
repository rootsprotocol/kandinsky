/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGraphNode, IGraphNodeInterface } from "../IGraphNode";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_node",
        type: "address",
      },
    ],
    name: "isTrusted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IGraphNode__factory {
  static readonly abi = _abi;
  static createInterface(): IGraphNodeInterface {
    return new utils.Interface(_abi) as IGraphNodeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGraphNode {
    return new Contract(address, _abi, signerOrProvider) as IGraphNode;
  }
}
