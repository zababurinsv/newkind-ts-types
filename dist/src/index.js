"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATA_FIELD_TYPE = exports.TRANSACTION_TYPE = exports.BINARY_DATA_TYPE = exports.STRING_DATA_TYPE = exports.BOOLEAN_DATA_TYPE = exports.INTEGER_DATA_TYPE = exports.UPDATE_ASSET_INFO_TYPE = exports.INVOKE_SCRIPT_TYPE = exports.SET_ASSET_SCRIPT_TYPE = exports.SPONSORSHIP_TYPE = exports.SET_SCRIPT_TYPE = exports.DATA_TYPE = exports.MASS_TRANSFER_TYPE = exports.ALIAS_TYPE = exports.CANCEL_LEASE_TYPE = exports.LEASE_TYPE = exports.EXCHANGE_TYPE = exports.BURN_TYPE = exports.REISSUE_TYPE = exports.TRANSFER_TYPE = exports.ISSUE_TYPE = exports.PAYMENT_TYPE = exports.GENESIS_TYPE = void 0;
__exportStar(require("../transactions"), exports);
__exportStar(require("./parts"), exports);
exports.GENESIS_TYPE = 1;
exports.PAYMENT_TYPE = 2;
exports.ISSUE_TYPE = 3;
exports.TRANSFER_TYPE = 4;
exports.REISSUE_TYPE = 5;
exports.BURN_TYPE = 6;
exports.EXCHANGE_TYPE = 7;
exports.LEASE_TYPE = 8;
exports.CANCEL_LEASE_TYPE = 9;
exports.ALIAS_TYPE = 10;
exports.MASS_TRANSFER_TYPE = 11;
exports.DATA_TYPE = 12;
exports.SET_SCRIPT_TYPE = 13;
exports.SPONSORSHIP_TYPE = 14;
exports.SET_ASSET_SCRIPT_TYPE = 15;
exports.INVOKE_SCRIPT_TYPE = 16;
exports.UPDATE_ASSET_INFO_TYPE = 17;
exports.INTEGER_DATA_TYPE = 'integer';
exports.BOOLEAN_DATA_TYPE = 'boolean';
exports.STRING_DATA_TYPE = 'string';
exports.BINARY_DATA_TYPE = 'binary';
exports.TRANSACTION_TYPE = {
    GENESIS: exports.GENESIS_TYPE,
    PAYMENT: exports.PAYMENT_TYPE,
    ISSUE: exports.ISSUE_TYPE,
    TRANSFER: exports.TRANSFER_TYPE,
    REISSUE: exports.REISSUE_TYPE,
    BURN: exports.BURN_TYPE,
    EXCHANGE: exports.EXCHANGE_TYPE,
    LEASE: exports.LEASE_TYPE,
    CANCEL_LEASE: exports.CANCEL_LEASE_TYPE,
    ALIAS: exports.ALIAS_TYPE,
    MASS_TRANSFER: exports.MASS_TRANSFER_TYPE,
    DATA: exports.DATA_TYPE,
    SET_SCRIPT: exports.SET_SCRIPT_TYPE,
    SPONSORSHIP: exports.SPONSORSHIP_TYPE,
    SET_ASSET_SCRIPT: exports.SET_ASSET_SCRIPT_TYPE,
    INVOKE_SCRIPT: exports.INVOKE_SCRIPT_TYPE,
    UPDATE_ASSET_INFO: exports.UPDATE_ASSET_INFO_TYPE,
};
exports.DATA_FIELD_TYPE = {
    INTEGER: exports.INTEGER_DATA_TYPE,
    BOOLEAN: exports.BOOLEAN_DATA_TYPE,
    STRING: exports.STRING_DATA_TYPE,
    BINARY: exports.BINARY_DATA_TYPE,
};
