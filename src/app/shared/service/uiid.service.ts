import { Injectable } from "@angular/core";




@Injectable({
    providedIn:'root'
})


export class uiidservice{



    uiidfun():string{
        return Date.now().toString()
    }
}