import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { InsurancePolicy } from "../models/insurance-policy.model";
import {  Injectable } from "@angular/core";

const currentUrl = environment.API_URL + "InsurancePolicy"
@Injectable()
export class InsurancePolicyService {

    constructor(private httpClient: HttpClient) { }

    GetInsurancePolicyForUser(userId: number) {
        return this.httpClient.get<InsurancePolicy[]>(`${currentUrl}?userId=${userId}`)
    }

     AddInsurancePolicy(insurancePolicy: InsurancePolicy) {
        return this.httpClient.post<InsurancePolicy>(currentUrl, insurancePolicy)
    }

     UpdateInsurancePolicy(id: number, insurancePolicy: InsurancePolicy) {
        return this.httpClient.put<InsurancePolicy>(`${currentUrl}?id=${id}`, insurancePolicy)
    }

    deleteInsurancePolicy(id: number) {
        return this.httpClient.delete<InsurancePolicy>(`${currentUrl}?id=${id}`)

    }
}