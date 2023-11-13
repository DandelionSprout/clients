import { inject, Injectable } from "@angular/core";

import { ApiService } from "@bitwarden/common/abstractions/api.service";

import { UpdateKeyRequest } from "./request/update-key.request";

@Injectable()
export class KeyRotationApiService {
  readonly apiService = inject(ApiService);

  postAccountKey(request: UpdateKeyRequest): Promise<any> {
    return this.apiService.send("POST", "/accounts/key", request, true, false);
  }
}
