import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from "rxjs";


@Injectable ({
    providedIn: 'root'
})
export class BaseService {

    private apiUrl = 'http://localhost:9090';
    constructor(private http: HttpClient){}
    async postData(url: string, data: any): Promise<any> {
        try {
          let response = await firstValueFrom(
            this.http.post<any>(`${this.apiUrl}/${url}`, data, {
              headers: new HttpHeaders({
                'Content-Type': 'application/json'
              }),
              observe: 'response',
            })
          );
    
          if (response?.status == 200 && response?.body) {
            return response?.body
            // this.loader.stop();
            // if (response?.body.result.responseCode !== '00') {
            //   return response?.body;
            // } else {
            //   return response?.body;
            // }
          } else {
            throw new Error(`${response?.body.result.message}`);
          }
        } catch (error: any) {
        //   this.loader.stop();
        //   if (error.error.result) {
        //     this.toast.error(error.error.result.message, 'Thông báo');
        //   } else {
        //     this.toast.error(
        //       ` Kết nối không ổn định, vui lòng thử lại`,
        //       'Thông báo'
        //     );
        //   }
          console.log(error);
        }
      }

      async deleteData(url: string): Promise<any> {
        try {
          let response = await firstValueFrom(this.http
            .delete<any>(`${this.apiUrl}/${url}`, {
              headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'Accept-language': this.accpetLanguage,
              }),
              observe: 'response',
            }))
    
          if (response?.status == 200 && response?.body) {
            return response?.body;
        //     this.loader.stop();
        //     if (response?.body.result.responseCode !== '00') {
        //       return response?.body;
        //     } else {
        //       return response?.body;
        //     }
        //   } else {
        //     throw new Error(`${response?.body.result.message}`);
          }
        } catch (error: any) {
        //   this.loader.stop();
        //   if (error.error.result) {
        //     this.toast.error(error.error.result.message, 'Thông báo');
        //   } else {
        //     this.toast.error(
        //       ` Kết nối không ổn định, vui lòng thử lại`,
        //       'Thông báo'
        //     );
        //   }
          console.log(error)
        }
      }
      async putData(url: string, data: object): Promise<any> {
        try {
          let response = await firstValueFrom(this.http
            .put<any>(`${this.apiUrl}/${url}`, data, {
              headers: new HttpHeaders({
                'Content-Type': 'application/json',
              }),
              observe: 'response',
            }))
    
          if (response?.status == 200 && response?.body) {
            return response?.body;
            // this.loader.stop();
            // if (response?.body.result.responseCode !== '00') {
            //   return response?.body;
            // } else {
            //   return response?.body;
            // }
          } else {
            throw new Error(`${response?.body.result.message}`);
          }
        } catch (error: any) {
        //   this.loader.stop();
        //   if (error.error.result) {
        //     this.toast.error(error.error.result.message, 'Thông báo');
        //   } else {
        //     this.toast.error(
        //       ` Kết nối không ổn định, vui lòng thử lại`,
        //       'Thông báo'
        //     );
        //   }
          throw error;
        }
      }

}