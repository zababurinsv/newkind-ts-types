import { DATA_FIELD_TYPE, ExchangeTransaction } from './index';
export declare type ExchangeTransactionOrderType = 'buy' | 'sell';
export declare type Base64Script = string;
export declare type Base58Bytes = string;
export declare type Proofs = Array<string>;
export declare type Long = string | number;
export declare type AssetDecimals = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export declare type Base64string = string;
export declare type WithApiMixin = WithId & {
    sender: string;
    height: number;
};
export declare type InvokeScriptCall<LONG = Long> = {
    function: string;
    args: Array<InvokeScriptCallArgument<LONG>>;
};
export declare type InvokeScriptPayment<LONG = Long> = {
    assetId: string | null;
    amount: LONG;
};
export declare type InvokeScriptCallArgument<LONG = Long> = InvokeScriptCallStringArgument | InvokeScriptCallBinaryArgument | InvokeScriptCallBooleanArgument | InvokeScriptCallIntegerArgument<LONG> | InvokeScriptCallListArgument<LONG, InvokeScriptCallStringArgument | InvokeScriptCallBinaryArgument | InvokeScriptCallBooleanArgument | InvokeScriptCallIntegerArgument>;
export declare type InvokeScriptCallArgumentGeneric<Type, Value> = {
    type: Type;
    value: Value;
};
export declare type InvokeScriptCallStringArgument = InvokeScriptCallArgumentGeneric<'string', string>;
export declare type InvokeScriptCallBinaryArgument = InvokeScriptCallArgumentGeneric<'binary', Base64string>;
export declare type InvokeScriptCallBooleanArgument = InvokeScriptCallArgumentGeneric<'boolean', boolean>;
export declare type InvokeScriptCallIntegerArgument<LONG = Long> = InvokeScriptCallArgumentGeneric<'integer', LONG>;
export declare type InvokeScriptCallListArgument<LONG, ITEMS extends InvokeScriptCallStringArgument | InvokeScriptCallBinaryArgument | InvokeScriptCallBooleanArgument | InvokeScriptCallIntegerArgument> = InvokeScriptCallArgumentGeneric<'list', Array<ITEMS>>;
export interface WithId {
    id: string;
}
export declare type MassTransferItem<LONG = Long> = {
    recipient: string;
    amount: LONG;
};
export declare type DataTransactionEntryGeneric<Type, Value> = {
    key: string;
    type: Type;
    value: Value;
};
export declare type DataTransactionEntryInteger<LONG> = DataTransactionEntryGeneric<typeof DATA_FIELD_TYPE.INTEGER, LONG>;
export declare type DataTransactionEntryString = DataTransactionEntryGeneric<typeof DATA_FIELD_TYPE.STRING, string>;
export declare type DataTransactionEntryBinary = DataTransactionEntryGeneric<typeof DATA_FIELD_TYPE.BINARY, Base64string>;
export declare type DataTransactionEntryBoolean = DataTransactionEntryGeneric<typeof DATA_FIELD_TYPE.BOOLEAN, boolean>;
export declare type ExchangeTransactionOrderData<LONG> = {
    version: number;
    orderType: ExchangeTransactionOrderType;
    assetPair: {
        amountAsset: string | null;
        priceAsset: string | null;
    };
    price: LONG;
    amount: LONG;
    timestamp: number;
    expiration: number;
    matcherFee: LONG;
    matcherPublicKey: string;
    senderPublicKey: string;
};
export declare type WithVersion<Target extends Record<string, any>, Version extends number> = Target & {
    version: Version;
};
declare type ExchangeOrderWithCustomFee<Long> = ExchangeTransactionOrderData<Long> & {
    matcherFeeAssetId: string | null;
};
export declare type ExchangeTransactionOrderV1<LONG = Long> = WithVersion<ExchangeTransactionOrderData<LONG>, 1>;
export declare type ExchangeTransactionOrderV2<LONG = Long> = WithVersion<ExchangeTransactionOrderData<LONG>, 2>;
export declare type ExchangeTransactionOrderV3<LONG = Long> = WithVersion<ExchangeOrderWithCustomFee<LONG>, 3>;
export declare type ExchangeTransactionOrderV4<LONG = Long> = WithVersion<ExchangeOrderWithCustomFee<LONG>, 4>;
export declare type ExchangeTransactionOrder<LONG = Long> = ExchangeTransactionOrderV1<LONG> | ExchangeTransactionOrderV2<LONG> | ExchangeTransactionOrderV3<LONG> | ExchangeTransactionOrderV4<LONG>;
export declare type SignedIExchangeTransactionOrder<ORDER extends ExchangeTransactionOrder<any>> = ORDER & (ORDER extends {
    version: 1;
} ? {
    signature: string;
} : {
    proofs: Array<string>;
});
export declare type ExchangeTransactionOrderMap<LONG = Long> = {
    1: ExchangeTransactionOrderV1<LONG>;
    2: ExchangeTransactionOrderV2<LONG>;
    3: ExchangeTransactionOrderV3<LONG>;
    4: ExchangeTransactionOrderV4<LONG>;
};
export declare type ExchangeTransactionOrderByTx<TX extends ExchangeTransaction> = TX extends {
    version: 1;
} ? ExchangeTransactionOrderMap[1] : TX extends {
    version: 2;
} ? ExchangeTransactionOrderMap[1 | 2 | 3] : ExchangeTransactionOrder;
export declare type DataTransactionEntry<LONG = Long> = DataTransactionEntryInteger<LONG> | DataTransactionEntryString | DataTransactionEntryBinary | DataTransactionEntryBoolean | DataTransactionDeleteRequest;
export declare type DataTransactionDeleteRequest = {
    type: undefined;
    value: undefined;
    key: string;
};
export {};
