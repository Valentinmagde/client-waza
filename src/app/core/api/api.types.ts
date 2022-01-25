import { HttpErrorResponse } from '@angular/common/http';

export class CustomHttpErrorResponse extends HttpErrorResponse {
    private _customMessage: string = '';

    get customMessage(): string {
        return this._customMessage;
    }

    set customMessage(msg: string) {
        this._customMessage = msg;
    }
}
