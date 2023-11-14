// import { mock, MockProxy } from "jest-mock-extended";

// import { ApiService } from "../../abstractions/api.service";
// import { AppIdService } from "../../platform/abstractions/app-id.service";
// import { CryptoService } from "../../platform/abstractions/crypto.service";
// import { LogService } from "../../platform/abstractions/log.service";
// import { MessagingService } from "../../platform/abstractions/messaging.service";
// import { PlatformUtilsService } from "../../platform/abstractions/platform-utils.service";
// import { StateService } from "../../platform/abstractions/state.service";
// import { TokenService } from "../abstractions/token.service";
// import { TwoFactorService } from "../abstractions/two-factor.service";
// import { WebAuthnLoginCredentials } from "../models/domain/login-credentials";

// import { WebAuthnLoginStrategy } from "./webauthn-login.strategy";

// describe("WebAuthnLoginStrategy", () => {
//   let cryptoService: MockProxy<CryptoService>;
//   let apiService: MockProxy<ApiService>;
//   let tokenService: MockProxy<TokenService>;
//   let appIdService: MockProxy<AppIdService>;
//   let platformUtilsService: MockProxy<PlatformUtilsService>;
//   let messagingService: MockProxy<MessagingService>;
//   let logService: MockProxy<LogService>;
//   let stateService: MockProxy<StateService>;
//   let twoFactorService: MockProxy<TwoFactorService>;

//   let webAuthnLoginStrategy: WebAuthnLoginStrategy;
//   let webAuthnCredentials: WebAuthnLoginCredentials;

//   beforeEach(() => {
//     cryptoService = mock<CryptoService>();
//     apiService = mock<ApiService>();
//     tokenService = mock<TokenService>();
//     appIdService = mock<AppIdService>();
//     platformUtilsService = mock<PlatformUtilsService>();
//     messagingService = mock<MessagingService>();
//     logService = mock<LogService>();
//     stateService = mock<StateService>();
//     twoFactorService = mock<TwoFactorService>();

//     webAuthnLoginStrategy = new WebAuthnLoginStrategy(
//       cryptoService,
//       apiService,
//       tokenService,
//       appIdService,
//       platformUtilsService,
//       messagingService,
//       logService,
//       stateService,
//       twoFactorService
//     );

//     // Create credentials
//     // See webauthn-login.spec - login testing
//   });
// });
