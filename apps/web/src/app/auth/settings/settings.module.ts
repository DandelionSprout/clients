import { NgModule } from "@angular/core";

import { PasswordCalloutComponent } from "@bitwarden/auth";

import { AccountRecoveryModule } from "../../admin-console/organizations/members/services/account-recovery/account-recovery.module";
import { SharedModule } from "../../shared";
import { EmergencyAccessModule } from "../emergency-access";
import { KeyRotationModule } from "../key-rotation/key-rotation.module";

import { ChangePasswordComponent } from "./change-password.component";
import { WebauthnLoginSettingsModule } from "./webauthn-login-settings";

@NgModule({
  imports: [
    SharedModule,
    WebauthnLoginSettingsModule,
    EmergencyAccessModule,
    PasswordCalloutComponent,
    AccountRecoveryModule,
    KeyRotationModule,
  ],
  declarations: [ChangePasswordComponent],
  providers: [],
  exports: [ChangePasswordComponent],
})
export class AuthSettingsModule {}
