/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { BookDatabase, BookDatabaseInterface } from "../BookDatabase";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint16",
            name: "year",
            type: "uint16",
          },
        ],
        internalType: "struct BookDatabase.Book",
        name: "new_book",
        type: "tuple",
      },
    ],
    name: "addBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "books",
    outputs: [
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "uint16",
        name: "year",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint16",
            name: "year",
            type: "uint16",
          },
        ],
        internalType: "struct BookDatabase.Book",
        name: "new_book",
        type: "tuple",
      },
    ],
    name: "editBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
    ],
    name: "removeBook",
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
] as const;

const _bytecode =
  "0x60a060405260008060006101000a81548163ffffffff021916908363ffffffff16021790555034801561003157600080fd5b503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050608051610f89610081600039600061029f0152610f896000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806306661abd1461005c57806368d748ca1461007a578063b19a4635146100ab578063e9e7ff0c146100c7578063feaeb5ab146100f7575b600080fd5b610064610113565b6040516100719190610716565b60405180910390f35b610094600480360381019061008f9190610781565b610119565b6040516100a292919061085b565b60405180910390f35b6100c560048036038101906100c09190610a62565b6101d3565b005b6100e160048036038101906100dc9190610781565b61029b565b6040516100ee9190610ac6565b60405180910390f35b610111600480360381019061010c9190610ae1565b6104a6565b005b60025481565b600160205280600052604060002060009150905080600001805461013c90610b6c565b80601f016020809104026020016040519081016040528092919081815260200182805461016890610b6c565b80156101b55780601f1061018a576101008083540402835291602001916101b5565b820191906000526020600020905b81548152906001019060200180831161019857829003601f168201915b5050505050908060010160009054906101000a900461ffff16905082565b60008081819054906101000a900463ffffffff16809291906101f490610bcc565b91906101000a81548163ffffffff021916908363ffffffff1602179055505080600160008060009054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200190815260200160002060008201518160000190816102599190610da4565b5060208201518160010160006101000a81548161ffff021916908361ffff1602179055509050506002600081548092919061029390610e76565b919050555050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461032b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032290610f0a565b60405180910390fd5b6000600160008463ffffffff1663ffffffff16815260200190815260200160002060010160009054906101000a900461ffff1661ffff1611801561042f575061042d600160008463ffffffff1663ffffffff168152602001908152602001600020600001805461039a90610b6c565b80601f01602080910402602001604051908101604052809291908181526020018280546103c690610b6c565b80156104135780601f106103e857610100808354040283529160200191610413565b820191906000526020600020905b8154815290600101906020018083116103f657829003601f168201915b50505050506040518060200160405280600081525061066d565b155b1561049c57600160008363ffffffff1663ffffffff1681526020019081526020016000206000808201600061046491906106a0565b6001820160006101000a81549061ffff021916905550506002600081548092919061048e90610f2a565b9190505550600190506104a1565b600090505b919050565b6000600160008463ffffffff1663ffffffff1681526020019081526020016000206040518060400160405290816000820180546104e290610b6c565b80601f016020809104026020016040519081016040528092919081815260200182805461050e90610b6c565b801561055b5780601f106105305761010080835404028352916020019161055b565b820191906000526020600020905b81548152906001019060200180831161053e57829003601f168201915b505050505081526020016001820160009054906101000a900461ffff1661ffff1661ffff168152505090506105988160000151836000015161066d565b1580156105bf57506105bd82600001516040518060200160405280600081525061066d565b155b156105f9578160000151600160008563ffffffff1663ffffffff16815260200190815260200160002060000190816105f79190610da4565b505b816020015161ffff16816020015161ffff161415801561062157506000826020015161ffff16115b15610668578160200151600160008563ffffffff1663ffffffff16815260200190815260200160002060010160006101000a81548161ffff021916908361ffff1602179055505b505050565b600080839050600083905080518251148015610696575080805190602001208280519060200120145b9250505092915050565b5080546106ac90610b6c565b6000825580601f106106be57506106dd565b601f0160209004906000526020600020908101906106dc91906106e0565b5b50565b5b808211156106f95760008160009055506001016106e1565b5090565b6000819050919050565b610710816106fd565b82525050565b600060208201905061072b6000830184610707565b92915050565b6000604051905090565b600080fd5b600080fd5b600063ffffffff82169050919050565b61075e81610745565b811461076957600080fd5b50565b60008135905061077b81610755565b92915050565b6000602082840312156107975761079661073b565b5b60006107a58482850161076c565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156107e85780820151818401526020810190506107cd565b60008484015250505050565b6000601f19601f8301169050919050565b6000610810826107ae565b61081a81856107b9565b935061082a8185602086016107ca565b610833816107f4565b840191505092915050565b600061ffff82169050919050565b6108558161083e565b82525050565b600060408201905081810360008301526108758185610805565b9050610884602083018461084c565b9392505050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108c8826107f4565b810181811067ffffffffffffffff821117156108e7576108e6610890565b5b80604052505050565b60006108fa610731565b905061090682826108bf565b919050565b600080fd5b600080fd5b600080fd5b600067ffffffffffffffff82111561093557610934610890565b5b61093e826107f4565b9050602081019050919050565b82818337600083830152505050565b600061096d6109688461091a565b6108f0565b90508281526020810184848401111561098957610988610915565b5b61099484828561094b565b509392505050565b600082601f8301126109b1576109b0610910565b5b81356109c184826020860161095a565b91505092915050565b6109d38161083e565b81146109de57600080fd5b50565b6000813590506109f0816109ca565b92915050565b600060408284031215610a0c57610a0b61088b565b5b610a1660406108f0565b9050600082013567ffffffffffffffff811115610a3657610a3561090b565b5b610a428482850161099c565b6000830152506020610a56848285016109e1565b60208301525092915050565b600060208284031215610a7857610a7761073b565b5b600082013567ffffffffffffffff811115610a9657610a95610740565b5b610aa2848285016109f6565b91505092915050565b60008115159050919050565b610ac081610aab565b82525050565b6000602082019050610adb6000830184610ab7565b92915050565b60008060408385031215610af857610af761073b565b5b6000610b068582860161076c565b925050602083013567ffffffffffffffff811115610b2757610b26610740565b5b610b33858286016109f6565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610b8457607f821691505b602082108103610b9757610b96610b3d565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610bd782610745565b915063ffffffff8203610bed57610bec610b9d565b5b600182019050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610c5a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610c1d565b610c648683610c1d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610ca1610c9c610c97846106fd565b610c7c565b6106fd565b9050919050565b6000819050919050565b610cbb83610c86565b610ccf610cc782610ca8565b848454610c2a565b825550505050565b600090565b610ce4610cd7565b610cef818484610cb2565b505050565b5b81811015610d1357610d08600082610cdc565b600181019050610cf5565b5050565b601f821115610d5857610d2981610bf8565b610d3284610c0d565b81016020851015610d41578190505b610d55610d4d85610c0d565b830182610cf4565b50505b505050565b600082821c905092915050565b6000610d7b60001984600802610d5d565b1980831691505092915050565b6000610d948383610d6a565b9150826002028217905092915050565b610dad826107ae565b67ffffffffffffffff811115610dc657610dc5610890565b5b610dd08254610b6c565b610ddb828285610d17565b600060209050601f831160018114610e0e5760008415610dfc578287015190505b610e068582610d88565b865550610e6e565b601f198416610e1c86610bf8565b60005b82811015610e4457848901518255600182019150602085019450602081019050610e1f565b86831015610e615784890151610e5d601f891682610d6a565b8355505b6001600288020188555050505b505050505050565b6000610e81826106fd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610eb357610eb2610b9d565b5b600182019050919050565b7f596f7520646f6e27742068617665207065726d697373696f6e00000000000000600082015250565b6000610ef46019836107b9565b9150610eff82610ebe565b602082019050919050565b60006020820190508181036000830152610f2381610ee7565b9050919050565b6000610f35826106fd565b915060008203610f4857610f47610b9d565b5b60018203905091905056fea2646970667358221220cf85b1a05c8fb3c70a10ac97a34450d5f71a1d3ef0de5fe43f7068b1a3ea430b64736f6c63430008140033";

type BookDatabaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BookDatabaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BookDatabase__factory extends ContractFactory {
  constructor(...args: BookDatabaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      BookDatabase & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BookDatabase__factory {
    return super.connect(runner) as BookDatabase__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BookDatabaseInterface {
    return new Interface(_abi) as BookDatabaseInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BookDatabase {
    return new Contract(address, _abi, runner) as unknown as BookDatabase;
  }
}
