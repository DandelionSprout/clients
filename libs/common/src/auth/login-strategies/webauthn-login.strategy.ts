import { SymmetricCryptoKey, UserKey } from "../../platform/models/domain/symmetric-crypto-key";
import { AuthResult } from "../models/domain/auth-result";
import { WebAuthnLoginCredentials } from "../models/domain/login-credentials";
import { TokenTwoFactorRequest } from "../models/request/identity-token/token-two-factor.request";
import { WebAuthnTokenRequest } from "../models/request/identity-token/webauthn-token.request";
import { IdentityTokenResponse } from "../models/response/identity-token.response";

import { LoginStrategy } from "./login.strategy";

export class WebAuthnLoginStrategy extends LoginStrategy {
  get email() {
    if ("email" in this.tokenRequest) {
      return this.tokenRequest.email;
    }

    return "";
  }

  get accessCode() {
    return "";
  }

  get authRequestId() {
    return "";
  }

  tokenRequest: WebAuthnTokenRequest;
  private credentials: WebAuthnLoginCredentials;

  protected setMasterKey(response: IdentityTokenResponse) {
    return Promise.resolve();
  }

  protected async setUserKey(idTokenResponse: IdentityTokenResponse) {
    const userDecryptionOptions = idTokenResponse?.userDecryptionOptions;

    if (userDecryptionOptions?.webAuthnPrfOption) {
      const webAuthnPrfOption = idTokenResponse.userDecryptionOptions?.webAuthnPrfOption;

      // confirm we still have the prf key
      if (!this.credentials.prfKey) {
        return;
      }

      // decrypt prf encrypted private key
      const privateKey = await this.cryptoService.decryptToBytes(
        webAuthnPrfOption.encryptedPrivateKey,
        this.credentials.prfKey
      );

      // decrypt user key with private key
      const userKey = await this.cryptoService.rsaDecrypt(
        webAuthnPrfOption.encryptedUserKey.encryptedString,
        privateKey
      );

      if (userKey) {
        await this.cryptoService.setUserKey(new SymmetricCryptoKey(userKey) as UserKey);
      }
    }
  }

  protected setPrivateKey(response: IdentityTokenResponse): Promise<void> {
    return Promise.resolve();
  }

  // TODO: should this be here?
  async logInTwoFactor(
    twoFactor: TokenTwoFactorRequest,
    captchaResponse: string
  ): Promise<AuthResult> {
    // this.tokenRequest.captchaResponse = captchaResponse ?? this.captchaBypassToken;
    return super.logInTwoFactor(twoFactor, captchaResponse);
  }

  async logIn(credentials: WebAuthnLoginCredentials) {
    this.credentials = credentials;

    this.tokenRequest = new WebAuthnTokenRequest(
      credentials.token,
      credentials.deviceResponse,
      await this.buildTwoFactor(credentials.twoFactor),
      await this.buildDeviceRequest()
    );

    const [authResult] = await this.startLogIn();
    return authResult;
  }
}
