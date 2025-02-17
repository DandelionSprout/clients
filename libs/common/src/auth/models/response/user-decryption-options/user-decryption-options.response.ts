import { BaseResponse } from "../../../../models/response/base.response";

import {
  IKeyConnectorUserDecryptionOptionServerResponse,
  KeyConnectorUserDecryptionOptionResponse,
} from "./key-connector-user-decryption-option.response";
import {
  ITrustedDeviceUserDecryptionOptionServerResponse,
  TrustedDeviceUserDecryptionOptionResponse,
} from "./trusted-device-user-decryption-option.response";

export interface IUserDecryptionOptionsServerResponse {
  HasMasterPassword: boolean;
  TrustedDeviceOption?: ITrustedDeviceUserDecryptionOptionServerResponse;
  KeyConnectorOption?: IKeyConnectorUserDecryptionOptionServerResponse;
}

export class UserDecryptionOptionsResponse extends BaseResponse {
  hasMasterPassword: boolean;
  trustedDeviceOption?: TrustedDeviceUserDecryptionOptionResponse;
  keyConnectorOption?: KeyConnectorUserDecryptionOptionResponse;

  constructor(response: IUserDecryptionOptionsServerResponse) {
    super(response);

    this.hasMasterPassword = this.getResponseProperty("HasMasterPassword");

    if (response.TrustedDeviceOption) {
      this.trustedDeviceOption = new TrustedDeviceUserDecryptionOptionResponse(
        this.getResponseProperty("TrustedDeviceOption")
      );
    }
    if (response.KeyConnectorOption) {
      this.keyConnectorOption = new KeyConnectorUserDecryptionOptionResponse(
        this.getResponseProperty("KeyConnectorOption")
      );
    }
  }
}
