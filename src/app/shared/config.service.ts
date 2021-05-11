import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {    

    constructor() {}

    get authApiURI() {
        return 'https://auth.dev.com.au/api';
    }    
     
    get resourceApiURI() {
        return 'http://localhost:5050/api';
    }  
}